import { useEffect, useState } from 'react'
import { PROFILE, HERO_LINKS } from '../data/content.js'
import Icon from './Icons.jsx'
import Workstation from './Workstation.jsx'

// Looping typewriter: types the text out, holds it for ~3s, erases it, and
// types again — with a blinking caret. A hidden "ghost" copy reserves the full
// width so the pill never jumps as the text grows/shrinks.
function Typewriter({ text }) {
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    let t
    if (phase === 'typing') {
      if (count < text.length) t = setTimeout(() => setCount(count + 1), 70)
      else t = setTimeout(() => setPhase('deleting'), 2000)
    } else {
      if (count > 0) t = setTimeout(() => setCount(count - 1), 32)
      else t = setTimeout(() => setPhase('typing'), 700)
    }
    return () => clearTimeout(t)
  }, [count, phase, text])

  return (
    <span className="tw" aria-label={text}>
      <span className="tw__ghost" aria-hidden="true">{text}<i className="tw__caret" /></span>
      <span className="tw__live" aria-hidden="true">
        {text.slice(0, count)}
        <i className="tw__caret tw__caret--on" />
      </span>
    </span>
  )
}

// Render a headline line, wrapping any accent phrase(s) in a highlighted span.
function HeadlineLine({ text, accents }) {
  const list = Array.isArray(accents) ? accents : [accents]
  // Split the line on the accent phrases, keeping the delimiters.
  const re = new RegExp(`(${list.map((a) => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  const parts = text.split(re)
  return (
    <span>
      {parts.map((part, i) =>
        list.includes(part) ? (
          <span key={i} className="hero__accent">{part}</span>
        ) : (
          <span key={i} className="hero__plain">{part}</span>
        ),
      )}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__grid">
        {/* ---- left: copy (entrance handled by CSS, staggered) ---- */}
        <div className="hero__copy">
          <h1 className="hero__headline hero-in">
            {PROFILE.headline.map((line, i) => (
              <HeadlineLine key={i} text={line} accents={PROFILE.headlineAccent} />
            ))}
          </h1>

          <div className="hero__badge hero-in">
            <span className="hero__badge-dot" />
            <span className="hero__badge-role">
              <Typewriter text={PROFILE.role} />
            </span>
          </div>

          <p className="hero__subhead hero-in">
            {PROFILE.subhead.map((line, i) => (
              <HeadlineLine key={i} text={line} accents={PROFILE.subheadAccent} />
            ))}
          </p>

          <div className="hero__links hero-in">
            {HERO_LINKS.map((link) => (
              <a
                key={link.label}
                className="btn btn--ghost hero__link"
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                style={{ '--brand': link.color }}
              >
                <span className="hero__link-ic">
                  <Icon name={link.icon} width={18} height={18} />
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ---- right: interactive AI workstation ---- */}
        <div className="hero__visual hero-visual-in">
          <Workstation />
        </div>
      </div>
    </section>
  )
}
