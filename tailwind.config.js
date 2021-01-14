const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      blue: {
        light: '#46CFBF',
        DEFAULT: '#42C2B3',
        dark: '#39A89B',
      },
      orange: {
        light: '#D97A29',
        DEFAULT: '#C2862F',
        dark: '#CF5C27',
      },
      green: {
        light: '#1C4F49',
        DEFAULT: '#17423D',
        dark: '#12332F',
      },
      black: '#1D1D1D',
      gray: {
        light: '#9B9B9B',
        DEFAULT: '#5A5A5A',
      },
    },
    fontSize: {
      sm: '1rem',
      base: '1.563rem',
      lg: '1.953rem',
      xl: '2.441rem',
      '2xl': '3.052rem',
    },
    fontFamily: {
      play: ['Play'],
      ubuntu: ['Ubuntu'],
    },
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [],
};
