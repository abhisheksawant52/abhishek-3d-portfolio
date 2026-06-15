import { motion } from 'framer-motion'
import { certifications, awards } from '../../data/portfolio'

const certColors = {
  Microsoft:     { border: 'rgba(0,120,212,0.35)',   bg: 'rgba(0,120,212,0.06)',   text: '#60aaff', icon: '🔷' },
  VMware:        { border: 'rgba(96,112,120,0.35)',  bg: 'rgba(96,112,120,0.06)',  text: '#98b0b8', icon: '🟢' },
  AWS:           { border: 'rgba(255,153,0,0.35)',   bg: 'rgba(255,153,0,0.06)',   text: '#ffaa22', icon: '🟠' },
  'Harness INC': { border: 'rgba(0,191,179,0.35)',   bg: 'rgba(0,191,179,0.06)',   text: '#00bfb3', icon: '🔵' },
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-accent-pink text-xs font-semibold tracking-widest uppercase mb-1">Credentials</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-primary mb-3">
            Certifications & Awards
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-pink to-violet-500 mx-auto rounded-full" />
        </motion.div>

        {/* Certs + Awards side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Certs — takes 2 cols */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, i) => {
                const c = certColors[cert.issuer] || { border: 'rgba(233,30,140,0.3)', bg: 'rgba(233,30,140,0.05)', text: '#e91e8c', icon: '🏆' }
                return (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    whileHover={{ y: -4, boxShadow: `0 10px 25px ${c.border}` }}
                    className="group relative p-4 bg-background rounded-xl border transition-all cursor-default overflow-hidden"
                    style={{ borderColor: c.border }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(90deg, transparent, ${c.text}, transparent)` }} />
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                        {c.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-text-primary font-semibold text-xs leading-snug">{cert.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full"
                            style={{ background: c.bg, color: c.text }}>{cert.issuer}</span>
                          <span className="text-text-muted text-[10px]">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Awards — 1 col */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-base font-bold text-text-primary flex items-center gap-2">
              <span className="w-5 h-0.5 bg-yellow-500/60 rounded-full" />
              Awards
            </h3>
            {awards.map((award, i) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -3, boxShadow: '0 10px 25px rgba(234,179,8,0.15)' }}
                className="relative p-4 bg-background rounded-xl border border-yellow-600/25 hover:border-yellow-500/50 transition-all cursor-default overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: 'linear-gradient(90deg, transparent, #eab308, transparent)' }} />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/25 flex items-center justify-center text-xl flex-shrink-0">🥇</div>
                  <div>
                    <p className="font-heading text-text-primary font-bold text-xs">{award.name}</p>
                    <p className="text-text-muted text-xs">{award.org}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Open to work card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4 bg-gradient-to-br from-green-950/40 to-surface rounded-xl border border-green-500/20 mt-auto"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-bold">Open to Global Onsite</span>
              </div>
              <p className="text-text-muted text-xs leading-relaxed">
                Available for senior roles, consulting & strategic partnerships. Response within 24h.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
