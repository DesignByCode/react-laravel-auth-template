import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { useAuth } from '../../context/AuthContext'
import Loader from '../../components/parts/Loader'
import InputComponent from '../../components/form/InputComponent'
import FlashMessage from '../../components/parts/FlashMessage'
import GradientButton from '../../components/form/GradientButton'

const ForgotPassword = () => {
  const [flash, setFlash] = useState('')
  const { resetPassword, loading, errors, clearErrors } = useAuth()

  const { form, setForm, handleInputChange } = useForm({
    email: '',
    token: '',
  })

  const changePasswordSubmit = async (e) => {
    e.preventDefault()
    setFlash(false)
    await resetPassword(form, () => {
      setFlash(true)
      setForm({
        email: '',
        token: '',
      })
    })
  }

  return (
    <div className="max-w-md mx-auto p-4 my-24">
      <div className="border bg-white shadow-lg border-gray-100 p-6 rounded space-y-4">
        {flash && <FlashMessage>Email was successfully send.</FlashMessage>}
        <p className="text-gray-400">
          Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow
          you to choose a new one.
        </p>
        <div>
          <form noValidate={true} className="space-y-2" method="post" onSubmit={changePasswordSubmit}>
            <InputComponent
              label="Email"
              id="email"
              value={form.email}
              onChange={handleInputChange}
              name="email"
              type="email"
              error={errors['email']}
              onFocus={clearErrors}
            />

            <div className="text-center pt-1">
              <GradientButton disabled={loading} classes={'w-full'} type="submit">
                EMAIL PASSWORD RESET LINK
              </GradientButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
