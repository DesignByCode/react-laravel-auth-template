import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

axios.interceptors.response.use(
  (response) => {
    if (response.data.two_factor === true) {
      window.location.href = '/two-factor-challenge'
    }
    return response
  },
  ({ response }) => {
    const expectedError = response && response.status >= 400 && response.status < 500

    if (response.status === 423) {
      ;(async () => {
        let password = prompt('Please confirm with password')
        await userPasswordConfirmation({ password })
      })()
    }

    if (!expectedError) return Promise.reject()
    return Promise.reject(response)
  }
)

/*
 Cross site request forgery cookie
 Preflight for none api routes
 */
const getCsrfCookie = async () => {
  return await axios.get('sanctum/csrf-cookie')
}

/* Get authenticated user by csrf-cookie */
export const getAuthenticatedUser = async () => {
  return await axios.get('/api/me')
}

/* Get authenticated user using email and password */
export const attemptLogin = async (credentials) => {
  await getCsrfCookie()
  await axios.post('login', credentials)
}

/* Register an new user with field: name, email, password, password_confirmation */
export const registerUser = async (credentials) => {
  await getCsrfCookie()
  await axios.post('register', credentials)
}

/* Sign out of account */
export const signOutOfAccount = async () => {
  await getCsrfCookie()
  await axios.post('logout')
}

/* Update username and email information */
export const updateProfileInformation = async (data) => {
  await axios.put('/user/profile-information', data)
}

/* Request a password reset by email */
export const requestPasswordReset = async (email) => {
  await getCsrfCookie()
  await axios.post('/forgot-password', email)
}

/* Update password via email notification email */
export const updatePasswordViaToken = async (data) => {
  await axios.post('/reset-password', data)
}

/* Update authenticated users password */
export const updateUserPassword = async (data) => {
  await getCsrfCookie()
  await axios.put('/user/password', data)
}

/* User password confirmation */
export const userPasswordConfirmation = async (data) => {
  await getCsrfCookie()
  await axios.post('/user/confirm-password', data)
}

/* Delete authenticated user */
export const deleteAuthenticatedUser = async () => {
  await axios.delete('/api/user')
}

/* Enable two factor authentication */
export const enableTowFactorAuthentication = async () => {
  await getCsrfCookie()
  await axios.post('user/two-factor-authentication')
}

/* Disable two factor authentication */
export const disableTowFactorAuthentication = async () => {
  await getCsrfCookie()
  await axios.delete('user/two-factor-authentication')
}

/* Get two factor authentication qr-code svg */
export const getQrCodes = async () => {
  await getCsrfCookie()
  return (await axios.get('user/two-factor-qr-code')).data
}

/* Get two factor authentication recovery codes */
export const getRecoveryCodes = async () => {
  await getCsrfCookie()
  return (await axios.get('/user/two-factor-recovery-codes')).data
}

/* Two factor challenge */
export const twoFactorChallenge = async (code) => {
  await getCsrfCookie()
  return await axios.post('two-factor-challenge', code)
}
