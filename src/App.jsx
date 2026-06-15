import { useEffect, useRef } from 'react'
import Navbar        from './components/layout/Navbar'
import Footer        from './components/layout/Footer'
import Hero          from './components/sections/Hero'
import About         from './components/sections/About'
import TechStack     from './components/sections/TechStack'
import Projects      from './components/sections/Projects'
import Experience    from './components/sections/Experience'
import Certifications from './components/sections/Certifications'
import Personal      from './components/sections/Personal'
import Contact       from './components/sections/Contact'

/* ── Cursor glow that follows the mouse ── */
function CursorGlow() {
  const glowRef = useRef(null)
  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top  = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}

export default function App() {
  return (
    <div className="bg-background min-h-screen font-sans relative">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Certifications />
        <Personal />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
