/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', '*.html'],
  theme: {
    fontFamily: {
      montserrat: ['montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: 'hsl(26, 93%, 78%)',
        'light-orange': 'hsl(30, 97%, 85%)',
      },
    },
  },
  plugins: [],
};
