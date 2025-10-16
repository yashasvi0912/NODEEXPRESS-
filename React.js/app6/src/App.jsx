import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Service from "./components/pages/Service.jsx"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service/:servicename' element={<Service />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

// /-> home
// /about - about page
// /services - services page
// /service/:serviceName - nameservice page

// React Router

// SPA -> Multi Page Application