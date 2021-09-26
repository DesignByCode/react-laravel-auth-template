import React from 'react'
import withAuth from '../../hoc/withAuth'

const Dashboard = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 my-12">
        <h1 className="text-3xl  mb-14">Dashboard</h1>
      </div>
    </>
  )
}

export default withAuth(Dashboard)
