import React from 'react'
import withAuth from '../../hoc/withAuth'
import UserUpdate from './partials/UserUpdate'
import PasswordUpdate from './partials/PasswordUpdate'
import TwoFactorAuth from './partials/TwoFactorAuth'
import DeleteUser from './partials/DeleteUser'

const Profile = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 my-12">
        <h1 className="text-3xl mb-14">Profile</h1>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-x-4 gap-y-12 pb-48">
          <UserUpdate />
          <PasswordUpdate />
          <TwoFactorAuth />
          <DeleteUser />
        </div>
      </div>
    </>
  )
}

export default withAuth(Profile)
