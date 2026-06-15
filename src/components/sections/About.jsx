import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { about } from '../../data/portfolio'

/* ── Animated counter ── */
function AnimatedCounter({ target, duration = 1600 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const num = parseInt(target.replace(/\D/g, ''), 10)
    if (!num) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * num))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(num)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  const suffix = target.replace(/[0-9]/g, '')
  return <span ref={ref}>{count}{suffix}</span>
}

const cardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="py-16 bg-background relative overflow-hidden">
      {/* Background orbs */}
      <div className="bg-orb w-96 h-96 opacity-20" style={{ background: 'rgba(233,30,140,0.08)', top: '5%', left: '-10%' }} />
      <div className="bg-orb w-80 h-80 opacity-15" style={{ background: 'rgba(139,26,74,0.1)', bottom: '5%', right: '-8%', animationDelay: '4s' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-accent-pink text-xs font-semibold tracking-widest uppercase mb-1">Who I Am</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-primary mb-3">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full" />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
        >
          {[
            { value: '12+', label: 'Years Experience', icon: '🏆' },
            { value: '6',   label: 'Certifications',   icon: '📜' },
            { value: '4',   label: 'Countries Worked', icon: '🌍' },
            { value: '500+', label: 'Fortune Clients', icon: '🚀' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3, boxShadow: '0 0 20px rgba(233,30,140,0.2)' }}
              className="p-4 bg-surface rounded-xl border border-surface-2 hover:border-accent-pink/40 text-center transition-all"
            >
              <div className="text-xl mb-1">{stat.icon}</div>
              <p className="text-2xl font-extrabold font-heading text-accent-pink leading-none">
                <AnimatedCounter target={stat.value} />
              </p>
              <p className="text-text-muted text-xs mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary + Education + Personal — 3 col */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10"
        >
          {/* Summary */}
          <div className="lg:col-span-2 p-5 bg-surface rounded-2xl border border-surface-2">
            <h3 className="font-heading text-base font-bold text-text-primary mb-3 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-accent-pink rounded-full" />
              Professional Summary
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {about.summary}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['AI Platform Lead', 'Fortune 500', 'GenAI Architect', 'LLMOps', 'RAG', 'Agentic AI', 'FinOps', 'SRE'].map(t => (
                <span key={t} className="px-2.5 py-0.5 text-xs font-medium rounded-full border border-accent-pink/30 text-accent-pink bg-accent-pink/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Education + Personal stacked */}
          <div className="flex flex-col gap-4">
            {/* Education */}
            <div className="p-5 bg-surface rounded-2xl border border-surface-2 flex-1">
              <h3 className="font-heading text-base font-bold text-text-primary mb-3 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-accent-pink rounded-full" />
                Education
              </h3>
              <div className="space-y-3">
                {about.education.map((edu) => (
                  <div key={edu.degree} className="flex items-start gap-2.5">
                    <span className="text-lg mt-0.5">🎓</span>
                    <div>
                      <p className="text-text-primary font-semibold text-xs">{edu.degree}</p>
                      <p className="text-text-secondary text-xs">{edu.institution}</p>
                      <p className="text-accent-pink text-xs font-medium">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Personal quick info */}
            <div className="p-5 bg-surface rounded-2xl border border-surface-2">
              <h3 className="font-heading text-base font-bold text-text-primary mb-3 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-accent-pink rounded-full" />
                Personal
              </h3>
              <div className="space-y-1.5">
                {[
                  { label: '📍 Location', value: 'Mumbai, India' },
                  { label: '🌏 Open to', value: 'Global Onsite' },
                  { label: '🗣 Languages', value: 'English · Hindi · Marathi' },
                  { label: '🎯 Hobbies', value: 'Reading · Photography · Travel · Gaming' },
                ].map(item => (
                  <div key={item.label} className="flex items-start justify-between gap-2">
                    <span className="text-text-muted text-xs whitespace-nowrap">{item.label}</span>
                    <span className="text-text-secondary text-xs text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* What I Do — compact 3×2 grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h3 className="font-heading text-2xl font-bold text-text-primary">What I Do</h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {about.expertise.map((item) => (
            <motion.div
              key={item.title}
              variants={cardItem}
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(233,30,140,0.18)' }}
              className="group p-5 bg-surface rounded-xl border border-surface-2 hover:border-accent-pink/50 transition-all cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(90deg, transparent, #e91e8c, transparent)' }} />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-accent-pink/10 border border-accent-pink/20 flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-accent-pink/15 transition-all flex-shrink-0">
                  {item.icon}
                </div>
                <h4 className="font-heading text-text-primary font-bold text-sm">{item.title}</h4>
              </div>
              <p className="text-text-muted text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
