/**
 * SpeakingIntro.jsx
 *
 * • Shows a fullscreen intro overlay when the site first loads
 * • Audio (Web Speech API) starts THE MOMENT the user clicks ANYWHERE on the overlay
 *   — no separate "Play" button needed; browsers allow audio on first user gesture
 * • Uses Abhishek's actual photo with CSS float + glow animations
 * • Auto-dismisses after ~4 seconds (speech end or hard timer)
 * • Shows animated lip-sync bars and a 4-sec progress strip
 */
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SPEECH = "Hi, I'm Abhishek Sawant — Enterprise DevOps and Cloud Architect with over 10 years of experience. Welcome to my portfolio."

/* Realistic SVG portrait of Abhishek based on his photo:
   warm medium skin, thick dark wavy hair, strong brows,
   round face, no glasses, black collar, subtle smile */
function PhotoOrInitials() {
  const [imgOk, setImgOk] = useState(true)
  return imgOk ? (
    <img
      src="/abhishek.jpg"
      alt="Abhishek Sawant"
      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
      onError={() => setImgOk(false)}
    />
  ) : (
    /* Detailed SVG portrait as fallback */
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-label="Abhishek Sawant">
      <defs>
        <radialGradient id="ps" cx="48%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#d4956a"/>
          <stop offset="65%" stopColor="#c07848"/>
          <stop offset="100%" stopColor="#a05828"/>
        </radialGradient>
        <radialGradient id="ph" cx="50%" cy="20%" r="65%">
          <stop offset="0%" stopColor="#241408"/>
          <stop offset="100%" stopColor="#0a0400"/>
        </radialGradient>
        <linearGradient id="psh" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#151515"/>
          <stop offset="100%" stopColor="#050505"/>
        </linearGradient>
        <style>{`
          @keyframes pnod{0%,100%{transform:rotate(0)translateY(0)}30%{transform:rotate(-2deg)translateY(-1px)}70%{transform:rotate(1.5deg)translateY(-1px)}}
          .phead{animation:pnod 2.2s ease-in-out infinite;transform-origin:100px 140px}
          @keyframes pblink{0%,88%,100%{transform:scaleY(1)}93%{transform:scaleY(0.05)}}
          .peyel{animation:pblink 3.8s ease-in-out infinite;transform-origin:center}
          .peyeR{animation:pblink 3.8s ease-in-out 0.08s infinite;transform-origin:center}
        `}</style>
      </defs>
      {/* Black collar/shirt */}
      <ellipse cx="100" cy="210" rx="70" ry="35" fill="url(#psh)"/>
      <rect x="40" y="185" width="120" height="50" rx="10" fill="url(#psh)"/>
      <path d="M 78 188 L 100 208 L 122 188 Z" fill="#0a0a0a"/>
      {/* Neck */}
      <rect x="86" y="168" width="28" height="24" rx="8" fill="url(#ps)"/>
      {/* Head */}
      <g className="phead">
        <ellipse cx="100" cy="132" rx="56" ry="60" fill="url(#ps)"/>
        {/* Cheek softness */}
        <ellipse cx="72"  cy="140" rx="14" ry="10" fill="#c07848" opacity="0.3"/>
        <ellipse cx="128" cy="140" rx="14" ry="10" fill="#c07848" opacity="0.3"/>
        {/* Hair — thick wavy dark */}
        <ellipse cx="100" cy="82"  rx="58" ry="24" fill="url(#ph)"/>
        <path d="M 42 98 Q 44 62 100 56 Q 156 62 158 98 Q 148 72 100 68 Q 52 72 42 98 Z" fill="url(#ph)"/>
        <ellipse cx="50"  cy="118" rx="14" ry="26" fill="url(#ph)"/>
        <ellipse cx="150" cy="118" rx="14" ry="26" fill="url(#ph)"/>
        {/* Wavy bumps */}
        <ellipse cx="84"  cy="64"  rx="18" ry="12" fill="#180e04" opacity="0.85"/>
        <ellipse cx="100" cy="60"  rx="20" ry="13" fill="#180e04" opacity="0.9"/>
        <ellipse cx="116" cy="64"  rx="18" ry="12" fill="#180e04" opacity="0.85"/>
        {/* Eyebrows — strong */}
        <path d="M 62 112 Q 78 105 94 110" stroke="#150800" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M 106 110 Q 122 105 138 112" stroke="#150800" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        {/* Eyes */}
        <g className="peyel">
          <ellipse cx="80"  cy="124" rx="14" ry="12" fill="white"/>
          <circle  cx="82"  cy="125" r="8"  fill="#2a1004"/>
          <circle  cx="82"  cy="125" r="5"  fill="#180800"/>
          <circle  cx="84"  cy="123" r="2"  fill="white" opacity="0.9"/>
        </g>
        <g className="peyeR">
          <ellipse cx="120" cy="124" rx="14" ry="12" fill="white"/>
          <circle  cx="118" cy="125" r="8"  fill="#2a1004"/>
          <circle  cx="118" cy="125" r="5"  fill="#180800"/>
          <circle  cx="120" cy="123" r="2"  fill="white" opacity="0.9"/>
        </g>
        {/* Nose */}
        <path d="M 95 118 Q 91 132 90 140 Q 94 146 100 146 Q 106 146 110 140 Q 109 132 105 118"
          stroke="#8a4818" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
        <ellipse cx="94"  cy="143" rx="5" ry="3.5" fill="#7a3e10" opacity="0.5"/>
        <ellipse cx="106" cy="143" rx="5" ry="3.5" fill="#7a3e10" opacity="0.5"/>
        {/* Mouth — subtle smile */}
        <path d="M 86 158 Q 100 165 114 158" stroke="#7a3b1e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Ear */}
        <ellipse cx="46"  cy="134" rx="8" ry="14" fill="#b86830" opacity="0.7"/>
        <ellipse cx="154" cy="134" rx="8" ry="14" fill="#b86830" opacity="0.7"/>
      </g>
    </svg>
  )
}

