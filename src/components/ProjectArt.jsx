// Stylised, original SVG "preview" art for each project (no external images).
// Keeps the dark cosmic theme and animates subtly via CSS.
import React from 'react'

const Frame = ({ id, children }) => (
  <svg viewBox="0 0 320 180" className="proj-art" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#0a1024" />
        <stop offset="1" stopColor="#070a18" />
      </linearGradient>
      <radialGradient id={`gl-${id}`} cx="50%" cy="45%" r="60%">
        <stop offset="0" stopColor="#3a6cff" stopOpacity="0.35" />
        <stop offset="1" stopColor="#3a6cff" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="180" fill={`url(#bg-${id})`} />
    {children}
  </svg>
)

function Globe() {
  const cx = 160
  const cy = 92
  const r = 62
  return (
    <Frame id="globe">
      <ellipse cx={cx} cy={150} rx="120" ry="14" fill="url(#gl-globe)" />
      <g className="proj-globe" stroke="#3f6bd6" strokeOpacity="0.6" fill="none">
        <circle cx={cx} cy={cy} r={r} stroke="#5b8cff" strokeOpacity="0.8" />
        {[0.32, 0.62, 0.86].map((k, i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={r * k} ry={r} />
        ))}
        {[-0.86, -0.5, 0, 0.5, 0.86].map((k, i) => (
          <line key={i} x1={cx} y1={cy - r} x2={cx} y2={cy + r} transform={`translate(${k * 0},0)`} />
        ))}
        {[36, 64].map((ry, i) => (
          <line key={`h${i}`} x1={cx - r} y1={cy - r + ry} x2={cx + r} y2={cy - r + ry} strokeOpacity="0.4" />
        ))}
      </g>
      {/* data points */}
      {[[140, 70], [185, 60], [120, 100], [196, 108], [160, 78]].map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" className="proj-pulse" fill="#7cf2c8" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}
      {/* mini bars */}
      <g transform="translate(250,120)">
        {[16, 26, 12, 30, 20].map((h, i) => (
          <rect key={i} x={i * 9} y={36 - h} width="5" height={h} rx="1.5" fill="#5b8cff" opacity="0.8" />
        ))}
      </g>
    </Frame>
  )
}

function MapArt() {
  return (
    <Frame id="map">
      <g stroke="#26345e" strokeWidth="1">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 48 + 12} y1="0" x2={i * 48 + 12} y2="180" />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48 + 18} x2="320" y2={i * 48 + 18} />
        ))}
      </g>
      {/* route */}
      <path className="proj-route" d="M30 150 L90 110 L150 130 L210 70 L280 90" stroke="#5b8cff" strokeWidth="2" fill="none" />
      {/* heat blooms */}
      {[[90, 110, '#ff5d6c'], [210, 70, '#ffb14b'], [150, 130, '#7c5cff'], [270, 120, '#39d3ff']].map((p, i) => (
        <g key={i}>
          <circle cx={p[0]} cy={p[1]} r="22" fill={p[2]} opacity="0.16" className="proj-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
          <circle cx={p[0]} cy={p[1]} r="4" fill={p[2]} />
        </g>
      ))}
    </Frame>
  )
}

function Dashboard() {
  return (
    <Frame id="dash">
      <g>
        {/* left list panel */}
        <rect x="20" y="24" width="120" height="132" rx="8" fill="#0e1631" stroke="#27365f" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle cx="36" cy={48 + i * 26} r="6" fill="#5b8cff" opacity="0.7" />
            <rect x="50" y={44 + i * 26} width="74" height="5" rx="2.5" fill="#33457a" />
            <rect x="50" y={53 + i * 26} width="46" height="4" rx="2" fill="#21305a" />
          </g>
        ))}
        {/* right cards */}
        <rect x="156" y="24" width="144" height="60" rx="8" fill="#0e1631" stroke="#27365f" />
        <rect x="156" y="96" width="144" height="60" rx="8" fill="#0e1631" stroke="#27365f" />
        <rect x="168" y="38" width="60" height="6" rx="3" fill="#33457a" />
        <g transform="translate(168,56)">
          <path className="proj-route" d="M0 16 L20 8 L40 12 L60 2 L80 9 L110 0" stroke="#7cf2c8" strokeWidth="2" fill="none" />
        </g>
        <rect x="168" y="110" width="48" height="6" rx="3" fill="#33457a" />
        <g transform="translate(168,124)">
          {[10, 18, 8, 22, 14, 20].map((h, i) => (
            <rect key={i} x={i * 18} y={24 - h} width="9" height={h} rx="1.5" fill="#5b8cff" opacity="0.85" />
          ))}
        </g>
        <circle cx="286" cy="40" r="4" className="proj-pulse" fill="#46d39a" />
      </g>
    </Frame>
  )
}

function Robot() {
  return (
    <Frame id="robot">
      {/* drawing surface */}
      <rect x="150" y="120" width="150" height="46" rx="6" fill="#0e1631" stroke="#27365f" />
      <path className="proj-draw" d="M175 156 L195 130 L215 156 Z" stroke="#7cf2c8" strokeWidth="2.5" fill="none" />
      <rect x="230" y="132" width="22" height="22" rx="2" stroke="#5b8cff" strokeWidth="2" fill="none" />
      {/* robot arm */}
      <g stroke="#6b7bb0" strokeWidth="6" strokeLinecap="round" fill="none">
        <path className="proj-arm" d="M70 40 L120 70 L96 120" />
      </g>
      <circle cx="70" cy="40" r="9" fill="#1a2342" stroke="#5b8cff" strokeWidth="2" />
      <circle cx="120" cy="70" r="7" fill="#1a2342" stroke="#5b8cff" strokeWidth="2" />
      <rect x="86" y="116" width="20" height="10" rx="2" fill="#1a2342" stroke="#7cf2c8" strokeWidth="2" />
      <rect x="40" y="40" width="60" height="10" rx="3" fill="#10183a" />
      {/* QR hint */}
      <g transform="translate(250,30)" fill="#33457a">
        {[[0, 0], [10, 0], [0, 10], [20, 10], [10, 20], [20, 20], [0, 20], [20, 0]].map((p, i) => (
          <rect key={i} x={p[0]} y={p[1]} width="8" height="8" />
        ))}
      </g>
    </Frame>
  )
}

const MAP = { globe: Globe, map: MapArt, dashboard: Dashboard, robot: Robot }

export default function ProjectArt({ art }) {
  const Cmp = MAP[art] || Globe
  return <Cmp />
}
