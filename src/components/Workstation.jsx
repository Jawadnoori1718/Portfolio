// The hero centerpiece: a glowing laptop with two floating "live" AI panels —
// a neural-network graph (model.py) and a model-training readout. The panels
// gently float on their own and zoom in when hovered.
import Icon from './Icons.jsx'

function NeuralNet() {
  // 4 layers: 3 -> 4 -> 4 -> 2. Edges flow; nodes pulse (see CSS).
  const layers = [3, 4, 4, 2]
  const W = 188
  const H = 116
  const padX = 16
  const colGap = (W - padX * 2) / (layers.length - 1)
  const nodes = layers.map((count, li) =>
    Array.from({ length: count }, (_, ni) => ({
      x: padX + li * colGap,
      y: (H / (count + 1)) * (ni + 1),
      li,
    })),
  )
  const edges = []
  for (let li = 0; li < nodes.length - 1; li++) {
    nodes[li].forEach((a) =>
      nodes[li + 1].forEach((b) => edges.push({ a, b })),
    )
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="ws-net" width="100%" height="100%">
      {edges.map((e, i) => (
        <line
          key={i}
          x1={e.a.x}
          y1={e.a.y}
          x2={e.b.x}
          y2={e.b.y}
          className="ws-edge"
          style={{ animationDelay: `${(i % 9) * 0.25}s` }}
        />
      ))}
      {nodes.flat().map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="3.6"
          className={`ws-node ws-node--l${n.li}`}
          style={{ animationDelay: `${(i % 6) * 0.3}s` }}
        />
      ))}
    </svg>
  )
}

function TrainingPanel() {
  const bars = [
    { label: 'loss', val: 22, cls: 'a' },
    { label: 'val_acc', val: 92, cls: 'b' },
    { label: 'epoch', val: 78, cls: 'c' },
  ]
  return (
    <div className="ws-train-inner">
      <div className="ws-train-head">
        <span className="ws-dot ws-dot--live" />
        MODEL&nbsp;TRAINING<span className="ws-blink">_</span>
      </div>
      {bars.map((b) => (
        <div className="ws-bar-row" key={b.label}>
          <span className="ws-bar-label">{b.label}</span>
          <span className="ws-bar-track">
            <span className={`ws-bar-fill ws-bar-fill--${b.cls}`} style={{ '--to': `${b.val}%` }} />
          </span>
        </div>
      ))}
      <div className="ws-train-foot">
        <span>accuracy</span>
        <span className="ws-acc">99.9%</span>
      </div>
    </div>
  )
}

