/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Overpass', 'Noto Sans JP'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#324AA6',
          secondary: '#999EEF',
          accent: '#ACB4FC',
          neutral: '#E0CCF6',
          'base-100': '#0D1546',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
