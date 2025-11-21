/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy (Problem State)
        legacy: {
          primary: '#6B7280',
          accent: '#DC2626',
          bg: '#F3F4F6',
        },
        // Native (Success State)
        native: {
          primary: '#0066CC',
          secondary: '#10B981',
          accent: '#059669',
          bg: '#EFF6FF',
        },
        // Translator (Warning State)
        translator: {
          primary: '#F59E0B',
          secondary: '#FCD34D',
          accent: '#DC2626',
          bg: '#FFFBEB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