export default function Workstation() {
  return (
    <div className="workstation" aria-hidden="true">
      {/* ---- the desk + laptop ---- */}
      <svg className="ws-laptop" viewBox="0 0 600 430" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0c1330" />
            <stop offset="1" stopColor="#070a1c" />
          </linearGradient>
          <linearGradient id="lidGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1a2444" />
            <stop offset="1" stopColor="#0a1024" />
          </linearGradient>
          <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#26304f" />
            <stop offset="1" stopColor="#10162b" />
          </linearGradient>
          <linearGradient id="keyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#33406e" />
            <stop offset="1" stopColor="#1a2240" />
          </linearGradient>
          <linearGradient id="deckGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#10162e" />
            <stop offset="1" stopColor="#0a0f22" />
          </linearGradient>
          <radialGradient id="screenBloom" cx="50%" cy="40%" r="60%">
            <stop offset="0" stopColor="#5b8cff" stopOpacity="0.45" />
            <stop offset="1" stopColor="#5b8cff" stopOpacity="0" />
          </radialGradient>
          <clipPath id="screenClip">
            <rect x="162" y="52" width="276" height="172" rx="7" />
          </clipPath>
        </defs>

        {/* ===== laptop lid / screen ===== */}
        <g className="ws-screen">
          <rect x="150" y="40" width="300" height="196" rx="12" fill="url(#lidGrad)" stroke="#3a4b7a" />
          <rect x="150" y="40" width="300" height="196" rx="12" fill="none" stroke="#4b5a8f" strokeOpacity="0.6" />
          <rect x="162" y="52" width="276" height="172" rx="7" fill="url(#screenGrad)" />

          {/* window chrome dots */}
          <circle cx="176" cy="66" r="3" fill="#ff6b6b" opacity="0.75" />
          <circle cx="187" cy="66" r="3" fill="#ffc24b" opacity="0.75" />
          <circle cx="198" cy="66" r="3" fill="#46d39a" opacity="0.75" />
          <rect x="300" y="62" width="120" height="8" rx="4" fill="#223057" />

          {/* "code" lines */}
          <g className="ws-code">
            {[
              { y: 84, x: 176, segs: [[28, '#c792ea'], [44, '#82aaff'], [30, '#5b6b95']] },
              { y: 98, x: 188, segs: [[20, '#82aaff'], [60, '#c3e88d'], [24, '#5b6b95']] },
              { y: 112, x: 200, segs: [[36, '#ffcb6b'], [40, '#82aaff']] },
              { y: 126, x: 188, segs: [[24, '#c792ea'], [54, '#c3e88d']] },
              { y: 140, x: 200, segs: [[18, '#82aaff'], [30, '#ffcb6b'], [38, '#5b6b95']] },
              { y: 154, x: 176, segs: [[40, '#c792ea'], [26, '#82aaff']] },
            ].map((line, i) => {
              let cx = line.x
              return (
                <g key={i} className="ws-line" style={{ animationDelay: `${i * 0.6}s` }}>
                  {line.segs.map((s, j) => {
                    const rect = (
                      <rect key={j} x={cx} y={line.y} width={s[0]} height="5" rx="2.5" fill={s[1]} opacity="0.92" />
                    )
                    cx += s[0] + 8
                    return rect
                  })}
                </g>
              )
            })}
          </g>

          {/* mini area chart on screen */}
          <g transform="translate(176,170)" opacity="0.9">
            <path d="M0 40 L0 40" stroke="#223057" />
            <path
              className="ws-chart-area"
              d="M0 36 L28 24 L56 30 L84 14 L112 20 L140 8 L168 16 L196 6 L224 12 L248 4 L248 44 L0 44 Z"
              fill="#3a6cff"
              fillOpacity="0.18"
            />
            <path
              className="ws-chart-line"
              d="M0 36 L28 24 L56 30 L84 14 L112 20 L140 8 L168 16 L196 6 L224 12 L248 4"
              stroke="#5b8cff"
              strokeWidth="1.8"
              fill="none"
            />
          </g>

          {/* scanline sweep across the screen */}
          <g clipPath="url(#screenClip)">
            <rect className="ws-scan" x="162" y="52" width="40" height="172" fill="url(#screenBloom)" />
          </g>
        </g>

        {/* ===== laptop base / keyboard ===== */}
        <path d="M120 236 L480 236 L520 300 L80 300 Z" fill="url(#baseGrad)" stroke="#42507d" strokeOpacity="0.7" />
        {/* recessed keyboard deck (wide — small side margins) */}
        <path d="M138 247 L462 247 L482 286 L118 286 Z" fill="url(#deckGrad)" stroke="#2b3760" strokeOpacity="0.7" />
        {/* keycaps fill the deck in perspective with only a small inset */}
        <g className="ws-keys">
          {(() => {
            const keys = []
            const rowT = [0.12, 0.33, 0.54, 0.75] // back -> front
            const key = (k, x, y, w, h) => (
              <rect key={k} x={x} y={y} width={w} height={h} rx="1.5"
                fill="url(#keyGrad)" stroke="#4a5a94" strokeOpacity="0.45" strokeWidth="0.5" />
            )
            rowT.forEach((t, r) => {
              const left = 140 - 22 * t + 5     // deck left edge at t (+ small inset)
              const right = 460 + 22 * t - 5    // deck right edge at t (- small inset)
              const y = 250 + 33 * t
              const n = 15
              const h = 4 + t * 1.7
              const gap = (right - left) / n
              const w = gap * 0.84
              for (let c = 0; c < n; c++) keys.push(key(`${r}-${c}`, left + c * gap + (gap - w) / 2, y, w, h))
            })
            // bottom row: modifiers + wide spacebar, also filling the width
            const by = 281
            const bh = 6
            keys.push(key('m1', 122, by, 42, bh))
            keys.push(key('m2', 168, by, 46, bh))
            keys.push(key('space', 218, by, 164, bh))
            keys.push(key('m3', 386, by, 46, bh))
            keys.push(key('m4', 436, by, 42, bh))
            return keys
          })()}
        </g>
        {/* trackpad */}
        <rect x="262" y="291" width="76" height="7" rx="3" fill="#161d3a" stroke="#39477a" strokeOpacity="0.6" strokeWidth="0.75" />
      </svg>

      {/* ---- floating glass panels (float on wrapper, zoom on hover) ---- */}
      <div className="ws-float ws-float--net float-a">
        <div className="ws-panel ws-panel--net">
          <div className="ws-panel-head">
            <span className="ws-file-dot" />
            model.py
            <Icon name="layers" width={13} height={13} className="ws-panel-ic" />
          </div>
          <div className="ws-net-wrap">
            <NeuralNet />
          </div>
        </div>
      </div>

      <div className="ws-float ws-float--train float-b">
        <div className="ws-panel ws-panel--train">
          <TrainingPanel />
        </div>
      </div>
    </div>
  )
}
