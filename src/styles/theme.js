import { extendTheme } from "@chakra-ui/react";

// Button component
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
    tertiary: {
      bg: "transparent",
      color: "thorn.0",
      border: "none",
      _hover: {
        color: "thorn.P2",
      },
    },
  },
  defaultProps: {
    variant: "colorfilled",
  },
};

// Menu component
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

// Form components
const FormControl = {
  baseStyle: {
    label: {
      fontWeight: "bold",
    },
  },
};

const Input = {
  variants: {
    outline: {
      field: {
        borderWidth: "2px",
        bg: "beige.M1",
        borderColor: "beige.M1",
        borderRadius: "xl",
        _hover: {
          borderColor: "beige.M2",
        },
        _focus: {
          bg: "transparent",
          borderColor: "thorn.0",
          boxShadow: "0 0 0 1px thorn.0",
          ring: "thorn.0",
        },
      },
    },
  },
};

const Radio = {
  baseStyle: {
    control: {
      bg: "beige.M2",
      borderColor: "beige.M2",
      _checked: {
        bg: "thorn.0",
        borderColor: "thorn.0",
        _hover: {
          bg: "thorn.P3",
          borderColor: "thorn.P3",
        },
      },
      _focus: {
        borderColor: "thorn.0",
        boxShadow: "0 0 0 1px thorn.0",
      },
      _hover: {
        borderColor: "thorn.0",
      },
    },
  },
};

const theme = extendTheme({
  components: {
    Button,
    Menu,
    FormControl,
    Input,
    Radio,
  },
  styles: {
    global: {
      h1: {
        color: "warmgray.800",
      },
      body: {
        fontFamily: "Libre Baskerville",
        bg: "beige.0",
        color: "warmgray.600",
      },
      a: {
        fontWeight: "bold",
        color: "thorn.0",
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
    warmgray: {
      800: "#292524",
      600: "#57534E",
    },
  },
});

export default theme;
