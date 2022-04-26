// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
  ],
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
      white: '#F4F4F4',
      gray: {
        light: '#9B9B9B',
        DEFAULT: '#5A5A5A',
      },
    },
    fontSize: {
      sm: '1.4rem',
      base: '1.563rem',
      lg: '1.953rem',
      xl: '2.441rem',
      '2xl': '3.052rem',
    },
    fontFamily: {
      play: ['Play'],
      ubuntu: ['Ubuntu'],
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '20px 20px 40px 0px #1D1D1D',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      input: '0 24px 53px -12px rgba(0, 0, 0, 0.55)',
    },
    extend: {
      colors,
    },
  },
  plugins: [],
};
