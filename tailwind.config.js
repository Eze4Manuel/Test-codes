/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      lato: ['"Lato", sans-serif'],
      josefinSans: ['"Josefin Sans", sans-serif'],
    },
    fontSize: {
      xxs: '0.65rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      gridTemplateRows: {
        layout: 'auto 50px auto 50px auto',
      },
      colors: {
        'cci-black': '#101318',
        'cci-black-dim': 'rgba(16, 19, 24, 0.6)',
        'cci-black-dim2': 'rgba(16, 19, 24, 0.02)',
        'cci-border': 'rgba(16, 19, 24, 0.15)',
        'cci-grey': '#686868',
        'cci-grey-dim': '#686868CC',
        'cci-grey-dim2': '#68686880',
        'cci-grey-border': 'rgba(104, 104, 104, 0.5)',
        'cci-green': '#00B232',
        'cci-green2': ' #02C94F',
        'cci-red': '#b20000',
        'cci-red-light': 'rgba(178, 0, 0, 0.09)',

        primary: {
          main: '#b20000',
          light: '#ed371c',
          dark: '#590000',
        },
      },
      screens: {
        xxl: '1280px',
        xxxl: '1440px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
