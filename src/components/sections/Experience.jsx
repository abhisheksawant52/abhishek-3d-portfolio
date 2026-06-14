import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { experience } from '../../data/portfolio'

export default function Experience() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-pink to-accent-maroon mb-3">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated center line — desktop */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-pink to-accent-maroon"
          />
          {/* Static left line — mobile */}
          <div className="md:hidden absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-accent-pink to-accent-maroon opacity-30" />

          <div className="space-y-8">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0
              return (
                <div key={`${item.role}-${item.company}`} className="relative flex items-center md:justify-center">
                  {/* Dot connector — desktop */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-pink border-2 border-background z-10" />
                  {/* Dot connector — mobile */}
                  <div className="md:hidden absolute left-4 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-pink border-2 border-background z-10" />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`w-full md:w-5/12 ml-8 md:ml-0 ${
                      isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="p-5 bg-surface rounded-lg border-l-2 border-accent-pink shadow-lg hover:shadow-accent-pink/10 transition-shadow">
                      <h3 className="text-text-primary font-bold text-base leading-snug mb-1">
                        {item.role}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {item.company} · {item.location}
                      </p>
                      <p className={`text-xs mt-2 font-medium ${item.current ? 'text-accent-pink' : 'text-text-muted'}`}>
                        {item.period}
                      </p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
