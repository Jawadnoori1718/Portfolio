import { useEffect, useRef, useState } from 'react'
import ProjectShot from './ProjectShot.jsx'

// A simple image viewer popup: zoom in/out, reset, drag to pan, and close
// (button, backdrop click, or Esc). Reuses ProjectShot so it shows the real
// screenshot when present, or the generated art otherwise.
const MIN = 1
const MAX = 4
const STEP = 0.4

export default function Lightbox({ project, onClose }) {
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const drag = useRef(null)

  const clamp = (z) => Math.min(MAX, Math.max(MIN, z))
  const zoomBy = (d) =>
    setZoom((z) => {
      const next = clamp(Math.round((z + d) * 100) / 100)
      if (next === 1) setPan({ x: 0, y: 0 })
      return next
    })
  const reset = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  // close on Esc + lock background scroll while open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === '+' || e.key === '=') zoomBy(STEP)
      else if (e.key === '-') zoomBy(-STEP)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const onWheel = (e) => {
    e.preventDefault()
    zoomBy(e.deltaY < 0 ? STEP : -STEP)
  }
  const onPointerDown = (e) => {
    if (zoom <= 1) return
    drag.current = { x: e.clientX - pan.x, y: e.clientY - pan.y }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (!drag.current) return
    setPan({ x: e.clientX - drag.current.x, y: e.clientY - drag.current.y })
  }
  const onPointerUp = () => {
    drag.current = null
  }

  return (
    <div className="lb" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lb__bar" onClick={(e) => e.stopPropagation()}>
        <span className="lb__title">{project.name}</span>
        <span className="lb__spacer" />
        <button className="lb__btn" onClick={() => zoomBy(-STEP)} aria-label="Zoom out" disabled={zoom <= MIN}>
          −
        </button>
        <span className="lb__zoom">{Math.round(zoom * 100)}%</span>
        <button className="lb__btn" onClick={() => zoomBy(STEP)} aria-label="Zoom in" disabled={zoom >= MAX}>
          +
        </button>
        <button className="lb__btn" onClick={reset} aria-label="Reset zoom">Reset</button>
        <button className="lb__btn lb__btn--close" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <div
        className="lb__stage"
        onClick={onClose}
        onWheel={onWheel}
      >
        <div
          className="lb__content"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            cursor: zoom > 1 ? 'grab' : 'default',
          }}
          onClick={(e) => e.stopPropagation()}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <ProjectShot slug={project.img} art={project.art} />
        </div>
      </div>
    </div>
  )
}
