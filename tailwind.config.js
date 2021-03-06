const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./layouts/*.tsx",
    "./components/*.tsx",
    "./components/*/*.tsx",
    "./pages/*.tsx",
    "./pages/*/*.tsx",
    "./mappings/*.tsx",
    "./posts/*.mdx",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      cyan: colors.cyan,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      lime: colors.lime,
      sky: colors.sky,
      teal: colors.teal,
      violet: colors.violet,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
