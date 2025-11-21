/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Path A - Native (J.P. Morgan)
        native: {
          primary: '#0066CC',
          secondary: '#00CC66',
          bg: '#EFF6FF',
        },
        // Path B - Translator (Peers)
        translator: {
          primary: '#FF8C00',
          secondary: '#FFC107',
          bg: '#FFFBEB',
        },
        // Neutral colors
        neutral: {
          dark: '#1F2937',
          light: '#F3F4F6',
        },
        // Danger/Warning
        danger: '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      height: {
        'screen-90': '90vh',
        'screen-110': '110vh',
      },
    },
  },
  plugins: [],
}
