import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', {
        replace: true,
        state: {
          from: `${location.pathname}${location.search}`,
          notice: 'Sign in to track your playthrough.',
        },
      })
    }
  }, [isLoggedIn, navigate, location.pathname, location.search])

  return isLoggedIn ? children : null
}

export default ProtectedRoute
