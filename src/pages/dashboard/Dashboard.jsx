import React from 'react'
import withAuth from '../../hoc/withAuth'

const Dashboard = () => {
  return (
    <>
      <h1 className="text-3xl  mb-14">Dashboard</h1>
    </>
  )
}

export default withAuth(Dashboard)
