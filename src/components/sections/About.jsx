import { motion } from 'framer-motion'
import RotatingTorus from '../three/RotatingTorus'
import { about } from '../../data/portfolio'

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
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-pink to-accent-maroon mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full" />
        </motion.div>

        {/* Two-column grid — summary + stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20"
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

        {/* What I Do — expertise cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-2">What I Do</h3>
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
              whileHover={{ y: -4, boxShadow: '0 0 24px rgba(233,30,140,0.15)' }}
              className="p-6 bg-surface rounded-xl border border-surface-2 hover:border-accent-pink/40 transition-colors"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-text-primary font-semibold text-base mb-2">{item.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
