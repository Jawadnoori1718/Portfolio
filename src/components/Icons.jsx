// ---------------------------------------------------------------------------
// Inline SVG icons. Everything uses `currentColor` so colour is driven by CSS.
// Brand glyphs are simplified, original marks (not trademarked logos); the
// text labels next to them carry the actual identification.
// ---------------------------------------------------------------------------
import React from 'react'

const base = (extra = {}) => ({
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  ...extra,
})

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

/* ---- generic UI ---- */
const Arrow = (p) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" {...stroke} />
  </svg>
)

const Calendar = (p) => (
  <svg {...base(p)}>
    <rect x="3.5" y="4.5" width="17" height="16" rx="2.5" {...stroke} />
    <path d="M3.5 9h17M8 3v3M16 3v3" {...stroke} />
  </svg>
)

const Pin = (p) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" {...stroke} />
    <circle cx="12" cy="10" r="2.4" {...stroke} />
  </svg>
)

const Monitor = (p) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="12" rx="2" {...stroke} />
    <path d="M8 20h8M12 16v4" {...stroke} />
  </svg>
)

const Globe = (p) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" {...stroke} />
    <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.3 3.6 8.5S14.4 18.2 12 20.5C9.6 18.2 8.4 15.2 8.4 12S9.6 5.8 12 3.5Z" {...stroke} />
  </svg>
)

const Linkedin = (p) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" {...stroke} />
    <path d="M8 10.5V16M8 7.6v.01M11.7 16v-3.1c0-1.3.9-2.2 2.1-2.2s2.1.9 2.1 2.3V16" {...stroke} />
  </svg>
)

const Mail = (p) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" {...stroke} />
    <path d="m4 7 8 6 8-6" {...stroke} />
  </svg>
)

/* ---- skill group icons ---- */
const Code = (p) => (
  <svg {...base(p)}>
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" {...stroke} />
  </svg>
)
const Layers = (p) => (
  <svg {...base(p)}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" {...stroke} />
    <path d="m3 13 9 5 9-5M3 16l9 5 9-5" {...stroke} />
  </svg>
)
const Database = (p) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="6" rx="7.5" ry="3" {...stroke} />
    <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" {...stroke} />
  </svg>
)
const Terminal = (p) => (
  <svg {...base(p)}>
    <rect x="3" y="4.5" width="18" height="15" rx="2.5" {...stroke} />
    <path d="m7 10 3 2.5L7 15M13 15h4" {...stroke} />
  </svg>
)

/* ---- hero link glyphs (simplified original marks) ---- */
const GitHub = (p) => (
  <svg {...base(p)}>
    <path
      d="M12 3.2c-4.6 0-8.3 3.7-8.3 8.3 0 3.7 2.4 6.8 5.7 7.9.4.1.6-.2.6-.4v-1.5c-2.3.5-2.8-1.1-2.8-1.1-.4-1-.9-1.2-.9-1.2-.8-.5 0-.5 0-.5.8.1 1.3.9 1.3.9.7 1.3 2 .9 2.5.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4.1 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.2.2 2 .1 2.2.5.6.8 1.3.8 2.2 0 3.2-1.9 3.9-3.7 4.1.3.3.6.8.6 1.6v2.4c0 .2.2.5.6.4a8.3 8.3 0 0 0 5.7-7.9c0-4.6-3.7-8.3-8.3-8.3Z"
      fill="currentColor"
    />
  </svg>
)
const LeetCode = (p) => (
  <svg {...base(p)}>
    <path d="M13.5 4 6 11.7c-.8.8-.8 2 0 2.8L13.5 22" {...stroke} />
    <path d="M9 13h9" {...stroke} />
    <path d="M16 6.5 13 4" {...stroke} />
  </svg>
)
const HackerRank = (p) => (
  <svg {...base(p)}>
    <path d="M8 7v10M16 7v10M8 12h8M9.5 6 8 7.2M14.5 18 16 16.8" {...stroke} />
  </svg>
)
const Substack = (p) => (
  <svg {...base(p)}>
    <path d="M5 5.5h14M5 9.5h14M5 13.5h14v7l-7-3-7 3v-7Z" fill="currentColor" opacity="0.18" />
    <path d="M5 5.5h14M5 9.5h14M5 13.5h14v7l-7-3-7 3v-7Z" {...stroke} />
  </svg>
)

