import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/layout/Footer'
import NavBar from './components/nav/NavBar'
import { navLinks, guestLinks, hiddenLinks, authLinks } from './config/navigation-links'
import HeadRoom from './components/nav/HeadRoom'
const App = () => {
  return (
    <Router>
      <HeadRoom
        options={{
          offset: {
            up: 100,
            down: 100,
          },
          tolerance: {
            up: 5,
            down: 5,
          },
          classes: {
            initial: 'fixed top-0 z-50 w-full transition-all duration-500',
            pinned: 'translate-y-0',
            unpinned: '-translate-y-20',
            notTop: 'shadow-2xl border-b-2 border-primary-500',
          },
        }}
      >
        <NavBar />
      </HeadRoom>
      <div className="min-h-[500px]">
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
      <Footer />
    </Router>
  )
}

export default App
