// import { useState } from 'react'
import siteLogo from '/AP-Logo.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Anthony Purificato</h1>
        <h2>Front-End Developer Web Portfolio</h2>
      </div>
      <div className="logo-padding">
        <a href="/about-me" target="_blank">
          <img src={siteLogo} className="logo" alt="Site logo" />
        </a>
        <p>Click logo to get started.</p>
      </div>
      <div className="card">
      <h3 className="theme-color">Download My Portfolio as a PWA.<img src="" /></h3>
      <h4>(download button next to browser url bar)</h4>
      </div>
    </>
  )
}

export default App
