import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="brand">PrismaPro</h1>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
