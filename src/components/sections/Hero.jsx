import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { contact } from '../../data/portfolio'

const stats = [
  { value: '14+', label: 'Years Experience' },
  { value: '6', label: 'Credentials & Courses' },
  { value: '4', label: 'Countries' },
  { value: '27', label: 'Team Members' },
]

const socialLinks = [
  { href: contact.linkedin, label: 'LinkedIn' },
  { href: contact.github, label: 'GitHub' },
  { href: `mailto:${contact.email}`, label: 'Email' },
]

const floatingSkills = [
  { label: 'Agentic AI', kind: 'spark', color: '#a855f7', position: 'left-[2%] top-[10%]' },
  { label: 'RAG', kind: 'nodes', color: '#ec4899', position: 'right-[1%] top-[18%]' },
  { label: 'MCP', kind: 'nodes', color: '#f97316', position: 'left-[-2%] top-[39%]' },
  { label: 'Kubernetes', kind: 'cloud', color: '#4387ed', position: 'right-[-2%] top-[45%]' },
  { label: 'LLMOps', kind: 'spark', color: '#8b5cf6', position: 'left-[1%] bottom-[20%]' },
  { label: 'AWS', kind: 'cloud', color: '#f59e0b', position: 'right-[9%] bottom-[8%]' },
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

function SkillIcon({ kind }) {
  if (kind === 'spark') {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="M19 15v4m-2-2h4" /></svg>
  }
  if (kind === 'nodes') {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="m8.3 10.8 7.4-3.6M8.3 13.2l7.4 3.6" /></svg>
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.1 8.6 4.7 4.7 0 0 0 7 18Z" /></svg>
}

function FloatingSkill({ label, kind, color, position, index }) {
  return (
    <div
      aria-hidden="true"
      className={`hero-float-chip hero-float-${index} absolute ${position}`}
      style={{ '--badge-color': color }}
    >
      <span className="hero-float-icon"><SkillIcon kind={kind} /></span>
      <span>{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24">
      <div className="hero-particle-field" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-10rem] top-[22%] h-[34rem] w-[34rem] rounded-full bg-accent-maroon/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/5 px-4 py-1.5 text-xs font-semibold text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            AI Platform Lead <span className="text-text-muted">· HCL Technologies</span>
          </div>

          <p className="mb-2 text-base font-medium text-text-secondary">Hello, I’m</p>
          <h1 className="mb-5 font-heading text-6xl font-extrabold leading-[0.96] tracking-tight text-text-primary sm:text-7xl lg:text-[5.25rem]">
            Abhishek<br />Sawant
          </h1>
          <h2 className="mb-5 font-heading text-2xl font-semibold leading-tight text-accent-pink sm:text-[1.7rem]">
            AI Platform Lead &amp; Enterprise Architect
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            I design secure foundations for GenAI and agentic AI platforms, bringing together MCP, cloud architecture, and platform engineering. I bring 14+ years of experience and currently lead a global team of 27 architects and engineers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-pink to-accent-maroon px-6 py-3.5 text-sm font-semibold text-white shadow-pink-md transition duration-200 hover:-translate-y-0.5 hover:shadow-pink-lg"
            >
              Let’s connect <ArrowDown size={16} className="-rotate-45" />
            </a>
            <a
              href="/Abhishek_Sawant_Resume.pdf"
              download="Abhishek_Sawant_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-accent-pink/50 px-6 py-3.5 text-sm font-semibold text-accent-pink transition duration-200 hover:bg-accent-pink/10"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
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

          <div className="mt-8 grid max-w-xl grid-cols-4 gap-3 border-t border-surface-2 pt-6">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="font-heading text-2xl font-extrabold text-accent-pink sm:text-3xl">{value}</p>
                <p className="mt-1 text-[10px] leading-4 text-text-muted sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          className="relative mx-auto flex min-h-[420px] w-full max-w-lg items-center justify-center sm:min-h-[500px]"
        >
          <div className="hero-orbit hero-orbit-outer h-[350px] w-[350px] sm:h-[410px] sm:w-[410px]" />
          <div className="hero-orbit hero-orbit-inner h-[310px] w-[310px] sm:h-[360px] sm:w-[360px]" />
          <div className="hero-portrait-glow absolute h-[300px] w-[300px] rounded-full sm:h-[330px] sm:w-[330px]" />
          <div className="profile-float relative z-10 h-[250px] w-[250px] overflow-hidden rounded-full border-2 border-accent-pink/60 shadow-[0_0_55px_rgba(233,30,140,0.3)] sm:h-[290px] sm:w-[290px]">
            <img
              src="/abhishek.jpg"
              alt="Abhishek Sawant"
              className="h-full w-full object-cover object-top"
            />
          </div>
          {floatingSkills.map((skill, index) => (
            <FloatingSkill key={skill.label} {...skill} index={index + 1} />
          ))}
        </motion.div>
      </div>

      <div className="relative mt-8 flex justify-center text-text-muted sm:mt-0 lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-[10px] font-medium tracking-[0.25em] transition-colors hover:text-accent-pink">
          SCROLL <ArrowDown size={15} />
        </a>
      </div>
    </section>
  )
}
