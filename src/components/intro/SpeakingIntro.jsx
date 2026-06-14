import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─────────────────────────────────────────────────────────────────
   SPEECH
   Short, gravitas. Auto-starts on first click anywhere.
───────────────────────────────────────────────────────────────── */
const SPEECH = "I'm Abhishek Sawant — Enterprise DevOps and Cloud Architect. Welcome to my portfolio."

/* ─────────────────────────────────────────────────────────────────
   DETAILED SVG PORTRAIT
   Based on photo: warm medium skin, thick dark wavy hair,
   round face, strong brows, no glasses, slight chin, black collar.
───────────────────────────────────────────────────────────────── */
function Portrait({ speaking, mouthPhase, blinkActive }) {
  /* mouth path based on phase */
  const mouthPaths = [
    'M 112 208 Q 128 212 144 208',          // closed
    'M 112 207 Q 128 218 144 207',          // smile open small
    'M 111 206 Q 128 222 145 206',          // smile open wide
    'M 113 208 Q 128 215 143 208',          // mid
  ]
  const mp = mouthPaths[mouthPhase % 4]

  return (
    <div style={{ animation: 'char-float 3.8s ease-in-out infinite' }} className="relative w-full h-full">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(233,30,140,0.22) 0%, transparent 70%)', animation: 'glow-pulse 2.5s ease-in-out infinite' }}
      />

      <svg viewBox="0 0 256 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10" aria-label="Abhishek Sawant portrait">
        <defs>
          {/* Skin gradient — warm medium brown */}
          <radialGradient id="skin" cx="48%" cy="42%" r="58%">
            <stop offset="0%" stopColor="#d4956a"/>
            <stop offset="60%" stopColor="#c27e52"/>
            <stop offset="100%" stopColor="#a8642f"/>
          </radialGradient>
          {/* Hair gradient — dark brown/black */}
          <radialGradient id="hair" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#2a1a0a"/>
            <stop offset="100%" stopColor="#0d0800"/>
          </radialGradient>
          {/* Shirt gradient */}
          <linearGradient id="shirt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a"/>
            <stop offset="100%" stopColor="#080808"/>
          </linearGradient>
          {/* Shadow under chin */}
          <radialGradient id="chinShad" cx="50%" cy="100%" r="50%">
            <stop offset="0%" stopColor="#7a4a20" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#7a4a20" stopOpacity="0"/>
          </radialGradient>
          {/* Background circle */}
          <radialGradient id="bgCirc" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#1e1e1e"/>
            <stop offset="100%" stopColor="#0a0a0a"/>
          </radialGradient>

          <style>{`
            .orbit-ring-1 { animation: orbit-cw  8s linear infinite; transform-origin: 128px 148px; }
            .orbit-ring-2 { animation: orbit-ccw 13s linear infinite; transform-origin: 128px 148px; }
            .head-group   { animation: char-head-nod 2.8s ease-in-out infinite; transform-origin: 128px 185px; }
            .body-group   { animation: char-breathe 3.2s ease-in-out infinite; transform-origin: 128px 250px; }
            .eye-left     { animation: char-blink 4s ease-in-out infinite; transform-origin: 104px 172px; }
            .eye-right    { animation: char-blink 4s ease-in-out infinite 0.05s; transform-origin: 152px 172px; }
          `}</style>
        </defs>

        {/* ── Background circle ── */}
        <circle cx="128" cy="148" r="122" fill="url(#bgCirc)" stroke="#e91e8c" strokeWidth="1.2" opacity="0.9"/>

        {/* ── Orbit rings ── */}
        <ellipse className="orbit-ring-1" cx="128" cy="148" rx="126" ry="34"
          fill="none" stroke="#e91e8c" strokeWidth="0.7" strokeDasharray="4 8" opacity="0.35"/>
        <ellipse className="orbit-ring-2" cx="128" cy="148" rx="126" ry="34"
          fill="none" stroke="#8b1a4a" strokeWidth="0.7" strokeDasharray="3 10" opacity="0.25"/>

        {/* ── Body / shirt ── */}
        <g className="body-group">
          {/* Torso */}
          <ellipse cx="128" cy="278" rx="78" ry="38" fill="url(#shirt)"/>
          <rect x="50" y="248" width="156" height="52" rx="12" fill="url(#shirt)"/>
          {/* Collar V */}
          <path d="M 100 250 L 128 278 L 156 250 Z" fill="#111" stroke="#1a1a1a" strokeWidth="1"/>
          {/* Collar neck band */}
          <rect x="108" y="234" width="40" height="18" rx="6" fill="url(#shirt)"/>
        </g>

        {/* ── Neck ── */}
        <rect x="112" y="220" width="32" height="32" rx="10" fill="url(#skin)"/>
        <ellipse cx="128" cy="225" rx="16" ry="8" fill="url(#chinShad)"/>

        {/* ── Head group (nods while talking) ── */}
        <g className="head-group">

          {/* ── Face shape — slightly round, fuller cheeks ── */}
          <ellipse cx="128" cy="175" rx="60" ry="66" fill="url(#skin)"/>
          {/* Cheek highlights */}
          <ellipse cx="98"  cy="183" rx="12" ry="9" fill="#d4956a" opacity="0.35"/>
          <ellipse cx="158" cy="183" rx="12" ry="9" fill="#d4956a" opacity="0.35"/>
          {/* Jaw shadow */}
          <ellipse cx="128" cy="230" rx="48" ry="12" fill="#a86030" opacity="0.25"/>

          {/* ── Hair ── thick, wavy, dark ── */}
          {/* Main top mass */}
          <ellipse cx="128" cy="122" rx="62" ry="30" fill="url(#hair)"/>
          {/* Hairline cap */}
          <path d="M 66 138 Q 68 100 128 96 Q 188 100 190 138 Q 175 115 128 112 Q 81 115 66 138 Z" fill="url(#hair)"/>
          {/* Left side hair */}
          <ellipse cx="74"  cy="158" rx="16" ry="30" fill="url(#hair)"/>
          {/* Right side hair */}
          <ellipse cx="182" cy="158" rx="16" ry="30" fill="url(#hair)"/>
          {/* Wavy texture bumps on top */}
          <ellipse cx="108" cy="108" rx="18" ry="12" fill="url(#hair)" opacity="0.8"/>
          <ellipse cx="128" cy="103" rx="20" ry="13" fill="url(#hair)" opacity="0.9"/>
          <ellipse cx="148" cy="108" rx="18" ry="12" fill="url(#hair)" opacity="0.8"/>
          <ellipse cx="118" cy="100" rx="14" ry="10" fill="#1a0800" opacity="0.6"/>
          <ellipse cx="138" cy="99"  rx="14" ry="10" fill="#1a0800" opacity="0.6"/>

          {/* ── Strong eyebrows ── */}
          <path d="M 86 152 Q 100 145 114 150" stroke="#1a0800" strokeWidth="4" fill="none" strokeLinecap="round"/>
          <path d="M 142 150 Q 156 145 170 152" stroke="#1a0800" strokeWidth="4" fill="none" strokeLinecap="round"/>

          {/* ── Eyes ── */}
          {blinkActive ? (
            /* Blink — thin line */
            <>
              <path d="M 88 169 Q 104 166 120 169" stroke="#4a2a10" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              <path d="M 136 169 Q 152 166 168 169" stroke="#4a2a10" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
            </>
          ) : (
            <>
              {/* Eye whites */}
              <g className="eye-left">
                <ellipse cx="104" cy="170" rx="16" ry="13" fill="white"/>
                {/* Iris — dark brown */}
                <circle cx="106" cy="171" r="9" fill="#3d1a08"/>
                <circle cx="106" cy="171" r="6" fill="#2a1005"/>
                {/* Pupil */}
                <circle cx="107" cy="172" r="3.5" fill="#0d0400"/>
                {/* Catchlight */}
                <circle cx="109" cy="169" r="2"   fill="white" opacity="0.85"/>
                <circle cx="103" cy="173" r="1"   fill="white" opacity="0.4"/>
              </g>
              <g className="eye-right">
                <ellipse cx="152" cy="170" rx="16" ry="13" fill="white"/>
                <circle cx="150" cy="171" r="9" fill="#3d1a08"/>
                <circle cx="150" cy="171" r="6" fill="#2a1005"/>
                <circle cx="151" cy="172" r="3.5" fill="#0d0400"/>
                <circle cx="153" cy="169" r="2"   fill="white" opacity="0.85"/>
                <circle cx="147" cy="173" r="1"   fill="white" opacity="0.4"/>
              </g>
              {/* Upper eyelid line */}
              <path d="M 88 164 Q 104 158 120 164" stroke="#4a2a10" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              <path d="M 136 164 Q 152 158 168 164" stroke="#4a2a10" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            </>
          )}

          {/* ── Nose ── wider, prominent ── */}
          <path d="M 122 158 Q 118 176 116 185 Q 120 192 128 192 Q 136 192 140 185 Q 138 176 134 158"
            stroke="#a06030" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          {/* Nose tip */}
          <ellipse cx="128" cy="190" rx="10" ry="6" fill="#b86a38" opacity="0.35"/>
          {/* Nostrils */}
          <ellipse cx="122" cy="191" rx="5" ry="3.5" fill="#8a4820" opacity="0.55"/>
          <ellipse cx="134" cy="191" rx="5" ry="3.5" fill="#8a4820" opacity="0.55"/>

          {/* ── Mouth ── animated ── */}
          <path d={mp} stroke="#7a3b1e" strokeWidth="2.8" fill="none" strokeLinecap="round"
            style={{ transition: 'd 0.08s ease' }}/>
          {/* Lip detail */}
          {(mouthPhase % 4) > 0 && (
            <ellipse cx="128" cy={200 + (mouthPhase % 4) * 1.5} rx={14 + mouthPhase % 4} ry={3 + mouthPhase % 4}
              fill="#c0392b" opacity="0.5"/>
          )}
          {/* Smile lines */}
          <path d="M 110 210 Q 108 216 112 220" stroke="#a06030" strokeWidth="1.2" fill="none" opacity="0.4"/>
          <path d="M 146 210 Q 148 216 144 220" stroke="#a06030" strokeWidth="1.2" fill="none" opacity="0.4"/>

          {/* ── Chin / jaw detail ── */}
          <ellipse cx="128" cy="228" rx="28" ry="8" fill="#b8723a" opacity="0.2"/>

          {/* ── Ear shadows ── */}
          <ellipse cx="70"  cy="175" rx="8"  ry="14" fill="#b06030" opacity="0.6"/>
          <ellipse cx="186" cy="175" rx="8"  ry="14" fill="#b06030" opacity="0.6"/>
          <ellipse cx="70"  cy="175" rx="5"  ry="10" fill="#984f20" opacity="0.4"/>
          <ellipse cx="186" cy="175" rx="5"  ry="10" fill="#984f20" opacity="0.4"/>
        </g>

        {/* ── Sound / pulse rings when speaking ── */}
        {speaking && [0, 1, 2].map(i => (
          <circle key={i} cx="32" cy="170" r={10 + i * 11}
            fill="none" stroke="#e91e8c"
            strokeWidth={2.2 - i * 0.5}
            opacity={0.7 - i * 0.2}
            style={{ animation: `ping-out ${0.9 + i * 0.35}s ease-out ${i * 0.28}s infinite` }}
          />
        ))}

        {/* ── Floating tech emoji ── */}
        <text x="10"  y="82"  fontSize="16" style={{ animation: 'char-float 4.5s ease-in-out infinite' }}>☁️</text>
        <text x="218" y="240" fontSize="14" style={{ animation: 'char-float 3.8s ease-in-out 0.6s infinite' }}>🤖</text>
        <text x="12"  y="240" fontSize="13" style={{ animation: 'char-float 4.2s ease-in-out 1.2s infinite' }}>⚙️</text>
        <text x="220" y="88"  fontSize="12" fill="#f472b6" style={{ animation: 'char-float 3.6s ease-in-out 0.3s infinite', fontFamily: 'monospace' }}>&lt;/&gt;</text>
      </svg>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────── */
export default function SpeakingIntro() {
  const [visible,   setVisible]   = useState(true)
  const [speaking,  setSpeaking]  = useState(false)
  const [started,   setStarted]   = useState(false)
  const [mouthPhase, setMouthPhase] = useState(0)
  const [blinkActive, setBlinkActive] = useState(false)
  const [line,      setLine]      = useState(0)   // 0 = name, 1 = role

  const mouthTimer = useRef(null)
  const blinkTimer = useRef(null)

  /* ── Auto-start audio immediately when user clicks the button ── */
  const handleStart = () => {
    if (started) return
    setStarted(true)
    setSpeaking(true)
    setLine(0)

    // Web Speech API — gravitas: slow rate, deep pitch
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()

      const speak = () => {
        const u = new SpeechSynthesisUtterance(SPEECH)
        u.rate   = 0.88   // slower = gravitas
        u.pitch  = 0.82   // lower = deeper voice
        u.volume = 1

        const voices = window.speechSynthesis.getVoices()
        // Prefer deep male voices
        const deep = voices.find(v =>
          /Google UK English Male|Microsoft David|Daniel|Alex|Arthur|Thomas/i.test(v.name)
        ) || voices.find(v => v.lang === 'en-GB' || v.lang === 'en-US')
        if (deep) u.voice = deep

        u.onboundary = (e) => {
          // Switch to role line roughly halfway
          if (e.charIndex > SPEECH.length * 0.45) setLine(1)
        }
        u.onend = () => {
          setSpeaking(false)
          setTimeout(dismiss, 800)
        }
        window.speechSynthesis.speak(u)
      }

      // voices may not be loaded yet
      if (window.speechSynthesis.getVoices().length > 0) {
        speak()
      } else {
        window.speechSynthesis.onvoiceschanged = () => { speak(); window.speechSynthesis.onvoiceschanged = null }
      }
    } else {
      // No TTS — animate for 4s then dismiss
      setTimeout(() => { setLine(1) }, 2000)
      setTimeout(() => { setSpeaking(false); dismiss() }, 4000)
    }

    // Hard cap: dismiss after 5s no matter what
    setTimeout(dismiss, 5200)
  }

  const dismiss = () => {
    window.speechSynthesis?.cancel()
    setSpeaking(false)
    setVisible(false)
  }

  /* ── Mouth animation while speaking ── */
  useEffect(() => {
    if (speaking) {
      mouthTimer.current = setInterval(() => setMouthPhase(p => p + 1), 105)
    } else {
      clearInterval(mouthTimer.current)
      setMouthPhase(0)
    }
    return () => clearInterval(mouthTimer.current)
  }, [speaking])

  /* ── Random blink ── */
  useEffect(() => {
    if (!visible) return
    const schedule = () => {
      blinkTimer.current = setTimeout(() => {
        setBlinkActive(true)
        setTimeout(() => { setBlinkActive(false); schedule() }, 130)
      }, 1800 + Math.random() * 2600)
    }
    schedule()
    return () => clearTimeout(blinkTimer.current)
  }, [visible])

  /* ── Cleanup ── */
  useEffect(() => () => {
    window.speechSynthesis?.cancel()
    clearInterval(mouthTimer.current)
    clearTimeout(blinkTimer.current)
  }, [])

  const DISPLAY_LINES = [
    "👋 Hi! I'm Abhishek Sawant",
    "Enterprise DevOps & Cloud Architect 🚀",
  ]

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(16px)' }}
          role="dialog"
          aria-label="Portfolio introduction"
        >
          {/* Progress bar (only after start) */}
          {started && (
            <motion.div
              className="absolute top-0 left-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #e91e8c, #8b1a4a)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
            />
          )}

          {/* Skip */}
          <button onClick={dismiss}
            className="absolute top-4 right-4 px-3 py-1 text-xs text-text-muted border border-surface-2 rounded-lg hover:text-accent-pink hover:border-accent-pink transition-colors z-10">
            Skip →
          </button>

          {/* Layout */}
          <div className="max-w-2xl w-full mx-4 flex flex-col md:flex-row items-center gap-8">

            {/* ── Portrait ── */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.55, type: 'spring', bounce: 0.38 }}
              className="flex-shrink-0 w-52 h-52 md:w-60 md:h-60"
            >
              <Portrait speaking={speaking} mouthPhase={mouthPhase} blinkActive={blinkActive}/>
            </motion.div>

            {/* ── Text + controls ── */}
            <div className="flex-1 flex flex-col gap-4 w-full">

              {/* Speech bubble */}
              <div className="relative p-5 rounded-2xl border border-accent-pink/30 min-h-[110px] flex flex-col justify-between"
                style={{ background: 'rgba(20,20,20,0.9)' }}>
                {/* MD pointer */}
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3
                  w-0 h-0 border-t-[10px] border-b-[10px] border-r-[14px]
                  border-t-transparent border-b-transparent"
                  style={{ borderRightColor: 'rgba(20,20,20,0.9)' }}/>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="font-heading font-bold text-text-primary leading-snug"
                    style={{ fontSize: line === 0 ? '1.25rem' : '1.05rem' }}
                  >
                    {DISPLAY_LINES[line]}
                  </motion.p>
                </AnimatePresence>

                <p className="text-text-muted text-xs mt-1">
                  Cloud · DevOps · AIOps · GenAI · MLOps · 10+ Years
                </p>

                {/* Sound-wave bars */}
                <div className="flex gap-[3px] items-end justify-start h-6 mt-3">
                  {[3,7,11,6,14,8,5,12,7,4,9,6,4].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 rounded-full"
                      style={{
                        height: `${h}px`,
                        background: '#e91e8c',
                        opacity: speaking ? 0.7 : 0.2,
                        transformOrigin: 'bottom',
                        animation: speaking
                          ? `soundbar ${0.3 + (i % 5) * 0.08}s ease-in-out ${i * 0.055}s infinite`
                          : 'none',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* CTA button */}
              {!started ? (
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  onClick={handleStart}
                  className="w-full py-3.5 font-heading font-semibold rounded-xl text-white text-sm
                    flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:scale-[1.02]
                    shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #e91e8c, #8b1a4a)', boxShadow: '0 0 20px rgba(233,30,140,0.3)' }}
                >
                  <span style={{ fontSize: '1.1rem' }}>🔊</span>
                  Play Introduction  <span className="text-white/60 text-xs ml-1">~4 sec</span>
                </motion.button>
              ) : (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={dismiss}
                  className="w-full py-2.5 border border-accent-pink/50 text-accent-pink font-semibold rounded-xl
                    hover:bg-accent-pink/10 transition-all text-sm font-heading"
                >
                  Explore Portfolio →
                </motion.button>
              )}

              {/* Note about browser audio */}
              {!started && (
                <p className="text-text-muted text-[11px] text-center opacity-60">
                  Requires one click to enable browser audio
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
