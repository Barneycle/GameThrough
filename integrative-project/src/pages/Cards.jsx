import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import gow from '../assets/gow.png'
import gow2 from '../assets/gow2.png'
import botw from '../assets/botw.png'
import { GAMES } from '../data/guides'

const games = [
  {
    title: GAMES.gow.title,
    blurb: 'Follow Kratos and Atreus from the woods to Jotunheim, chapter by chapter.',
    image: gow,
    imageClass: 'object-center',
    path: '/gow/the-marked-trees',
    chapters: GAMES.gow.chapters.length,
    ignUrl: GAMES.gow.ignUrl,
  },
  {
    title: GAMES.gowr.title,
    blurb: 'Survive Fimbulwinter and mark your way through the nine realms.',
    image: gow2,
    imageClass: 'object-[center_20%]',
    path: '/gowr/surviving-fimbulwinter',
    chapters: GAMES.gowr.chapters.length,
    ignUrl: GAMES.gowr.ignUrl,
  },
  {
    title: GAMES.botw.title,
    blurb: 'A recommended path through Hyrule — plateau to castle, at your pace.',
    image: botw,
    imageClass: 'object-center',
    path: '/botw/great-plateau',
    chapters: GAMES.botw.chapters.length,
    ignUrl: GAMES.botw.ignUrl,
  },
]

export default function Cards() {
  const navigate = useNavigate()

  return (
    <section className="border-t border-white/5 bg-slate/30 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker mb-3">Library</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Three journeys. One tracker.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mist">
            Sign in to save checklists. Need a detailed guide? Each chapter links out to IGN.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {games.map((game, index) => (
            <motion.article
              key={game.title}
              className="surface card-motion group overflow-hidden"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.25, delay: 0 } }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.12, ease: 'easeOut' }}
            >
              <div className="relative aspect-square overflow-hidden bg-ink">
                <img
                  src={game.image}
                  alt={game.title}
                  className={`h-full w-full object-contain transition duration-700 ease-out group-hover:scale-105 ${game.imageClass}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ebony via-ebony/20 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-ink/80 px-3 py-1 font-mono text-[11px] tracking-wide text-mint">
                  {game.chapters} chapters
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white">{game.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{game.blurb}</p>
                <motion.button
                  type="button"
                  onClick={() => navigate(game.path)}
                  className="btn-primary mt-6 w-full"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Track progress
                </motion.button>
                <motion.a
                  href={game.ignUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary mt-2 w-full"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  IGN walkthrough
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
