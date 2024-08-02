import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#F3EEE2",
      },
    },
  },
  colors: {
    beige: {
      P1: "#FFFCF5",
      0: "#F3EEE2",
      M1: "#E8E3D6",
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
  fonts: {
    heading: "Libre Baskerville, serif",
    body: "Libre Baskerville, serif",
  },
});

export default theme;
