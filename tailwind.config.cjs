const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      }
    },
  },
  safelist: [
    { pattern: /(bg|text)-(red|blue|green|yellow|gray|purple|violet|pink|lime|orange)-(100|200|300|400|500|600|700|800|900)/ }
  ],
  plugins: [],
}
