import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { experience } from '../../data/portfolio'

function ChevronIcon({ open }) {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
      strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function ExperienceCard({ item, isLeft, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`w-full md:w-5/12 ml-6 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
    >
      <motion.div
        whileHover={{ y: -2, boxShadow: '0 6px 25px rgba(139,92,246,0.15)' }}
        className={`p-4 rounded-xl border transition-all ${
          item.current
            ? 'bg-gradient-to-br from-violet-950/40 to-surface border-violet-500/30'
            : 'bg-surface border-surface-2 hover:border-violet-500/30'
        }`}
      >
        {item.current && (
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/30 mb-2">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            <span className="text-violet-300 text-[10px] font-semibold tracking-wide">Current Role</span>
          </div>
        )}
        <h3 className="font-heading text-text-primary font-bold text-sm leading-snug mb-1">{item.role}</h3>
        <div className="flex flex-wrap items-center gap-x-2 text-xs mb-1">
          <span className="text-text-secondary font-medium">{item.company}</span>
          <span className="text-text-muted">·</span>
          <span className="text-text-muted">{item.location}</span>
        </div>
        <p className={`text-xs font-semibold mb-2 ${item.current ? 'text-violet-400' : 'text-text-muted'}`}>
          {item.period}
        </p>
        {item.highlights?.length > 0 && (
          <>
            <button onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-xs text-accent-pink/70 hover:text-accent-pink transition-colors font-medium">
              {open ? 'Hide' : 'Show'} highlights <ChevronIcon open={open} />
            </button>
            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-2 space-y-1.5 overflow-hidden"
                >
                  {item.highlights.map((pt, i) => (
                    <li key={i} className="flex gap-2 text-xs text-text-secondary leading-relaxed">
                      <span className="text-accent-pink mt-0.5 flex-shrink-0">▸</span>
                      <span>{pt}</span>
                    </li>
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

const VISIBLE = 5 // show only recent 5 by default

export default function Experience() {
  const sectionRef = useRef(null)
  const [showAll, setShowAll] = useState(false)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const scaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])
  const shown = showAll ? experience : experience.slice(0, VISIBLE)

  return (
    <section id="experience" ref={sectionRef} className="py-16 bg-background relative overflow-hidden">
      <div className="bg-orb w-96 h-96 opacity-10" style={{ background: 'rgba(139,92,246,0.12)', top: '20%', right: '-15%' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-accent-pink text-xs font-semibold tracking-widest uppercase mb-1">Career Journey</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-primary mb-3">Experience</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-pink to-violet-500 mx-auto rounded-full mb-3" />
          <p className="text-text-muted text-sm">12+ years across 4 countries · Fortune 500 clients</p>
        </motion.div>

        <div className="relative">
          {/* Animated center line */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px h-full"
            style2={{ background: 'linear-gradient(to bottom, #e91e8c, #8b5cf6, rgba(139,92,246,0.1))' }}
          >
            <div className="w-full h-full" style={{ background: 'linear-gradient(to bottom, #e91e8c, #8b5cf6, rgba(139,92,246,0.1))' }} />
          </motion.div>
          <div className="md:hidden absolute left-3 top-0 w-px h-full bg-gradient-to-b from-accent-pink to-violet-500 opacity-20" />

          <div className="space-y-6">
            {shown.map((item, index) => {
              const isLeft = index % 2 === 0
              return (
                <div key={`${item.role}-${item.company}`} className="relative flex items-start md:justify-center">
                  {/* Desktop dot */}
                  <div className={`hidden md:block absolute left-1/2 top-5 z-10 ${item.current ? 'timeline-dot-current' : ''}`}
                    style={{ transform: 'translateX(-50%)' }}>
                    <div className={`w-3 h-3 rounded-full border-2 border-background ${item.current ? 'bg-violet-400 shadow-lg shadow-violet-500/50' : 'bg-surface-2 border-accent-pink/50'}`} />
                    {item.current && <div className="absolute inset-0 rounded-full bg-violet-400/30 animate-ping" />}
                  </div>
                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-3 top-5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent-pink border-2 border-background z-10" />
                  <ExperienceCard item={item} isLeft={isLeft} index={index} />
                </div>
              )
            })}
          </div>
        </div>

        {/* Show more / less */}
        {experience.length > VISIBLE && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-accent-pink/40 text-accent-pink text-sm font-semibold rounded-xl hover:bg-accent-pink/10 transition-all"
            >
              {showAll ? '↑ Show Less' : `↓ Show All ${experience.length} Roles`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
