/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e3a8a',
          900: '#0f172a',
          950: '#07111f',
        },
        gold: {
          50: '#fff9eb',
          100: '#fff1c7',
          200: '#ffe38a',
          300: '#ffd34d',
          400: '#f4b942',
          500: '#d99923',
          600: '#b57a14',
          700: '#8f5d10',
          800: '#69420d',
          900: '#422907',
        },
      },
      boxShadow: {
        premium: '0 25px 70px -25px rgba(7, 17, 31, 0.45)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 20% 20%, rgba(244,185,66,0.16), transparent 30%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.18), transparent 30%), linear-gradient(135deg, #07111f 0%, #0b1d37 45%, #10274b 100%)',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};