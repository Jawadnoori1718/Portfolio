import { useState } from 'react'
import { PROJECTS } from '../data/content.js'
import { Reveal, SectionLabel } from './Reveal.jsx'
import ProjectShot from './ProjectShot.jsx'
import Lightbox from './Lightbox.jsx'
import Icon from './Icons.jsx'

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="section">
      <SectionLabel index="02">Projects</SectionLabel>

      <div className="grid grid--2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08} className="card card--proj">
            <button
              type="button"
              className="proj__art-wrap"
              onClick={() => setActive(p)}
              aria-label={`View ${p.name} image`}
            >
              <ProjectShot slug={p.img} art={p.art} />
            </button>
            <div className="proj__body">
              <h3 className="proj__name">{p.name}</h3>
              <p className="proj__summary">{p.summary}</p>
              <div className="proj__actions">
                {p.demo && (
                  <a
                    className="proj__btn proj__btn--demo"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon name="globe" width={19} height={19} />
                    Demo
                  </a>
                )}
                <a
                  className="proj__btn proj__btn--code"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon name="github" width={19} height={19} />
                  Code
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {active && <Lightbox project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
