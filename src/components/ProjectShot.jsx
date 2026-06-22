import { useState } from 'react'
import ProjectArt from './ProjectArt.jsx'

// Shows a project's screenshot from /public/projects/<slug>.(png|jpg|webp).
// Until the file exists it falls back to the generated SVG art, so the card is
// never empty.
const EXTS = ['png', 'jpg', 'jpeg', 'webp', 'svg']

export default function ProjectShot({ slug, art }) {
  const [stage, setStage] = useState(0)

  if (!slug || stage >= EXTS.length) {
    return <ProjectArt art={art} />
  }
  return (
    <img
      className="proj__img"
      src={`/projects/${slug}.${EXTS[stage]}`}
      alt=""
      loading="lazy"
      onError={() => setStage((s) => s + 1)}
    />
  )
}
