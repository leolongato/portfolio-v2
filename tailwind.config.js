const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ["first"],
    },
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
