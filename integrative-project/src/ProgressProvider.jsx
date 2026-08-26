import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useAuth } from './AuthProvider'
import { useFeedback } from './FeedbackProvider'
import { apiGet, apiSend } from './api'

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const { token } = useAuth()
  const { toast } = useFeedback()
  const [byGame, setByGame] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(() => Boolean(token))
  const [saving, setSaving] = useState(false)
  const writesInFlight = useRef(0)
  const loadId = useRef(0)

  useEffect(() => {
    if (!token) {
      setByGame({})
      setError('')
      setLoading(false)
      return undefined
    }

    const id = ++loadId.current
    let cancelled = false
    setLoading(true)

    apiGet('/api/progress', token)
      .then((data) => {
        if (cancelled || id !== loadId.current || writesInFlight.current > 0) return
        setByGame(data.progress || {})
      })
      .catch(() => {
        if (!cancelled && id === loadId.current) {
          setError('Could not load saved progress yet.')
          toast({ type: 'error', message: 'Could not load saved progress yet.' })
        }
      })
      .finally(() => {
        if (!cancelled && id === loadId.current) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [token, toast])

  const saveChapter = useCallback(
    async (gameId, chapterSlug, chapterProgress) => {
      setByGame((current) => ({
        ...current,
        [gameId]: {
          ...(current[gameId] || {}),
          [chapterSlug]: chapterProgress,
        },
      }))
      setError('')
      writesInFlight.current += 1
      setSaving(true)

      try {
        const data = await apiSend('/api/progress', {
          method: 'PUT',
          token,
          body: {
            gameId,
            chapterSlug,
            completedObjectives: chapterProgress.completedObjectives,
            chapterCompleted: chapterProgress.chapterCompleted,
          },
        })

        writesInFlight.current = Math.max(0, writesInFlight.current - 1)
        setSaving(writesInFlight.current > 0)
        const server = data.progress || {}

        setByGame((current) => {
          if (writesInFlight.current > 0) {
            const merged = { ...server }
            for (const [id, chapters] of Object.entries(current)) {
              merged[id] = { ...(server[id] || {}), ...chapters }
            }
            return merged
          }
          return server
        })
      } catch {
        writesInFlight.current = Math.max(0, writesInFlight.current - 1)
        setSaving(writesInFlight.current > 0)
        setError('Progress did not save. Is the backend running?')
        toast({ type: 'error', message: 'Progress did not save. Is the backend running?' })
      }
    },
    [token, toast],
  )

  const value = useMemo(
    () => ({ byGame, error, loading, saving, saveChapter }),
    [byGame, error, loading, saving, saveChapter],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const context = useContext(ProgressContext)

  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }

  return context
}
