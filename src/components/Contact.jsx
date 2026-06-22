import { PROFILE } from '../data/content.js'
import { Reveal } from './Reveal.jsx'
import Icon from './Icons.jsx'

export default function Contact() {
  const { contact } = PROFILE
  return (
    <section id="contact" className="section section--contact">
      <Reveal className="contact-hub">
        <p className="contact-eyebrow">Let&apos;s connect</p>
        <div className="contact-row">
          <a
            className="contact-ic"
            href={contact.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Icon name="linkedin" width={26} height={26} />
          </a>
          <a
            className="contact-ic"
            href={`mailto:${contact.email}`}
            aria-label="Email"
            title="Email"
          >
            <Icon name="mail" width={26} height={26} />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
