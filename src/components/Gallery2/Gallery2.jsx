import React, { useMemo, useState, useEffect } from 'react'
import './Gallery2.css'

export default function Gallery2() {
  const [open, setOpen] = useState(null)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [version] = useState(0)

  useEffect(() => {
    if (!open) return
    setCarouselIdx(0)
    const onKey = e => { if (e.key === 'Escape') setOpen(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Each project has an array of stills and a YouTube link
  const items = useMemo(() => {
    return new Array(9).fill(0).map((_, i) => {
      const seed = i + 1
      return {
        id: `${seed}-${version}`,
        title: `Project ${seed}`,
        stills: [
          `https://picsum.photos/seed/${seed}-${version}/1920/1080`,
          `https://picsum.photos/seed/${seed + 10}-${version}/1920/1080`,
          `https://picsum.photos/seed/${seed + 20}-${version}/1920/1080`,
        ],
        thumb: `https://picsum.photos/seed/${seed}-${version}/1280/720`,
        youtube: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      }
    })
  }, [version])

  const handlePrev = () => {
    if (!open) return
    setCarouselIdx(idx => (idx - 1 + open.stills.length) % open.stills.length)
  }
  const handleNext = () => {
    if (!open) return
    setCarouselIdx(idx => (idx + 1) % open.stills.length)
  }

  return (
    <section id="work" className="gallery container">
      <h3>Selected Work (Placeholder Test)</h3>
      <div className="gallery-grid">
        {items.map(item => (
          <button key={item.id} className="card" onClick={() => setOpen(item)}>
            <img src={item.thumb} alt={item.title} />
            <div className="overlay">
              <strong>{item.title}</strong>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <dialog className="lightbox" open aria-modal="true">
          <button className="lightbox-backdrop" aria-label="Close" onClick={() => setOpen(null)} />
          <div className="lightbox-content">
            <div className="carousel">
              <div className="carousel-img-wrapper">
                <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous still">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                    <polyline points="18,6 10,14 18,22" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </button>
                <img src={open.stills[carouselIdx]} alt={open.title + ' still'} className="carousel-img" />
                <button className="carousel-arrow right" onClick={handleNext} aria-label="Next still">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                    <polyline points="10,6 18,14 10,22" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="carousel-indicator">
              {open.stills.map((_, idx) => (
                <span key={idx} className={idx === carouselIdx ? 'dot active' : 'dot'} />
              ))}
            </div>
            <a
              className="youtube-link"
              href={open.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch on YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="32"
                viewBox="0 0 44 32"
                fill="none"
                className="youtube-logo"
                style={{ verticalAlign: 'middle', marginRight: '0.2em' }}
              >
                <rect width="44" height="32" rx="7" fill="#FF0000"/>
                <polygon points="18,8 30,16 18,24" fill="#fff"/>
              </svg>
            </a>
            <button className="close-x" aria-label="Close" onClick={() => setOpen(null)}>&times;</button>
          </div>
        </dialog>
      )}
    </section>
  )
}
