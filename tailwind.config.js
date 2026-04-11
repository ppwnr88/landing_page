/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50:  '#faf6f1',
          100: '#f0e8d8',
          200: '#ddd0b8',
          300: '#c5b08e',
          400: '#ad9066',
          500: '#9a7a50',
          600: '#836444',
          700: '#6b503b',
          800: '#594234',
          900: '#4a382e',
          950: '#271d16',
        },
        forest: {
          50:  '#f3f8f3',
          100: '#e3efe3',
          200: '#c7dec8',
          300: '#9dc49f',
          400: '#6da371',
          500: '#4a8450',
          600: '#386940',
          700: '#2d5434',
          800: '#26432b',
          900: '#1f3824',
          950: '#0f1f13',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
