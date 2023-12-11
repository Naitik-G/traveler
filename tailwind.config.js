/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster Two', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'regal-blue': '#00A5E3',
        'regal-green': '#cfe7e5',
        'regal-yellow': '#FFBF65',
        'regal-red': '#FF5768',
      },
    },
  },
  plugins: [],
}