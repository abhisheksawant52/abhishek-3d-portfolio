import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Tech Stack',     href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-surface-2 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#hero"
            onClick={e => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-pink to-accent-maroon flex items-center justify-center shadow-lg shadow-accent-pink/20 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm font-heading">AS</span>
            </div>
            <span className="hidden sm:block text-text-primary font-semibold text-sm group-hover:text-accent-pink transition-colors">
              Abhishek Sawant
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={e => handleNavClick(e, href)}
                className={`text-sm font-medium transition-colors duration-200 relative pb-0.5 ${
                  activeSection === href.slice(1)
                    ? 'text-accent-pink'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {label}
                {activeSection === href.slice(1) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-pink rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop: Resume download */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/Abhishek_Sawant_Resume.pdf"
              download
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-accent-pink/40 text-accent-pink text-xs font-semibold hover:bg-accent-pink/10 hover:scale-105 transition-all"
            >
              <Download size={13} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-text-secondary hover:text-text-primary p-2 rounded-lg hover:bg-surface transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-surface-2 bg-background/98 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={e => handleNavClick(e, href)}
                  className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-all ${
                    activeSection === href.slice(1)
                      ? 'text-accent-pink bg-accent-pink/5'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  {label}
                </a>
              ))}
              <a
                href="/Abhishek_Sawant_Resume.pdf"
                download
                className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-accent-pink/40 text-accent-pink text-sm font-semibold hover:bg-accent-pink/10 transition-all"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
