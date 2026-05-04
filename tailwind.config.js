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
          50:  '#f6f8fa',
          100: '#e6edf3',
          200: '#c9d1d9',
          300: '#a9b8c6',
          400: '#8b949e',
          500: '#6e7681',
          600: '#484f58',
          700: '#30363d',
          800: '#21262d',
          900: '#161b22',
          950: '#0d1117',
        },
        forest: {
          50:  '#ecfff5',
          100: '#d2ffe8',
          200: '#a8ffd4',
          300: '#69f0ae',
          400: '#35d07f',
          500: '#19b763',
          600: '#0f8f4a',
          700: '#0d6b3a',
          800: '#0c4d2d',
          900: '#09351f',
          950: '#041f13',
        },
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
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
