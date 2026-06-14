import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* The intro script — lines appear one by one with typewriter effect */
const SCRIPT = [
  { text: "👋  Hey there! Welcome!", delay: 0 },
  { text: "I'm Abhishek Sawant —", delay: 1400 },
  { text: "Enterprise DevOps & Cloud Architect", delay: 2600 },
  { text: "with 10+ years of experience.", delay: 4000 },
  { text: "I architect AI-powered platforms,", delay: 5400 },
  { text: "cloud infrastructure & CI/CD pipelines", delay: 6800 },
  { text: "for Fortune 500 companies 🚀", delay: 8200 },
  { text: "Let me show you what I've built!", delay: 9400 },
]

/* Lip-sync frames — mouth shape cycles while speaking */
function MouthShape({ frame }) {
  const shapes = [
    // closed
    <path key="c" d="M148 208 Q160 212 172 208" stroke="#8b4513" strokeWidth="2.5" fill="none" strokeLinecap="round"/>,
    // open small
    <ellipse key="s" cx="160" cy="210" rx="9" ry="5" fill="#c0392b" stroke="#8b4513" strokeWidth="1.5"/>,
    // open wide
    <ellipse key="w" cx="160" cy="212" rx="13" ry="8" fill="#c0392b" stroke="#8b4513" strokeWidth="1.5"/>,
    // smile
    <path key="sm" d="M146 206 Q160 218 174 206" stroke="#8b4513" strokeWidth="2.5" fill="none" strokeLinecap="round"/>,
  ]
  return shapes[frame % shapes.length]
}

/* Blinking eyes */
function Eyes({ blink }) {
  if (blink) {
    return (
      <>
        <path d="M134 184 Q143 180 152 184" stroke="#1a0a00" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M168 184 Q177 180 186 184" stroke="#1a0a00" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </>
    )
  }
  return (
    <>
      <ellipse cx="143" cy="184" rx="9" ry="10" fill="white"/>
      <ellipse cx="177" cy="184" rx="9" ry="10" fill="white"/>
      <circle cx="145" cy="186" r="5" fill="#1a0a00"/>
      <circle cx="179" cy="186" r="5" fill="#1a0a00"/>
      <circle cx="147" cy="184" r="1.5" fill="white"/>
      <circle cx="181" cy="184" r="1.5" fill="white"/>
    </>
  )
}

function SpeakingAvatar({ speaking, mouthFrame, blink }) {
  return (
    <svg viewBox="0 0 280 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="ig" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e91e8c" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <style>{`
          @keyframes orbit { from{transform:rotate(0deg)}to{transform:rotate(360deg)} }
          .ov1{animation:orbit 6s linear infinite;transform-origin:140px 140px}
          .ov2{animation:orbit 10s linear infinite reverse;transform-origin:140px 140px}
          @keyframes headBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
          .head{animation:headBob 1.2s ease-in-out infinite}
          @keyframes shoulderBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
          .body{animation:shoulderBob 1.2s ease-in-out infinite}
        `}</style>
      </defs>

      {/* Glow base */}
      <circle cx="140" cy="140" r="120" fill="url(#ig)"/>

      {/* Orbit rings */}
      <ellipse className="ov1" cx="140" cy="140" rx="128" ry="35" fill="none" stroke="#e91e8c" strokeWidth="0.8" strokeDasharray="5 9" opacity="0.45"/>
      <ellipse className="ov2" cx="140" cy="140" rx="128" ry="35" fill="none" stroke="#8b1a4a" strokeWidth="0.8" strokeDasharray="3 12" opacity="0.3"/>

      {/* Body */}
      <g className="body">
        <rect x="88" y="225" width="104" height="70" rx="10" fill="#1a1a2e"/>
        <path d="M122 228 L140 248 L158 228 Z" fill="#e91e8c" opacity="0.85"/>
        <rect x="94" y="228" width="10" height="50" rx="5" fill="#e91e8c" opacity="0.15"/>
        <rect x="176" y="228" width="10" height="50" rx="5" fill="#e91e8c" opacity="0.15"/>
      </g>

      {/* Neck */}
      <rect x="128" y="205" width="24" height="24" rx="7" fill="#c8a882"/>

      {/* Head group */}
      <g className="head">
        {/* Head */}
        <ellipse cx="140" cy="175" rx="52" ry="56" fill="#c8a882"/>

        {/* Hair */}
        <ellipse cx="140" cy="127" rx="52" ry="22" fill="#1a0a00"/>
        <rect x="88" y="127" width="104" height="18" rx="4" fill="#1a0a00"/>
        <ellipse cx="95" cy="153" rx="12" ry="22" fill="#1a0a00"/>
        <ellipse cx="185" cy="153" rx="12" ry="22" fill="#1a0a00"/>

        {/* Eyebrows */}
        <path d="M114 160 Q123 156 132 160" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M148 160 Q157 156 166 160" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

        {/* Eyes (with blink) */}
        <Eyes blink={blink} />

        {/* Glasses */}
        <rect x="110" y="164" width="22" height="16" rx="5" fill="none" stroke="#e91e8c" strokeWidth="2" filter="url(#glow)"/>
        <rect x="147" y="164" width="22" height="16" rx="5" fill="none" stroke="#e91e8c" strokeWidth="2" filter="url(#glow)"/>
        <line x1="132" y1="172" x2="147" y2="172" stroke="#e91e8c" strokeWidth="2"/>
        <line x1="88" y1="172" x2="110" y2="172" stroke="#e91e8c" strokeWidth="1.5"/>
        <line x1="169" y1="172" x2="192" y2="172" stroke="#e91e8c" strokeWidth="1.5"/>

        {/* Mouth — animated */}
        <MouthShape frame={speaking ? mouthFrame : 0} />

        {/* Ear AirPods */}
        <rect x="85" y="172" width="8" height="12" rx="4" fill="#2d2d2d"/>
        <rect x="186" y="172" width="8" height="12" rx="4" fill="#2d2d2d"/>
        <circle cx="89" cy="180" r="3" fill="#e91e8c"/>
        <circle cx="190" cy="180" r="3" fill="#e91e8c"/>
      </g>

      {/* Sound waves when speaking */}
      {speaking && (
        <>
          <circle cx="50" cy="175" r="8" fill="none" stroke="#e91e8c" strokeWidth="1.5" opacity="0.6" style={{animation:'ping 1s cubic-bezier(0,0,0.2,1) infinite'}}/>
          <circle cx="50" cy="175" r="15" fill="none" stroke="#e91e8c" strokeWidth="1" opacity="0.3" style={{animation:'ping 1s cubic-bezier(0,0,0.2,1) 0.3s infinite'}}/>
          <circle cx="50" cy="175" r="22" fill="none" stroke="#e91e8c" strokeWidth="0.8" opacity="0.15" style={{animation:'ping 1s cubic-bezier(0,0,0.2,1) 0.6s infinite'}}/>
        </>
      )}
    </svg>
  )
}

