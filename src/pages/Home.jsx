import React from 'react'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { user } = useAuth()
  return (
    <>
      <h1 className="text-3xl  mb-14">Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

export default Home
