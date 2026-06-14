import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import FloatingGeometry from '../three/FloatingGeometry'
import { hero, contact, about, skills, experience, certifications } from '../../data/portfolio'

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

/* Typing effect hook */
function useTyping(words, speed = 75, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), pause)
        else setCharIdx(c => c + 1)
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) { setDeleting(false); setWordIdx(i => (i + 1) % words.length); setCharIdx(0) }
        else setCharIdx(c => c - 1)
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

/* Animated SVG tech avatar */
function TechAvatar() {
  return (
    <div className="avatar-float relative">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-pink/30 to-accent-maroon/20 blur-2xl scale-110 pointer-events-none" />
      <svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[260px] mx-auto drop-shadow-2xl" aria-label="Abhishek avatar">
        <defs>
          <radialGradient id="hg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e91e8c" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0"/>
          </radialGradient>
          <filter id="hgl"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <style>{`
            @keyframes ho1{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
            @keyframes ho2{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
            .ho1{animation:ho1 7s linear infinite;transform-origin:140px 130px}
            .ho2{animation:ho2 11s linear infinite;transform-origin:140px 130px}
            @keyframes hhb{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
            .hhd{animation:hhb 1.6s ease-in-out infinite}
            @keyframes htc{0%,100%{opacity:1}50%{opacity:0}}
            .htc{animation:htc 0.9s step-end infinite}
            @keyframes hbb{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
            .hbd{animation:hbb 1.6s ease-in-out infinite}
          `}</style>
        </defs>
        <circle cx="140" cy="130" r="118" fill="url(#hg)"/>
        <ellipse className="ho1" cx="140" cy="130" rx="122" ry="32" fill="none" stroke="#e91e8c" strokeWidth="0.8" strokeDasharray="5 9" opacity="0.4"/>
        <ellipse className="ho2" cx="140" cy="130" rx="122" ry="32" fill="none" stroke="#8b1a4a" strokeWidth="0.8" strokeDasharray="3 11" opacity="0.3"/>
        {/* Body */}
        <g className="hbd">
          <rect x="88" y="218" width="104" height="68" rx="10" fill="#1a1a2e"/>
          <path d="M122 221 L140 241 L158 221 Z" fill="#e91e8c" opacity="0.9"/>
          {/* Laptop */}
          <rect x="100" y="238" width="80" height="42" rx="5" fill="#0d0d1a" stroke="#e91e8c" strokeWidth="1.2"/>
          <rect x="104" y="242" width="72" height="34" rx="3" fill="#0a0a2a"/>
          <rect x="108" y="246" width="36" height="2.5" rx="1.2" fill="#e91e8c" opacity="0.8"/>
          <rect x="108" y="252" width="25" height="2.5" rx="1.2" fill="#f472b6" opacity="0.6"/>
          <rect x="112" y="258" width="45" height="2.5" rx="1.2" fill="#a78bfa" opacity="0.6"/>
          <rect x="112" y="264" width="30" height="2.5" rx="1.2" fill="#34d399" opacity="0.6"/>
          <rect className="htc" x="143" y="264" width="1.5" height="7" rx="0.8" fill="#e91e8c"/>
        </g>
        {/* Neck */}
        <rect x="128" y="198" width="24" height="24" rx="7" fill="#c8a882"/>
        {/* Head */}
        <g className="hhd">
          <ellipse cx="140" cy="168" rx="52" ry="55" fill="#c8a882"/>
          <ellipse cx="140" cy="121" rx="52" ry="20" fill="#1a0a00"/>
          <rect x="88" y="121" width="104" height="18" rx="4" fill="#1a0a00"/>
          <ellipse cx="95" cy="147" rx="11" ry="21" fill="#1a0a00"/>
          <ellipse cx="185" cy="147" rx="11" ry="21" fill="#1a0a00"/>
          <path d="M115 154 Q124 150 133 154" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M147 154 Q156 150 165 154" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <ellipse cx="124" cy="168" rx="9" ry="10" fill="white"/>
          <ellipse cx="156" cy="168" rx="9" ry="10" fill="white"/>
          <circle cx="126" cy="170" r="5" fill="#1a0a00"/>
          <circle cx="158" cy="170" r="5" fill="#1a0a00"/>
          <circle cx="128" cy="168" r="1.5" fill="white"/>
          <circle cx="160" cy="168" r="1.5" fill="white"/>
          <rect x="111" y="158" width="22" height="16" rx="5" fill="none" stroke="#e91e8c" strokeWidth="2" filter="url(#hgl)"/>
          <rect x="147" y="158" width="22" height="16" rx="5" fill="none" stroke="#e91e8c" strokeWidth="2" filter="url(#hgl)"/>
          <line x1="133" y1="166" x2="147" y2="166" stroke="#e91e8c" strokeWidth="2"/>
          <line x1="88" y1="166" x2="111" y2="166" stroke="#e91e8c" strokeWidth="1.5"/>
          <line x1="169" y1="166" x2="192" y2="166" stroke="#e91e8c" strokeWidth="1.5"/>
          <path d="M148 204 Q160 214 172 204" stroke="#8b4513" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <rect x="84" y="165" width="8" height="11" rx="4" fill="#2d2d2d"/>
          <rect x="187" y="165" width="8" height="11" rx="4" fill="#2d2d2d"/>
          <circle cx="88" cy="172" r="2.5" fill="#e91e8c"/>
          <circle cx="191" cy="172" r="2.5" fill="#e91e8c"/>
        </g>
        {/* Floating icons */}
        <text x="28" y="108" fontSize="16">☁️</text>
        <text x="232" y="220" fontSize="14">🤖</text>
        <text x="30" y="218" fontSize="13">⚙️</text>
        <text x="234" y="108" fontSize="12" fill="#f472b6">{'</>'}</text>
      </svg>
    </div>
  )
}

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const roles = [
  'Enterprise DevOps Architect',
  'Cloud Solution Architect',
  'AIOps & GenAI Engineer',
  'MLOps Platform Builder',
  'DevSecOps Specialist',
]

