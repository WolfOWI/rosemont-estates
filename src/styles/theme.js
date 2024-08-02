import { border, extendTheme } from "@chakra-ui/react";

// Button component
// -----------------------------------
const Button = {
  baseStyle: {
    borderRadius: "xl",
  },
  variants: {
    colorfilled: {
      bg: "thorn.0",
      color: "beige.0",
      _hover: {
        bg: "thorn.P2",
        color: "beige.0",
      },
    },
    lightFilled: {
      bg: "beige.0",
      color: "thorn.0",
      _hover: {
        bg: "thorn.P2",
        color: "beige.0",
      },
    },
    lightOutline: {
      bg: "transparent",
      color: "beige.0",
      border: "2px solid",
      borderColor: "beige.0",
      _hover: {
        bg: "beige.0",
        color: "thorn.0",
      },
    },
  },
  defaultProps: {
    variant: "colorfilled",
  },
};
// -----------------------------------

// Menu component
// -----------------------------------
const Menu = {
  baseStyle: {
    list: {
      bg: "beige.0",
      color: "thorn.M1",
      borderColor: "beige.M1",
    },
    item: {
      bg: "beige.0",
      color: "thorn.M1",
      _hover: {
        bg: "thorn.P2",
        color: "beige.0",
      },
    },
  },
};
// -----------------------------------

// GLOBAL THEME
// -----------------------------------
const theme = extendTheme({
  components: {
    Button,
    Menu,
  },
  styles: {
    global: {
      body: {
        bg: "beige.0",
        color: "thorn.M1",
      },
    },
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
      0: "#D27A7A",
    },
    thorn: {
      P3: "#88a9a3",
      P2: "#709790",
      P1: "#41756b",
      0: "#115246",
      M1: "#0c3931",
      M2: "#07211c",
    },
  },
});
// -----------------------------------
export default theme;
