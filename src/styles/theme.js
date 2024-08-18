import { border, extendTheme } from "@chakra-ui/react";

// Button component
const Button = {
  baseStyle: {
    borderRadius: "xl",
  },
  variants: {
    thornFilled: {
      fontSize: "14",
      height: 12,
      bg: "thorn.0",
      color: "beige.0",
      _hover: {
        bg: "thorn.P2",
        color: "beige.0",
      },
    },
    thornOutline: {
      fontSize: "14",
      height: 12,
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
    roseOutline: {
      fontSize: "14",
      height: 12,
      bg: "transparent",
      color: "rosered.0",
      border: "2px solid",
      borderColor: "rosered.0",
      _hover: {
        color: "beige.0",
        bg: "rosered.0",
        borderColor: "rosered.P2",
      },
    },
    roseOutlineDarker: {
      fontSize: "14",
      height: 12,
      bg: "transparent",
      color: "rosered.M1",
      border: "2px solid",
      borderColor: "rosered.0",
      _hover: {
        color: "beige.0",
        bg: "rosered.0",
        borderColor: "rosered.0",
      },
    },
    lightFilled: {
      fontSize: "14",
      height: 12,
      bg: "beige.0",
      color: "thorn.0",
      _hover: {
        bg: "thorn.P2",
        color: "beige.0",
      },
    },
    lightOutline: {
      fontSize: "14",
      height: 12,
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
      fontSize: "14",
      height: 12,
      bg: "transparent",
      color: "thorn.0",
      border: "none",
      _hover: {
        color: "thorn.P2",
      },
    },
    tertiaryBeige: {
      fontSize: "14",
      height: 12,
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
    variant: "thornFilled",
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
    fileUploadStyle: {
      button: {
        bg: "thorn.0",
      },
      field: {
        borderWidth: "2px",
        bg: "thorn.0",
        color: "beige.0",
        borderColor: "thorn.0",
        borderRadius: "xl",
        _hover: {
          bg: "thorn.P2",
          borderColor: "thorn.P2",
        },
        _focus: {
          bg: "thorn.P2",
          borderColor: "thorn.P2",
          boxShadow: "0 0 0 1px thorn.0",
          ring: "thorn.P2",
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

const Popover = {
  baseStyle: {
    header: {
      fontWeight: "bold",
      fontSize: 18,
      border: "none",
    },
    content: {
      bg: "beige.P2",
      boxShadow: "lg",
      borderRadius: "2xl",
      border: "none",
      w: "400px",
    },
    arrow: {
      bg: "beige.P2",
    },
    closeButton: {
      fontSize: "16px",
      margin: "8px",
      color: "thorn.0",
      _hover: {
        color: "thorn.P2",
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
    Textarea,
    Radio,
    Checkbox,
    Select,
    Popover,
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
});

export default theme;
