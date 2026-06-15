import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { contact } from '../../data/portfolio'

/* ──────────────────────────────────────────────
   EmailJS config — fill these in once you create
   your EmailJS account at https://emailjs.com
   ────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = 'service_zl5mkim'
const EMAILJS_TEMPLATE_ID = 'template_n3v37en'
const EMAILJS_PUBLIC_KEY  = 'rh_IW0_RBKedbyZSQ'

/* ── Icons ── */
function MapPinIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function GithubIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}
function SendIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  )
}

const contactItems = [
  { icon: <MapPinIcon />, label: 'Location', value: null, href: null, display: contact.location },
  { icon: <MailIcon />,   label: 'Email',    value: contact.email,    href: `mailto:${contact.email}` },
  { icon: <PhoneIcon />,  label: 'Phone',    value: contact.phone,    href: `tel:${contact.phone}` },
]

const socials = [
  { icon: <LinkedinIcon />, label: 'LinkedIn', href: contact.linkedin },
  { icon: <GithubIcon />,   label: 'GitHub',   href: contact.github },
]

/* ── Reason chips ── */
const REASONS = ['Enterprise Project', 'Consulting', 'Full-time Role', 'Freelance', 'Collaboration', 'Other']

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', company: '', reason: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const selectReason = r => setForm(prev => ({ ...prev, reason: r }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          company:    form.company || 'N/A',
          reason:     form.reason  || 'General',
          message:    form.message,
          to_email:   contact.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', company: '', reason: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-pink text-sm font-semibold tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-text-primary mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full mb-4" />
          <p className="text-text-muted text-sm max-w-md mx-auto">
            Open to senior engineering roles, consulting engagements, and strategic collaborations across DevSecOps, SRE, and Cloud Architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="p-6 bg-background rounded-2xl border border-surface-2">
              <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-accent-pink rounded-full" />
                Contact Details
              </h3>
              <div className="space-y-4">
                {contactItems.map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-accent-pink mt-0.5 flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-text-muted text-xs mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-text-secondary text-sm hover:text-accent-pink transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text-secondary text-sm">{item.display}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-background rounded-xl border border-surface-2 text-text-secondary hover:border-accent-pink hover:text-accent-pink transition-all text-sm font-medium"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>

            {/* Availability note */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-green-500/5 rounded-xl border border-green-500/20"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">Currently Available</span>
              </div>
              <p className="text-text-muted text-xs leading-relaxed">
                Open to enterprise roles, consulting engagements, and strategic partnerships. Response within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="p-8 bg-background rounded-2xl border border-surface-2">
              <h3 className="font-heading font-bold text-text-primary mb-6 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-accent-pink rounded-full" />
                Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-5xl mb-4">🎉</div>
                    <h4 className="font-heading font-bold text-text-primary text-xl mb-2">Message Sent!</h4>
                    <p className="text-text-muted text-sm mb-6">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 border border-accent-pink text-accent-pink rounded-xl text-sm font-semibold hover:bg-accent-pink/10 transition-all"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-text-muted text-xs font-medium mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 bg-surface rounded-lg border border-surface-2 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-pink/50 focus:ring-1 focus:ring-accent-pink/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-text-muted text-xs font-medium mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 bg-surface rounded-lg border border-surface-2 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-pink/50 focus:ring-1 focus:ring-accent-pink/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-text-muted text-xs font-medium mb-1.5">Company / Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-2.5 bg-surface rounded-lg border border-surface-2 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-pink/50 focus:ring-1 focus:ring-accent-pink/20 transition-all"
                      />
                    </div>

                    {/* Reason chips */}
                    <div>
                      <label className="block text-text-muted text-xs font-medium mb-2">Reason for Contact</label>
                      <div className="flex flex-wrap gap-2">
                        {REASONS.map(r => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => selectReason(r)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                              form.reason === r
                                ? 'bg-accent-pink text-white shadow-lg shadow-accent-pink/25'
                                : 'border border-surface-2 text-text-muted hover:border-accent-pink/50 hover:text-accent-pink'
                            }`}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-text-muted text-xs font-medium mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        className="w-full px-4 py-2.5 bg-surface rounded-lg border border-surface-2 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-pink/50 focus:ring-1 focus:ring-accent-pink/20 transition-all resize-none"
                      />
                    </div>

                    {/* Error */}
                    {status === 'error' && (
                      <p className="text-red-400 text-xs">Something went wrong. Please try again or email me directly.</p>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-accent-pink to-accent-maroon text-white font-semibold rounded-xl text-sm shadow-lg shadow-accent-pink/25 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all font-heading"
                    >
                      {status === 'sending' ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <SendIcon />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-text-muted text-xs text-center">
                      🔒 Your information is private and will only be used to respond to your inquiry.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
