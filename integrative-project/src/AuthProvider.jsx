import { useState, useEffect, useContext, createContext } from 'react'
import { apiSend } from './api'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const isLoggedIn = Boolean(token)

  useEffect(() => {
    const stored = localStorage.getItem('token')
    setToken(stored)
  }, [])

  const login = (nextToken) => {
    localStorage.setItem('token', nextToken)
    setToken(nextToken)
  }

  const logout = async () => {
    const current = localStorage.getItem('token')

    try {
      if (current) {
        await apiSend('/api/logout', { token: current })
      }
    } catch (error) {
      console.error('Logout request failed:', error)
    } finally {
      localStorage.removeItem('token')
      setToken(null)
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, AuthContext, useAuth }