/* Typewriter line component */
function TypewriterLine({ text, onDone }) {
  const [displayed, setDisplayed] = useState('')
  const idx = useRef(0)

  useEffect(() => {
    idx.current = 0
    setDisplayed('')
    const interval = setInterval(() => {
      idx.current += 1
      setDisplayed(text.slice(0, idx.current))
      if (idx.current >= text.length) {
        clearInterval(interval)
        setTimeout(onDone, 400)
      }
    }, 38)
    return () => clearInterval(interval)
  }, [text]) // eslint-disable-line

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="cursor-blink text-accent-pink">|</span>
      )}
    </span>
  )
}

export default function SpeakingIntro() {
  const [visible, setVisible] = useState(true)
  const [lineIdx, setLineIdx] = useState(0)
  const [done, setDone] = useState(false)
  const [mouthFrame, setMouthFrame] = useState(0)
  const [blink, setBlink] = useState(false)

  // Auto-advance script
  useEffect(() => {
    if (!visible || done) return
    if (lineIdx >= SCRIPT.length) {
      setTimeout(() => setDone(true), 1000)
      return
    }
    const t = setTimeout(() => {
      setLineIdx(i => i + 1)
    }, SCRIPT[lineIdx]?.delay ?? 0)
    return () => clearTimeout(t)
  }, [lineIdx, visible, done])

  // Mouth animation while speaking
  useEffect(() => {
    if (!visible || done) return
    const interval = setInterval(() => {
      setMouthFrame(f => f + 1)
    }, 120)
    return () => clearInterval(interval)
  }, [visible, done])

  // Random blink
  useEffect(() => {
    if (!visible) return
    const scheduleBlink = () => {
      const delay = 2000 + Math.random() * 3000
      return setTimeout(() => {
        setBlink(true)
        setTimeout(() => setBlink(false), 150)
        scheduleBlink()
      }, delay)
    }
    const t = scheduleBlink()
    return () => clearTimeout(t)
  }, [visible])

  // Auto-dismiss after all lines shown
  useEffect(() => {
    if (done) {
      const t = setTimeout(() => setVisible(false), 1500)
      return () => clearTimeout(t)
    }
  }, [done])

  const currentLines = SCRIPT.slice(0, lineIdx)
  const speaking = lineIdx < SCRIPT.length && !done

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
          role="dialog"
          aria-label="Introduction"
        >
          {/* Skip button */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-6 right-6 px-4 py-2 text-sm text-text-muted border border-surface-2 rounded-lg hover:text-text-primary hover:border-accent-pink transition-colors"
          >
            Skip intro →
          </button>

          <div className="max-w-3xl w-full mx-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 md:w-72 md:h-72 relative glow-pulse rounded-full">
                <SpeakingAvatar speaking={speaking} mouthFrame={mouthFrame} blink={blink} />
              </div>
            </motion.div>

            {/* Speech lines */}
            <div className="space-y-3 min-h-[220px] flex flex-col justify-center">
              {/* Speech bubble */}
              <div className="relative p-5 bg-surface rounded-2xl border border-accent-pink/30">
                {/* Bubble pointer */}
                <div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-surface hidden md:block"/>

                <div className="space-y-2 min-h-[160px]">
                  {currentLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`font-heading text-base leading-snug ${
                        i === currentLines.length - 1
                          ? 'text-text-primary text-lg font-semibold'
                          : 'text-text-muted text-sm'
                      }`}
                    >
                      {i === currentLines.length - 1 ? (
                        <TypewriterLine text={line.text} onDone={() => {}} />
                      ) : (
                        line.text
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Progress dots */}
                <div className="flex gap-1.5 mt-4">
                  {SCRIPT.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i < lineIdx ? 'bg-accent-pink w-4' : 'bg-surface-2 w-1.5'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* CTA when done */}
              {done && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setVisible(false)}
                  className="w-full py-3 bg-gradient-to-r from-accent-pink to-accent-maroon text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent-pink/20 font-heading"
                >
                  Explore Portfolio →
                </motion.button>
              )}
            </div>
          </div>

          {/* Sound wave decoration */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 items-end h-8">
            {[3,5,8,5,10,7,4,9,6,4,7,5,3].map((h, i) => (
              <motion.div
                key={i}
                animate={speaking ? { height: [`${h}px`, `${h * 2.5}px`, `${h}px`] } : { height: `${h}px` }}
                transition={{ duration: 0.4 + i * 0.05, repeat: Infinity, delay: i * 0.07 }}
                className="w-1 bg-accent-pink/50 rounded-full"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
