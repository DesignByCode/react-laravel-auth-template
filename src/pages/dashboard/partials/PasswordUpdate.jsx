import React, { useState } from 'react'
import InputComponent from '../../../components/form/InputComponent'
import { useAuth } from '../../../context/AuthContext'
import useForm from '../../../hooks/useForm'
import SaveIndicator from '../../../components/form/SaveIndicator'

const PasswordUpdate = () => {
  const { errors, updateUserProfilePassword } = useAuth()
  const [savePassword, setSavePassword] = useState(false)

  const { form, setForm, handleInputChange } = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  })

  const handlePasswordUpdate = async (e) => {
    e.preventDefault()
    setSavePassword(true)
    try {
      await updateUserProfilePassword(form, () => {
        setForm({
          current_password: '',
          password: '',
          password_confirmation: '',
        })
      })
    } finally {
      setSavePassword(false)
    }
  }

  return (
    <>
      <div className="sm:col-span-2">
        <h3 className="text-lg font-medium text-gray-900">Update Password </h3>
        <p className="mt-1 text-sm text-gray-600">Ensure your account is using a long, random password to stay secure.</p>
      </div>
      <div className="bg-white rounded overflow-hidden border border-gray-200 sm:col-span-3 ">
        <form onSubmit={handlePasswordUpdate}>
          <div className="p-5 space-y-3">
            <InputComponent
              label="CURRENT PASSWORD"
              type="password"
              name="current_password"
              value={form.current_password}
              onChange={handleInputChange}
              error={errors['current_password']}
            />
            <InputComponent
              label="CURRENT PASSWORD"
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              error={errors['password']}
            />
            <InputComponent
              label="PASSWORD CONFIRMATION"
              type="password"
              name="password_confirmation"
              value={form.password_confirmation}
              onChange={handleInputChange}
              error={errors['password_confirmation']}
            />
          </div>

          <div className="bg-gray-50 px-5 py-2.5 flex justify-between">
            <SaveIndicator saving={savePassword}>Manually Save </SaveIndicator>
            <button type="submit" className="rounded px-3 py-1 font-semibold tracking-wider bg-gray-900 hover:bg-gray-700 text-white">
              UPDATE PASSWORD
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default PasswordUpdate
