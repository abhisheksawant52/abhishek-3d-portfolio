import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import VideoHero from './components/cinematic/VideoHero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import SpeakingIntro from './components/intro/SpeakingIntro'

export default function App() {
  return (
    <div className="bg-background min-h-screen font-sans">
      {/* 4-second speaking intro overlay */}
      <SpeakingIntro />

      {/* Cinematic video hero — shows placeholder until intro.mp4 is dropped in public/ */}
      <VideoHero />

      <Navbar />
      <main>
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
