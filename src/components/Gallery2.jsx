import React, { useMemo, useState } from 'react'

// Previous local-assets implementation (kept for reference):
// const items = new Array(9).fill(0).map((_, i) => ({
//   id: i + 1,
//   title: `Project ${i + 1}`,
//   thumb: `/assets/thumb-${(i % 3) + 1}.jpg`,
//   full: `/assets/full-${(i % 3) + 1}.jpg`,
// }))

// Unsplash version (kept for later):
// const items = new Array(9).fill(0).map((_, i) => {
//   const seed = i + 1
//   return {
//     id: seed,
//     title: `Project ${seed}`,
//     thumb: `https://source.unsplash.com/random/400x300?sig=${seed}`,
//     full: `https://source.unsplash.com/random/1600x1000?sig=${seed}`,
//   }
// })

// Static items version (kept for reference):
// const items = new Array(9).fill(0).map((_, i) => {
//   const seed = i + 1
//   return {
//     id: seed,
//     title: `Project ${seed}`,
//     thumb: `https://picsum.photos/seed/${seed}/1280/720`,
//     full: `https://picsum.photos/seed/${seed}/1920/1080`,
//   }
// })

export default function Gallery2() {
  const [open, setOpen] = useState(null)
  const [version, setVersion] = useState(0)

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
      <button className="refresh" onClick={() => setVersion(v => v + 1)}>Refresh images</button>
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
        <div className="lightbox" onClick={() => setOpen(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={open.full} alt={open.title} />
            <button className="close" onClick={() => setOpen(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}


