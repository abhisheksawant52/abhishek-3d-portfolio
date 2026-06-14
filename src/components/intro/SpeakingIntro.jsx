import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── 4-second script ─────────────────────────────── */
const SPEECH_TEXT = "Hi! I'm Abhishek — DevOps and Cloud Architect. Welcome!"

const LINES = [
  "👋 Hi! I'm Abhishek Sawant",
  "DevOps & Cloud Architect 🚀",
]

/* ── Mouth shapes ─────────────────────────────────── */
function Mouth({ frame, speaking }) {
  if (!speaking) return <path d="M148 208 Q160 215 172 208" stroke="#7a3b1e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  const f = frame % 4
  if (f === 0) return <path d="M148 208 Q160 212 172 208" stroke="#7a3b1e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  if (f === 1) return <ellipse cx="160" cy="210" rx="8" ry="4" fill="#c0392b" stroke="#7a3b1e" strokeWidth="1.5"/>
  if (f === 2) return <ellipse cx="160" cy="211" rx="11" ry="7" fill="#c0392b" stroke="#7a3b1e" strokeWidth="1.5"/>
  return <ellipse cx="160" cy="210" rx="6" ry="3" fill="#c0392b" stroke="#7a3b1e" strokeWidth="1.5"/>
}

/* ── Avatar ───────────────────────────────────────── */
function Avatar({ speaking, mouth, blink }) {
  return (
    <svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="abg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e91e8c" stopOpacity="0.25"/>
          <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0"/>
        </radialGradient>
        <filter id="agl"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <style>{`
          @keyframes aob1{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
          @keyframes aob2{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
          .ao1{animation:aob1 7s linear infinite;transform-origin:140px 130px}
          .ao2{animation:aob2 11s linear infinite;transform-origin:140px 130px}
          @keyframes ahb{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
          .ahd{animation:ahb 1.4s ease-in-out infinite}
          @keyframes abb2{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
          .abd{animation:abb2 1.4s ease-in-out infinite}
        `}</style>
      </defs>
      <circle cx="140" cy="130" r="118" fill="url(#abg)"/>
      <ellipse className="ao1" cx="140" cy="130" rx="122" ry="32" fill="none" stroke="#e91e8c" strokeWidth="0.8" strokeDasharray="5 9" opacity="0.4"/>
      <ellipse className="ao2" cx="140" cy="130" rx="122" ry="32" fill="none" stroke="#8b1a4a" strokeWidth="0.8" strokeDasharray="3 11" opacity="0.3"/>
      {/* Body */}
      <g className="abd">
        <rect x="88" y="218" width="104" height="68" rx="10" fill="#1a1a2e"/>
        <path d="M122 221 L140 241 L158 221 Z" fill="#e91e8c" opacity="0.9"/>
      </g>
      {/* Neck */}
      <rect x="128" y="198" width="24" height="24" rx="7" fill="#c8a882"/>
      {/* Head */}
      <g className="ahd">
        <ellipse cx="140" cy="168" rx="52" ry="55" fill="#c8a882"/>
        <ellipse cx="140" cy="121" rx="52" ry="20" fill="#1a0a00"/>
        <rect x="88" y="121" width="104" height="18" rx="4" fill="#1a0a00"/>
        <ellipse cx="95" cy="147" rx="11" ry="21" fill="#1a0a00"/>
        <ellipse cx="185" cy="147" rx="11" ry="21" fill="#1a0a00"/>
        <path d="M115 154 Q124 150 133 154" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M147 154 Q156 150 165 154" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {blink ? (
          <>
            <path d="M115 168 Q124 164 133 168" stroke="#1a0a00" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M147 168 Q156 164 165 168" stroke="#1a0a00" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </>
        ) : (
          <>
            <ellipse cx="124" cy="168" rx="9" ry="10" fill="white"/>
            <ellipse cx="156" cy="168" rx="9" ry="10" fill="white"/>
            <circle cx="126" cy="170" r="5" fill="#1a0a00"/>
            <circle cx="158" cy="170" r="5" fill="#1a0a00"/>
            <circle cx="128" cy="168" r="1.5" fill="white"/>
            <circle cx="160" cy="168" r="1.5" fill="white"/>
          </>
        )}
        <rect x="111" y="158" width="22" height="16" rx="5" fill="none" stroke="#e91e8c" strokeWidth="2" filter="url(#agl)"/>
        <rect x="147" y="158" width="22" height="16" rx="5" fill="none" stroke="#e91e8c" strokeWidth="2" filter="url(#agl)"/>
        <line x1="133" y1="166" x2="147" y2="166" stroke="#e91e8c" strokeWidth="2"/>
        <line x1="88" y1="166" x2="111" y2="166" stroke="#e91e8c" strokeWidth="1.5"/>
        <line x1="169" y1="166" x2="192" y2="166" stroke="#e91e8c" strokeWidth="1.5"/>
        <Mouth frame={mouth} speaking={speaking}/>
        <rect x="84" y="165" width="8" height="11" rx="4" fill="#2d2d2d"/>
        <rect x="187" y="165" width="8" height="11" rx="4" fill="#2d2d2d"/>
        <circle cx="88" cy="172" r="2.5" fill="#e91e8c"/>
        <circle cx="191" cy="172" r="2.5" fill="#e91e8c"/>
      </g>
      {/* Sound rings */}
      {speaking && [1,2,3].map(i => (
        <circle key={i} cx="44" cy="168" r={6 + i * 7} fill="none" stroke="#e91e8c"
          strokeWidth={2 - i * 0.4} opacity={0.6 - i * 0.15}
          style={{ animation: `aob1 ${0.8 + i * 0.3}s ease-out infinite`, transformOrigin: '44px 168px' }}
        />
      ))}
    </svg>
  )
}

