module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'archivo': ['"Archivo Black"'],
      'mitr': ['Mitr'],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
