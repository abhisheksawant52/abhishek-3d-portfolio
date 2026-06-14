/**
 * TechIcons.jsx
 * Official-color SVG icons for every technology in Abhishek's stack.
 * Each icon is a self-contained React component.
 */

export const TECH_ICONS = {
  /* ── AI / ML ── */
  'AIOps': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#7c3aed" opacity="0.15"/>
      <path d="M16 6l2.5 5.5H24l-4.5 3.5 1.5 5.5L16 18l-5 2.5 1.5-5.5L8 11.5h5.5L16 6z" fill="#7c3aed"/>
      <circle cx="16" cy="16" r="2.5" fill="#a78bfa"/>
    </svg>
  ),
  'GenAI': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#ec4899" opacity="0.12"/>
      <path d="M10 16c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" fill="#ec4899" opacity="0.3"/>
      <path d="M16 10v2m0 8v2m-6-6h2m8 0h2M11.5 11.5l1.5 1.5m5-1.5l-1.5 1.5M11.5 20.5l1.5-1.5m5 1.5l-1.5-1.5" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="2.5" fill="#f472b6"/>
    </svg>
  ),
  'RAG': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#8b5cf6" opacity="0.12"/>
      <rect x="8" y="9" width="7" height="9" rx="1.5" fill="#8b5cf6" opacity="0.5"/>
      <rect x="17" y="9" width="7" height="9" rx="1.5" fill="#8b5cf6" opacity="0.5"/>
      <path d="M11.5 20h9" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="20" r="1.5" fill="#c4b5fd"/>
    </svg>
  ),
  'LLMOps': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#6366f1" opacity="0.12"/>
      <rect x="7" y="11" width="18" height="10" rx="2" fill="#6366f1" opacity="0.25"/>
      <path d="M10 15h2m2 0h2m2 0h2" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 18h5" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="22" cy="18" r="1.2" fill="#a5b4fc"/>
    </svg>
  ),
  'Azure OpenAI': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#0078d4" opacity="0.12"/>
      <path d="M8 22L14 10l4 8-2 0 2 4H8z" fill="#0078d4" opacity="0.6"/>
      <path d="M18 10l6 12h-4l-2-4" fill="#50e6ff" opacity="0.7"/>
    </svg>
  ),
  'OpenAI API': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#10a37f" opacity="0.12"/>
      <path d="M16 8a8 8 0 100 16A8 8 0 0016 8z" stroke="#10a37f" strokeWidth="1.5" fill="none"/>
      <path d="M16 11a5 5 0 100 10A5 5 0 0016 11z" fill="#10a37f" opacity="0.3"/>
      <path d="M13 16h6M16 13v6" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),

  /* ── Cloud Providers ── */
  'AWS': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#FF9900" opacity="0.12"/>
      <path d="M10 18.5c-1.8-.5-3-1.7-3-3.1 0-1.7 1.5-3.1 3.5-3.3.4-2.2 2.4-3.8 4.8-3.8 1.6 0 3 .7 3.9 1.8.4-.1.9-.2 1.3-.2 2 0 3.5 1.4 3.5 3.1 0 .4-.1.7-.2 1.1" stroke="#FF9900" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M10 22l1.5-1.5L13 22m6 0l1.5-1.5L22 22" stroke="#FF9900" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'Azure': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#0078d4" opacity="0.12"/>
      <path d="M9 23l5.5-9.5 3 5-2.5 4.5H9z" fill="#0078d4"/>
      <path d="M14.5 13.5L19 8l5 15h-8l2.5-4.5" fill="#50e6ff" opacity="0.8"/>
    </svg>
  ),
  'GCP': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#4285F4" opacity="0.12"/>
      <path d="M20.5 13H16v2h2.7c-.5 1.3-1.7 2.2-3.2 2.2-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5c.9 0 1.7.3 2.3.9l1.4-1.4C18.4 8.8 17.3 8.2 16 8.2c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5c3.1 0 5.2-2.1 5.2-5.2 0-.4 0-.7-.2-1z" fill="#4285F4"/>
    </svg>
  ),
  'Cloud Computing': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#38bdf8" opacity="0.12"/>
      <path d="M9 20c-2-.5-3.5-2.2-3.5-4.3 0-2.4 2-4.3 4.5-4.3.5-2.8 3-4.9 6-4.9 2 0 3.8.9 5 2.3.5-.1 1.1-.2 1.7-.2 2.5 0 4.5 2 4.5 4.3 0 .5-.1 1-.2 1.5" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M8 22h16" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
    </svg>
  ),

  /* ── Containers & Orchestration ── */
  'Kubernetes': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#326ce5" opacity="0.12"/>
      <path d="M16 8l7 4v8l-7 4-7-4v-8l7-4z" stroke="#326ce5" strokeWidth="1.4" fill="none"/>
      <circle cx="16" cy="16" r="2.5" fill="#326ce5"/>
      <path d="M16 10v3M16 19v3M9.5 13l2.6 1.5M21.9 17.5l-2.6-1.5M9.5 19l2.6-1.5M21.9 13l-2.6 1.5" stroke="#326ce5" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  'Docker': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#2496ed" opacity="0.12"/>
      <rect x="7" y="13" width="3" height="3" rx="0.5" fill="#2496ed"/>
      <rect x="11" y="13" width="3" height="3" rx="0.5" fill="#2496ed"/>
      <rect x="15" y="13" width="3" height="3" rx="0.5" fill="#2496ed"/>
      <rect x="11" y="9" width="3" height="3" rx="0.5" fill="#2496ed"/>
      <rect x="15" y="9" width="3" height="3" rx="0.5" fill="#2496ed"/>
      <path d="M25 15.5c-.5-1-1.8-1-2.5-.5-.3-2-2-3-3.5-3H7.5c-.3 2-.2 4 .5 5.5.8 1.5 2 2.5 4 2.5h6c2 0 4-1 5-3 .5 0 1.8.2 2.5-.5.5-.5.5-1.5 0-1.5" fill="#2496ed" opacity="0.6"/>
    </svg>
  ),
  'Containerization': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#06b6d4" opacity="0.12"/>
      <rect x="7" y="10" width="18" height="12" rx="2" stroke="#06b6d4" strokeWidth="1.4" fill="none"/>
      <path d="M7 14h18" stroke="#06b6d4" strokeWidth="1.2"/>
      <path d="M13 10v12M19 10v12" stroke="#06b6d4" strokeWidth="1.2"/>
    </svg>
  ),

  /* ── IaC & Config ── */
  'Terraform': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#7b42bc" opacity="0.12"/>
      <path d="M13 9l5 3v6l-5-3V9z" fill="#7b42bc"/>
      <path d="M19.5 12.5l5 3v6l-5-3v-6z" fill="#7b42bc" opacity="0.6"/>
      <path d="M7.5 12.5l5 3v6l-5-3v-6z" fill="#7b42bc" opacity="0.4"/>
      <path d="M13 21l5 3v-6l-5-3v6z" fill="#7b42bc" opacity="0.7"/>
    </svg>
  ),
  'Ansible': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#e00" opacity="0.12"/>
      <circle cx="16" cy="16" r="8" stroke="#cc0000" strokeWidth="1.4" fill="none"/>
      <path d="M12 22l8-12-2 8" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'HashiCorp Vault': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#ffd814" opacity="0.12"/>
      <path d="M16 7l8 4v6l-8 8-8-8v-6l8-4z" stroke="#ffd814" strokeWidth="1.4" fill="none"/>
      <circle cx="16" cy="16" r="3" fill="#ffd814" opacity="0.7"/>
      <path d="M16 13v2.5M14 17.5l2-1.5 2 1.5" stroke="#ffd814" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'Pulumi': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#8a3391" opacity="0.12"/>
      <circle cx="10" cy="16" r="3" fill="#8a3391"/>
      <circle cx="16" cy="10" r="3" fill="#8a3391" opacity="0.7"/>
      <circle cx="22" cy="16" r="3" fill="#8a3391" opacity="0.5"/>
      <circle cx="16" cy="22" r="3" fill="#8a3391" opacity="0.8"/>
    </svg>
  ),

  /* ── CI/CD & GitOps ── */
  'DevOps': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#e91e8c" opacity="0.12"/>
      <path d="M10 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#e91e8c" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M22 12c0 3.3-2.7 6-6 6s-6-2.7-6-6" stroke="#e91e8c" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="16" cy="16" r="2" fill="#e91e8c"/>
    </svg>
  ),
  'GitOps': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#f05032" opacity="0.12"/>
      <circle cx="11" cy="12" r="2.5" fill="#f05032"/>
      <circle cx="21" cy="12" r="2.5" fill="#f05032"/>
      <circle cx="11" cy="22" r="2.5" fill="#f05032" opacity="0.6"/>
      <path d="M11 14.5v5" stroke="#f05032" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M21 14.5c0 3-4.5 5.5-10 7" stroke="#f05032" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  'ArgoCD': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#ef7b4d" opacity="0.12"/>
      <circle cx="16" cy="16" r="7" stroke="#ef7b4d" strokeWidth="1.4" fill="none"/>
      <circle cx="16" cy="16" r="3.5" fill="#ef7b4d" opacity="0.5"/>
      <path d="M16 9v3M16 20v3M9 16h3M20 16h3" stroke="#ef7b4d" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  'GIT': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#f05032" opacity="0.12"/>
      <path d="M27 15l-10-10-2 2 3.5 3.5-7.5 7.5-3.5-3.5-2 2 10 10 2-2-3.5-3.5 7.5-7.5 3.5 3.5 2-2z" fill="#f05032" opacity="0.7"/>
    </svg>
  ),
  'Jenkins': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#d33833" opacity="0.12"/>
      <ellipse cx="16" cy="14" rx="7" ry="8" fill="#d33833" opacity="0.3"/>
      <circle cx="13.5" cy="13" r="1.2" fill="#d33833"/>
      <circle cx="18.5" cy="13" r="1.2" fill="#d33833"/>
      <path d="M13 18c1 1.5 5 1.5 6 0" stroke="#d33833" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M10 22c1-1 2-1.5 6-1.5s5 .5 6 1.5" stroke="#d33833" strokeWidth="1" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  /* ── Observability ── */
  'Prometheus': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#e6522c" opacity="0.12"/>
      <circle cx="16" cy="16" r="7" stroke="#e6522c" strokeWidth="1.5" fill="none"/>
      <path d="M16 9v2M16 21v2M9 16h2M21 16h2" stroke="#e6522c" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="2.5" fill="#e6522c" opacity="0.7"/>
    </svg>
  ),
  'Grafana': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#f46800" opacity="0.12"/>
      <circle cx="16" cy="16" r="7" fill="#f46800" opacity="0.2"/>
      <path d="M10 20l2-4 2 2 2-5 2 3 2-3" stroke="#f46800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  'Datadog': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#632ca6" opacity="0.12"/>
      <path d="M9 21l3-9 2 5 2-3 2 4 3-8" stroke="#632ca6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="9" cy="21" r="1.5" fill="#632ca6"/>
      <circle cx="23" cy="11" r="1.5" fill="#632ca6" opacity="0.6"/>
    </svg>
  ),

  /* ── VMware & Virtualization ── */
  'VMC on AWS and HCX': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#607078" opacity="0.12"/>
      <rect x="8" y="10" width="16" height="12" rx="2" stroke="#607078" strokeWidth="1.4" fill="none"/>
      <path d="M8 14h16M12 10v12M20 10v12" stroke="#607078" strokeWidth="1.1"/>
      <circle cx="10" cy="12" r="0.8" fill="#607078"/>
    </svg>
  ),

  /* ── Security ── */
  'Security': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#10b981" opacity="0.12"/>
      <path d="M16 8l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8v-5l7-3z" stroke="#10b981" strokeWidth="1.4" fill="none"/>
      <path d="M12 16l3 3 5-5" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'DevSecOps': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#06b6d4" opacity="0.12"/>
      <path d="M16 7l8 4v8l-8 6-8-6v-8l8-4z" stroke="#06b6d4" strokeWidth="1.4" fill="none"/>
      <circle cx="16" cy="15.5" r="2.5" fill="#06b6d4" opacity="0.6"/>
      <path d="M14 18.5v1.5a2 2 0 004 0v-1.5" stroke="#06b6d4" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),

  /* ── DataOps ── */
  'DataOps': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#3b82f6" opacity="0.12"/>
      <ellipse cx="16" cy="12" rx="7" ry="3" stroke="#3b82f6" strokeWidth="1.3" fill="none"/>
      <path d="M9 12v4c0 1.66 3.13 3 7 3s7-1.34 7-3v-4" stroke="#3b82f6" strokeWidth="1.3" fill="none"/>
      <path d="M9 16v4c0 1.66 3.13 3 7 3s7-1.34 7-3v-4" stroke="#3b82f6" strokeWidth="1.3" fill="none"/>
    </svg>
  ),
  'Data Analysis': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#6366f1" opacity="0.12"/>
      <path d="M8 22l4-6 3 3 4-8 5 5" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  /* ── Networking & Infra ── */
  'Infrastructure Architecture': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#f59e0b" opacity="0.12"/>
      <rect x="12" y="8" width="8" height="5" rx="1" fill="#f59e0b" opacity="0.5"/>
      <rect x="7" y="19" width="6" height="5" rx="1" fill="#f59e0b" opacity="0.5"/>
      <rect x="19" y="19" width="6" height="5" rx="1" fill="#f59e0b" opacity="0.5"/>
      <path d="M16 13v3M10 19v-3h12v3" stroke="#f59e0b" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'Networking': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#0ea5e9" opacity="0.12"/>
      <circle cx="16" cy="16" r="3" fill="#0ea5e9" opacity="0.6"/>
      <circle cx="8"  cy="16" r="2" fill="#0ea5e9" opacity="0.4"/>
      <circle cx="24" cy="16" r="2" fill="#0ea5e9" opacity="0.4"/>
      <circle cx="16" cy="8"  r="2" fill="#0ea5e9" opacity="0.4"/>
      <circle cx="16" cy="24" r="2" fill="#0ea5e9" opacity="0.4"/>
      <path d="M10 16h3M19 16h3M16 10v3M16 19v3M10.5 10.5l2 2M19.5 19.5l2 2M19.5 10.5l-2 2M10.5 19.5l2-2" stroke="#0ea5e9" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  ),
  'Cloud Migration': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#14b8a6" opacity="0.12"/>
      <path d="M10 18c-1.5-.4-2.5-1.7-2.5-3.2 0-1.8 1.5-3.2 3.5-3.3.4-2 2-3.5 4-3.5s3.6 1.5 4 3.5c2 .1 3.5 1.5 3.5 3.3 0 .5-.1 1-.3 1.4" stroke="#14b8a6" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M17 20l3 3 3-3M20 23v-7" stroke="#14b8a6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  /* ── Scripting & Dev ── */
  'Groovy': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#4298b8" opacity="0.12"/>
      <path d="M10 12c0 0 2-4 6-4s6 4 6 4" stroke="#4298b8" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <path d="M10 20c0 0 2 4 6 4s6-4 6-4" stroke="#4298b8" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <path d="M8 16h16" stroke="#4298b8" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  'Automation': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#8b5cf6" opacity="0.12"/>
      <path d="M16 9a7 7 0 00-7 7" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M16 23a7 7 0 007-7" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M9 16l-2-2 2-2" stroke="#8b5cf6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 16l2 2-2 2" stroke="#8b5cf6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="16" r="2.5" fill="#8b5cf6" opacity="0.6"/>
    </svg>
  ),
  'Linux Administration': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#fcd34d" opacity="0.12"/>
      <rect x="8" y="10" width="16" height="12" rx="2" stroke="#fcd34d" strokeWidth="1.3" fill="none"/>
      <path d="M11 14l2 2-2 2M15 18h5" stroke="#fcd34d" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'Database Administration': () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#10b981" opacity="0.12"/>
      <ellipse cx="16" cy="11" rx="7" ry="3" stroke="#10b981" strokeWidth="1.3" fill="none"/>
      <path d="M9 11v10c0 1.66 3.13 3 7 3s7-1.34 7-3V11" stroke="#10b981" strokeWidth="1.3" fill="none"/>
      <path d="M9 16c0 1.66 3.13 3 7 3s7-1.34 7-3" stroke="#10b981" strokeWidth="1.1" fill="none"/>
    </svg>
  ),
}

/* Map skill name → icon key (handles slight name variations) */
const ALIAS = {
  'Cloud Computing':            'Cloud Computing',
  'VMC on AWS and HCX':         'VMC on AWS and HCX',
  'Infrastructure Architecture':'Infrastructure Architecture',
}

export function getTechIcon(skillName) {
  const key = ALIAS[skillName] || skillName
  const Icon = TECH_ICONS[key]
  return Icon || null
}

/** Renders a tech icon badge — icon + label */
export function TechBadge({ name, size = 22, className = '' }) {
  const Icon = getTechIcon(name)
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {Icon && (
        <span style={{ width: size, height: size, flexShrink: 0, display: 'inline-flex' }}>
          <Icon />
        </span>
      )}
      <span>{name}</span>
    </div>
  )
}