/* ── Main ─────────────────────────────────────────── */
export default function SpeakingIntro() {
  const [visible, setVisible] = useState(true)
  const [lineIdx, setLineIdx] = useState(0)
  const [speaking, setSpeaking] = useState(false)
  const [mouth, setMouth] = useState(0)
  const [blink, setBlink] = useState(false)
  const [started, setStarted] = useState(false)
  const mouthTimer = useRef(null)
  const blinkTimer = useRef(null)

  /* speak + auto-dismiss in 4 s */
  const startIntro = () => {
    if (started) return
    setStarted(true)
    setSpeaking(true)

    // Web Speech API
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(SPEECH_TEXT)
      u.rate = 1.2
      u.pitch = 1.05
      u.volume = 1
      const pickVoice = () => {
        const v = window.speechSynthesis.getVoices()
        const best = v.find(x => /Google US English|Microsoft Mark|Alex|Daniel/i.test(x.name))
          || v.find(x => x.lang === 'en-US') || v[0]
        if (best) u.voice = best
      }
      pickVoice()
      window.speechSynthesis.onvoiceschanged = pickVoice
      u.onend = () => { setSpeaking(false); dismiss() }
      window.speechSynthesis.speak(u)
    }

    // Advance lines: line 0 immediately, line 1 at 2 s
    setTimeout(() => setLineIdx(1), 2000)

    // Hard dismiss at 4 s regardless
    setTimeout(dismiss, 4000)
  }

  const dismiss = () => {
    window.speechSynthesis?.cancel()
    setSpeaking(false)
    setVisible(false)
  }

  /* mouth animation */
  useEffect(() => {
    if (speaking) mouthTimer.current = setInterval(() => setMouth(m => m + 1), 110)
    else clearInterval(mouthTimer.current)
    return () => clearInterval(mouthTimer.current)
  }, [speaking])

  /* blink */
  useEffect(() => {
    if (!visible) return
    const s = () => {
      blinkTimer.current = setTimeout(() => {
        setBlink(true)
        setTimeout(() => { setBlink(false); s() }, 140)
      }, 2000 + Math.random() * 2500)
    }
    s()
    return () => clearTimeout(blinkTimer.current)
  }, [visible])

  /* cleanup */
  useEffect(() => () => {
    window.speechSynthesis?.cancel()
    clearInterval(mouthTimer.current)
    clearTimeout(blinkTimer.current)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/96 backdrop-blur-lg"
          role="dialog"
          aria-label="Intro"
        >
          {/* 4-sec progress bar */}
          {started && (
            <motion.div
              className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-accent-pink to-accent-maroon"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 4, ease: 'linear' }}
            />
          )}

          {/* Skip */}
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 px-3 py-1 text-xs text-text-muted border border-surface-2 rounded-lg hover:text-accent-pink hover:border-accent-pink transition-colors"
          >
            Skip →
          </button>

          <div className="max-w-lg w-full mx-4 flex flex-col items-center gap-6">

            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.4 }}
              className="w-44 h-44 glow-pulse rounded-full"
            >
              <Avatar speaking={speaking} mouth={mouth} blink={blink}/>
            </motion.div>

            {/* Speech bubble */}
            <div className="w-full p-5 bg-surface rounded-2xl border border-accent-pink/30 text-center min-h-[90px] flex flex-col justify-center gap-2">
              <AnimatePresence mode="wait">
                <motion.p
                  key={lineIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="font-heading text-xl font-bold text-text-primary"
                >
                  {LINES[lineIdx]}
                </motion.p>
              </AnimatePresence>

              {/* Sound wave */}
              <div className="flex gap-1 items-end justify-center h-5">
                {[3,6,9,5,11,7,4,10,6,3,8,5,4].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={speaking
                      ? { height: [`${h}px`, `${Math.min(h * 2.5, 18)}px`, `${h}px`] }
                      : { height: '3px' }
                    }
                    transition={{ duration: 0.3 + i * 0.04, repeat: Infinity, delay: i * 0.05 }}
                    className="w-1 bg-accent-pink/60 rounded-full"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            {/* CTA */}
            {!started ? (
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={startIntro}
                className="w-full py-3 bg-gradient-to-r from-accent-pink to-accent-maroon text-white font-heading font-semibold rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-accent-pink/25 flex items-center justify-center gap-2 text-sm"
              >
                🔊 Play Intro (4 sec)
              </motion.button>
            ) : (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={dismiss}
                className="w-full py-2.5 border border-accent-pink/50 text-accent-pink font-semibold rounded-xl hover:bg-accent-pink/10 transition-all text-sm"
              >
                Enter Portfolio →
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
