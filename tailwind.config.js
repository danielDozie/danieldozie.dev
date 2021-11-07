module.exports = {
  darkMode: 'class',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    ],
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
