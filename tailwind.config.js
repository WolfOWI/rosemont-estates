/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Libre Baskerville", "serif"],
        alt: ["Averia Serif Libre", "serif"],
      },
      colors: {
        beige: {
          P2: "#fbfaf6",
          P1: "#f8f5ee", // Plus
          0: "#F3EEE2",
          M1: "#dbd6cb", // Minus
          M2: "#c2beb5",
          M3: "#aaa79e",
        },
        rosered: {
          P2: "#e4afaf",
          P1: "#db9595",
          0: "#D27A7A",
          M1: "#a86262",
          M2: "#7e4949",
        },
        thorn: {
          P3: "#88a9a3",
          P2: "#709790",
          P1: "#41756b",
          0: "#115246",
          M1: "#0c3931",
          M2: "#07211c",
        },
        warmgray: {
          800: "#292524",
          600: "#57534E",
        },
      },
    },
  },
  plugins: [],
};