/* ---- experience org glyphs ---- */
const DeepMind = (p) => (
  <svg {...base(p)}>
    <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5c0-2.8-2-4.8-4.6-4.8-2.2 0-3.9 1.7-3.9 3.8 0 1.8 1.3 3 2.9 3 1.3 0 2.2-.9 2.2-2" {...stroke} />
  </svg>
)
const ScreenShare = (p) => (
  <svg {...base(p)}>
    <rect x="3" y="4.5" width="18" height="12" rx="2.5" {...stroke} />
    <path d="M8 20h8M12 16.5V20M12 8.5v4M10 10.5l2-2 2 2" {...stroke} />
  </svg>
)
const Jam = (p) => (
  <svg viewBox="0 0 48 24" width="40" height="20" xmlns="http://www.w3.org/2000/svg" {...p}>
    <text x="24" y="18" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="18" fill="currentColor">JAM</text>
  </svg>
)

/* ---- education crests ---- */
const BrunelCrest = (p) => (
  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path d="M12 2.5c2 1.2 4.2 1.8 6.5 1.8v6.4c0 4.6-2.8 8-6.5 10.8C8.3 18.7 5.5 15.3 5.5 10.7V4.3c2.3 0 4.5-.6 6.5-1.8Z" {...stroke} />
    <path d="M9 11.5 11 13l4-4M12 2.5v18.9" {...stroke} opacity="0.55" />
  </svg>
)
// Kingston College — a bold cross, echoing the college crest.
const KingstonCrest = (p) => (
  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path d="M9.6 3h4.8v6.6H21v4.8h-6.6V21H9.6v-6.6H3V9.6h6.6Z" fill="currentColor" />
  </svg>
)

/* ---- organisation marks (generic emblems) ---- */
const orgWrap = (children, p) => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" {...p}>
    {children}
  </svg>
)
const RAE = (p) => orgWrap(<>
  <path d="M4 8.5l3.6 3.2L12 5l4.4 6.7L20 8.5l-1.4 9H5.4L4 8.5Z" {...stroke} />
  <path d="M6 17.5h12" {...stroke} />
  <circle cx="4" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
  <circle cx="20" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
  <circle cx="12" cy="5" r="1.3" fill="currentColor" stroke="none" />
</>, p)
const IEEE = (p) => orgWrap(<>
  <path d="M12 3 21 12l-9 9-9-9 9-9Z" {...stroke} />
  <path d="M9 11h6M9 14h6M11 8v8" {...stroke} opacity="0.7" />
</>, p)
const ACM = (p) => orgWrap(<>
  <circle cx="12" cy="12" r="9" {...stroke} />
  <path d="M9 15c-1.5 0-2.5-1.3-2.5-3S7.5 9 9 9M15 9c1.5 0 2.5 1.3 2.5 3S16.5 15 15 15" {...stroke} />
</>, p)
const BCS = (p) => orgWrap(<>
  <rect x="3.5" y="3.5" width="17" height="17" rx="4" {...stroke} />
  <path d="M8.5 14.5c-1.4 0-2.3-1.1-2.3-2.5S7.1 9.5 8.5 9.5M15.5 9.5c1.4 0 2.3 1.1 2.3 2.5s-.9 2.5-2.3 2.5" {...stroke} />
</>, p)
const ISOC = (p) => orgWrap(<>
  <circle cx="12" cy="12" r="9" {...stroke} />
  <path d="M3 12h18M12 3c3 2.5 3 15 0 18M12 3c-3 2.5-3 15 0 18" {...stroke} opacity="0.8" />
</>, p)
const CYF = (p) => orgWrap(<>
  <path d="m9 8-4 4 4 4M15 8l4 4-4 4M13.5 6.5l-3 11" {...stroke} />
</>, p)
const REGISTRY = {
  arrow: Arrow, calendar: Calendar, pin: Pin, monitor: Monitor,
  globe: Globe, linkedin: Linkedin, mail: Mail,
  code: Code, layers: Layers, database: Database, terminal: Terminal,
  github: GitHub, leetcode: LeetCode, hackerrank: HackerRank, substack: Substack,
  deepmind: DeepMind, screenshare: ScreenShare, jam: Jam,
  brunel: BrunelCrest, kingston: KingstonCrest,
  rae: RAE, ieee: IEEE, acm: ACM, bcs: BCS, isoc: ISOC, cyf: CYF,
}

export default function Icon({ name, ...props }) {
  const Cmp = REGISTRY[name]
  return Cmp ? <Cmp {...props} /> : null
}
