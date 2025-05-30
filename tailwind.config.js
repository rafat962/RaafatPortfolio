/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: "550px",
      md: "767px",
      lg: "1025px",
      xl: "1396px",
      xll: "1500px",
    },
    extend: {
      fontFamily: {
        sans: "Roboto",
        sec: "Rubik",
        thr: "Montserrat",
        for: "Lato",
      },
      colors: {
        prim: "#111723",
        sec: "#f12b8c",
        thr: "#835cb5",
        for: "#7091E6",
        five: "#4D869C",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
