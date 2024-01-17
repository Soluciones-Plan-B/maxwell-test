const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      teal: colors.teal,
      cyan: colors.cyan,
      orange: colors.orange,
      black: colors.black,
    },
    extend: {},
  },
  plugins: [],
}
