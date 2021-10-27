module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#303841',
        primary: '#00ADB5',
        light: '#EEEEEE',
        secondary: '#FF5722',
        projects: '#FFC898',
        proPrimary: '#DBD0C0',
        proLight: '#FAEEE0',
        contact: '#A2D2FF',
        contactLight: '#FEF9EF',
        contactSec: '#FF865E',
        contactPri: '#FEE440',
        // pLight: '#334756',
        // pSecondary: '#082032',
        // pPrimary: '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
