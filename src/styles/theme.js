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
    colorOutline: {
      bg: "transparent",
      color: "thorn.0",
      border: "2px solid",
      borderColor: "thorn.0",
      _hover: {
        color: "beige.0",
        bg: "thorn.P2",
        borderColor: "thorn.P2",
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
    tertiaryBeige: {
      bg: "transparent",
      color: "beige.0",
      fontWeight: "normal",
      border: "none",
      _hover: {
        fontWeight: "bold",
        color: "beige.P2",
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
        _placeholder: {
          color: "beige.M3",
        },
      },
    },
    searchbar: {
      field: {
        _placeholder: {
          color: "beige.M3",
        },
      },
    },
  },
};

const Textarea = {
  variants: {
    outline: {
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

const Checkbox = {
  baseStyle: {
    control: {
      bg: "beige.M2",
      borderColor: "beige.M2",
      padding: 3,
      borderRadius: "md",
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

const Select = {
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
      icon: {
        color: "thorn.0",
      },
    },
    filled: {
      field: {
        borderWidth: "2px",
        bg: "thorn.0",
        color: "beige.0",
        borderColor: "thorn.0",
        borderRadius: "xl",
        _hover: {
          borderColor: "thorn.P2",
          bg: "thorn.P2",
        },
        _focus: {
          boxShadow: "0 0 0 1px thorn.0",
        },
      },
      icon: {
        color: "beige.0",
      },
    },
  },
  defaultProps: {
    variant: "outline",
  },
};

const theme = extendTheme({
  components: {
    Button,
    Menu,
    FormControl,
    Input,
    Textarea,
    Radio,
    Checkbox,
    Select,
  },
  styles: {
    global: {
      h1: {
        color: "warmgray.800",
        fontSize: "5xl",
        fontWeight: "bold",
      },
      h2: {
        color: "warmgray.800",
        fontSize: "4xl",
        fontWeight: "bold",
      },
      h3: {
        color: "warmgray.800",
        fontSize: "2xl",
        fontWeight: "bold",
      },
      body: {
        fontFamily: "Libre Baskerville",
        bg: "beige.M1",
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
