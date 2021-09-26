import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import NavBar from './components/nav/NavBar'
import { navLinks, guestLinks, hiddenLinks, authLinks } from './config/navigation-links'

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 my-10 space-y-5">
        <Switch>
          {authLinks.reverse().map((page, index) => (
            <Route exact key={index.toString()} path={page.path} component={page.component} />
          ))}
          {guestLinks.reverse().map((page, index) => (
            <Route exact key={index.toString()} path={page.path} component={page.component} />
          ))}
          {hiddenLinks.map((page, index) => (
            <Route exact key={index.toString()} path={page.path} component={page.component} />
          ))}
          {navLinks.reverse().map((page, index) => (
            <Route exact key={index.toString()} path={page.path} component={page.component} />
          ))}
        </Switch>
      </div>
    </Router>
  )
}

export default App
