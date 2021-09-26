import React, { useEffect, useState } from 'react'
import InputComponent from '../../../components/form/InputComponent'
import debounce from 'lodash.debounce'
import { useAuth } from '../../../context/AuthContext'
import useForm from '../../../hooks/useForm'
import SaveIndicator from '../../../components/form/SaveIndicator'

const UserUpdate = () => {
  const { user, errors, updateUserInformation } = useAuth()
  const [autoSaveProfile, setAutoSaveProfile] = useState(false)
  const { form, handleInputChange } = useForm({
    name: user?.name,
    email: user?.email,
  })

  const handleProfileUpdate = debounce(async () => {
    setAutoSaveProfile(true)
    try {
      await updateUserInformation(form)
    } finally {
      setAutoSaveProfile(false)
    }
  }, 500)

  useEffect(() => {
    return () => handleProfileUpdate.cancel()
  }, [handleProfileUpdate])

  return (
    <>
      <div className="sm:col-span-2">
        <h3 className="text-lg font-medium text-gray-900">Profile Information </h3>
        <p className="mt-1 text-sm text-gray-600">Update your account's profile information and email address.</p>
      </div>
      <div className="bg-white rounded overflow-hidden border border-gray-200 sm:col-span-3 ">
        <div className="p-5 space-y-3">
          <InputComponent
            label="NAME"
            type="text"
            name="name"
            value={form.name}
            onBlur={handleProfileUpdate}
            onChange={handleInputChange}
            error={errors['name']}
          />

          <InputComponent
            label="EMAIL"
            type="email"
            name="email"
            value={form.email}
            onBlur={handleProfileUpdate}
            onChange={handleInputChange}
            error={errors['email']}
          />
        </div>
        <div className="bg-gray-50 px-5 py-2.5 flex justify-start">
          <SaveIndicator saving={autoSaveProfile} />
        </div>
      </div>
    </>
  )
}

export default UserUpdate
