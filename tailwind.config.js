/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFDF7',
        black: '#040303',
        'custom-red': '#a2191e',
        'neon-cyan': '#00f0ff',
        'neon-pink': '#ff00ff',
        'custom-yellow': '#e48c1e',
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
        fadeOut: "fadeOut 0.4s ease-in",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        }
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
}
