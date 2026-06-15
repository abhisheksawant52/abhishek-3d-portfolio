import { motion } from 'framer-motion'

const hobbies = [
  { icon: '📚', label: 'Reading',      desc: 'Tech books, architecture patterns, and sci-fi' },
  { icon: '📷', label: 'Photography',  desc: 'Landscapes, travel moments, and street photography' },
  { icon: '✈️', label: 'Traveling',    desc: 'Explored 4 countries — always curious about new cultures' },
  { icon: '🎮', label: 'Video Games',  desc: 'Strategy games and open-world exploration' },
]

const languages = [
  { lang: 'English',  level: 'Professional',  pct: 95 },
  { lang: 'Hindi',    level: 'Native',        pct: 100 },
  { lang: 'Marathi',  level: 'Native',        pct: 100 },
]

export default function Personal() {
  return (
    <section id="personal" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-pink text-sm font-semibold tracking-widest uppercase mb-2">Beyond Work</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-text-primary mb-4">
            Life Outside Code
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Hobbies */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-xl font-bold text-text-primary mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-accent-pink rounded-full" />
              Hobbies & Interests
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hobbies.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: '0 0 24px rgba(233,30,140,0.15)' }}
                  className="group p-5 bg-surface rounded-xl border border-surface-2 hover:border-accent-pink/40 transition-all cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-pink/10 border border-accent-pink/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {h.icon}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-text-primary text-sm">{h.label}</p>
                      <p className="text-text-muted text-xs mt-1 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-xl font-bold text-text-primary mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-accent-pink rounded-full" />
              Languages
            </motion.h3>

            <div className="space-y-6">
              {languages.map((l, i) => (
                <motion.div
                  key={l.lang}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">
                        {l.lang === 'English' ? '🇬🇧' : l.lang === 'Hindi' ? '🇮🇳' : '🏡'}
                      </span>
                      <span className="font-heading font-semibold text-text-primary">{l.lang}</span>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-accent-pink/30 text-accent-pink bg-accent-pink/5">
                      {l.level}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-surface-2 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent-pink to-accent-maroon"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 + 0.3, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-5 bg-surface rounded-xl border border-surface-2"
            >
              <h4 className="font-heading font-bold text-text-primary text-sm mb-4 flex items-center gap-2">
                <span className="text-accent-pink">👤</span>
                Personal Info
              </h4>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'Location',     value: 'Mumbai, India' },
                  { label: 'Nationality',  value: 'Indian' },
                  { label: 'Availability', value: 'Open to Enterprise Roles' },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-text-muted">{item.label}</span>
                    <span className="text-text-secondary font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
