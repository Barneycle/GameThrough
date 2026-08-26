import { useEffect, useState } from 'react'

export default function TypedText({
  strings,
  className,
  typeSpeed = 120,
  backSpeed = 140,
}) {
  const text = strings[0] ?? ''
  const [shown, setShown] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const pause =
      deleting && shown === ''
        ? 400
        : !deleting && shown === text
          ? 1200
          : deleting
            ? backSpeed
            : typeSpeed

    const id = setTimeout(() => {
      if (!deleting) {
        const next = text.slice(0, shown.length + 1)
        setShown(next)
        if (next === text) setDeleting(true)
      } else {
        const next = text.slice(0, Math.max(0, shown.length - 1))
        setShown(next)
        if (next === '') setDeleting(false)
      }
    }, pause)

    return () => clearTimeout(id)
  }, [shown, deleting, text, typeSpeed, backSpeed])

  return <span className={className}>{shown}</span>
}
