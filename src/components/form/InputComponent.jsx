import React from 'react'

const InputComponent = ({ label, name, onChange, onFocus, onBlur, value, type, error, classes, disabled = false }) => {
  const hasError = () => {
    return error ? ' border-red-500 text-red-500 focus:ring-red-200 ' : 'focus:ring-blue-200'
  }

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="font-bold text-gray-500">
        {label}
      </label>
      <input
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        id={name}
        className={`w-full rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-2 ${classes} ${hasError()}`}
      />
      {error && (
        <div className="border-l-4 shadow italic font-semibold text-sm rounded bg-red-50 border-red-500 text-red-500 my-3 px-3 py-1 ">
          {error[0]}
        </div>
      )}
    </div>
  )
}

export default InputComponent
