import { EDUCATION, inkFor, shade } from '../data/content.js'
import { Reveal, SectionLabel } from './Reveal.jsx'
import Icon from './Icons.jsx'
import BrandLogo from './BrandLogo.jsx'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionLabel index="04">Education</SectionLabel>

      <div className="edu-list">
        {EDUCATION.map((ed, i) => (
          <Reveal
            key={ed.school}
            delay={i * 0.08}
            className="card card--edu card--solid"
            style={{ background: shade(ed.color), '--ink': inkFor(shade(ed.color)) }}
          >
            <div className="edu__inner">
              <div className="edu__main">
                <div className="edu__head">
                  <a
                    className="edu__crest logo-link"
                    href={ed.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={ed.school}
                  >
                    <BrandLogo slug={ed.crest} fallback={ed.crest} />
                  </a>
                  <div>
                    <h3 className="edu__school">
                      <a
                        className="link-out"
                        href={ed.url}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {ed.school}
                        <Icon name="arrow" width={15} height={15} className="link-out__ic" />
                      </a>
                    </h3>
                    <p className="edu__course">{ed.course}</p>
                  </div>
                </div>
              </div>

              <div className="edu__aside">
                <p className="edu__modules-label">Selected Modules</p>
                <div className="edu__modules">
                  {ed.modules.map((m) => (
                    <a
                      key={m}
                      className="chip chip--soft chip--link"
                      href={`https://en.wikipedia.org/wiki/Special:Search?go=Go&search=${encodeURIComponent(m)}`}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {m}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
