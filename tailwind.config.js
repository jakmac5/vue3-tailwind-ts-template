module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    maxWidth: {
      "fhd-1920": "1920px",
    },
    minHeight: {
      "300px": "300px",
      "400px": "400px",
      "470px": "470px",
      "500px": "500px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
