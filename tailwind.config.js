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
      gridTemplateColumns: {
        posts: 'repeat(auto-fill, minmax(32rem,1fr))',
      },
      gridAutoRows: {
        posts: 'minmax(20rem, max-content)',
      },
      padding: {
        card: '1.25rem 2.5rem 1.25rem 1.25rem',
      },
      margin: {
        header: '8rem auto 0'
      }
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
