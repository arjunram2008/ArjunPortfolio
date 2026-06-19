import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Highlights from './components/Highlights'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="page-shell">
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Highlights />
        <Contact />
      </main>
    </div>
  )
}
