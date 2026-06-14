import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import SpeakingIntro from './components/intro/SpeakingIntro'

export default function App() {
  return (
    <div className="bg-background min-h-screen font-sans">
      {/* Speaking intro overlay — shows once on page load */}
      <SpeakingIntro />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
