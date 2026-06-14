import { motion } from 'framer-motion'
import { certifications, awards } from '../../data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-surface">
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
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full" />
        </motion.div>

        {/* Cert grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.04,
                boxShadow: '0 0 20px rgba(233,30,140,0.25)',
              }}
              className="p-6 bg-background rounded-lg border border-accent-pink/30 hover:border-accent-pink transition-colors cursor-default"
            >
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-text-primary font-semibold text-sm leading-snug mb-2">
                {cert.name}
              </h3>
              <p className="text-text-muted text-xs">{cert.issuer} · {cert.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Awards subsection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">Awards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {awards.map((award, i) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-background rounded-lg border border-yellow-600/40 hover:border-yellow-500/70 transition-colors cursor-default"
              >
                <div className="text-3xl mb-3">🥇</div>
                <h4 className="text-text-primary font-semibold text-sm">{award.name}</h4>
                <p className="text-text-muted text-xs mt-1">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
