import Starfield from './components/Starfield.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Organizations from './components/Organizations.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      {/* fixed cosmic backdrop */}
      <Starfield />
      <div className="aurora aurora--violet" aria-hidden="true" />
      <div className="aurora aurora--blue" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <div className="content">
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Organizations />
          <Contact />
        </div>
      </main>
    </>
  )
}
