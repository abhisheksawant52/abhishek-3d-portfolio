/**
 * VideoHero.jsx
 * Cinematic fullscreen video hero section.
 *
 * When public/intro.mp4 exists → plays the talking-head video.
 * When it doesn't → shows an animated placeholder so the layout
 *   is ready the moment you drop the file in.
 *
 * Features:
 *  • Blurred ambient duplicate background layer
 *  • Cinematic dark gradient overlays
 *  • Three.js bokeh particle layer (CinematicLayer)
 *  • GSAP entrance animations for name / title / tagline
 *  • Glassmorphism play/pause + mute/unmute controls
 *  • "Tap for sound" animated badge (auto-hides after 4 s)
 *  • Scroll indicator with animated pulse line
 */
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import CinematicLayer from './CinematicLayer'
import { contact } from '../../data/portfolio'

/* ── Helpers ────────────────────────────────────────── */
function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="5,3 19,12 5,21"/>
    </svg>
  )
}
function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16"/>
      <rect x="14" y="4" width="4" height="16"/>
    </svg>
  )
}
function MuteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/>
      <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  )
}
function UnmuteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/>
      <path d="M15.54,8.46a5,5,0,0,1,0,7.07"/><path d="M19.07,4.93a10,10,0,0,1,0,14.14"/>
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

/* Glassmorphism control button */
function GlassBtn({ onClick, children, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '50%',
        width: 42, height: 42,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', cursor: 'pointer',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(233,30,140,0.25)'; e.currentTarget.style.borderColor = '#e91e8c' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
    >
      {children}
    </button>
  )
}

/* Animated placeholder shown when video file is missing */
function CinematicPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a12 40%, #0a0a1a 100%)' }}>
      {/* Desk setup illustration */}
      <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full opacity-25" aria-hidden="true">
        {/* Bookshelf */}
        <rect x="580" y="60" width="200" height="300" fill="#1a1008" rx="4"/>
        {[80,110,140,170,200,230,260,290,320].map((y,i) => (
          <rect key={i} x="590" y={y} width={30+Math.sin(i)*15} height="22" rx="2"
            fill={['#c0392b','#2980b9','#27ae60','#8e44ad','#d35400','#16a085','#2c3e50','#e74c3c','#3498db'][i]}/>
        ))}
        {/* Desk */}
        <rect x="80"  y="340" width="640" height="18" rx="4" fill="#2d1a0a"/>
        <rect x="120" y="358" width="18"  height="100" rx="4" fill="#2d1a0a"/>
        <rect x="660" y="358" width="18"  height="100" rx="4" fill="#2d1a0a"/>
        {/* Monitor */}
        <rect x="260" y="160" width="280" height="175" rx="8" fill="#111" stroke="#333" strokeWidth="2"/>
        <rect x="268" y="168" width="264" height="159" rx="5" fill="#0a0a1a"/>
        {/* Monitor UI lines */}
        {[185,200,215,230,245,260,275,290].map((y,i) => (
          <rect key={i} x="278" y={y} width={80+Math.random()*100} height="4" rx="2" fill="#e91e8c" opacity={0.3+i*0.05}/>
        ))}
        <rect x="278" y="185" width="120" height="6" rx="3" fill="#e91e8c" opacity="0.8"/>
        {/* Monitor stand */}
        <rect x="385" y="335" width="30" height="10" rx="2" fill="#333"/>
        <rect x="370" y="338" width="60" height="6"  rx="3" fill="#444"/>
        {/* Laptop */}
        <rect x="100" y="280" width="140" height="90"  rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1.5"/>
        <rect x="107" y="287" width="126" height="76"  rx="4" fill="#0d0d1a"/>
        {/* Laptop screen code */}
        {[300,312,324,336,348].map((y,i) => (
          <rect key={i} x="115" y={y} width={30+i*12} height="3" rx="1.5"
            fill={['#e91e8c','#a78bfa','#34d399','#f472b6','#e91e8c'][i]} opacity="0.7"/>
        ))}
        {/* Coffee mug */}
        <rect x="480" y="310" width="36" height="32" rx="6" fill="#8b4513"/>
        <path d="M 516 318 Q 530 318 530 330 Q 530 342 516 342" stroke="#8b4513" strokeWidth="3" fill="none"/>
        {/* Steam */}
        <path d="M 490 308 Q 492 296 490 284" stroke="#aaa" strokeWidth="1.5" fill="none" opacity="0.5" strokeDasharray="3 3"/>
        <path d="M 500 308 Q 502 292 500 280" stroke="#aaa" strokeWidth="1.5" fill="none" opacity="0.5" strokeDasharray="3 3"/>
        {/* Desk lamp */}
        <line x1="430" y1="340" x2="430" y2="270" stroke="#555" strokeWidth="4"/>
        <path d="M 430 270 Q 460 250 470 230" stroke="#555" strokeWidth="3" fill="none"/>
        <ellipse cx="475" cy="225" rx="22" ry="12" fill="#f97316" opacity="0.9"/>
        {/* Warm lamp glow */}
        <radialGradient id="lamp" cx="475" cy="340" r="200">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="475" cy="340" rx="200" ry="150" fill="url(#lamp)"/>
        {/* Person silhouette */}
        <ellipse cx="400" cy="235" rx="48" ry="52" fill="#1a0808" opacity="0.8"/>
        <rect x="330" y="270" width="140" height="72" rx="20" fill="#1a0808" opacity="0.8"/>
        {/* Figurrines on shelf */}
        <ellipse cx="620" cy="350" rx="10" ry="22" fill="#e91e8c" opacity="0.6"/>
        <circle  cx="620" cy="325" r="10" fill="#e91e8c" opacity="0.6"/>
        <ellipse cx="645" cy="350" rx="8"  ry="18" fill="#3498db" opacity="0.6"/>
        <circle  cx="645" cy="330" r="8"  fill="#3498db" opacity="0.6"/>
      </svg>

      {/* Gradient overlays */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}/>

      {/* Centered avatar placeholder */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-36 h-36 rounded-full flex items-center justify-center text-6xl"
          style={{
            background: 'rgba(233,30,140,0.12)',
            border: '2px dashed rgba(233,30,140,0.4)',
            animation: 'glow-pulse 3s ease-in-out infinite',
          }}>
          🎬
        </div>
        <p className="text-white/40 text-sm font-medium tracking-widest uppercase">Video Loading…</p>
        <p className="text-white/25 text-xs">Drop intro.mp4 into public/ folder</p>
      </div>
    </div>
  )
}

