/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#071426',
          'navy-deep': '#0B1730',
          'navy-surface': '#101C30',
          'navy-card': '#14233C',
          'navy-border': '#1E3250',
          blue: '#0866F5',
          'blue-hover': '#0652C7',
          cyan: '#00C7F7',
          'cyan-glow': 'rgba(0, 199, 247, 0.15)',
          light: '#F8FAFC',
          'light-surface': '#FFFFFF',
          'light-card': '#FFFFFF',
          'light-border': '#E2E8F0',
          'text-dark': '#101828',
          'text-muted': '#64748B',
          'text-light': '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(8, 102, 245, 0.18)',
        'glow-md': '0 0 25px rgba(0, 199, 247, 0.22)',
        'glow-lg': '0 0 45px rgba(8, 102, 245, 0.28)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        'card-light': '0 10px 30px -10px rgba(7, 20, 38, 0.07), 0 0 1px 1px rgba(7, 20, 38, 0.04)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #0866F5 0%, #00C7F7 100%)',
        'dark-mesh': 'radial-gradient(at 10% 10%, rgba(8, 102, 245, 0.12) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(0, 199, 247, 0.08) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
