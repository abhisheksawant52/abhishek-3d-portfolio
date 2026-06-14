export default function Footer() {
  return (
    <footer className="border-t border-surface-2 bg-surface py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-text-muted text-sm">
          © 2025{' '}
          <span className="text-accent-pink font-medium">Abhishek Sawant</span>
          {' · '}
          Built with{' '}
          <span className="text-text-secondary">React</span>{' '}
          &{' '}
          <span className="text-text-secondary">Three.js</span>
        </p>
        <p className="text-text-muted text-xs mt-1">
          Enterprise DevOps &amp; Cloud Solution Architect
        </p>
      </div>
    </footer>
  )
}
