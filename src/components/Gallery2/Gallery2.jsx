import React, { useMemo, useState, useEffect } from 'react'
import './Gallery2.css'

export default function Gallery2() {
  const [open, setOpen] = useState(null)
  const [version] = useState(0)

  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') setOpen(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const items = useMemo(() => {
    return new Array(9).fill(0).map((_, i) => {
      const seed = i + 1
      return {
        id: `${seed}-${version}`,
        title: `Project ${seed}`,
        thumb: `https://picsum.photos/seed/${seed}-${version}/1280/720`,
        full: `https://picsum.photos/seed/${seed}-${version}/1920/1080`,
      }
    })
  }, [version])
  return (
    <section id="work" className="gallery container">
      <h3>Selected Work (Placeholder Test)</h3>
      <div className="grid">
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
            <img src={open.full} alt={open.title} />
            <button className="close" onClick={() => setOpen(null)}>Close</button>
          </div>
        </dialog>
      )}
    </section>
  )
}
