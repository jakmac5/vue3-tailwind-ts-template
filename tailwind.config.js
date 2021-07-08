module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    maxWidth: {
      "fhd-1920": "1920px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
