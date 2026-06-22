import { useEffect, useState } from 'react'
import { PROFILE, NAV_ITEMS } from '../data/content.js'
import Icon from './Icons.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  // Add a frosted background once the user scrolls away from the top, and make
  // sure the last section (Contact) activates when the page is scrolled to the
  // very bottom — its short height can sit outside the observer's centre band.
  useEffect(() => {
    const lastTarget = NAV_ITEMS[NAV_ITEMS.length - 1].target
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) setActive(lastTarget)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.target)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <button className="nav__logo" onClick={() => go('hero')} aria-label="Go to top">
          {PROFILE.logo}
        </button>

        <nav className="nav__links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              className={`nav__link ${active === item.target ? 'is-active' : ''}`}
              onClick={() => go(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="btn btn--connect nav__cta" onClick={() => go('contact')}>
          Let&apos;s Connect <Icon name="arrow" width={16} height={16} />
        </button>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* mobile dropdown */}
      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.target}
            className={`nav__mobile-link ${active === item.target ? 'is-active' : ''}`}
            onClick={() => go(item.target)}
          >
            {item.label}
          </button>
        ))}
        <button className="btn btn--connect nav__mobile-cta" onClick={() => go('contact')}>
          Let&apos;s Connect <Icon name="arrow" width={16} height={16} />
        </button>
      </div>
    </header>
  )
}
