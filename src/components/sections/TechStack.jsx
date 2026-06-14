import { useState } from 'react'
import { motion } from 'framer-motion'

/* ── Official-color tech logos as inline SVG ── */
const LOGOS = {
  AWS: () => (
    <svg viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-6">
      <path d="M11.2 9.3c0 .4.1.7.2 1 .1.2.3.5.5.7.1.1.1.2.1.3 0 .1-.1.2-.2.3l-.7.5c-.1.1-.2.1-.3.1-.1 0-.2-.1-.3-.2-.2-.2-.3-.4-.5-.6-.1-.2-.2-.5-.2-.8 0-.8.3-1.4.9-1.9.6-.5 1.3-.7 2.2-.7.8 0 1.4.2 1.9.7.4.5.7 1.1.7 1.8v3.5c0 .3 0 .6.1.9l.3.7c0 .1.1.2.1.3 0 .1-.1.2-.2.2l-1 .7c-.1.1-.2.1-.3 0-.1 0-.2-.1-.3-.2l-.3-.4c-.1-.2-.2-.3-.2-.4-.4.5-.9.8-1.4 1-.5.2-1.1.3-1.7.3-.7 0-1.3-.2-1.7-.6-.4-.4-.7-.9-.7-1.6 0-.6.2-1.1.6-1.5.4-.4 1-.7 1.7-.9l1.5-.4V11c0-.5-.1-.9-.4-1.2-.3-.3-.7-.4-1.2-.4-.5 0-.9.1-1.2.4-.3.2-.5.5-.5.8zm2 3.5l-1 .3c-.4.1-.8.3-1 .5-.2.2-.3.5-.3.8 0 .5.3.8.8.8.3 0 .6-.1.8-.3.2-.2.4-.4.5-.7.1-.2.1-.5.1-.8v-.6h.1zm5.3 1.5l-1.8-5.9c-.1-.2-.1-.4 0-.5.1-.1.2-.2.4-.2h.9c.2 0 .4 0 .5.1.1.1.2.2.2.4l1.3 5.1 1.2-5.1c0-.2.1-.3.2-.4.1-.1.3-.1.5-.1h.8c.2 0 .4 0 .5.1.1.1.2.2.2.4l1.2 5.2 1.3-5.2c0-.2.1-.3.2-.4.1-.1.3-.1.5-.1h.9c.2 0 .3.1.4.2.1.1.1.3 0 .5l-1.8 5.9c0 .2-.1.3-.2.4-.1.1-.3.1-.5.1h-.8c-.2 0-.4 0-.5-.1-.1-.1-.2-.2-.2-.4l-1.2-5-1.1 5c0 .2-.1.3-.2.4-.1.1-.3.1-.5.1h-.8c-.2 0-.4 0-.5-.1-.1-.1-.2-.2-.2-.4zm10.7 1.1c-.5-.2-.8-.5-1.1-.8-.1-.1-.2-.2-.2-.3s0-.2.1-.3l.6-.8c.1-.1.2-.1.3-.1.1 0 .2 0 .3.1.3.2.6.4.9.5.3.1.7.2 1 .2.5 0 .9-.1 1.2-.3.3-.2.4-.5.4-.8 0-.3-.1-.5-.3-.6-.2-.2-.5-.3-1-.5l-.8-.2c-.7-.2-1.2-.5-1.6-.9-.4-.4-.6-.9-.6-1.6 0-.6.2-1.1.5-1.5.3-.4.8-.7 1.3-.9.5-.2 1.1-.3 1.7-.3.5 0 .9.1 1.4.2.4.1.8.3 1.1.5.1.1.2.1.2.3 0 .1 0 .2-.1.3l-.5.8c-.1.1-.2.2-.3.2-.1 0-.2 0-.3-.1-.5-.3-1-.5-1.5-.5-.4 0-.7.1-.9.3-.2.2-.3.4-.3.7 0 .3.1.5.3.6.2.2.6.3 1.1.5l.7.2c.7.2 1.3.5 1.7.9.4.4.6 1 .6 1.7 0 .6-.2 1.2-.5 1.6-.3.4-.8.8-1.4 1-.6.2-1.2.3-1.9.3-.6-.1-1.2-.2-1.7-.4z" fill="#FF9900"/>
    </svg>
  ),
  Azure: () => (
    <svg viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-7">
      <path d="M14.4 5L8 22h5.5l4-8.5L22.5 22H28L21 9.5 14.4 5z" fill="#0078D4"/>
      <path d="M21 9.5l-4.5 7.5H28L21 9.5z" fill="#50E6FF" opacity="0.7"/>
    </svg>
  ),
  GCP: () => (
    <svg viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-7">
      <path d="M24.5 11h-5v2h3c-.5 1.8-2.1 3-4 3-2.2 0-4-1.8-4-4s1.8-4 4-4c1 0 1.9.4 2.6 1l1.4-1.4C21.5 6.6 20.3 6 18.5 6c-3.3 0-6 2.7-6 6s2.7 6 6 6c3.4 0 5.7-2.4 5.7-5.7 0-.5-.1-.9-.2-1.3z" fill="#4285F4"/>
      <circle cx="31" cy="8" r="3" fill="#EA4335" opacity="0.8"/>
    </svg>
  ),
  Kubernetes: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M16 3l12 7v12l-12 7L4 22V10l12-7z" fill="#326CE5" opacity="0.15"/>
      <path d="M16 3l12 7v12l-12 7L4 22V10l12-7z" stroke="#326CE5" strokeWidth="1.5" fill="none"/>
      <circle cx="16" cy="16" r="3" fill="#326CE5"/>
      <path d="M16 7v4M16 21v4M7 11.5l3.5 2M21.5 18.5l3.5 2M7 20.5l3.5-2M21.5 13.5l3.5-2" stroke="#326CE5" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-7">
      <rect x="7" y="10" width="5" height="4" rx="0.5" fill="#2496ED"/>
      <rect x="13" y="10" width="5" height="4" rx="0.5" fill="#2496ED"/>
      <rect x="19" y="10" width="5" height="4" rx="0.5" fill="#2496ED"/>
      <rect x="13" y="5" width="5" height="4" rx="0.5" fill="#2496ED"/>
      <rect x="19" y="5" width="5" height="4" rx="0.5" fill="#2496ED"/>
      <path d="M33 12.5c-.7-1.3-2.4-1.3-3.3-.7-.4-2.7-2.7-4-4.7-4H9.5c-.4 2.7-.3 5.5.7 7.5 1.1 2 2.7 3.4 5.3 3.4H23c2.7 0 5.3-1.3 6.7-4 .7 0 2.4.3 3.3-.7.6-.7.6-2 0-1.5z" fill="#2496ED" opacity="0.7"/>
    </svg>
  ),
  Terraform: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M13 8l6 3.5v7L13 15V8z" fill="#7B42BC"/>
      <path d="M20.5 11.5l6 3.5v7l-6-3.5v-7z" fill="#7B42BC" opacity="0.6"/>
      <path d="M5.5 11.5l6 3.5v7l-6-3.5v-7z" fill="#7B42BC" opacity="0.4"/>
      <path d="M13 22.5l6 3.5v-7l-6-3.5v7z" fill="#7B42BC" opacity="0.8"/>
    </svg>
  ),
  Ansible: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <circle cx="16" cy="16" r="11" stroke="#CC0000" strokeWidth="1.5" fill="none"/>
      <path d="M12 22l9-14-3 10" stroke="#CC0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Prometheus: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <circle cx="16" cy="16" r="10" stroke="#E6522C" strokeWidth="1.5" fill="none"/>
      <circle cx="16" cy="16" r="3.5" fill="#E6522C"/>
      <path d="M16 6v3M16 23v3M6 16h3M23 16h3M9 9l2 2M21 21l2 2M9 23l2-2M21 11l2-2" stroke="#E6522C" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  Grafana: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <circle cx="16" cy="16" r="11" fill="#F46800" opacity="0.15"/>
      <path d="M8 21l3-5 2.5 2.5 3-7 3 4 2.5-3.5" stroke="#F46800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  Jenkins: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <ellipse cx="16" cy="15" rx="9" ry="10" fill="#D33833" opacity="0.15" stroke="#D33833" strokeWidth="1.3"/>
      <circle cx="13" cy="13" r="1.5" fill="#D33833"/>
      <circle cx="19" cy="13" r="1.5" fill="#D33833"/>
      <path d="M13 18.5c1.2 1.8 5.8 1.8 7 0" stroke="#D33833" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  ArgoCD: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <circle cx="16" cy="16" r="10" stroke="#EF7B4D" strokeWidth="1.4" fill="none"/>
      <circle cx="16" cy="16" r="5" fill="#EF7B4D" opacity="0.3"/>
      <circle cx="16" cy="16" r="2.5" fill="#EF7B4D"/>
      <path d="M16 6v3M16 23v3M6 16h3M23 16h3" stroke="#EF7B4D" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  Vault: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M16 3l11 5.5v8L16 29 5 16.5v-8L16 3z" stroke="#FFD814" strokeWidth="1.4" fill="none"/>
      <circle cx="16" cy="15" r="3.5" fill="#FFD814" opacity="0.6"/>
      <path d="M16 11.5v2.5M14 17l2-1.5 2 1.5" stroke="#FFD814" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  ELK: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="6" y="7" width="20" height="4" rx="1" fill="#00BFB3"/>
      <rect x="6" y="14" width="14" height="4" rx="1" fill="#00BFB3" opacity="0.7"/>
      <rect x="6" y="21" width="20" height="4" rx="1" fill="#00BFB3" opacity="0.5"/>
    </svg>
  ),
  OpenShift: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <circle cx="16" cy="16" r="10" stroke="#EE0000" strokeWidth="1.4" fill="none"/>
      <path d="M10 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#EE0000" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      <path d="M22 16c0 3.3-2.7 6-6 6s-6-2.7-6-6" stroke="#EE0000" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M16 4C9.37 4 4 9.37 4 16c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0116 10.8c1.02.005 2.05.14 3.01.41 2.28-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.1 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C24.57 25.8 28 21.3 28 16c0-6.63-5.37-12-12-12z" fill="#fff" opacity="0.8"/>
    </svg>
  ),
  VMware: () => (
    <svg viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-7">
      <path d="M8 10l4 8 4-8" stroke="#607078" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M16 10l4 8 4-8" stroke="#607078" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M24 10l2 8" stroke="#607078" strokeWidth="2" strokeLinecap="round"/>
      <path d="M28 10l-2 8" stroke="#607078" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Datadog: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M8 20l3.5-10 3 7 3-4 3 5 3.5-9" stroke="#632CA6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  Splunk: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M6 22l8-14h4l6 14h-4l-1.5-3h-7L10 22H6z" fill="#65A637" opacity="0.8"/>
      <path d="M11.5 17l3-6 1 2" fill="#65A637"/>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M16 5c-4 0-7 1-7 4v3h7v1H8C5 13 4 14.5 4 17s1 4.5 4 5l2 .2V20h6v2H8.5C6 22 4 20.5 4 17" fill="#3776AB" opacity="0.8"/>
      <path d="M16 5c4 0 7 1 7 4v3h-7v1h8c3 0 4 1.5 4 4.5s-1 4.5-4 5l-2 .2V20h-6v2h7.5c2.5 0 4.5-1.5 4.5-5" fill="#FFD43B" opacity="0.8"/>
      <circle cx="13" cy="8.5" r="1" fill="white"/>
      <circle cx="19" cy="23.5" r="1" fill="white"/>
    </svg>
  ),
  Helm: () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <circle cx="16" cy="16" r="10" fill="#0F1689" opacity="0.15"/>
      <path d="M10 16c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z" stroke="#0F1689" strokeWidth="1.4" fill="none"/>
      <path d="M13 13h6v6h-6z" fill="#0F1689" opacity="0.5"/>
      <path d="M16 10v12M10 16h12" stroke="#0F1689" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
}

