const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,vue,htm}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        screens: {
         sm: '768px',
         md: '1024px',
         lg: '1280px',
         xl: '1536px'
        },
        padding: {
          DEFAULT: '2rem',
          sm: '2rem',
          lg: '2rem',
          xl: '2rem',
          "2xl": '2rem',
        },
      },
      height: {
        'screen-real': 'calc(100vh - 3rem)',
        header: '3rem'
      },
      colors: {
        // gray: /,
        light: {
          '50': '#fdfdfd',
          '100': '#fcfcfc',
          '200': '#fafafa',
          '300': '#f8f9fa',
          '400': '#f6f6f6',
          '500': '#f2f2f2',
          '600': '#f1f3f5',
          '700': '#e9ecef',
          '800': '#dee2e6',
          '900': '#dde1e3',
        },
        dark: {
          '50': '#4a4a4a',
          '100': '#3c3c3c',
          '200': '#323232',
          '300': '#2d2d2d',
          '400': '#222222',
          '500': '#1f1f1f',
          '600': '#1c1c1e',
          '700': '#1b1b1b',
          '800': '#181818',
          '900': '#0f0f0f',
        },
        'true-gray': colors.trueGray,
        lime: colors.lime,
        emerald: colors.emerald,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