/* Quick expertise cards shown on hero */
const expertiseSnippets = [
  { icon: '🤖', label: 'AIOps & GenAI', sub: 'Azure OpenAI · RAG · LangChain' },
  { icon: '☁️', label: 'Cloud Architecture', sub: 'AWS · Azure · GCP · VMware' },
  { icon: '🔄', label: 'CI/CD & DevOps', sub: 'Jenkins · ArgoCD · GitHub Actions' },
  { icon: '🛡️', label: 'DevSecOps & IaC', sub: 'Terraform · Vault · Ansible' },
]

export default function Hero() {
  const typedRole = useTyping(roles)
  const [activeTab, setActiveTab] = useState('expertise')

  const recentExp = experience.slice(0, 3)
  const topCerts = certifications.slice(0, 3)
  const expertSkills = skills.expert.slice(0, 10)

  return (
    <section id="hero" className="relative min-h-screen flex items-start overflow-hidden">
      <FloatingGeometry />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">

        {/* ── Top row: left text + right avatar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-pink/40 bg-accent-pink/10 text-accent-pink text-xs font-medium mb-4"
            >
              <span className="w-1.5 h-1.5 bg-accent-pink rounded-full animate-pulse" />
              Available for Enterprise Projects · Mumbai, India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-pink via-pink-400 to-accent-maroon">
                {hero.name.split(' ')[0]}
              </span>{' '}
              <span className="text-text-primary">{hero.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg sm:text-xl text-text-secondary font-medium mb-3 h-8"
            >
              <span>{typedRole}</span>
              <span className="cursor-blink text-accent-pink ml-0.5">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-text-muted text-sm mb-4 max-w-md leading-relaxed"
            >
              {hero.tagline} — building intelligent, automated, and resilient platforms for Fortune 500 enterprises.
            </motion.p>

            {/* Skill tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-1.5 mb-5"
            >
              {['AIOps', 'GenAI', 'MLOps', 'RAG', 'Kubernetes', 'Terraform', 'Azure', 'AWS', 'ArgoCD', 'GitOps'].map(tag => (
                <span key={tag} className="px-2.5 py-1 text-xs border border-accent-pink/35 text-accent-pink/90 rounded-full bg-accent-pink/8 font-medium">
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs + socials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-2.5 bg-gradient-to-r from-accent-pink to-accent-maroon text-white font-semibold rounded-xl text-sm hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-accent-pink/20"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-2.5 border border-accent-pink text-accent-pink font-semibold rounded-xl text-sm hover:bg-accent-pink/10 hover:scale-105 transition-all"
              >
                Hire Me
              </button>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2 border border-surface-2 rounded-lg text-text-secondary hover:text-accent-pink hover:border-accent-pink transition-all" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer"
                className="p-2 border border-surface-2 rounded-lg text-text-secondary hover:text-accent-pink hover:border-accent-pink transition-all" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="grid grid-cols-3 gap-3 max-w-xs"
            >
              {about.stats.map(s => (
                <div key={s.label} className="text-center p-2.5 bg-surface/60 rounded-xl border border-surface-2 backdrop-blur-sm">
                  <p className="text-xl font-extrabold font-heading text-accent-pink leading-none">{s.value}</p>
                  <p className="text-text-muted text-[10px] mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring', bounce: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <TechAvatar />
          </motion.div>
        </div>

        {/* ── Interactive dashboard tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-surface/70 backdrop-blur-md rounded-2xl border border-surface-2 overflow-hidden"
        >
          {/* Tab bar */}
          <div className="flex border-b border-surface-2 overflow-x-auto">
            {[
              { id: 'expertise', label: '🎯 Expertise' },
              { id: 'experience', label: '💼 Experience' },
              { id: 'skills', label: '⚡ Top Skills' },
              { id: 'certs', label: '🏆 Certs' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'border-accent-pink text-accent-pink bg-accent-pink/8'
                    : 'border-transparent text-text-muted hover:text-text-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-5">
            <AnimatePresenceShim activeTab={activeTab}>

              {/* Expertise */}
              {activeTab === 'expertise' && (
                <motion.div
                  key="expertise"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {expertiseSnippets.map(e => (
                    <div key={e.label} className="p-4 bg-background rounded-xl border border-surface-2 hover:border-accent-pink/40 transition-colors cursor-default group">
                      <div className="text-2xl mb-2">{e.icon}</div>
                      <p className="text-text-primary font-semibold text-sm font-heading leading-snug">{e.label}</p>
                      <p className="text-text-muted text-xs mt-1">{e.sub}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Experience */}
              {activeTab === 'experience' && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {recentExp.map((e, i) => (
                    <div key={i} className="flex items-start gap-4 p-3 bg-background rounded-xl border border-surface-2 hover:border-accent-pink/30 transition-colors">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${e.current ? 'bg-accent-pink animate-pulse' : 'bg-surface-2'}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-text-primary font-semibold text-sm font-heading leading-snug">{e.role}</p>
                        <p className="text-text-secondary text-xs mt-0.5">{e.company} · {e.location}</p>
                      </div>
                      <span className={`text-xs font-medium flex-shrink-0 ${e.current ? 'text-accent-pink' : 'text-text-muted'}`}>{e.period.split('–')[0].trim()}</span>
                    </div>
                  ))}
                  <button onClick={() => scrollTo('experience')} className="text-xs text-accent-pink hover:underline mt-1">
                    View all 9 positions →
                  </button>
                </motion.div>
              )}

              {/* Skills */}
              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-text-muted text-xs mb-3">Expert level — top 10 of {skills.expert.length} skills</p>
                  <div className="flex flex-wrap gap-2">
                    {expertSkills.map(s => (
                      <span key={s} className="px-3 py-1.5 bg-background border-l-2 border-accent-pink rounded-r-full text-text-secondary text-xs font-medium hover:text-text-primary transition-colors cursor-default">
                        {s}
                      </span>
                    ))}
                  </div>
                  <button onClick={() => scrollTo('skills')} className="text-xs text-accent-pink hover:underline mt-3 block">
                    View all {skills.expert.length + skills.experienced.length + skills.skillful.length} skills →
                  </button>
                </motion.div>
              )}

              {/* Certifications */}
              {activeTab === 'certs' && (
                <motion.div
                  key="certs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                >
                  {topCerts.map(c => (
                    <div key={c.name} className="p-3 bg-background rounded-xl border border-surface-2 hover:border-accent-pink/30 transition-colors">
                      <div className="text-xl mb-1">🏆</div>
                      <p className="text-text-primary font-semibold text-xs font-heading leading-snug">{c.name}</p>
                      <p className="text-text-muted text-xs mt-1">{c.issuer} · {c.year}</p>
                    </div>
                  ))}
                  <button onClick={() => scrollTo('certifications')} className="text-xs text-accent-pink hover:underline col-span-full">
                    View all {certifications.length} certifications →
                  </button>
                </motion.div>
              )}
            </AnimatePresenceShim>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-text-muted flex flex-col items-center gap-1 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest">scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  )
}

/* Thin wrapper so AnimatePresence doesn't cause import overhead */
function AnimatePresenceShim({ activeTab, children }) {
  return <div key={activeTab}>{children}</div>
}
