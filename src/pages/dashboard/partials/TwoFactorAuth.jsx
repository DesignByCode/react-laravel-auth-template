import React, { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import SaveIndicator from '../../../components/form/SaveIndicator'

const TwoFactorAuth = () => {
  const { enableTwoFactorAuth, disableTwoFactorAuth, recoveryCodes, qrCode, user } = useAuth()
  const [saveTwo, setSaveTwo] = useState(false)

  const handleTwoFactoryEnable = async () => {
    setSaveTwo(true)
    try {
      await enableTwoFactorAuth()
    } finally {
      setSaveTwo(false)
    }
  }

  const handleTwoFactoryDisable = async () => {
    setSaveTwo(true)
    try {
      await disableTwoFactorAuth()
    } finally {
      setSaveTwo(false)
    }
  }

  return (
    <>
      <div className="sm:col-span-2">
        <h3 className="text-lg font-medium text-gray-900">Two Factor Authentication</h3>
        <p className="mt-1 text-sm text-gray-600">Add additional security to your account using two factor authentication.</p>
      </div>
      <div className="bg-white rounded overflow-hidden border border-gray-200 sm:col-span-3 ">
        <div className="p-5 space-y-3">
          {user?.two_factor_enabled ? (
            <h3 className="text-lg font-medium text-green-600">
              You have two factor authentication <strong>enabled </strong>.
            </h3>
          ) : (
            <h3 className="text-lg font-medium text-gray-900">
              You have <strong className="text-red-600">not enabled</strong> two factor authentication.
            </h3>
          )}
          <p className="mt-1 text-sm text-gray-600">
            When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may
            retrieve this token from your phone's Google Authenticator application.
          </p>
          <div className="flex space-x-5">
            {qrCode && (
              <div className=" inline-block rounded border-4 border-gray-900 p-5 bg-gray-50" dangerouslySetInnerHTML={{ __html: qrCode }} />
            )}
            <div className="flex flex-col justify-evenly">
              {recoveryCodes &&
                recoveryCodes?.map((code) => (
                  <div className="select-all" key={code.toString()}>
                    {code}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-2.5 flex justify-between">
          <SaveIndicator saving={saveTwo}>Manually Save </SaveIndicator>
          {user?.two_factor_enabled ? (
            <button
              type="submit"
              onClick={handleTwoFactoryDisable}
              className="rounded px-3 py-1 font-semibold tracking-wider bg-gray-900 hover:bg-gray-700 text-white"
            >
              DISABLE
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleTwoFactoryEnable}
              className="rounded px-3 py-1 font-semibold tracking-wider bg-gray-900 hover:bg-gray-700 text-white"
            >
              ENABLE
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default TwoFactorAuth
