import { motion } from 'framer-motion'
import { contact } from '../../data/portfolio'

function LinkedinIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function GithubIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

const footerLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Tech Stack',     href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="border-t border-surface-2 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-pink to-accent-maroon flex items-center justify-center shadow-lg shadow-accent-pink/20">
                <span className="text-white font-bold text-sm font-heading">AS</span>
              </div>
              <span className="font-heading font-bold text-text-primary">Abhishek Sawant</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Enterprise DevOps &amp; Cloud Solution Architect building AI-powered, cloud-native platforms for Fortune 500 companies.
            </p>
            <div className="flex items-center gap-1.5 mt-3">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Available for Enterprise Projects</span>
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <p className="font-heading font-semibold text-text-primary text-sm mb-4">Quick Links</p>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href.slice(1))}
                  className="text-left text-text-muted text-sm hover:text-accent-pink transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading font-semibold text-text-primary text-sm mb-4">Connect</p>
            <div className="space-y-3">
              {[
                { icon: <MailIcon />,    href: `mailto:${contact.email}`,  label: contact.email },
                { icon: <LinkedinIcon />, href: contact.linkedin,           label: 'LinkedIn Profile', external: true },
                { icon: <GithubIcon />,   href: contact.github,             label: 'GitHub Profile',   external: true },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2.5 text-text-muted text-sm hover:text-accent-pink transition-colors"
                >
                  <span className="text-accent-pink flex-shrink-0">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-surface-2 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © 2025{' '}
            <span className="text-accent-pink font-medium">Abhishek Sawant</span>
            {' '}· All rights reserved
          </p>
          <p className="text-text-muted text-xs">
            Built with React · Three.js · Framer Motion · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
