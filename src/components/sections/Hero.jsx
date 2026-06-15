import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { contact } from '../../data/portfolio'

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

/* ── Animated counter hook ── */
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const num = parseInt(target.replace(/\D/g, ''), 10)
    if (!num) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(progress * num))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(num)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  const suffix = target.replace(/[0-9]/g, '')
  return `${count}${suffix}`
}

/* ── Particle canvas ── */
function Particles() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const particles = []
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(233,30,140,${p.alpha})`
        ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none', zIndex: 0 }} />
}

/* ── Stat item with animated counter ── */
function StatItem({ val, lbl, started }) {
  const animated = useCounter(val, 1600, started)
  return (
    <div>
      <p className="text-2xl font-extrabold font-heading text-accent-pink leading-none">{animated}</p>
      <p className="text-text-muted text-xs mt-1 whitespace-nowrap">{lbl}</p>
    </div>
  )
}

/* ── Icons ── */
function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
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

const stats = [
  { val: '12+', lbl: 'Years Experience' },
  { val: '5',   lbl: 'Certifications' },
  { val: '4',   lbl: 'Countries' },
  { val: '500+', lbl: 'Fortune Clients' },
]

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  const typed = useTyping(roles)
  const [statsStarted, setStatsStarted] = useState(false)

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 pb-8 overflow-hidden">
      {/* Particle background */}
      <Particles />

      {/* Radial glow behind photo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(233,30,140,0.07) 0%, transparent 65%)', zIndex: 0 }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/8 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-green-400 tracking-wide">Available for Enterprise Projects</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-text-secondary text-lg mb-2 font-medium"
            >
              Hey, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight"
            >
              <span className="shimmer-text">Abhishek</span>
              <br />
              <span className="text-text-primary">Sawant</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl sm:text-2xl text-text-secondary font-medium mb-4 h-9 font-heading"
            >
              <span className="text-accent-pink">{typed}</span>
              <span className="cursor-blink text-accent-pink">|</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-text-muted text-base leading-relaxed mb-8 max-w-lg"
            >
              Enterprise DevOps & Cloud Solution Architect with{' '}
              <strong className="text-text-secondary">10+ years</strong> of experience designing
              AI-powered platforms, cloud infrastructure, and CI/CD pipelines for{' '}
              <strong className="text-text-secondary">Fortune 500 companies</strong> across 4 countries.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 bg-gradient-to-r from-accent-pink to-accent-maroon text-white font-semibold rounded-xl text-sm hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-lg shadow-accent-pink/25 font-heading glow-pulse"
              >
                Let&apos;s Connect
              </button>
              <a
                href="/Abhishek_Sawant_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent-pink/50 text-accent-pink font-semibold rounded-xl text-sm hover:bg-accent-pink/10 hover:scale-[1.03] active:scale-[0.98] transition-all font-heading"
              >
                <DownloadIcon />
                Download CV
              </a>
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 border border-surface-2 text-text-secondary font-semibold rounded-xl text-sm hover:border-accent-pink/50 hover:text-accent-pink transition-all font-heading"
              >
                View Projects
              </button>
            </motion.div>

            {/* Social icons row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="flex gap-3 mb-8"
            >
              {[
                { href: contact.linkedin, label: 'LinkedIn', icon: <LinkedinIcon />, external: true },
                { href: contact.github,   label: 'GitHub',   icon: <GithubIcon />,   external: true },
                { href: `mailto:${contact.email}`, label: 'Email', icon: <MailIcon />, external: false },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-surface-2 text-text-muted hover:border-accent-pink hover:text-accent-pink transition-all hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>

            {/* Stats row with animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              onAnimationComplete={() => setStatsStarted(true)}
              className="flex gap-8 pt-6 border-t border-surface-2"
            >
              {stats.map(s => (
                <StatItem key={s.lbl} val={s.val} lbl={s.lbl} started={statsStarted} />
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: photo + floating tech pills ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, type: 'spring', bounce: 0.2 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Outer ring */}
            <div className="absolute w-80 h-80 rounded-full border border-accent-pink/10"
              style={{ animation: 'float 8s ease-in-out infinite' }} />
            <div className="absolute w-64 h-64 rounded-full border border-accent-pink/15"
              style={{ animation: 'float 6s ease-in-out 1s infinite' }} />

            {/* Glow */}
            <div className="absolute w-72 h-72 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(233,30,140,0.18) 0%, transparent 70%)' }} />

            {/* Photo frame */}
            <div
              className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-accent-pink/40"
              style={{
                boxShadow: '0 0 50px rgba(233,30,140,0.25), inset 0 0 30px rgba(233,30,140,0.05)',
                animation: 'float 5s ease-in-out infinite',
              }}
            >
              <img
                src="/abhishek.jpg"
                alt="Abhishek Sawant"
                className="w-full h-full object-cover object-top"
                onError={e => {
                  e.currentTarget.parentElement.innerHTML =
                    '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a0a1a,#0a0a1a);font-family:Syne,sans-serif;font-size:4rem;font-weight:800;color:#e91e8c;letter-spacing:-2px">AS</div>'
                }}
              />
            </div>

            {/* Floating tech pills */}
            {[
              { label: 'Kubernetes', color: '#326ce5', top: '4%',   left: '2%' },
              { label: 'Terraform',  color: '#7b42bc', top: '12%',  right: '-2%' },
              { label: 'AIOps',      color: '#7c3aed', bottom: '22%', left: '-6%' },
              { label: 'AWS',        color: '#ff9900', bottom: '8%', right: '2%' },
              { label: 'GenAI',      color: '#ec4899', top: '52%',  left: '-10%' },
              { label: 'ArgoCD',     color: '#ef7b4d', top: '42%',  right: '-8%' },
              { label: 'LangChain',  color: '#10b981', top: '28%',  left: '-4%' },
            ].map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                className="absolute px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm"
                style={{
                  background: `${p.color}18`,
                  border: `1px solid ${p.color}50`,
                  color: p.color,
                  top: p.top, left: p.left, right: p.right, bottom: p.bottom,
                  animation: `float ${3.5 + i * 0.5}s ease-in-out ${i * 0.35}s infinite`,
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
          transition={{ delay: 1.8 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-pink transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-[0.2em] uppercase group-hover:text-accent-pink transition-colors">scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
