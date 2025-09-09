import React, { useState, useEffect } from 'react'
import './Gallery.css'

const items = new Array(9).fill(0).map((_, i) => {
  const seed = i + 1
  return {
    id: seed,
    title: `Project ${seed}`,
    thumb: `https://source.unsplash.com/random/1920x1080?sig=${seed}`,
    full: `https://source.unsplash.com/random/1920x1080?sig=${seed}`,
  }
})

export default function Gallery() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') setOpen(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  return (
    <section id="work" className="gallery container">
      <h3>Selected Work</h3>
      <div className="grid">
        {items.map(item => (
          <button key={item.id} className="card" onClick={() => setOpen(item)}>
            <img src={item.thumb} alt={item.title} />
            <div className="card-meta">
              <strong>{item.title}</strong>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <dialog className="lightbox" open aria-modal="true">
          <button className="lightbox-backdrop" aria-label="Close" onClick={() => setOpen(null)} />
          <div className="lightbox-content">
            <img src={open.full} alt={open.title} />
            <div className="lightbox-meta">
              <h4>{open.title}</h4>
              <p>Color grade and look development.</p>
            </div>
            <button className="close" onClick={() => setOpen(null)}>Close</button>
          </div>
        </dialog>
      )}
    </section>
  )
}
