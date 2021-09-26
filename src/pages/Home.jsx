import React from 'react'
import { useAuth } from '../context/AuthContext'
import Pricing from '../components/layout/Pricing'

const Home = () => {
  const { user } = useAuth()
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 my-12">
        <h1 className="text-3xl  mb-14">Home</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
      <Pricing />
    </>
  )
}

export default Home
