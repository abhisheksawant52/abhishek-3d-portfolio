import { motion } from 'framer-motion'
import RotatingTorus from '../three/RotatingTorus'
import { about } from '../../data/portfolio'

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
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-pink to-accent-maroon mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full" />
        </motion.div>

        {/* Two-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left column — summary + education */}
          <div>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              {about.summary}
            </p>

            <h3 className="text-text-primary font-semibold text-lg mb-4">Education</h3>
            <div className="space-y-3">
              {about.education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-4 bg-surface rounded-lg border-l-2 border-accent-pink"
                >
                  <p className="text-text-primary font-medium">{edu.degree}</p>
                  <p className="text-text-secondary text-sm">{edu.institution}</p>
                  <p className="text-text-muted text-xs mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — stats + torus */}
          <div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-surface-2 rounded-lg text-center border border-surface-2"
                >
                  <p className="text-3xl font-bold text-accent-pink">{stat.value}</p>
                  <p className="text-text-muted text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <RotatingTorus />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
