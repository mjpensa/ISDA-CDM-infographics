/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Chapter 1 - Tower of Babel (Problem)
        'chapter1': {
          primary: '#374151',
          accent: '#DC2626',
          bg: '#1F2937',
          text: '#F3F4F6',
        },
        // Chapter 2 - Fork in Road (Choice)
        'chapter2': {
          neutral: '#6B7280',
          pathA: '#3B82F6', // JPM Blue
          pathB: '#F59E0B', // Peers Orange
          bg: '#FFFFFF',
        },
        // Chapter 3 - Rosetta Trap (Warning)
        'chapter3': {
          primary: '#F59E0B',
          accent: '#DC2626',
          bg: '#FFFBEB',
          highlight: '#FCD34D',
        },
        // Chapter 4 - Ripple Effect (Divergence)
        'chapter4': {
          peersStart: '#F59E0B',
          peersEnd: '#DC2626',
          jpmStart: '#3B82F6',
          jpmEnd: '#10B981',
          bg: '#F9FAFB',
        },
        // Chapter 5 - Future (Resolution)
        'chapter5': {
          jpmGreen: '#10B981',
          jpmBlue: '#3B82F6',
          peersGray: '#6B7280',
          peersOrange: '#F59E0B',
          bg: '#EFF6FF',
        },
      },
      fontFamily: {
        'narrative': ['Georgia', 'Merriweather', 'serif'],
        'ui': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'narrative': ['1.125rem', '1.75rem'], // 18px
        'narrative-lg': ['1.25rem', '1.875rem'], // 20px
        'quote': ['1.5rem', '2rem'], // 24px
        'chapter-title': ['3rem', '1.1'], // 48px
        'chapter-subtitle': ['1.5rem', '1.4'], // 24px
      },
      animation: {
        'crack-spread': 'crack 2s ease-in forwards',
        'tower-crumble': 'crumble 1.5s ease-out forwards',
        'path-diverge': 'diverge 1.2s ease-in-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        crack: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        crumble: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(20px) rotate(5deg)', opacity: '0.3' },
        },
        diverge: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(var(--diverge-distance))' },
        },
      },
    },
  },
  plugins: [],
}
