import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuth } from './AuthProvider'

const FeedbackContext = createContext(null)

const TOAST_MS = 3200

const toastStyles = {
  success: 'border-mint/40 bg-ebony text-white',
  error: 'border-red-400/40 bg-ebony text-white',
  warning: 'border-amber-400/40 bg-ebony text-white',
  info: 'border-white/15 bg-ebony text-white',
}

const toastKicker = {
  success: 'Success',
  error: 'Error',
  warning: 'Warning',
  info: 'Notice',
}

export function FeedbackProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const [dialog, setDialog] = useState(null)
  const timers = useRef(new Map())

  const dismissToast = useCallback((id) => {
    const timer = timers.current.get(id)
    if (timer) {
      clearTimeout(timer)
      timers.current.delete(id)
    }
    setToasts((current) => current.filter((item) => item.id !== id))
  }, [])

  const toast = useCallback(
    ({ type = 'info', message }) => {
      const id = crypto.randomUUID()
      setToasts((current) => [...current.slice(-3), { id, type, message }])
      timers.current.set(
        id,
        setTimeout(() => dismissToast(id), TOAST_MS),
      )
    },
    [dismissToast],
  )

  const confirm = useCallback((options) => {
    return new Promise((resolve) => {
      setDialog({
        title: 'Are you sure?',
        message: '',
        confirmLabel: 'Confirm',
        cancelLabel: 'Cancel',
        tone: 'default',
        ...options,
        resolve,
      })
    })
  }, [])

  const closeDialog = (value) => {
    dialog?.resolve(value)
    setDialog(null)
  }

  useEffect(() => {
    if (!dialog) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') closeDialog(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dialog])

  const value = useMemo(() => ({ toast, confirm }), [toast, confirm])

  return (
    <FeedbackContext.Provider value={value}>
      {children}

      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[80] flex flex-col items-center gap-2 px-4">
        <AnimatePresence>
          {toasts.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => dismissToast(item.id)}
              className={`pointer-events-auto w-full max-w-sm rounded-2xl border px-4 py-3 text-left shadow-[0_16px_40px_rgb(0_0_0_/_0.45)] ${toastStyles[item.type] || toastStyles.info}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              layout
            >
              <p className="kicker">{toastKicker[item.type] || toastKicker.info}</p>
              <p className="mt-1 text-sm leading-relaxed">{item.message}</p>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {dialog ? (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center px-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/65"
              aria-label="Cancel"
              onClick={() => closeDialog(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="confirm-title"
              className="relative w-full max-w-md rounded-2xl border border-white/10 bg-ebony p-6 shadow-[0_24px_80px_rgb(0_0_0_/_0.55)]"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
            >
              <h2 id="confirm-title" className="font-display text-2xl font-bold">
                {dialog.title}
              </h2>
              {dialog.message ? <p className="mt-3 text-sm leading-relaxed text-mist">{dialog.message}</p> : null}
              <div className="mt-6 flex flex-wrap justify-end gap-2">
                <button type="button" className="btn-secondary" onClick={() => closeDialog(false)}>
                  {dialog.cancelLabel}
                </button>
                <button
                  type="button"
                  className={dialog.tone === 'warning' ? 'btn-warning' : 'btn-primary'}
                  onClick={() => closeDialog(true)}
                >
                  {dialog.confirmLabel}
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </FeedbackContext.Provider>
  )
}

export function useFeedback() {
  const context = useContext(FeedbackContext)
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider')
  }
  return context
}

export function useConfirmLogout() {
  const { logout } = useAuth()
  const { confirm, toast } = useFeedback()
  const navigate = useNavigate()

  return async () => {
    const ok = await confirm({
      title: 'Log out?',
      message: 'You can sign back in anytime. Progress stays saved to this account.',
      confirmLabel: 'Log out',
      cancelLabel: 'Stay signed in',
    })
    if (!ok) return false

    try {
      await logout()
    } catch {
      // Local session still clears
    }
    toast({ type: 'info', message: 'You are signed out.' })
    navigate('/')
    return true
  }
}
