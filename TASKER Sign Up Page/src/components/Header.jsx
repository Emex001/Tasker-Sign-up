import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text-main">TASKER</span>
          <span className="logo-text-sub">by Nithub</span>
        </div>
        
        <nav className="header-nav">
          <a href="/about" className="nav-link">About</a>
          <a href="/features" className="nav-link">Features</a>
          <a href="/contact" className="nav-link">Contact</a>
          <a href="/login" className="nav-link login-btn">Login</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
