/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background:  '#0b1220',
        surface:     '#111c2d',
        'surface-2': '#243247',
        'surface-3': '#304158',
        accent: {
          pink:         '#59d5c2',
          maroon:       '#287d82',
          'pink-light': '#a5eee2',
          'pink-glow':  '#7ce3d2',
          'maroon-dark':'#174e5b',
          purple:       '#829eb5',
          cyan:         '#71bcd0',
        },
        text: {
          primary:   '#f2f6fb',
          secondary: '#c2cedb',
          muted:     '#91a1b4',
          dim:       '#687b91',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-glow':         'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(89,213,194,0.12), transparent)',
        'pink-glow':         'radial-gradient(circle, rgba(89,213,194,0.14) 0%, transparent 70%)',
      },
      boxShadow: {
        'pink-sm':  '0 4px 18px rgba(0,0,0,0.16)',
        'pink-md':  '0 8px 28px rgba(0,0,0,0.2)',
        'pink-lg':  '0 16px 44px rgba(0,0,0,0.23)',
        'pink-xl':  '0 20px 60px rgba(0,0,0,0.24)',
        'card':     '0 8px 30px rgba(0,0,0,0.18)',
        'card-hover': '0 16px 40px rgba(0,0,0,0.24)',
        'neon':     '0 0 0 transparent',
      },
      animation: {
        'float':      'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-pulse': 'none',
        'shimmer':    'shimmer 5s linear infinite',
        'spin-slow':  'spin 20s linear infinite',
        'orb-float':  'orb-float 12s ease-in-out infinite',
        'border-spin':'border-spin 12s linear infinite',
        'ping-slow':  'ping 2s cubic-bezier(0,0,0.2,1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-400% center' },
          '100%': { backgroundPosition: '400% center' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(89,213,194,0.12)' },
          '50%':       { boxShadow: '0 0 28px rgba(89,213,194,0.18)' },
        },
        'orb-float': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%':       { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%':       { transform: 'translate(-20px,10px) scale(0.95)' },
        },
        'border-spin': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}
