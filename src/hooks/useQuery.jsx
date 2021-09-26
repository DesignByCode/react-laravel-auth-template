import React from 'react'
import { useLocation } from 'react-router-dom'

const useQuery = () => {
  const location = useLocation().search
  return new URLSearchParams(location)
}

export default useQuery
