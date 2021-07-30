module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    extend: {
      dropShadow: {
        '3xl': '0 4px 8px rgb(128,133,196)',
      }
    },
    extend: {
      spacing:{
      '103': '35rem',
      '106': '36rem',
      '109':'39rem',
    }
  }
},
  variants: {
    extend: {},
  },
  plugins: [],
}
