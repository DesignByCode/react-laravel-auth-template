import React from 'react'
import useForm from '../../hooks/useForm'
import { useAuth } from '../../context/AuthContext'
import Loader from '../../components/parts/Loader'
import InputComponent from '../../components/form/InputComponent'
import { Link, useHistory } from 'react-router-dom'
import GradientButton from '../../components/form/GradientButton'

const Register = () => {
  const { registerNewUser, loading, errors, clearErrors } = useAuth()
  const history = useHistory()

  const { form, handleInputChange } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const loginSubmit = async (e) => {
    e.preventDefault()
    await registerNewUser(form, () => {
      history.replace('/?=verifyEmail')
    })
  }

  return (
    <div className="max-w-md mx-auto p-4 my-24">
      <div className="border bg-white shadow-lg border-gray-100 p-6 rounded space-y-4">
        <form noValidate={true} className="space-y-2" method="post" onSubmit={loginSubmit}>
          <InputComponent
            label="Name"
            id="name"
            value={form.name}
            onChange={handleInputChange}
            name="name"
            type="text"
            error={errors['name']}
            onFocus={clearErrors}
          />

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

          <div className="pt-3 flex justify-end items-center space-x-3 ">
            <Link className="text-primary-500 italic font-semibold text-opacity-70 hover:underline hover:text-opacity-100" to={`/login`}>
              Already registered?
            </Link>
            <GradientButton type="submit">REGISTER</GradientButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
