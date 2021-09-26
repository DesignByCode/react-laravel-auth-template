import React from 'react'
import useForm from '../../hooks/useForm'
import { useAuth } from '../../context/AuthContext'
import Loader from '../../components/parts/Loader'
import InputComponent from '../../components/form/InputComponent'
import { Link, useHistory } from 'react-router-dom'
import GradientButton from '../../components/form/GradientButton'

const Login = () => {
  const { attemptUserLogin, loading, errors, clearErrors } = useAuth()
  const history = useHistory()

  const { form, handleInputChange } = useForm({
    email: '',
    password: '',
  })

  const loginSubmit = async (e) => {
    e.preventDefault()

    await attemptUserLogin(form, () => {
      history.replace('/dashboard')
    })
  }

  return (
    <div className="max-w-md mx-auto p-4 my-24">
      <div className="border bg-white shadow-lg border-gray-100 p-6 rounded space-y-4">
        <form noValidate={true} className="space-y-2" method="post" onSubmit={loginSubmit}>
          <InputComponent
            label="Email"
            id="email"
            value={form?.email}
            onChange={handleInputChange}
            name="email"
            type="email"
            error={errors['email']}
            onFocus={clearErrors}
          />

          <InputComponent
            label="Password"
            id="password"
            value={form?.password}
            onChange={handleInputChange}
            name="password"
            type="password"
            error={errors['password']}
            onFocus={clearErrors}
          />

          <div className="pt-3 flex justify-end items-center space-x-3 ">
            <Link
              className="text-primary-500 italic font-semibold text-opacity-70 hover:underline hover:text-opacity-100"
              to={'/forgot-password'}
            >
              Forgot password
            </Link>
            <GradientButton disabled={loading} type="submit">
              Login
            </GradientButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
