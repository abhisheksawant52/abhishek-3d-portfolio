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
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-pink text-sm font-semibold tracking-widest uppercase mb-2">Who I Am</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-text-primary mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full" />
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: '12+', label: 'Years Experience', icon: '🏆' },
            { value: '5',   label: 'Certifications',   icon: '📜' },
            { value: '4',   label: 'Countries Worked', icon: '🌍' },
            { value: '500+', label: 'Fortune Clients', icon: '🚀' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 0 24px rgba(233,30,140,0.2)' }}
              className="p-5 bg-surface rounded-xl border border-surface-2 hover:border-accent-pink/40 text-center transition-all"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-extrabold font-heading text-accent-pink leading-none">
                <AnimatedCounter target={stat.value} />
              </p>
              <p className="text-text-muted text-xs mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Two-column: summary + education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-20"
        >
          {/* Summary */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-accent-pink rounded-full" />
              Professional Summary
            </h3>
            <p className="text-text-secondary text-base leading-relaxed">
              {about.summary}
            </p>

            {/* Key traits */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['Enterprise Architect', 'Fortune 500', 'Team Leader', 'CoE Builder', 'AIOps Expert', 'FinOps', 'SRE Champion'].map(t => (
                <span key={t} className="px-3 py-1 text-xs font-medium rounded-full border border-accent-pink/30 text-accent-pink bg-accent-pink/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-accent-pink rounded-full" />
              Education
            </h3>
            <div className="space-y-4">
              {about.education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  whileHover={{ x: 4 }}
                  className="p-4 bg-surface rounded-xl border-l-2 border-accent-pink hover:border-accent-pink transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">🎓</span>
                    <div>
                      <p className="text-text-primary font-semibold text-sm">{edu.degree}</p>
                      <p className="text-text-secondary text-xs mt-0.5">{edu.institution}</p>
                      <p className="text-accent-pink text-xs mt-1 font-medium">{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="font-heading text-3xl font-bold text-text-primary mb-2">What I Do</h3>
          <p className="text-text-muted text-sm">Core areas of expertise across my 10+ year career</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {about.expertise.map((item) => (
            <motion.div
              key={item.title}
              variants={cardItem}
              whileHover={{ y: -6, boxShadow: '0 0 30px rgba(233,30,140,0.18)' }}
              className="group p-6 bg-surface rounded-2xl border border-surface-2 hover:border-accent-pink/50 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-pink/10 border border-accent-pink/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-heading text-text-primary font-bold text-base mb-2">{item.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              <div className="mt-4 w-8 h-0.5 bg-accent-pink/40 rounded-full group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
