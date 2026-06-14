import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function ExternalLinkIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

const cardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-pink to-accent-maroon mb-3">
            Projects & Work
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full mb-4" />
          <p className="text-text-muted text-sm max-w-xl mx-auto">
            A selection of enterprise-grade projects built across cloud, DevOps, and AI/ML domains.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardItem}
              whileHover={{ y: -6, boxShadow: '0 0 28px rgba(233,30,140,0.18)' }}
              className="group flex flex-col bg-background rounded-2xl border border-surface-2 hover:border-accent-pink/40 transition-all overflow-hidden"
            >
              {/* Card header strip */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + name */}
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <h3 className="font-heading text-text-primary font-bold text-base leading-snug">
                      {project.name}
                    </h3>
                    <p className="text-accent-pink text-xs font-medium mt-0.5">{project.category}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-surface-2 text-text-muted text-xs rounded-md border border-surface-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                {project.highlights && (
                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 text-xs text-text-secondary">
                        <span className="text-accent-pink flex-shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Links */}
                <div className="flex gap-3 mt-auto pt-2 border-t border-surface-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-pink transition-colors"
                    >
                      <GithubIcon size={14} />
                      View Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-pink transition-colors"
                    >
                      <ExternalLinkIcon size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/abhisheksawant52"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-accent-pink text-accent-pink font-semibold rounded-xl hover:bg-accent-pink/10 hover:scale-105 transition-all"
          >
            <GithubIcon size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
