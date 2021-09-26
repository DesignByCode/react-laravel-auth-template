import React from 'react'
import useForm from '../../hooks/useForm'
import { useAuth } from '../../context/AuthContext'
import Loader from '../../components/parts/Loader'
import InputComponent from '../../components/form/InputComponent'
import { useHistory } from 'react-router-dom'
import useQuery from '../../hooks/useQuery'
import GradientButton from '../../components/form/GradientButton'

const ResetPassword = () => {
  const { updatePasswordResetViaEmailToken, attemptUserLogin, loading, errors, clearErrors } = useAuth()
  const history = useHistory()
  const query = useQuery()

  const { form, handleInputChange } = useForm({
    email: query.get('email') || '',
    token: query.get('token') || '',
    password: '',
    password_confirmation: '',
  })

  const updatePasswordSubmit = async (e) => {
    e.preventDefault()
    await updatePasswordResetViaEmailToken(form, async () => {
      await attemptUserLogin({ email: form.email, password: form.password }, () => {
        history.replace('/')
      })
    })
  }

  return (
    <div className="max-w-md mx-auto p-4 my-24">
      <div className="border bg-white shadow-lg border-gray-100 p-6 rounded space-y-4">
        <form noValidate={true} className="space-y-2" method="post" onSubmit={updatePasswordSubmit}>
          <InputComponent
            label="Email"
            disabled={true}
            id="email"
            value={form.email}
            onChange={handleInputChange}
            name="email"
            type="email"
            error={errors['email']}
            onFocus={clearErrors}
          />

          <InputComponent
            label="Password"
            id="password"
            value={form.password}
            onChange={handleInputChange}
            name="password"
            type="password"
            error={errors['password']}
            onFocus={clearErrors}
          />

          <InputComponent
            label="Password Confirm"
            id="password_confirmation"
            value={form.password_confirmation}
            onChange={handleInputChange}
            name="password_confirmation"
            type="password"
            error={errors['password_confirmation']}
          />

          <input value={form.token} type="hidden" />

          <div className="text-center pt-3">
            <GradientButton disabled={loading} classes={'w-full'} type="submit">
              RESET PASSWORD
            </GradientButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
