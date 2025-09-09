import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery2 from './components/Gallery2'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Gallery2 />
      </main>
      <Footer />
    </div>
  )
}
