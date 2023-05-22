/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
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
        'header-md': '10rem auto 0',
        header: '8rem auto 0',
      },
      colors: {
        gBlue: '#647DEE',
        gPurple: '#7F53AC',
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
          'base-100': '#1A1E2E',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