const CATEGORIES = [
  {
    name: 'Cloud Providers',
    items: [
      { name: 'AWS',   logo: 'AWS',   desc: 'EC2, EKS, S3, RDS, Lambda, CloudWatch, IAM', level: 'Expert' },
      { name: 'Azure', logo: 'Azure', desc: 'AKS, Azure DevOps, App Services, Monitor, Bicep, ARM', level: 'Expert' },
      { name: 'GCP',   logo: 'GCP',   desc: 'GKE, Compute Engine, Cloud Run, Anthos', level: 'Advanced' },
      { name: 'VMware VCF', logo: 'VMware', desc: 'vSphere, VCF, HCX, VMC on AWS, Nutanix', level: 'Expert' },
    ],
  },
  {
    name: 'Containers & Orchestration',
    items: [
      { name: 'Kubernetes', logo: 'Kubernetes', desc: 'EKS, AKS, GKE, OpenShift, RBAC, Helm, Ingress, HPA', level: 'Expert' },
      { name: 'Docker',     logo: 'Docker',     desc: 'Multi-stage builds, Compose, container security', level: 'Expert' },
      { name: 'Helm',       logo: 'Helm',       desc: 'Chart authoring, templating, GitOps deployments', level: 'Advanced' },
      { name: 'OpenShift',  logo: 'OpenShift',  desc: 'Enterprise Kubernetes, OCP, Operators', level: 'Experienced' },
    ],
  },
  {
    name: 'IaC & Configuration',
    items: [
      { name: 'Terraform',  logo: 'Terraform', desc: 'Multi-cloud IaC, modules, state management, Atlantis', level: 'Expert' },
      { name: 'Ansible',    logo: 'Ansible',   desc: 'Playbooks, roles, AWX, configuration management', level: 'Expert' },
      { name: 'HashiCorp Vault', logo: 'Vault', desc: 'Secrets management, dynamic credentials, PKI', level: 'Expert' },
      { name: 'Pulumi',     logo: 'Vault',     desc: 'Infrastructure as code in Python/TypeScript', level: 'Experienced' },
    ],
  },
  {
    name: 'CI/CD & GitOps',
    items: [
      { name: 'ArgoCD',  logo: 'ArgoCD',  desc: 'GitOps continuous delivery, app-of-apps, rollbacks', level: 'Expert' },
      { name: 'Jenkins', logo: 'Jenkins', desc: 'Pipeline as Code, Groovy scripting, shared libraries', level: 'Expert' },
      { name: 'GitHub Actions', logo: 'GitHub', desc: 'Workflows, matrix builds, OIDC, reusable actions', level: 'Expert' },
      { name: 'Azure DevOps', logo: 'Azure', desc: 'Pipelines, Boards, Repos, Artifacts, environments', level: 'Expert' },
    ],
  },
  {
    name: 'Observability & AIOps',
    items: [
      { name: 'Prometheus', logo: 'Prometheus', desc: 'Metrics collection, alerting, PromQL, federation', level: 'Expert' },
      { name: 'Grafana',    logo: 'Grafana',    desc: 'Dashboards, Loki, Tempo, unified observability', level: 'Expert' },
      { name: 'Datadog',    logo: 'Datadog',    desc: 'APM, log management, synthetics, monitors', level: 'Advanced' },
      { name: 'ELK Stack',  logo: 'ELK',        desc: 'Elasticsearch, Logstash, Kibana, Beats', level: 'Expert' },
    ],
  },
  {
    name: 'AI / ML',
    items: [
      { name: 'Azure OpenAI', logo: 'Azure',  desc: 'GPT-4, embeddings, fine-tuning, enterprise deployments', level: 'Expert' },
      { name: 'LangChain',    logo: 'Python', desc: 'RAG pipelines, agents, vector stores, LangSmith', level: 'Expert' },
      { name: 'MLflow',       logo: 'Python', desc: 'Experiment tracking, model registry, deployment', level: 'Advanced' },
      { name: 'Python',       logo: 'Python', desc: 'Automation, ML scripting, FastAPI, CLI tools', level: 'Expert' },
    ],
  },
]

