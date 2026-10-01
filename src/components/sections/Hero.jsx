import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { contact } from '../../data/portfolio'

const stats = [
  { value: '14+', label: 'Years in technology' },
  { value: '27', label: 'Engineers led' },
  { value: '4', label: 'Countries worked in' },
]

const socialLinks = [
  { href: contact.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: contact.github, label: 'GitHub', icon: Github },
  { href: `mailto:${contact.email}`, label: 'Email', icon: Mail },
]

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
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-2 text-text-muted transition duration-200 hover:border-accent-pink/50 hover:text-accent-pink"
                >
                  <Icon size={17} />
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
          <div className="relative overflow-hidden rounded-2xl border border-surface-2 bg-surface p-2 shadow-card">
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
          <p className="mt-4 text-center text-xs text-text-muted">Mumbai, India <span className="mx-1.5 text-accent-pink">·</span> Working across global teams</p>
        </motion.div>
      </div>
    </section>
  )
}
