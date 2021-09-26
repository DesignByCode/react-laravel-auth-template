import { Home, About } from '../pages'
import { Register, Login, ResetPassword, ForgotPassword, TwoFactorChallenge, TwoFactorCodeRecoveryChallenge } from '../pages/auth'
import { Dashboard, Profile } from '../pages/dashboard'

export const navLinks = [
  { name: 'HOME', path: '/', component: Home },
  { name: 'ABOUT', path: '/about-us', component: About },
]

export const guestLinks = [
  { name: 'LOGIN', path: '/login', component: Login },
  { name: 'REGISTER', path: '/register', component: Register },
]

export const hiddenLinks = [
  { name: 'FORGOT PASSWORD', path: '/forgot-password', component: ForgotPassword },
  { name: 'PASSWORD RESET', path: '/reset-password', component: ResetPassword },
  { name: 'TWO FACTOR CHALLENGE', path: '/two-factor-challenge', component: TwoFactorChallenge },
  { name: 'TWO FACTOR CODE RECOVERY CHALLENGE', path: '/two-factor-code-recovery-challenge', component: TwoFactorCodeRecoveryChallenge },
]

export const authLinks = [
  { name: 'DASHBOARD', path: '/dashboard', component: Dashboard },
  { name: 'PROFILE', path: '/user/profile', component: Profile },
]
