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
      colors: {
        'cci-black': '#101318',
        'cci-black-dim': 'rgba(16, 19, 24, 0.6)',
        'cci-black-dim2': 'rgba(16, 19, 24, 0.02)',
        'cci-border': 'rgba(16, 19, 24, 0.15)',
        'cci-grey': '#686868',
        'cci-grey-dim': '#686868CC',
        'cci-green': '#00B232',

        primary: {
          main: '#b20000',
          light: '#ed371c',
          dark: '#590000',
        },
      },
    },
  },
  plugins: [],
};
