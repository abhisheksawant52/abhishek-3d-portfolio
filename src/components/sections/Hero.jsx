import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { contact, about } from '../../data/portfolio'

/* ── Typing animation hook ── */
function useTyping(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wi, setWi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const cur = words[wi]
    const t = setTimeout(() => {
      if (!del) {
        setDisplay(cur.slice(0, ci + 1))
        if (ci + 1 === cur.length) setTimeout(() => setDel(true), pause)
        else setCi(c => c + 1)
      } else {
        setDisplay(cur.slice(0, ci - 1))
        if (ci - 1 === 0) { setDel(false); setWi(w => (w + 1) % words.length); setCi(0) }
        else setCi(c => c - 1)
      }
    }, del ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [ci, del, wi, words, speed, pause])
  return display
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

const roles = [
  'Enterprise DevOps Architect',
  'Cloud Solution Architect',
  'AIOps & GenAI Engineer',
  'MLOps Platform Builder',
  'DevSecOps Specialist',
]

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  const typed = useTyping(roles)

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Available chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-pink/30 bg-accent-pink/8 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-green-400">Available for Enterprise Projects</span>
            </div>

            {/* Greeting */}
            <p className="text-text-secondary text-lg mb-2 font-medium">Hey, I&apos;m</p>

            {/* Name */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-pink via-pink-400 to-accent-maroon">
                Abhishek
              </span>
              <br />
              <span className="text-text-primary">Sawant</span>
            </h1>

            {/* Typing role */}
            <div className="text-xl sm:text-2xl text-text-secondary font-medium mb-4 h-8 font-heading">
              <span className="text-accent-pink">{typed}</span>
              <span className="cursor-blink text-accent-pink">|</span>
            </div>

            {/* Description */}
            <p className="text-text-muted text-base leading-relaxed mb-8 max-w-lg">
              Enterprise DevOps & Cloud Solution Architect with <strong className="text-text-secondary">10+ years</strong> of experience
              designing AI-powered platforms, cloud infrastructure, and CI/CD pipelines for{' '}
              <strong className="text-text-secondary">Fortune 500 companies</strong> across 4 countries.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 bg-gradient-to-r from-accent-pink to-accent-maroon text-white font-semibold rounded-xl text-sm hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-accent-pink/20 font-heading"
              >
                Let&apos;s Connect
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 border border-surface-2 text-text-secondary font-semibold rounded-xl text-sm hover:border-accent-pink hover:text-accent-pink transition-all font-heading"
              >
                View Projects
              </button>
              <a
                href="https://www.linkedin.com/in/abhishek-hemant-sawant/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 border border-surface-2 text-text-secondary rounded-xl hover:border-accent-pink hover:text-accent-pink transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/abhisheksawant52"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 border border-surface-2 text-text-secondary rounded-xl hover:border-accent-pink hover:text-accent-pink transition-all"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="mailto:abhisheksawant51@gmail.com"
                className="px-4 py-3 border border-surface-2 text-text-secondary rounded-xl hover:border-accent-pink hover:text-accent-pink transition-all"
                aria-label="Email"
              >
                <MailIcon />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-6 border-t border-surface-2">
              {[
                { val: '12+', lbl: 'Years Experience' },
                { val: '5',   lbl: 'Certifications' },
                { val: '4',   lbl: 'Countries' },
                { val: '500+', lbl: 'Fortune Clients' },
              ].map(s => (
                <div key={s.lbl}>
                  <p className="text-2xl font-extrabold font-heading text-accent-pink leading-none">{s.val}</p>
                  <p className="text-text-muted text-xs mt-1 whitespace-nowrap">{s.lbl}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: photo + floating tech pills ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring', bounce: 0.25 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Glow bg */}
            <div className="absolute w-72 h-72 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(233,30,140,0.15) 0%, transparent 70%)' }} />

            {/* Photo frame */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-accent-pink/30"
              style={{ boxShadow: '0 0 40px rgba(233,30,140,0.2)', animation: 'float 5s ease-in-out infinite' }}>
              <img
                src="/abhishek.jpg"
                alt="Abhishek Sawant"
                className="w-full h-full object-cover object-top"
                onError={e => {
                  e.currentTarget.parentElement.innerHTML =
                    '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a0a1a,#0a0a1a);font-family:Syne,sans-serif;font-size:4rem;font-weight:800;color:#e91e8c">AS</div>'
                }}
              />
            </div>

            {/* Floating tech pills */}
            {[
              { label: 'Kubernetes', color: '#326ce5', top: '5%',  left: '0%' },
              { label: 'Terraform',  color: '#7b42bc', top: '15%', right: '0%' },
              { label: 'AIOps',      color: '#7c3aed', bottom: '20%', left: '-5%' },
              { label: 'AWS',        color: '#ff9900', bottom: '10%', right: '0%' },
              { label: 'GenAI',      color: '#ec4899', top: '50%',  left: '-8%' },
              { label: 'ArgoCD',     color: '#ef7b4d', top: '45%',  right: '-5%' },
            ].map((p, i) => (
              <motion.div
                key={p.label}
                className="absolute px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                style={{
                  background: `${p.color}22`,
                  border: `1px solid ${p.color}55`,
                  color: p.color,
                  top: p.top, left: p.left, right: p.right, bottom: p.bottom,
                  animation: `float ${3.5 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`,
                }}
              >
                {p.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-pink transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-widest uppercase">scroll</span>
            <div className="w-px h-10 relative overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <div className="absolute top-0 left-0 right-0 h-1/2 rounded-full"
                style={{ background: 'linear-gradient(to bottom, transparent, #e91e8c)', animation: 'float 1.8s ease-in-out infinite' }} />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
