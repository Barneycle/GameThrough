import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useAuth } from '../AuthProvider'
import { useConfirmLogout } from '../FeedbackProvider'
import BrandMark from '../components/BrandMark'

const linkClass = ({ isActive }) =>
  `rounded-full px-3.5 py-2 text-sm font-medium transition ${
    isActive ? 'bg-white/10 text-white' : 'text-mist hover:bg-white/5 hover:text-white'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { isLoggedIn } = useAuth()
  const confirmLogout = useConfirmLogout()

  const handleLogout = async (event) => {
    event.preventDefault()
    setOpen(false)
    await confirmLogout()
  }

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <BrandMark />

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          {!isLoggedIn ? (
            <>
              <NavLink to="/login" className={linkClass}>
                Log in
              </NavLink>
              <Link to="/registration" className="btn-primary ml-2">
                Sign up
              </Link>
            </>
          ) : (
            <button type="button" onClick={handleLogout} className="btn-secondary ml-2">
              Log out
            </button>
          )}
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <AiOutlineClose size={18} /> : <AiOutlineMenu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-ebony px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <Link to="/" onClick={close} className="rounded-xl px-3 py-3 text-white hover:bg-white/5">
              Home
            </Link>
            <Link to="/about" onClick={close} className="rounded-xl px-3 py-3 text-white hover:bg-white/5">
              About
            </Link>
            {!isLoggedIn ? (
              <>
                <Link to="/login" onClick={close} className="rounded-xl px-3 py-3 text-white hover:bg-white/5">
                  Log in
                </Link>
                <Link to="/registration" onClick={close} className="btn-primary mt-2">
                  Sign up
                </Link>
              </>
            ) : (
              <button type="button" onClick={handleLogout} className="btn-secondary mt-2">
                Log out
              </button>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}
