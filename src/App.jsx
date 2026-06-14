import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import TechStack from './components/sections/TechStack'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
