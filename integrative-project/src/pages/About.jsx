import { motion } from 'framer-motion'
import alvin from '../assets/alvin.jpg'
import mac from '../assets/mac.jpg'
import irish from '../assets/irish.jpg'
import alec from '../assets/alec.jpg'

const team = [
  {
    name: 'Irish Kim Avila',
    role: 'Front-End Developer',
    photo: irish,
    quote: 'Irish Kim Avila is observant and ready to learn new things.',
  },
  {
    name: 'Alvin Pulla',
    role: 'Designer',
    photo: alvin,
    quote:
      'Alvin Pulla is an open and honest person who doesn’t believe in misleading other people and tries to be fair in everything I do.',
  },
  {
    name: 'Mac John Frey Nebran',
    role: 'Quality Assurance',
    photo: mac,
    quote:
      'Mac John Frey Nebran is an ambitious individual driven by a passion for continuous learning and growth. Committed to turning dreams into reality, likes to thrive on challenges and believe in the power of kindness in every pursuit.',
  },
  {
    name: 'Alec Campana',
    role: 'Full-Stack Developer',
    photo: alec,
    quote:
      "Professional over-thinker, aspiring champion of procrastination, and expert in the delicate dance of starting a task right before the deadline – because nothing says 'challenge accepted' like racing against the clock. I have a talent for turning simple decisions into complex life debates and can effortlessly transform a five-minute task into a three-hour adventure.",
  },
]

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-6xl px-5 py-16"
    >
      <p className="kicker mb-3">About Us</p>
      <h1 className="max-w-2xl font-display text-4xl font-bold md:text-5xl">The team behind GameThrough.</h1>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <motion.article
            key={member.name}
            className="surface card-motion overflow-hidden p-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.25, delay: 0 } }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
          >
            <img
              src={member.photo}
              alt={member.name}
              className="aspect-square w-full rounded-xl object-cover transition duration-500 hover:scale-[1.03]"
            />
            <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-mint uppercase">{member.role}</p>
            <h2 className="mt-1 font-display text-lg font-bold">{member.name}</h2>
            <blockquote className="mt-2 text-sm leading-relaxed text-mist">
              “{member.quote}”
            </blockquote>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
