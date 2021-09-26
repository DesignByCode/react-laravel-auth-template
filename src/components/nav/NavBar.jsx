import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { navLinks, guestLinks, authLinks } from '../../config/navigation-links'
import { HiMenuAlt3 } from 'react-icons/hi'

const NavBar = () => {
  const { user, logoutOfAccount } = useAuth()
  const history = useHistory()

  const handleLogout = async () => {
    if (confirm('Are you sure?')) {
      await logoutOfAccount(() => {
        history.replace('/')
      })
    }
  }

  return (
    <nav className="w-full bg-gray-900 border-b border-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Link className="font-black text-3xl text-laravel tracking-tight my-4" to={'/'}>
          Laravel<span className="bg-gradient-to-b from-gray-200 to-gray-100 text-transparent bg-clip-text">Auth</span>
        </Link>

        <button className="w-10 h-10 flex justify-center items-center rounded text-laravel border border-laravel md:hidden">
          <HiMenuAlt3 size={22} />
        </button>

        <div className="md:flex space-x-2  text-laravel hidden ">
          {navLinks.map((link, index) => (
            <NavLink key={index.toString()} exact className="nav-link " activeClassName="nav-link-active" to={link.path}>
              {link.name}
            </NavLink>
          ))}
          {!user &&
            guestLinks.map((link, index) => (
              <NavLink key={index.toString()} exact className="nav-link " activeClassName="nav-link-active" to={link.path}>
                {link.name}
              </NavLink>
            ))}
          {user &&
            authLinks.map((link, index) => (
              <NavLink key={index.toString()} exact className="nav-link " activeClassName="nav-link-active" to={link.path}>
                {link.name}
              </NavLink>
            ))}

          {user && (
            <button type="button" onClick={handleLogout} className="nav-link ">
              LOGOUT
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
