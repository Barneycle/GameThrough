import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export default function PasswordField({
  label,
  name,
  value,
  onChange,
  autoComplete,
  required,
  error,
}) {
  const [visible, setVisible] = useState(false)

  return (
    <label className="mt-4 block text-sm font-medium text-mist">
      {label}
      <span className="relative mt-2 block">
        <input
          name={name}
          type={visible ? 'text' : 'password'}
          required={required}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className="field mt-0 pr-12"
        />
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          className="absolute inset-y-0 right-0 grid w-12 place-items-center text-mist transition hover:text-mint"
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? <AiOutlineEyeInvisible size={18} /> : <AiOutlineEye size={18} />}
        </button>
      </span>
      {error ? <p className="mt-2 text-sm text-red-400">{error}</p> : null}
    </label>
  )
}
