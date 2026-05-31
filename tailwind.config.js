/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        dark: '#0A0A0C',
        'dark-surface': '#141418',
        'dark-card': '#1A1A20',
        'dark-border': '#2A2A32',
        light: '#F8F8FB',
        muted: '#6B6B78',
        'muted-light': '#9D9DA8',
        border: '#E5E5EA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        card: '16px',
        button: '10px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
