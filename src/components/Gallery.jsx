import React, { useState } from 'react'

const items = new Array(9).fill(0).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  thumb: `/assets/thumb-${(i % 3) + 1}.jpg`,
  full: `/assets/full-${(i % 3) + 1}.jpg`,
}))

export default function Gallery() {
  const [open, setOpen] = useState(null)
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
        <div className="lightbox" onClick={() => setOpen(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={open.full} alt={open.title} />
            <div className="lightbox-meta">
              <h4>{open.title}</h4>
              <p>Color grade and look development.</p>
            </div>
            <button className="close" onClick={() => setOpen(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}
