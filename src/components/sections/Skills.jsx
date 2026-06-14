import { motion } from 'framer-motion'
import { skills } from '../../data/portfolio'

const tiers = [
  { key: 'expert', label: 'Expert', icon: '★', borderColor: 'border-accent-pink', textColor: 'text-accent-pink' },
  { key: 'experienced', label: 'Experienced', icon: '◆', borderColor: 'border-accent-pink/70', textColor: 'text-accent-pink/70' },
  { key: 'skillful', label: 'Skillful', icon: '●', borderColor: 'border-accent-pink/40', textColor: 'text-accent-pink/40' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface">
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
            Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {tiers.map(({ key, label, icon, borderColor, textColor }) => (
            <div key={key}>
              <div className="flex items-center gap-2 mb-5">
                <span className={`text-lg ${textColor}`}>{icon}</span>
                <h3 className={`text-xl font-semibold ${textColor}`}>{label}</h3>
              </div>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills[key].map((skill) => (
                  <motion.span
                    key={skill}
                    variants={badgeVariants}
                    className={`px-4 py-2 bg-surface-2 border-l-2 ${borderColor} rounded-r-full text-text-secondary text-sm font-medium hover:text-text-primary transition-colors cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
