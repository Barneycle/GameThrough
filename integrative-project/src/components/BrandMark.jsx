import { Link } from 'react-router-dom'

export default function BrandMark({ className = '' }) {
  return (
    <Link to="/" className={`group flex items-center gap-2 ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-mint/15 font-display text-sm font-bold text-mint">
        GT
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-white transition group-hover:text-mint">
        GameThrough
      </span>
    </Link>
  )
}
