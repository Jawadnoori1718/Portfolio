import { EXPERIENCE, inkFor, shade } from '../data/content.js'
import { Reveal, SectionLabel } from './Reveal.jsx'
import Icon from './Icons.jsx'
import BrandLogo from './BrandLogo.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionLabel index="01">Experience</SectionLabel>

      <div className="grid grid--3">
        {EXPERIENCE.map((job, i) => (
          <Reveal
            key={job.org}
            delay={i * 0.08}
            className="card card--exp card--solid"
            style={{ background: shade(job.color), '--ink': inkFor(shade(job.color)) }}
          >
            <span className="card__spark" aria-hidden="true" />
            <div className="exp__head">
              <a
                className="exp__logo logo-link"
                href={job.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={job.org}
              >
                <BrandLogo slug={job.logo} fallback={job.logo} />
              </a>
              <div>
                <h3 className="exp__role">{job.role}</h3>
                <p className="exp__org">
                  <a
                    className="link-out"
                    href={job.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {job.org}
                    <Icon name="arrow" width={14} height={14} className="link-out__ic" />
                  </a>
                </p>
              </div>
            </div>

            <ul className="exp__meta">
              <li><Icon name="calendar" width={15} height={15} /> {job.date}</li>
              <li><Icon name="pin" width={15} height={15} /> {job.location}</li>
            </ul>

            <p className="exp__summary">{job.summary}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
