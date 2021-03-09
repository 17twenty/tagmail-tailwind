module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.html', './src/**/*.vue', './index.html'],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [],
};
