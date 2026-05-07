/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'cursive'],
        body: ['Barlow', 'sans-serif'],
        accent: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#E63946',
          dark: '#B02030',
          glow: 'rgba(230, 57, 70, 0.4)',
        },
        neon: {
          green: '#39FF14',
          red: '#E63946',
          orange: '#FF6B35',
        },
        dark: {
          100: '#1a1a1a',
          200: '#141414',
          300: '#0e0e0e',
          400: '#080808',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scroll': 'scroll 40s linear infinite',
        'ticker-css': 'ticker 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #E63946, 0 0 10px #E63946' },
          '100%': { boxShadow: '0 0 20px #E63946, 0 0 40px #E63946, 0 0 80px #E63946' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      boxShadow: {
        'neon-red': '0 0 20px rgba(230, 57, 70, 0.5), 0 0 40px rgba(230, 57, 70, 0.2)',
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.5), 0 0 40px rgba(57, 255, 20, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.6)',
        'card': '0 25px 50px rgba(0,0,0,0.8)',
      }
    },
  },
  plugins: [],
}

