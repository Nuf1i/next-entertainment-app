/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'RED': '#e11d48',
        'DARK': '#10141e',
        'LightDark': '#171e31',

      },
    },
    fontFamily: {
      main: ["Roboto", "sans-serif"],
    }
  },
  plugins: [],
}
