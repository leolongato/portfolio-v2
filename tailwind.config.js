const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
