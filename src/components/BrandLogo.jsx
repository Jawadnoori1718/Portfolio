import { useState } from 'react'
import Icon from './Icons.jsx'

// Shows a brand's real logo from /public/logos/<slug>.(png|svg|jpg|webp).
// If no such file exists yet, it gracefully falls back to the built-in emblem
// icon, so the layout always looks complete. Every logo fills its (equal-sized)
// tile identically, so they all render at the same size.
const EXTS = ['png', 'svg', 'jpg', 'jpeg', 'webp']

export default function BrandLogo({ slug, fallback }) {
  const [stage, setStage] = useState(0)

  if (!slug || stage >= EXTS.length) {
    return <Icon name={fallback || slug} />
  }
  return (
    <img
      className="brand-logo"
      src={`/logos/${slug}.${EXTS[stage]}`}
      alt=""
      loading="lazy"
      onError={() => setStage((s) => s + 1)}
    />
  )
}
