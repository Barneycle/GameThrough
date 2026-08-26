import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import TypedText from '../components/TypedText'
import { useAuth } from '../AuthProvider'

export default function Hero() {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-5 py-20"
    >
      <p className="kicker mb-5">Playthrough companion</p>
      <h1 className="max-w-4xl font-display text-5xl leading-[1.08] font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
        Track the games
        <span className="block text-mint">you’re actually playing.</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
        GameThrough keeps chapter checklists for God of War, Ragnarok, and Breath of the Wild.
        Full walkthroughs stay on IGN. Your progress stays here.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-2 text-base text-mist">
        <span>Built for</span>
        <TypedText
          className="font-medium text-mint"
          strings={['tracking your playthroughs']}
          typeSpeed={90}
          backSpeed={70}
        />
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <motion.button
          type="button"
          className="btn-primary"
          onClick={() => navigate(isLoggedIn ? '/gow/the-marked-trees' : '/login')}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          {isLoggedIn ? 'Continue tracking' : 'Get started'}
        </motion.button>
        <motion.button
          type="button"
          className="btn-secondary"
          onClick={() => navigate('/about')}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          About the team
        </motion.button>
      </div>
    </motion.section>
  )
}
