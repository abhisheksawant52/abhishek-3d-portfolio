import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { contact } from '../../data/portfolio'

const stats = [
  { value: '14+', label: 'Years in technology' },
  { value: '27', label: 'Engineers led' },
  { value: '4', label: 'Countries worked in' },
]

const socialLinks = [
  { href: contact.linkedin, label: 'LinkedIn' },
  { href: contact.github, label: 'GitHub' },
  { href: `mailto:${contact.email}`, label: 'Email' },
]

function SocialIcon({ label }) {
  if (label === 'LinkedIn') {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452z" />
      </svg>
    )
  }

  if (label === 'GitHub') {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.25 3.27 2.25.73 0 1.31-.23 1.77-.61.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9z" />
      </svg>
    )
  }

  return <Mail size={17} />
}

function FloatingTechBadge({ label, kind, className }) {
  return (
    <div aria-hidden="true" className={`hero-float-chip ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-pink/10 text-accent-pink">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          {kind === 'spark' && <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" /><path d="M19 15v4M17 17h4M5 16v3M3.5 17.5h3" /></>}
          {kind === 'nodes' && <><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="m8.3 10.8 7.4-3.6M8.3 13.2l7.4 3.6" /></>}
          {kind === 'cloud' && <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.1 8.6 4.7 4.7 0 0 0 7 18z" />}
        </svg>
      </span>
      <span className="text-xs font-semibold text-text-secondary">{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute -right-32 top-16 h-96 w-96 rounded-full bg-accent-pink/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-pink/25 bg-accent-pink/5 px-3.5 py-1.5 text-xs font-medium text-accent-pink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-pink" />
            AI Platform Lead <span className="text-text-muted">at HCL Technologies</span>
          </div>

          <p className="mb-3 text-sm font-semibold tracking-wide text-text-muted">Hello, I’m</p>
          <h1 className="mb-5 font-heading text-5xl font-bold leading-[1.04] tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
            Abhishek<br />Sawant<span className="text-accent-pink">.</span>
          </h1>
          <h2 className="mb-5 max-w-2xl font-heading text-xl font-semibold leading-snug text-text-secondary sm:text-2xl">
            AI Platform Lead &amp; Enterprise Architect
          </h2>
          <p className="max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
            I design secure, scalable foundations for enterprise AI. My work brings together agentic AI, MCP, cloud architecture, and platform engineering, grounded in 14+ years across technology and infrastructure.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-pink px-5 py-3 text-sm font-semibold text-background shadow-card transition duration-200 hover:-translate-y-0.5 hover:bg-accent-pink-light"
            >
              Let’s connect <ArrowDown size={16} className="-rotate-45" />
            </a>
            <a
              href="/Abhishek_Sawant_Resume.pdf"
              download="Abhishek_Sawant_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-surface-2 bg-surface/60 px-5 py-3 text-sm font-semibold text-text-secondary transition duration-200 hover:border-accent-pink/50 hover:text-text-primary"
            >
              <Download size={16} /> Resume
            </a>
            <div className="ml-1 flex items-center gap-2">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-2 text-text-muted transition duration-200 hover:border-accent-pink/50 hover:text-accent-pink"
                >
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-surface-2 pt-6">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs leading-5 text-text-muted sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
          className="mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="relative py-5">
            <div className="profile-float relative overflow-hidden rounded-2xl border border-surface-2 bg-surface p-2 shadow-card">
              <img
                src="/abhishek.jpg"
                alt="Abhishek Sawant"
                className="aspect-[4/5] w-full rounded-xl object-cover object-top"
              />
              <div className="absolute inset-x-2 bottom-2 rounded-b-xl bg-gradient-to-t from-background/95 via-background/75 to-transparent px-6 pb-6 pt-20">
                <p className="text-sm font-semibold text-text-primary">Building enterprise AI platforms</p>
                <p className="mt-1 text-xs text-text-muted">GenAI · Agentic AI · Cloud · Platform Engineering</p>
              </div>
            </div>
            <FloatingTechBadge label="Agentic AI" kind="spark" className="hero-float-one absolute -left-5 top-16" />
            <FloatingTechBadge label="MCP" kind="nodes" className="hero-float-two absolute -right-5 top-[42%]" />
            <FloatingTechBadge label="Cloud platforms" kind="cloud" className="hero-float-three absolute -left-4 bottom-16" />
          </div>
          <p className="mt-4 text-center text-xs text-text-muted">Mumbai, India <span className="mx-1.5 text-accent-pink">·</span> Working across global teams</p>
        </motion.div>
      </div>
    </section>
  )
}
