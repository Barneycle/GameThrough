import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useFeedback } from '../FeedbackProvider'
import { apiSend } from '../api'
import PasswordField from '../components/PasswordField'

export default function RegistrationForm() {
  const history = useNavigate()
  const location = useLocation()
  const { toast } = useFeedback()
  const [errMsg, setErrMsg] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitting) return

    if (formData.password !== formData.confirmPassword) {
      setErrMsg('Password and confirm password do not match')
      toast({ type: 'warning', message: 'Password and confirm password do not match.' })
      return
    }

    setSubmitting(true)
    try {
      const data = await apiSend('/api/register', {
        body: {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
      })
      if (data.message === 'Registration successful') {
        toast({ type: 'success', message: 'Account created. Sign in to continue.' })
        history('/login', {
          state: {
            notice: 'Account created. Sign in to continue.',
            from: location.state?.from,
          },
        })
      } else {
        setErrMsg(data.message)
        toast({ type: 'error', message: data.message || 'Registration failed.' })
      }
    } catch (error) {
      const message = error.message || 'Registration failed. Please try again.'
      setErrMsg(message)
      toast({ type: 'error', message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center px-5 py-16"
    >
      <form onSubmit={handleSubmit} className="surface w-full max-w-md p-8">
        <p className="kicker mb-3">Create account</p>
        <h1 className="font-display text-3xl font-bold">Sign up</h1>
        <p className="mt-2 text-sm text-mist">Username, email, and a password. That’s it.</p>

        {errMsg ? (
          <p className="mt-6 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            {errMsg}
          </p>
        ) : null}

        <label className="mt-8 block text-sm font-medium text-mist">
          Username
          <input
            name="username"
            type="text"
            required
            autoComplete="username"
            value={formData.username}
            onChange={handleChange}
            className="field"
          />
        </label>

        <label className="mt-4 block text-sm font-medium text-mist">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="field"
          />
        </label>

        <PasswordField
          label="Password"
          name="password"
          required
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
        />

        <PasswordField
          label="Confirm password"
          name="confirmPassword"
          required
          autoComplete="new-password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button className="btn-primary mt-8 w-full" type="submit" disabled={submitting}>
          {submitting ? 'Creating account…' : 'Create account'}
        </button>

        <p className="mt-6 text-center text-sm text-mist">
          Already registered?{' '}
          <Link
            to="/login"
            state={{ from: location.state?.from }}
            className="font-medium text-mint hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </motion.div>
  )
}
