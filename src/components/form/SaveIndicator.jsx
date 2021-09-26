import React from 'react'

const SaveIndicator = ({ saving = false, children = 'AUTO SAVE' }) => {
  return (
    <div
      className={`rounded-full  px-4 py-1 font-semibold border border-gray-400 tracking-wider flex items-center space-x-1.5 bg-gray-100 text-xs ${
        saving ? 'text-green-400' : 'text-gray-400'
      }`}
    >
      {saving ? (
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
      ) : (
        <span className={`h-2 w-2 rounded-full flex bg-gray-400 `} />
      )}

      <span>{children}</span>
    </div>
  )
}

export default SaveIndicator
