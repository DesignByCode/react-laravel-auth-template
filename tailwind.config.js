const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        gray: colors.blueGray,
        laravel: '#f55247',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
