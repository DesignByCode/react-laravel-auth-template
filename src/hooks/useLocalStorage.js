import React, { useEffect, useState } from 'react'

const getLocalStorage = (key, initialValue) => {
  const data = JSON.parse(localStorage.getItem(key))
  if (data) return data
  if (data instanceof Function) return data()
  return initialValue
}

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getLocalStorage(key, initialValue))
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

export default useLocalStorage
