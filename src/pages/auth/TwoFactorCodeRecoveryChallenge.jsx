import React, { useState } from 'react'
import InputComponent from '../../components/form/InputComponent'
import useForm from '../../hooks/useForm'
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

const TwoFactorCodeRecoveryChallenge = () => {
  const history = useHistory()

  const { errors, clearErrors, twoFactorCodeChallenge } = useAuth()
  const { form, handleInputChange } = useForm({
    recovery_code: '',
  })

  const challengeSubmit = async (e) => {
    e.preventDefault()
    try {
      await twoFactorCodeChallenge(form, () => {
        history.push('/dashboard')
      })
    } catch (e) {}
  }

  return (
    <div className="max-w-md mx-auto p-4 mt-24">
      <div className="border bg-white shadow-lg border-gray-100 p-6 rounded space-y-4">
        <form noValidate={true} className="space-y-2" method="post" onSubmit={challengeSubmit}>
          <InputComponent
            label="RECOVERY CODE"
            id="recovery_code"
            value={form?.recovery_code}
            onChange={handleInputChange}
            name="recovery_code"
            type="text"
            error={errors['recovery_code']}
            onBlur={clearErrors}
          />

          <div className="pt-3 flex justify-end items-center space-x-3 ">
            <button type="submit" className="rounded w-full px-3 py-2 font-semibold tracking-wider bg-laravel text-white">
              TWO FACTOR CODE CHALLENGE
            </button>
          </div>
        </form>
      </div>
      <div className="my-5 text-center">
        <Link
          className="text-laravel italic font-semibold text-opacity-70 hover:underline hover:text-opacity-100"
          to={'/two-factor-challenge'}
        >
          Use two factor QRCode
        </Link>
      </div>
    </div>
  )
}

export default TwoFactorCodeRecoveryChallenge
