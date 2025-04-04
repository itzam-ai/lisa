/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'breathe': 'breathe 8s ease-in-out infinite',
        'grow': 'grow 12s ease-in-out infinite',
        'fade': 'fade 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
        grow: {
          '0%, 100%': { height: '100%', width: '100%' },
          '50%': { height: '120%', width: '120%' },
        },
        fade: {
          '0%': { opacity: '0.2' },
          '33%': { opacity: '0.7' },
          '66%': { opacity: '0.4' },
          '100%': { opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
} 