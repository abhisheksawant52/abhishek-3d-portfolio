import { motion } from 'framer-motion'
import { certifications, awards } from '../../data/portfolio'

const certIcons = {
  Microsoft: '🔷',
  VMware:    '🟢',
  AWS:       '🟠',
  'Harness INC': '🔵',
}

const certColors = {
  Microsoft: { border: 'rgba(0,120,212,0.4)',  bg: 'rgba(0,120,212,0.06)',  text: '#50aaff' },
  VMware:    { border: 'rgba(96,112,120,0.4)', bg: 'rgba(96,112,120,0.06)', text: '#98b0b8' },
  AWS:       { border: 'rgba(255,153,0,0.4)',  bg: 'rgba(255,153,0,0.06)',  text: '#ff9900' },
  'Harness INC': { border: 'rgba(0,191,179,0.4)', bg: 'rgba(0,191,179,0.06)', text: '#00bfb3' },
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-pink text-sm font-semibold tracking-widest uppercase mb-2">Credentials</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-text-primary mb-4">
            Certifications & Awards
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full" />
        </motion.div>

        {/* Cert grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {certifications.map((cert, i) => {
            const color = certColors[cert.issuer] || { border: 'rgba(233,30,140,0.3)', bg: 'rgba(233,30,140,0.05)', text: '#e91e8c' }
            const icon  = certIcons[cert.issuer] || '🏆'
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: `0 12px 30px ${color.border}` }}
                className="group relative p-6 bg-background rounded-2xl border transition-all cursor-default overflow-hidden"
                style={{ borderColor: color.border }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${color.text}, transparent)` }} />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: color.bg, border: `1px solid ${color.border}` }}>
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-text-primary font-semibold text-sm leading-snug mb-1.5">
                      {cert.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{ background: color.bg, border: `1px solid ${color.border}`, color: color.text }}>
                        {cert.issuer}
                      </span>
                      <span className="text-text-muted text-xs">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-2xl font-bold text-text-primary text-center mb-8 flex items-center justify-center gap-3">
            <span className="w-8 h-0.5 bg-accent-pink/50 rounded-full" />
            Awards & Recognition
            <span className="w-8 h-0.5 bg-accent-pink/50 rounded-full" />
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {awards.map((award, i) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(234,179,8,0.15)' }}
                className="relative p-6 bg-background rounded-2xl border border-yellow-600/30 hover:border-yellow-500/60 transition-all cursor-default overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, transparent, #eab308, transparent)' }} />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                    🥇
                  </div>
                  <div>
                    <h4 className="font-heading text-text-primary font-bold text-sm mb-1">{award.name}</h4>
                    <p className="text-text-muted text-xs">{award.org}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
