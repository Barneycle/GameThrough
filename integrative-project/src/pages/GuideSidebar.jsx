import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useConfirmLogout } from '../FeedbackProvider'
import { chapterPath } from '../data/guides'
import BrandMark from '../components/BrandMark'

export default function GuideSidebar({ game, progressByChapter, open, onClose }) {
  const confirmLogout = useConfirmLogout()
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = async (route) => {
    if (route === '/logout') {
      onClose?.()
      await confirmLogout()
      return
    }
    onClose?.()
    navigate(route)
  }

  const completedCount = game.chapters.filter(
    (chapter) => progressByChapter?.[chapter.slug]?.chapterCompleted,
  ).length

  const nav = (
    <>
      <div className="mb-8">
        <BrandMark />
        <p className="kicker mt-8">{game.title}</p>
        <p className="mt-2 text-sm text-mist">
          {completedCount}/{game.chapters.length} chapters done
        </p>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-mint transition-all"
            style={{ width: `${(completedCount / game.chapters.length) * 100}%` }}
          />
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {game.chapters.map((chapter, index) => {
          const done = progressByChapter?.[chapter.slug]?.chapterCompleted
          const route = chapterPath(game.id, chapter.slug)
          const active = location.pathname === route

          return (
            <motion.button
              key={chapter.slug}
              type="button"
              onClick={() => handleClick(route)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm ${
                active ? 'bg-mint/15 text-white' : 'text-mist'
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: 8, scale: 1.02, backgroundColor: active ? 'rgba(0,223,154,0.22)' : 'rgba(255,255,255,0.07)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ delay: index * 0.025, type: 'spring', stiffness: 400, damping: 24 }}
            >
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full font-mono text-[10px] ${
                  done ? 'bg-mint text-ink' : active ? 'border border-mint text-mint' : 'border border-white/15'
                }`}
              >
                {done ? '✓' : index + 1}
              </span>
              <span className="leading-snug">{chapter.title}</span>
            </motion.button>
          )
        })}
      </nav>

      <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-4">
        <motion.a
          href={game.ignUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary w-full"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          IGN walkthrough
        </motion.a>
        <motion.button
          type="button"
          onClick={() => handleClick('/')}
          className="btn-secondary w-full"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Home
        </motion.button>
        <motion.button
          type="button"
          onClick={() => handleClick('/logout')}
          className="text-sm text-mist hover:text-white"
          whileHover={{ x: 4 }}
        >
          Log out
        </motion.button>
      </div>
    </>
  )

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col overflow-y-auto border-r border-white/5 bg-ebony/90 p-5 backdrop-blur-xl lg:flex">
        {nav}
      </aside>

      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button type="button" className="absolute inset-0 bg-black/60" onClick={onClose} aria-label="Close menu" />
          <aside className="relative flex h-full w-[min(20rem,85vw)] flex-col overflow-y-auto border-r border-white/5 bg-ebony p-5">
            {nav}
          </aside>
        </div>
      ) : null}
    </>
  )
}
