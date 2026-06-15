/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background:  '#050505',
        surface:     '#0f0f0f',
        'surface-2': '#1a1a1a',
        'surface-3': '#242424',
        accent: {
          pink:         '#e91e8c',
          maroon:       '#8b1a4a',
          'pink-light': '#f472b6',
          'pink-glow':  '#ff4db8',
          'maroon-dark':'#5c1133',
          purple:       '#a855f7',
          cyan:         '#06b6d4',
        },
        text: {
          primary:   '#f8f8f8',
          secondary: '#b0b0b0',
          muted:     '#5a5a5a',
          dim:       '#3a3a3a',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-glow':         'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(233,30,140,0.15), transparent)',
        'pink-glow':         'radial-gradient(circle, rgba(233,30,140,0.2) 0%, transparent 70%)',
      },
      boxShadow: {
        'pink-sm':  '0 0 15px rgba(233,30,140,0.15)',
        'pink-md':  '0 0 30px rgba(233,30,140,0.2)',
        'pink-lg':  '0 0 60px rgba(233,30,140,0.25)',
        'pink-xl':  '0 0 100px rgba(233,30,140,0.3)',
        'card':     '0 4px 30px rgba(0,0,0,0.5)',
        'card-hover': '0 20px 60px rgba(233,30,140,0.15)',
        'neon':     '0 0 10px rgba(233,30,140,0.8), 0 0 30px rgba(233,30,140,0.4)',
      },
      animation: {
        'float':      'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
        'shimmer':    'shimmer 5s linear infinite',
        'spin-slow':  'spin 20s linear infinite',
        'orb-float':  'orb-float 12s ease-in-out infinite',
        'border-spin':'border-spin 4s linear infinite',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(233,30,140,0.25)' },
          '50%':       { boxShadow: '0 0 45px rgba(233,30,140,0.6)' },
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
