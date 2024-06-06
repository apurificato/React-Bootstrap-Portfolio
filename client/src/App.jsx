// import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Resume from './pages/Resume'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {

  return (
    <>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about-me" element={<AboutMe />} />

          <Route path="/contact-me" element={<ContactMe />} />

          <Route path="/resume" element={<Resume />} />

        </Routes>
    </>
  )
}

export default App
