import React from 'react'

const GradientButton = ({ type, onClick, children, disabled = false, classes }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded px-3 py-2 font-semibold tracking-wider text-white bg-gradient-to-br from-primary-500  to-blue-500 hover:to-blue-600 disabled:opacity-70 disabled:hover:to-blue-500 hover:shadow-lg disabled:cursor-not-allowed ${classes}`}
    >
      {children}
    </button>
  )
}

export default GradientButton
