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
      sm: '16px',
      base: '25px',
      lg: '31,25px',
      xl: '39,06px',
      '2xl': '48,83px',
    },
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [],
};
