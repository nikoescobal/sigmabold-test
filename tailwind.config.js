/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', '*.html'],
  theme: {
    fontFamily: {
      futura: ['futura', 'sans-serif'],
      'futura-light': ['futura-light', 'sans-serif'],
      'futura-bold': ['futura-bold', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'footer-overlay-mobile':
          "url('./src/assets/mobile/footer-overlay.svg')",
        'footer-overlay-desktop':
          "url('./src/assets/desktop/footer-overlay.svg')",
      },
      colors: {
        'dark-blue': 'hsla(212, 61%, 30%, 1)',
        'dark-gray': 'hsla(0, 0%, 57%, 1)',
        'custom-gray': 'hsla(210, 7%, 94%, 1)',
        'custom-orange': 'hsla(37, 96%, 61%, 1)',
        'custom-green': 'hsla(148, 41%, 52%, 1)',
        'custom-red': 'hsla(354, 90%, 71%, 1)',
        'custom-purple': 'hsla(266, 79%, 74%, 1)',
        'custom-black': 'hsla(0, 0%, 0%, 1)',
        'light-red': 'hsla(353, 91%, 71%, 1)',
        'lighter-red': 'hsla(4, 89%, 72%, 1)',
        'light-blue': 'hsla(214, 23%, 58%, 1)',
        'lighter-blue': 'hsla(194, 87%, 60%, 1)',
        'dim-blue': 'hsla(214, 23%, 58%, 1)',
        'logo-red': 'hsla(354, 71%, 64%, 1)',
        'light-gray': 'hsla(0, 0%, 94%, 1)',
        'lighter-gray': 'hsla(0, 0%, 63%, 1)',
      },
      screens: {
        mobile: '390px',
        // => @media (min-width: 640px) { ... }

        desktop: '1728px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
