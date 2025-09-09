import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
  <p>&copy; {new Date().getFullYear()} Your Name - Colorist</p>
        <nav>
          <a href="#contact">Email</a>
          <a href="#contact">Instagram</a>
        </nav>
      </div>
    </footer>
  )
}