const LEVEL_COLOR = {
  Expert:      { bg: 'rgba(233,30,140,0.12)', border: 'rgba(233,30,140,0.4)', text: '#e91e8c', width: '100%' },
  Advanced:    { bg: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.4)', text: '#f97316', width: '80%' },
  Experienced: { bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.4)', text: '#818cf8', width: '65%' },
  Intermediate:{ bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.4)', text: '#34d399', width: '60%' },
}

export default function TechStack() {
  const [active, setActive] = useState('All')
  const tabs = ['All', ...CATEGORIES.map(c => c.name)]
  const shown = active === 'All' ? CATEGORIES : CATEGORIES.filter(c => c.name === active)

  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl font-extrabold text-text-primary mb-3">
            Tech Stack
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-pink to-accent-maroon mx-auto rounded-full mb-4" />
          <p className="text-text-muted max-w-xl mx-auto text-sm">
            Technologies I use to architect, build, and operate enterprise-grade platforms.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                active === t
                  ? 'bg-accent-pink text-white shadow-lg shadow-accent-pink/25'
                  : 'border border-surface-2 text-text-muted hover:border-accent-pink/50 hover:text-text-secondary'
              }`}
            >
              {t === 'All' ? 'All Technologies' : t}
            </button>
          ))}
        </div>

        {/* Grid */}
        {shown.map((cat, ci) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.05 }}
            className="mb-10"
          >
            <h3 className="font-heading text-text-secondary font-semibold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-accent-pink/50" />
              {cat.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.items.map((tech, ti) => {
                const LogoComp = LOGOS[tech.logo]
                const lv = LEVEL_COLOR[tech.level] || LEVEL_COLOR.Intermediate
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ti * 0.06 }}
                    whileHover={{ y: -3, boxShadow: `0 8px 24px rgba(233,30,140,0.12)` }}
                    className="p-4 bg-background rounded-xl border border-surface-2 hover:border-accent-pink/30 transition-all cursor-default"
                  >
                    {/* Logo + level */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center justify-center w-12 h-10">
                        {LogoComp ? <LogoComp /> : (
                          <span className="text-2xl font-bold text-accent-pink">{tech.name[0]}</span>
                        )}
                      </div>
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                        style={{ background: lv.bg, border: `1px solid ${lv.border}`, color: lv.text }}
                      >
                        {tech.level}
                      </span>
                    </div>

                    {/* Name */}
                    <p className="font-heading font-semibold text-text-primary text-sm mb-1">{tech.name}</p>

                    {/* Description */}
                    <p className="text-text-muted text-xs leading-relaxed mb-3">{tech.desc}</p>

                    {/* Proficiency bar */}
                    <div className="w-full h-1 bg-surface-2 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: lv.text }}
                        initial={{ width: 0 }}
                        whileInView={{ width: lv.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