/* ── Main component ──────────────────────────────────────────── */
export default function VideoHero({ videoSrc = '/intro.mp4' }) {
  const videoRef     = useRef(null)
  const videoBgRef   = useRef(null)
  const containerRef = useRef(null)
  const headlineRef  = useRef(null)
  const titleRef     = useRef(null)
  const tagRef       = useRef(null)
  const ctaRef       = useRef(null)

  const [playing, setPlaying] = useState(true)
  const [muted,   setMuted]   = useState(true)
  const [showHint, setShowHint] = useState(true)
  const [videoExists, setVideoExists] = useState(false)
  const [videoLoaded,  setVideoLoaded]  = useState(false)

  /* Check if video file exists */
  useEffect(() => {
    fetch(videoSrc, { method: 'HEAD' })
      .then(r => { if (r.ok) setVideoExists(true) })
      .catch(() => {})
  }, [videoSrc])

  /* GSAP entrance animations */
  useEffect(() => {
    const els = [headlineRef.current, titleRef.current, tagRef.current, ctaRef.current]
    if (!els[0]) return
    gsap.set(els, { opacity: 0, y: 48 })
    const tl = gsap.timeline({ delay: 0.6 })
    tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' })
      .to(titleRef.current,    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.7')
      .to(tagRef.current,      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .to(ctaRef.current,      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.3')
    return () => tl.kill()
  }, [])

  /* Auto-hide sound hint */
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4500)
    return () => clearTimeout(t)
  }, [])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else          { v.pause(); setPlaying(false) }
  }

  const toggleMute = () => {
    const v = videoRef.current
    const b = videoBgRef.current
    if (!v) return
    const nm = !v.muted
    v.muted = nm
    if (b) b.muted = nm
    setMuted(nm)
  }

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: 600 }}
    >
      {/* ── Video layers ── */}
      {videoExists ? (
        <>
          {/* Ambient blurred background */}
          <video
            ref={videoBgRef}
            src={videoSrc}
            autoPlay loop muted playsInline
            aria-hidden="true"
            onLoadedData={() => setVideoLoaded(true)}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              filter: 'blur(32px) brightness(0.35) saturate(1.4)',
              transform: 'scale(1.08)',
              zIndex: 1,
            }}
          />
          {/* Main foreground video */}
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay loop muted playsInline
            onLoadedData={() => setVideoLoaded(true)}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              zIndex: 2,
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 1s ease',
            }}
          />
        </>
      ) : (
        <div className="absolute inset-0 z-1">
          <CinematicPlaceholder />
        </div>
      )}

      {/* ── Gradient overlays ── */}
      <div className="absolute inset-0 z-20 pointer-events-none" style={{
        background: `
          linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 35%, transparent 60%, rgba(0,0,0,0.85) 100%),
          linear-gradient(to right,  rgba(0,0,0,0.6)  0%, transparent 50%),
          linear-gradient(to left,   rgba(0,0,0,0.3)  0%, transparent 40%)
        `,
      }}/>

      {/* ── Warm cinematic color grading overlay ── */}
      <div className="absolute inset-0 z-20 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 70%, rgba(249,115,22,0.07) 0%, transparent 60%)',
      }}/>

      {/* ── Three.js bokeh particle layer ── */}
      <CinematicLayer />

      {/* ── Content overlay ── */}
      <div className="absolute inset-0 z-30 flex flex-col justify-end pb-20 px-8 sm:px-12 lg:px-20 pointer-events-none">

        {/* Tagline */}
        <div ref={tagRef} className="mb-3 pointer-events-none">
          <span style={{
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#f97316',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 600,
          }}>
            Enterprise DevOps · Cloud Architecture · AIOps
          </span>
        </div>

        {/* Name — huge stacked */}
        <div ref={headlineRef} className="pointer-events-none">
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(3.2rem, 9vw, 8rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            textShadow: '0 4px 40px rgba(0,0,0,0.8)',
            marginBottom: '0.2rem',
          }}>
            Abhishek<br/>
            <span style={{
              background: 'linear-gradient(135deg, #e91e8c 0%, #f97316 60%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Sawant</span>
          </h1>
        </div>

        {/* Role */}
        <div ref={titleRef} className="mt-3 pointer-events-none">
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
            color: 'rgba(255,255,255,0.72)',
            fontWeight: 400,
            letterSpacing: '0.01em',
            maxWidth: 520,
            lineHeight: 1.5,
          }}>
            Enterprise DevOps & Cloud Solution Architect<br/>
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88em' }}>
              10+ years · 4 countries · Fortune 500 clients
            </span>
          </p>
        </div>

        {/* CTA row — pointer-events re-enabled */}
        <div ref={ctaRef} className="mt-6 flex items-center gap-4 pointer-events-auto flex-wrap">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, #e91e8c, #8b1a4a)',
              padding: '11px 28px',
              borderRadius: 10,
              color: '#fff',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 24px rgba(233,30,140,0.35)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(10px)',
              padding: '10px 26px',
              borderRadius: 10,
              color: '#fff',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: '0.9rem',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#e91e8c'; e.currentTarget.style.background = 'rgba(233,30,140,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
          >
            Hire Me
          </button>
          {/* Social links */}
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#e91e8c'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            aria-label="LinkedIn">
            <LinkedinIcon/>
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#e91e8c'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            aria-label="GitHub">
            <GithubIcon/>
          </a>
        </div>
      </div>

      {/* ── Video controls — top right ── */}
      {videoExists && (
        <div className="absolute top-5 right-5 z-40 flex gap-2">
          <GlassBtn onClick={togglePlay} label={playing ? 'Pause' : 'Play'}>
            {playing ? <PauseIcon/> : <PlayIcon/>}
          </GlassBtn>
          <GlassBtn onClick={toggleMute} label={muted ? 'Unmute' : 'Mute'}>
            {muted ? <UnmuteIcon/> : <MuteIcon/>}
          </GlassBtn>
        </div>
      )}

      {/* ── "Tap for sound" badge ── */}
      {videoExists && showHint && (
        <div
          className="absolute top-16 right-5 z-40 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5"
          style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.7)',
            animation: 'glow-pulse 2s ease-in-out infinite',
          }}
        >
          <span style={{ animation: 'char-float 1s ease-in-out infinite', fontSize: '0.8rem' }}>🔊</span>
          Tap for sound
        </div>
      )}

      {/* ── Scroll indicator ── */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 z-40 flex flex-col items-center gap-1 -translate-x-1/2"
        style={{ color: 'rgba(255,255,255,0.4)', cursor: 'pointer', background: 'none', border: 'none' }}
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>scroll</span>
        {/* Animated pulse line */}
        <div style={{ width: 1.5, height: 48, background: 'rgba(255,255,255,0.15)', borderRadius: 1, position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '40%',
            background: 'linear-gradient(to bottom, transparent, #e91e8c, transparent)',
            animation: 'char-float 1.6s ease-in-out infinite',
          }}/>
        </div>
      </button>
    </section>
  )
}
