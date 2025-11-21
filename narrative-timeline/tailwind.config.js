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
        chapter1: {
          primary: '#374151',
          accent: '#DC2626',
          bg: '#1F2937',
          text: '#F3F4F6',
        },
        // Chapter 2 - Fork (Choice)
        chapter2: {
          neutral: '#6B7280',
          pathA: '#3B82F6', // JPM Blue
          pathB: '#F59E0B', // Peers Orange
        },
        // Chapter 3 - Rosetta Trap (Warning)
        chapter3: {
          primary: '#F59E0B',
          accent: '#DC2626',
          bg: '#FFFBEB',
          highlight: '#FCD34D',
        },
        // Chapter 5 - Future
        chapter5: {
          jpmSuccess: '#10B981',
          jpmBlue: '#3B82F6',
          peersGray: '#6B7280',
          peersOrange: '#F59E0B',
          bg: '#EFF6FF',
        },
      },
      fontFamily: {
        narrative: ['Georgia', 'Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'crack': 'crack 2s ease-in forwards',
        'diverge': 'diverge 1.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        crack: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        diverge: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
