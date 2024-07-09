import {
  StyleFunctionProps,
  extendTheme,
  withDefaultColorScheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    config,
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          color: mode("gray.900", "gray.100")(props),
          background: mode("gray.50", "gray.800")(props),
        },
      }),
    },
    colors: {
      gray: {
        50: "#f9f9f9",
        100: "#ededed",
        200: "#d3d3d3",
        300: "#b3b3b3",
        400: "#a0a0a0",
        500: "#898989",
        600: "#6c6c6c",
        700: "#202020",
        800: "#121212",
        900: "111",
      },
      red: {
        50: "#E53E3E",
        100: "#E53E3E",
        200: "#E53E3E",
        300: "#E53E3E",
        400: "#C53030",
        500: "#C53030",
        600: "#C53030",
        700: "#C53030",
        800: "#C53030",
        900: "#C53030",
      },
    },
    components: {
      Heading: {
        defaultProps: {
          size: {
            base: "xl", // Standardgröße für kleine Bildschirme
            sm: "2xl", // Größe für kleine Bildschirme
            md: "3xl", // Größe für mittlere Bildschirme
            lg: "3xl", // Größe für große Bildschirme
            xl: "3xl", // Größe für extra große Bildschirme
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "red" })
);

export default theme;
