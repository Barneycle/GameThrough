import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col justify-center px-5 py-16">
      <p className="kicker mb-3">404</p>
      <h1 className="font-display text-4xl font-bold">Page not found.</h1>
      <p className="mt-4 text-mist">That URL is not a GameThrough page.</p>
      <Link to="/" className="btn-primary mt-8 w-fit">
        Back home
      </Link>
    </div>
  )
}
