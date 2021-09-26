import React from 'react'

const FlashMessage = ({ children }) => {
  return <div className="p-3 bg-green-100 text-green-500 font-semibold rounded border border-green-500">{children}</div>
}

export default FlashMessage
