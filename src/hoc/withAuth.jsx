import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const withAuth = (Component) => {
  return (props) => {
    const { user } = useAuth()
    if (!user) return <Redirect to={{ pathname: '/login' }} />

    return (
      <>
        <Component {...props} />
      </>
    )
  }
}

export default withAuth
