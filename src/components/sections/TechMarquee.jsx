import { motion } from 'framer-motion'

/* ── Tech tools with real CDN logo URLs ── */
const ROW_1 = [
  { name: 'AWS',           url: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
  { name: 'Azure',         url: 'https://cdn.worldvectorlogo.com/logos/microsoft-azure-3.svg' },
  { name: 'GCP',           url: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg' },
  { name: 'Kubernetes',    url: 'https://cdn.worldvectorlogo.com/logos/kubernets.svg' },
  { name: 'Docker',        url: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
  { name: 'Terraform',     url: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg' },
  { name: 'Ansible',       url: 'https://cdn.worldvectorlogo.com/logos/ansible.svg' },
  { name: 'Jenkins',       url: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg' },
  { name: 'GitHub',        url: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
  { name: 'ArgoCD',        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg' },
  { name: 'Prometheus',    url: 'https://cdn.worldvectorlogo.com/logos/prometheus.svg' },
  { name: 'Grafana',       url: 'https://cdn.worldvectorlogo.com/logos/grafana.svg' },
]

const ROW_2 = [
  { name: 'OpenAI',        url: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg' },
  { name: 'Python',        url: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
  { name: 'Linux',         url: 'https://cdn.worldvectorlogo.com/logos/linux-tux.svg' },
  { name: 'HashiCorp',     url: 'https://cdn.worldvectorlogo.com/logos/hashicorp.svg' },
  { name: 'Helm',          url: 'https://cdn.worldvectorlogo.com/logos/helm-1.svg' },
  { name: 'Elasticsearch', url: 'https://cdn.worldvectorlogo.com/logos/elasticsearch.svg' },
  { name: 'Datadog',       url: 'https://cdn.worldvectorlogo.com/logos/datadog.svg' },
  { name: 'Splunk',        url: 'https://cdn.worldvectorlogo.com/logos/splunk.svg' },
  { name: 'GitLab',        url: 'https://cdn.worldvectorlogo.com/logos/gitlab.svg' },
  { name: 'VMware',        url: 'https://cdn.worldvectorlogo.com/logos/vmware-1.svg' },
  { name: 'GitHub Actions',url: 'https://cdn.jsdelivr.net/npm/simple-icons@v15.18.0/icons/githubactions.svg' },
  { name: 'OpenShift',     url: 'https://cdn.worldvectorlogo.com/logos/red-hat-openshift-1.svg' },
]

/* Duplicate items so the marquee loops seamlessly */
const doubled1 = [...ROW_1, ...ROW_1]
const doubled2 = [...ROW_2, ...ROW_2]

function MarqueeRow({ items, direction = 'left', speed = 35 }) {
  const isRight = direction === 'right'
  const distance = isRight ? '0%' : '-50%'
  const start    = isRight ? '-50%' : '0%'

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} />

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: [start, distance] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      >
        {items.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="group flex flex-col items-center gap-2 px-4 py-3 rounded-xl border border-surface-2 bg-surface hover:border-accent-pink/40 hover:bg-accent-pink/5 transition-all cursor-default flex-shrink-0"
            style={{ minWidth: '88px' }}
          >
            <img
              src={tech.url}
              alt={tech.name}
              className="w-9 h-9 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              style={{ filter: 'brightness(0) invert(1)' }}
              onError={e => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
            {/* Fallback letter */}
            <span
              className="w-9 h-9 hidden items-center justify-center rounded-lg bg-accent-pink/10 text-accent-pink font-bold text-sm"
            >
              {tech.name[0]}
            </span>
            <span className="text-text-muted text-[10px] font-medium text-center leading-tight group-hover:text-accent-pink transition-colors whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-accent-pink text-sm font-semibold tracking-widest uppercase mb-2">Tools & Technologies</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">
            Ecosystem I Work With
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="mb-4">
        <MarqueeRow items={doubled1} direction="left" speed={40} />
      </div>

      {/* Row 2 — scrolls right */}
      <MarqueeRow items={doubled2} direction="right" speed={35} />
    </section>
  )
}
