import { useEffect, useRef, useState } from 'react'

// Robust scroll-reveal: fades + lifts children in once they enter the viewport.
// Safety nets guarantee content can never get stuck invisible:
//   - if IntersectionObserver is unsupported -> show immediately
//   - a 2.5s timeout reveals regardless (covers no-scroll / print / embeds)
// Honours prefers-reduced-motion via CSS (.reveal becomes a no-op).
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div', style }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.04 },
    )
    io.observe(el)
    const failSafe = setTimeout(() => {
      setShown(true)
      io.disconnect()
    }, 2500)
    return () => {
      io.disconnect()
      clearTimeout(failSafe)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'reveal--in' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </Tag>
  )
}

// The "01  EXPERIENCE" eyebrow that heads each section.
export function SectionLabel({ index, children }) {
  return (
    <Reveal className="section-label">
      <span className="section-label__num">{index}</span>
      <span className="section-label__text">{children}</span>
      <span className="section-label__rule" aria-hidden="true" />
    </Reveal>
  )
}
