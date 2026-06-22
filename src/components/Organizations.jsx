import { ORGANIZATIONS, inkFor, shade } from '../data/content.js'
import { Reveal, SectionLabel } from './Reveal.jsx'
import Icon from './Icons.jsx'
import BrandLogo from './BrandLogo.jsx'

export default function Organizations() {
  return (
    <section id="organizations" className="section">
      <SectionLabel index="05">Organizations</SectionLabel>

      <div className="grid grid--3 org-grid">
        {ORGANIZATIONS.map((o, i) => (
          <Reveal key={o.name} delay={i * 0.06}>
            <a
              className="card org-card card--solid"
              href={o.url}
              target="_blank"
              rel="noreferrer noopener"
              style={{ background: shade(o.color), '--ink': inkFor(shade(o.color)) }}
            >
              <div className="org-card__top">
                <span className="org-card__mark">
                  <BrandLogo slug={o.mark} fallback={o.mark} />
                </span>
                <Icon name="arrow" width={16} height={16} className="org-card__go" />
              </div>
              <h3 className="org-card__name">{o.name}</h3>
              <span className="org-card__tier">{o.tier}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
