import React from 'react'

const PlainButton = ({ type, onClick, theme = 'primary', children, disabled }) => {
  const themeClasses = {
    primary: ['bg-primary-500 hover:bg-primary-400'],
    danger: ['bg-red-500 hover:bg-red-400'],
    gray: ['bg-gray-900 hover:bg-gray-800'],
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded px-3 py-1 font-semibold tracking-wider text-white ${themeClasses[theme]}`}
    >
      {children}
    </button>
  )
}

export default PlainButton
