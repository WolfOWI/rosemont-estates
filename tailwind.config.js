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
          P1: "#FFFCF5", // Plus
          0: "#F3EEE2",
          M1: "#E8E3D6", // Minus
          M3: "#C3BDAE",
        },
        rosered: {
          0: "#D27A7A",
        },
        leaf: {
          0: "#80CEBF",
        },
        thorn: {
          0: "#115246",
          M1: "#062D25",
        },
      },
    },
  },
  plugins: [],
};
