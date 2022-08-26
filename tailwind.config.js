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
