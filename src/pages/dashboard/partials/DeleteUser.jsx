import React from 'react'
import Loader from '../../../components/parts/Loader'
import { useAuth } from '../../../context/AuthContext'
const DeleteUser = () => {
  const { loading, deleteUserAccount } = useAuth()

  const handleRemoveAccount = async (e) => {
    e.preventDefault()
    await deleteUserAccount()
  }

  return (
    <>
      <div className="sm:col-span-2">
        <h3 className="text-lg font-medium flex items-center text-gray-900">Delete Account</h3>
        <p className="mt-1 text-sm text-gray-600">Permanently delete your account.</p>
      </div>
      <div className="bg-white rounded overflow-hidden border border-gray-200 sm:col-span-3 ">
        <div className="p-5">
          <p className="mt-1 text-sm text-gray-600">
            Once your account is deleted, all of its resources and data will be
            <strong className="text-red-600"> permanently deleted</strong>. Before deleting your account, please download any data or
            information that you wish to retain.
          </p>
        </div>
        <div className="bg-gray-50 px-5 py-2.5 flex justify-start">
          {loading ? (
            <Loader />
          ) : (
            <button
              type="button"
              onClick={handleRemoveAccount}
              className="rounded px-3 py-1 font-semibold tracking-wider bg-red-500 hover:bg-red-400 text-white"
            >
              DELETE USER
            </button>
          )}
        </div>
      </div>
    </>
  )
}
export default DeleteUser
