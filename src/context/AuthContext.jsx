import { createContext, useContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import {
  attemptLogin,
  getAuthenticatedUser,
  registerUser,
  signOutOfAccount,
  requestPasswordReset,
  updatePasswordViaToken,
  updateProfileInformation,
  updateUserPassword,
  deleteAuthenticatedUser,
  enableTowFactorAuthentication,
  getQrCodes,
  disableTowFactorAuthentication,
  getRecoveryCodes,
  twoFactorChallenge,
} from '../client/auth-client'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  /* Auth state */
  const [user, setUser] = useLocalStorage('user', null)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [qrCode, setQrCode] = useState(null)
  const [recoveryCodes, setRecoveryCodes] = useState(null)

  const clearErrors = (error) => {
    setErrors({ ...errors, [error.target.name]: null })
  }

  /* Login user with email and password*/
  const attemptUserLogin = async (credentials, callback) => {
    setLoading(true)
    setErrors({})
    try {
      await attemptLogin(credentials)
      const { data } = await getAuthenticatedUser()
      await setUser(data)
      callback()
    } catch (err) {
      console.log(err)
      setErrors(err.data.errors)
    } finally {
      setLoading(false)
    }
  }

  /* Register user with credentials */
  const registerNewUser = async (credentials, callback) => {
    setLoading(true)
    setErrors({})
    try {
      await registerUser(credentials)
      await callback()
    } catch (err) {
      setErrors(err.data.errors)
    } finally {
      setLoading(false)
    }
  }

  /* Logout authenticated user*/
  const logoutOfAccount = async (callback) => {
    setLoading(true)
    try {
      await signOutOfAccount()
      setUser(null)
      callback()
    } catch (e) {
    } finally {
      setLoading(false)
    }
  }

  /* Update username and email information */
  const updateUserInformation = async (form) => {
    setErrors({})
    try {
      await updateProfileInformation(form)
      setUser((await getAuthenticatedUser()).data)
    } catch (err) {
      setErrors(err.data.errors)
    }
  }

  /* Password reset via email */
  const resetPassword = async (email, callback) => {
    setErrors({})
    try {
      await requestPasswordReset(email)
      await callback()
    } catch (err) {
      setErrors(err.data.errors)
    }
  }

  /* Reset password via email notification token */
  const updatePasswordResetViaEmailToken = async (form, callback) => {
    try {
      await updatePasswordViaToken(form)
      await callback()
    } catch (err) {
      setErrors(err.data.errors)
    }
  }

  /* Change authenticated password */
  const updateUserProfilePassword = async (formData, callback) => {
    setErrors({})
    try {
      await updateUserPassword(formData)
      await callback()
    } catch (err) {
      setErrors(err.data.errors)
    }
  }

  /* Remove user account */
  const deleteUserAccount = async () => {
    try {
      await deleteAuthenticatedUser()
      setUser(null)
      history.replace('/')
      setQrCode(null)
      setRecoveryCodes(null)
    } catch (e) {}
  }

  /* Enable two factor authentication via google-authenticator */
  const enableTwoFactorAuth = async () => {
    try {
      await enableTowFactorAuthentication()
      setUser((await getAuthenticatedUser()).data)
      setQrCode((await getQrCodes()).svg)
      setRecoveryCodes(await getRecoveryCodes())
    } catch (err) {
      console.log(err)
    }
  }
  /* Disable two factor authentication  */
  const disableTwoFactorAuth = async () => {
    try {
      await disableTowFactorAuthentication()
      setUser((await getAuthenticatedUser()).data)
      setQrCode(null)
      setRecoveryCodes(null)
    } catch (err) {
      setErrors(err)
    }
  }

  const twoFactorCodeChallenge = async (code, callback) => {
    setLoading(true)
    setErrors({})
    try {
      await twoFactorChallenge(code)
      setUser((await getAuthenticatedUser()).data)
      callback()
    } catch (err) {
      setErrors(err.data.errors)
    } finally {
      setLoading(false)
    }
  }

  /* Check if authenticated exists and set user */
  useEffect(() => {
    ;(async () => {
      try {
        setUser((await getAuthenticatedUser()).data)
        if (user.two_factor_enabled) {
          setRecoveryCodes(await getRecoveryCodes())
        } else {
          setQrCode(null)
          setRecoveryCodes(null)
        }
      } catch (e) {}
    })()
  }, [])

  const context = {
    user,
    errors,
    loading,
    recoveryCodes,
    qrCode,
    attemptUserLogin,
    clearErrors,
    deleteUserAccount,
    registerNewUser,
    logoutOfAccount,
    resetPassword,
    updatePasswordResetViaEmailToken,
    updateUserInformation,
    updateUserProfilePassword,
    enableTwoFactorAuth,
    disableTwoFactorAuth,
    twoFactorCodeChallenge,
  }
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