const LINES = [
  { text: "👋  Hi, I'm Abhishek Sawant", sub: "Enterprise DevOps & Cloud Architect" },
  { text: "10+ years · 4 countries", sub: "Fortune 500 clients worldwide 🚀" },
]

export default function SpeakingIntro() {
  const [visible,    setVisible]    = useState(true)
  const [started,    setStarted]    = useState(false)
  const [speaking,   setSpeaking]   = useState(false)
  const [lineIdx,    setLineIdx]    = useState(0)
  const [barPhase,   setBarPhase]   = useState(0)

  const mouthRef  = useRef(null)
  const blinkRef  = useRef(null)
  const dismissRef = useRef(null)

  /* ── Speak immediately when user clicks the overlay ── */
  const handleClick = () => {
    if (started) return
    setStarted(true)
    setSpeaking(true)

    // Switch line halfway through
    const lineTimer = setTimeout(() => setLineIdx(1), 2000)

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()

      const trySpeak = () => {
        const u = new SpeechSynthesisUtterance(SPEECH)
        u.rate   = 0.9    // measured, gravitas
        u.pitch  = 0.78   // deep
        u.volume = 1

        const voices = window.speechSynthesis.getVoices()
        const pick = voices.find(v =>
          /Google UK English Male|Microsoft David|Daniel|Arthur|Thomas|Alex/i.test(v.name)
        ) || voices.find(v => v.lang?.startsWith('en')) || voices[0]
        if (pick) u.voice = pick

        u.onend = () => {
          setSpeaking(false)
          clearTimeout(lineTimer)
          dismissRef.current = setTimeout(dismiss, 600)
        }
        u.onerror = () => {
          setSpeaking(false)
          dismissRef.current = setTimeout(dismiss, 1000)
        }
        window.speechSynthesis.speak(u)
      }

      if (window.speechSynthesis.getVoices().length > 0) {
        trySpeak()
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          window.speechSynthesis.onvoiceschanged = null
          trySpeak()
        }
      }
    } else {
      // No TTS support — just animate and dismiss
      setTimeout(() => { setSpeaking(false); dismiss() }, 4000)
    }

    // Hard cap at 5.5s
    dismissRef.current = setTimeout(dismiss, 5500)
  }

  const dismiss = () => {
    window.speechSynthesis?.cancel()
    setSpeaking(false)
    setVisible(false)
  }

  /* ── Bar animation ── */
  useEffect(() => {
    if (!speaking) return
    const t = setInterval(() => setBarPhase(p => p + 1), 95)
    return () => clearInterval(t)
  }, [speaking])

  /* ── Cleanup ── */
  useEffect(() => () => {
    window.speechSynthesis?.cancel()
    clearTimeout(dismissRef.current)
  }, [])

  const BAR_HEIGHTS = [3, 8, 12, 6, 15, 9, 5, 13, 7, 4, 11, 6, 4]

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          onClick={handleClick}
          className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer select-none"
          style={{ background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(18px)' }}
          role="dialog"
          aria-label="Portfolio introduction — click to start"
        >
          {/* Progress bar */}
          {started && (
            <motion.div
              className="absolute top-0 left-0 h-[3px] rounded-r-full"
              style={{ background: 'linear-gradient(90deg,#e91e8c,#f97316,#fbbf24)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 4.8, ease: 'linear' }}
            />
          )}

          {/* Skip — top right */}
          <button
            onClick={e => { e.stopPropagation(); dismiss() }}
            className="absolute top-5 right-5 px-3 py-1 text-xs border border-white/10 rounded-lg text-white/40 hover:text-white/80 hover:border-accent-pink transition-all z-10"
          >
            Skip →
          </button>

          {/* ── Main card ── */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.55, type: 'spring', bounce: 0.32 }}
            onClick={e => e.stopPropagation()}
            className="flex flex-col sm:flex-row items-center gap-8 max-w-xl w-full mx-6 p-8 rounded-3xl"
            style={{
              background: 'rgba(18,18,18,0.92)',
              border: '1px solid rgba(233,30,140,0.25)',
              boxShadow: '0 0 60px rgba(233,30,140,0.12), 0 24px 80px rgba(0,0,0,0.6)',
            }}
          >

            {/* ── Photo with glow ring ── */}
            <div className="relative flex-shrink-0">
              {/* Animated glow rings */}
              <div className="absolute inset-0 rounded-full"
                style={{ animation: 'glow-pulse 2.4s ease-in-out infinite', borderRadius: '50%' }}/>
              <div className="absolute -inset-2 rounded-full opacity-40"
                style={{
                  background: 'conic-gradient(from 0deg, #e91e8c, #f97316, #fbbf24, #e91e8c)',
                  animation: 'orbit-cw 4s linear infinite',
                  borderRadius: '50%',
                  filter: 'blur(4px)',
                }}/>

              {/* Actual photo */}
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: 140, height: 140,
                  border: '3px solid rgba(233,30,140,0.6)',
                  boxShadow: '0 0 30px rgba(233,30,140,0.4)',
                  animation: 'char-float 3.5s ease-in-out infinite',
                  zIndex: 1,
                }}
              >
                <PhotoOrInitials />
              </div>

              {/* Speaking indicator dot */}
              {speaking && (
                <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full z-10"
                  style={{
                    background: '#22c55e',
                    boxShadow: '0 0 8px #22c55e',
                    animation: 'soundbar 0.6s ease-in-out infinite',
                    border: '2px solid #0a0a0a',
                  }}/>
              )}
            </div>

            {/* ── Text + bars ── */}
            <div className="flex-1 flex flex-col gap-3 text-center sm:text-left">

              {/* Line cycling */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lineIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-heading font-bold text-white leading-tight"
                    style={{ fontSize: 'clamp(1.05rem,3vw,1.3rem)' }}>
                    {LINES[lineIdx].text}
                  </p>
                  <p className="text-white/50 text-sm mt-1 font-medium">
                    {LINES[lineIdx].sub}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Sound wave bars */}
              <div className="flex gap-[3px] items-end h-7 mt-1 justify-center sm:justify-start">
                {BAR_HEIGHTS.map((h, i) => {
                  const phase = (barPhase + i) % BAR_HEIGHTS.length
                  const animH = speaking
                    ? Math.max(3, h * Math.abs(Math.sin((barPhase * 0.3) + i * 0.6)) + 3)
                    : 3
                  return (
                    <div key={i} style={{
                      width: 3, height: `${animH}px`,
                      background: `hsl(${320 + phase * 3},80%,60%)`,
                      borderRadius: 2,
                      opacity: speaking ? 0.85 : 0.2,
                      transition: 'height 0.08s ease, opacity 0.3s',
                      transformOrigin: 'bottom',
                    }}/>
                  )
                })}
              </div>

              {/* Prompt — changes after start */}
              <p className="text-white/25 text-xs leading-relaxed">
                {!started
                  ? '👆 Click anywhere to start introduction with audio'
                  : speaking
                    ? '🔊 Speaking…'
                    : '✓ Done — entering portfolio…'
                }
              </p>
            </div>
          </motion.div>

          {/* Click anywhere hint — shown before start */}
          {!started && (
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-px h-10 rounded-full"
                style={{ background: 'linear-gradient(to bottom, transparent, #e91e8c, transparent)' }}/>
              <p className="text-white/30 text-[11px] tracking-widest uppercase">Click to begin</p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
