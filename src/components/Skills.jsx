import { useState } from 'react'
import { SKILLS, SKILL_ICONS } from '../data/content.js'
import { Reveal, SectionLabel } from './Reveal.jsx'
import Icon from './Icons.jsx'

// Exact Wikipedia article titles for skills whose plain name is ambiguous.
const WIKI = {
  Java: 'Java (programming language)',
  Python: 'Python (programming language)',
  'C#': 'C Sharp (programming language)',
  React: 'React (software)',
  Bootstrap: 'Bootstrap (front-end framework)',
  Leaflet: 'Leaflet (software)',
  Pandas: 'Pandas (software)',
  H2: 'H2 (database)',
  JAX: 'Google JAX',
  'VS Code': 'Visual Studio Code',
  Docker: 'Docker (software)',
  Eclipse: 'Eclipse (software)',
}
const wikiUrl = (name) =>
  `https://en.wikipedia.org/wiki/${encodeURIComponent((WIKI[name] || name).replace(/ /g, '_'))}`

// Renders a skill's brand logo. Tries the Devicon "original" file, falls back to
// the "plain" variant, then to a small text monogram — so nothing ever breaks.
function SkillIcon({ name }) {
  const url = SKILL_ICONS[name]
  const [stage, setStage] = useState(0)

  if (!url || stage >= 2) {
    const mono = name.length <= 3 ? name : name.slice(0, 2)
    return <span className="skill-pill__mono">{mono}</span>
  }
  const src = stage === 1 && url.includes('-original') ? url.replace('-original', '-plain') : url
  return (
    <img
      className="skill-pill__img"
      src={src}
      alt=""
      loading="lazy"
      onError={() => setStage((s) => s + 1)}
    />
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionLabel index="03">Skills &amp; Tech Stack</SectionLabel>

      <div className="skill-list">
        {SKILLS.map((col, i) => (
          <Reveal key={col.group} delay={i * 0.06} className="card card--skill">
            <div className="skill__inner">
              <div className="skill__head">
                <span className="skill__icon">
                  <Icon name={col.icon} />
                </span>
                <h3 className="skill__title">{col.group}</h3>
              </div>
              <div className="skill__items">
                {col.items.map((it) => (
                  <a
                    key={it}
                    className="skill-pill"
                    href={wikiUrl(it)}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SkillIcon name={it} />
                    <span className="skill-pill__label">{it}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
