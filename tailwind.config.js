/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFDF7',
        'black': '#040303',
        'custom-red': '#a2191e'
      }
    },
  },
  plugins: [],
}
