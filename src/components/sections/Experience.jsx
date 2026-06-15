import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { experience } from '../../data/portfolio'

function ChevronIcon({ open }) {
  return (
    <svg
      width={14} height={14}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
      strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ExperienceCard({ item, isLeft, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      className={`w-full md:w-5/12 ml-8 md:ml-0 ${
        isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
      }`}
    >
      <motion.div
        whileHover={{ y: -3, boxShadow: '0 8px 30px rgba(233,30,140,0.12)' }}
        className={`p-5 bg-surface rounded-2xl border transition-all ${
          item.current ? 'border-accent-pink/40' : 'border-surface-2 hover:border-accent-pink/30'
        }`}
      >
        {/* Current badge */}
        {item.current && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-pink/10 border border-accent-pink/30 mb-3">
            <span className="w-1.5 h-1.5 bg-accent-pink rounded-full animate-pulse" />
            <span className="text-accent-pink text-[10px] font-semibold tracking-wide">Current Role</span>
          </div>
        )}

        {/* Role */}
        <h3 className="font-heading text-text-primary font-bold text-sm leading-snug mb-1.5">
          {item.role}
        </h3>

        {/* Company + location */}
        <div className="flex flex-wrap items-center gap-2 text-text-secondary text-xs mb-1">
          <span className="flex items-center gap-1 font-medium">
            <BriefcaseIcon />
            {item.company}
          </span>
          <span className="text-text-muted">·</span>
          <span className="flex items-center gap-1 text-text-muted">
            <MapPinIcon />
            {item.location}
          </span>
        </div>

        {/* Period */}
        <p className={`text-xs font-semibold mb-3 ${item.current ? 'text-accent-pink' : 'text-text-muted'}`}>
          {item.period}
        </p>

        {/* Expand toggle */}
        {item.highlights && item.highlights.length > 0 && (
          <>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-xs text-accent-pink/70 hover:text-accent-pink transition-colors font-medium"
            >
              {open ? 'Hide' : 'Show'} highlights
              <ChevronIcon open={open} />
            </button>

            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="mt-3 space-y-2 overflow-hidden"
                >
                  {item.highlights.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex gap-2 text-xs text-text-secondary leading-relaxed"
                    >
                      <span className="text-accent-pink mt-0.5 flex-shrink-0">▸</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const scaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-pink text-sm font-semibold tracking-widest uppercase mb-2">Career Journey</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-text-primary mb-4">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full mb-4" />
          <p className="text-text-muted text-sm">10+ years across 4 countries · Fortune 500 clients</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated center line — desktop */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-pink via-accent-maroon to-accent-pink/20"
          />
          {/* Left line — mobile */}
          <div className="md:hidden absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-accent-pink to-accent-maroon opacity-25" />

          <div className="space-y-10">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0
              return (
                <div key={`${item.role}-${item.company}`} className="relative flex items-start md:justify-center">
                  {/* Timeline dot — desktop */}
                  <div className={`hidden md:block absolute left-1/2 top-6 z-10 ${item.current ? 'timeline-dot-current' : ''}`}
                    style={{ transform: 'translateX(-50%)' }}>
                    <div className={`w-4 h-4 rounded-full border-2 border-background ${item.current ? 'bg-accent-pink shadow-lg shadow-accent-pink/50' : 'bg-surface-2 border-accent-pink/60'}`} />
                    {item.current && (
                      <div className="absolute inset-0 rounded-full bg-accent-pink/30 animate-ping" />
                    )}
                  </div>
                  {/* Timeline dot — mobile */}
                  <div className="md:hidden absolute left-4 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-pink border-2 border-background z-10" />

                  <ExperienceCard item={item} isLeft={isLeft} index={index} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
