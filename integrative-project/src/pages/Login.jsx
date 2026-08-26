import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../AuthProvider'
import { useFeedback } from '../FeedbackProvider'
import { apiSend } from '../api'
import PasswordField from '../components/PasswordField'

export default function Login() {
  const { login } = useAuth()
  const { toast } = useFeedback()
  const navigate = useNavigate()
  const location = useLocation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const notice = location.state?.notice
  const from = typeof location.state?.from === 'string' ? location.state.from : '/'
  const nextPath =
    from.startsWith('/') && !from.startsWith('//') && from !== '/login' && from !== '/registration'
      ? from
      : '/'

  const handleLogin = async (event) => {
    event.preventDefault()
    if (submitting) return
    setUsernameError('')
    setPasswordError('')

    if (username.trim() === '') {
      setUsernameError('Username is required')
    } else if (password.trim() === '') {
      setPasswordError('Password is required')
    } else {
      setSubmitting(true)
      try {
        const data = await apiSend('/api/login', {
          body: { username, password },
        })
        login(data.token)
        toast({ type: 'success', message: 'Signed in. Your checklists are ready.' })
        navigate(nextPath)
      } catch (error) {
        if (error.status === 401) {
          setUsernameError('Invalid username')
          setPasswordError('Invalid password')
          toast({ type: 'error', message: 'That username or password did not match.' })
        } else {
          setUsernameError(error.message || 'Login failed. Is the backend running?')
          toast({ type: 'error', message: 'Could not sign in. Is the backend running?' })
        }
      } finally {
        setSubmitting(false)
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center px-5 py-16"
    >
      <form onSubmit={handleLogin} className="surface w-full max-w-md p-8">
        <p className="kicker mb-3">Welcome back</p>
        <h1 className="font-display text-3xl font-bold">Sign in</h1>
        <p className="mt-2 text-sm text-mist">Pick up your checklists where you left them.</p>

        {notice ? (
          <p className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
            {notice}
          </p>
        ) : null}

        <label className="mt-8 block text-sm font-medium text-mist">
          Username
          <input
            className="field"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            autoComplete="username"
          />
          {usernameError ? <p className="mt-2 text-sm text-red-400">{usernameError}</p> : null}
        </label>

        <PasswordField
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          error={passwordError}
        />

        <button type="submit" className="btn-primary mt-8 w-full" disabled={submitting}>
          {submitting ? 'Signing in…' : 'Sign in'}
        </button>

        <p className="mt-6 text-center text-sm text-mist">
          No account?{' '}
          <Link
            to="/registration"
            state={{ from: nextPath === '/' ? undefined : nextPath }}
            className="font-medium text-mint hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </motion.div>
  )
}
