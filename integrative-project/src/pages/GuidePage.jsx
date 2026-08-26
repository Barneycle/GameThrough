import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward, IoIosMenu } from 'react-icons/io'
import { AnimatePresence, motion } from 'framer-motion'
import { useProgress } from '../ProgressProvider'
import { useFeedback } from '../FeedbackProvider'
import { chapterPath, getChapter, getGame } from '../data/guides'
import GuideSidebar from './GuideSidebar'

export default function GuidePage({ gameId }) {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { byGame, error: saveError, saveChapter, loading, saving } = useProgress()
  const { toast, confirm } = useFeedback()
  const game = getGame(gameId)
  const chapter = getChapter(gameId, slug)
  const chapterIndex = game?.chapters.findIndex((item) => item.slug === slug) ?? -1
  const previous = chapterIndex > 0 ? game.chapters[chapterIndex - 1] : null
  const next =
    chapterIndex >= 0 && chapterIndex < (game?.chapters.length ?? 0) - 1
      ? game.chapters[chapterIndex + 1]
      : null

  const [menuOpen, setMenuOpen] = useState(false)
  const progress = byGame[gameId] || {}

  const chapterProgress = progress[slug] || {
    completedObjectives: [],
    chapterCompleted: false,
  }

  const doneCount = chapterProgress.completedObjectives.length
  const totalCount = chapter?.objectives.length ?? 0

  useEffect(() => {
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }, [slug])

  const saveProgress = (nextChapterProgress) => {
    saveChapter(gameId, slug, nextChapterProgress)
  }

  const toggleObjective = (index) => {
    const selected = new Set(chapterProgress.completedObjectives)
    if (selected.has(index)) {
      selected.delete(index)
    } else {
      selected.add(index)
    }

    const completedObjectives = [...selected].sort((a, b) => a - b)
    const chapterCompleted = completedObjectives.length === totalCount && totalCount > 0
    saveProgress({ completedObjectives, chapterCompleted })

    if (chapterCompleted && !chapterProgress.chapterCompleted) {
      toast({ type: 'success', message: `${chapter.title} is complete.` })
    }
  }

  const toggleChapterComplete = async () => {
    if (chapterProgress.chapterCompleted) {
      const ok = await confirm({
        title: 'Mark as incomplete?',
        message: `${chapter.title} will no longer count as finished. Your checklist stays as it is.`,
        confirmLabel: 'Mark incomplete',
        cancelLabel: 'Keep complete',
        tone: 'warning',
      })
      if (!ok) return

      saveProgress({
        completedObjectives: chapterProgress.completedObjectives,
        chapterCompleted: false,
      })
      toast({ type: 'warning', message: `${chapter.title} marked incomplete.` })
      return
    }

    saveProgress({
      completedObjectives: chapter.objectives.map((_, index) => index),
      chapterCompleted: true,
    })
    toast({ type: 'success', message: `${chapter.title} marked complete.` })
  }

  if (!game || !chapter) {
    return (
      <div className="grid min-h-screen place-items-center px-5 text-center">
        <div>
          <p className="text-mist">Chapter not found.</p>
          <Link to="/" className="btn-primary mt-6">
            Back home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <GuideSidebar
        game={game}
        progressByChapter={progress}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="px-5 py-6 lg:ml-72 lg:px-12 lg:py-10">
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <motion.button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10"
            onClick={() => setMenuOpen(true)}
            aria-label="Open chapters"
            whileHover={{ scale: 1.1, borderColor: 'rgba(0,223,154,0.6)' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 500, damping: 22 }}
          >
            <IoIosMenu size={20} />
          </motion.button>
          <p className="text-sm text-mist">{game.title}</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="mx-auto max-w-2xl"
          >
            <p className="kicker">
              Chapter {chapterIndex + 1} of {game.chapters.length}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              {chapter.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-mist">{chapter.summary}</p>

            <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 px-4 py-3 text-sm text-amber-100/90">
              Checklists name locations and story beats. Open IGN if you want a full walkthrough.
            </div>

            <section className="surface mt-8 p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="font-display text-xl font-bold">Checklist</h2>
              <span className="font-mono text-xs text-mint">
                {loading ? '…' : `${doneCount}/${totalCount}`}
              </span>
              </div>

              {loading ? (
              <p className="text-sm text-mist">Loading saved progress…</p>
            ) : (
              <ul className="space-y-2">
                {chapter.objectives.map((objective, index) => {
                  const checked = chapterProgress.completedObjectives.includes(index)
                  return (
                    <li key={objective}>
                      <motion.label
                        className="flex cursor-pointer items-start gap-3 rounded-xl px-2 py-2.5"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 6, backgroundColor: 'rgba(255,255,255,0.06)' }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ delay: index * 0.04, type: 'spring', stiffness: 380, damping: 24 }}
                      >
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 rounded border-white/20 accent-mint"
                          checked={checked}
                          disabled={loading}
                          onChange={() => toggleObjective(index)}
                        />
                        <span className={`text-sm leading-relaxed ${checked ? 'text-mist line-through' : 'text-white'}`}>
                          {objective}
                        </span>
                      </motion.label>
                    </li>
                  )
                })}
              </ul>
            )}

              <motion.button
                type="button"
                onClick={toggleChapterComplete}
                className="btn-primary mt-6"
                disabled={loading}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 420, damping: 22 }}
              >
                {chapterProgress.chapterCompleted ? 'Chapter complete' : 'Mark chapter complete'}
              </motion.button>

              {saveError ? (
                <p className="mt-4 text-sm text-red-400">{saveError}</p>
              ) : (
                <p className="mt-4 text-xs text-white/35">
                  {loading ? 'Loading…' : saving ? 'Saving…' : 'Saved to your GameThrough account.'}
                </p>
              )}
            </section>

            <motion.section
              className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between"
              whileHover={{ borderColor: 'rgba(0,223,154,0.35)' }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm text-mist">Need the long guide? That lives on IGN.</p>
              <motion.a
                href={game.ignUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 420, damping: 22 }}
              >
                Open IGN walkthrough
              </motion.a>
            </motion.section>

            <div className="mt-10 mb-16 flex items-center justify-between gap-4">
              <motion.button
                type="button"
                onClick={() => navigate(previous ? chapterPath(game.id, previous.slug) : '/')}
                className="btn-secondary"
                whileHover={{ scale: 1.05, x: -4, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                <IoIosArrowBack size={18} />
                <span className="max-w-[9rem] truncate sm:max-w-xs">{previous ? previous.title : 'Home'}</span>
              </motion.button>
              {next ? (
                <motion.button
                  type="button"
                  onClick={() => navigate(chapterPath(game.id, next.slug))}
                  className="btn-primary"
                  whileHover={{ scale: 1.05, x: 4, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                >
                  <span className="max-w-[9rem] truncate sm:max-w-xs">{next.title}</span>
                  <IoIosArrowForward size={18} />
                </motion.button>
              ) : (
                <span className="text-sm text-white/30">End of tracker</span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
