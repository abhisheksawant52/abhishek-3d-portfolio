import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import FloatingGeometry from '../three/FloatingGeometry'
import { hero, contact, about } from '../../data/portfolio'

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

/* Animated SVG avatar — tech cartoon character */
function TechAvatar() {
  return (
    <div className="avatar-float relative">
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-pink/30 to-accent-maroon/20 blur-2xl scale-110" />

      <svg
        viewBox="0 0 320 380"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-xs mx-auto drop-shadow-2xl"
        aria-label="Abhishek Sawant avatar"
      >
        {/* Background circle */}
        <circle cx="160" cy="160" r="140" fill="#141414" stroke="#e91e8c" strokeWidth="2" opacity="0.8"/>
        <circle cx="160" cy="160" r="130" fill="url(#grad)" opacity="0.15"/>

        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e91e8c" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0"/>
          </radialGradient>
          {/* Animated dash for orbit */}
          <style>{`
            @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            .orbit1 { animation: orbit 8s linear infinite; transform-origin: 160px 160px; }
            .orbit2 { animation: orbit 12s linear infinite reverse; transform-origin: 160px 160px; }
            @keyframes typingCursor { 0%,100%{opacity:1} 50%{opacity:0} }
            .tc { animation: typingCursor 0.9s step-end infinite; }
            @keyframes floatBubble { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
            .bubble { animation: floatBubble 2.5s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Orbit rings */}
        <ellipse className="orbit1" cx="160" cy="160" rx="145" ry="40" fill="none" stroke="#e91e8c" strokeWidth="0.8" strokeDasharray="6 10" opacity="0.4"/>
        <ellipse className="orbit2" cx="160" cy="160" rx="145" ry="40" fill="none" stroke="#8b1a4a" strokeWidth="0.8" strokeDasharray="4 14" opacity="0.3"/>

        {/* Body / shirt */}
        <ellipse cx="160" cy="270" rx="70" ry="55" fill="#1e1e1e"/>
        <rect x="105" y="235" width="110" height="60" rx="8" fill="#1a1a2e"/>
        {/* Shirt collar */}
        <path d="M140 238 L160 258 L180 238 Z" fill="#e91e8c" opacity="0.8"/>

        {/* Neck */}
        <rect x="148" y="210" width="24" height="28" rx="6" fill="#c8a882"/>

        {/* Head */}
        <ellipse cx="160" cy="190" rx="52" ry="56" fill="#c8a882"/>

        {/* Hair */}
        <ellipse cx="160" cy="142" rx="52" ry="22" fill="#1a0a00"/>
        <rect x="108" y="142" width="104" height="20" rx="4" fill="#1a0a00"/>
        {/* Hair side */}
        <ellipse cx="115" cy="168" rx="12" ry="22" fill="#1a0a00"/>
        <ellipse cx="205" cy="168" rx="12" ry="22" fill="#1a0a00"/>

        {/* Eyes */}
        <ellipse cx="143" cy="184" rx="9" ry="10" fill="white"/>
        <ellipse cx="177" cy="184" rx="9" ry="10" fill="white"/>
        <circle cx="145" cy="186" r="5" fill="#1a0a00"/>
        <circle cx="179" cy="186" r="5" fill="#1a0a00"/>
        {/* Eye shine */}
        <circle cx="147" cy="184" r="1.5" fill="white"/>
        <circle cx="181" cy="184" r="1.5" fill="white"/>

        {/* Eyebrows */}
        <path d="M134 174 Q143 170 152 174" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M168 174 Q177 170 186 174" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

        {/* Smile */}
        <path d="M146 205 Q160 216 174 205" stroke="#8b4513" strokeWidth="2" fill="none" strokeLinecap="round"/>

        {/* Glasses */}
        <rect x="132" y="178" width="22" height="16" rx="5" fill="none" stroke="#e91e8c" strokeWidth="2"/>
        <rect x="166" y="178" width="22" height="16" rx="5" fill="none" stroke="#e91e8c" strokeWidth="2"/>
        <line x1="154" y1="186" x2="166" y2="186" stroke="#e91e8c" strokeWidth="2"/>
        <line x1="110" y1="186" x2="132" y2="186" stroke="#e91e8c" strokeWidth="1.5"/>
        <line x1="188" y1="186" x2="210" y2="186" stroke="#e91e8c" strokeWidth="1.5"/>

        {/* Laptop */}
        <rect x="105" y="295" width="110" height="65" rx="6" fill="#0d0d1a" stroke="#e91e8c" strokeWidth="1.5"/>
        <rect x="110" y="300" width="100" height="52" rx="4" fill="#0a0a2a"/>
        {/* Screen content — code lines */}
        <rect x="116" y="307" width="50" height="3" rx="1.5" fill="#e91e8c" opacity="0.8"/>
        <rect x="116" y="314" width="35" height="3" rx="1.5" fill="#f472b6" opacity="0.6"/>
        <rect x="120" y="321" width="60" height="3" rx="1.5" fill="#a78bfa" opacity="0.6"/>
        <rect x="120" y="328" width="45" height="3" rx="1.5" fill="#34d399" opacity="0.6"/>
        <rect x="116" y="335" width="55" height="3" rx="1.5" fill="#f472b6" opacity="0.5"/>
        <rect x="116" y="342" width="30" height="3" rx="1.5" fill="#e91e8c" opacity="0.7"/>
        {/* Typing cursor */}
        <rect className="tc" x="150" y="342" width="2" height="9" rx="1" fill="#e91e8c"/>

        {/* Speech bubble */}
        <g className="bubble">
          <rect x="195" y="100" width="115" height="58" rx="10" fill="#1e1e1e" stroke="#e91e8c" strokeWidth="1.5"/>
          <path d="M205 158 L195 172 L215 158 Z" fill="#1e1e1e" stroke="#e91e8c" strokeWidth="1.5" strokeLinejoin="round"/>
          <text x="252" y="122" textAnchor="middle" fill="#e91e8c" fontSize="9" fontFamily="Space Grotesk" fontWeight="600">Hi! I&apos;m Abhishek</text>
          <text x="252" y="136" textAnchor="middle" fill="#a3a3a3" fontSize="8" fontFamily="Space Grotesk">DevOps &amp; Cloud</text>
          <text x="252" y="149" textAnchor="middle" fill="#a3a3a3" fontSize="8" fontFamily="Space Grotesk">Architect 🚀</text>
        </g>

        {/* Floating tech icons around avatar */}
        <g opacity="0.7">
          {/* Cloud */}
          <text x="55" y="120" fontSize="18" fill="#e91e8c">☁️</text>
          {/* Robot/AI */}
          <text x="250" y="230" fontSize="16" fill="#8b1a4a">🤖</text>
          {/* Gear */}
          <text x="60" y="240" fontSize="14" fill="#e91e8c">⚙️</text>
          {/* Code */}
          <text x="255" y="130" fontSize="14" fill="#f472b6">{'</>'}</text>
        </g>
      </svg>
    </div>
  )
}

/* Typing effect hook */
function useTyping(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx(i => (i + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const roles = [
  'Enterprise DevOps Architect',
  'Cloud Solution Architect',
  'AIOps & GenAI Engineer',
  'MLOps Platform Builder',
  'DevSecOps Specialist',
]

export default function Hero() {
  const typedRole = useTyping(roles)

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <FloatingGeometry />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent pointer-events-none" />

      {/* Main content — two column */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            {/* Greeting chip */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-pink/40 bg-accent-pink/10 text-accent-pink text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-accent-pink rounded-full animate-pulse" />
              Available for Enterprise Projects
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-3 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-pink via-pink-400 to-accent-maroon">
                {hero.name.split(' ')[0]}
              </span>
              <br />
              <span className="text-text-primary">{hero.name.split(' ')[1]}</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl text-text-secondary font-medium mb-2 h-9"
            >
              <span>{typedRole}</span>
              <span className="cursor-blink text-accent-pink ml-0.5">|</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-text-muted text-base mb-6 max-w-lg"
            >
              {hero.tagline} — building intelligent, automated, and resilient platforms for the enterprise.
            </motion.p>

            {/* Tag badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {['AIOps', 'GenAI', 'MLOps', 'RAG', 'Kubernetes', 'Terraform', 'Azure', 'AWS'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs border border-accent-pink/40 text-accent-pink/90 rounded-full bg-accent-pink/8 font-medium">
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={() => scrollTo('experience')}
                className="px-8 py-3 bg-gradient-to-r from-accent-pink to-accent-maroon text-white font-semibold rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-accent-pink/20"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-3 border border-accent-pink text-accent-pink font-semibold rounded-xl hover:bg-accent-pink/10 hover:scale-105 transition-all"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex gap-3 mb-10"
            >
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-3 border border-surface-2 rounded-xl text-text-secondary hover:text-accent-pink hover:border-accent-pink hover:bg-accent-pink/5 transition-all"
                aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer"
                className="p-3 border border-surface-2 rounded-xl text-text-secondary hover:text-accent-pink hover:border-accent-pink hover:bg-accent-pink/5 transition-all"
                aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="grid grid-cols-3 gap-4 max-w-sm"
            >
              {about.stats.map((s) => (
                <div key={s.label} className="text-center p-3 bg-surface/60 rounded-xl border border-surface-2 backdrop-blur-sm">
                  <p className="text-2xl font-extrabold font-heading text-accent-pink leading-none">{s.value}</p>
                  <p className="text-text-muted text-xs mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — animated avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', bounce: 0.3 }}
            className="flex justify-center items-center"
          >
            <TechAvatar />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted flex flex-col items-center gap-1"
      >
        <span className="text-xs text-text-muted">scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  )
}
