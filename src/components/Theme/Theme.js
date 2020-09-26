import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#d32f2f",
    primaryLight: "#ff6659",
    primaryDark: "#9a0007",
    background: "#fafafa",
    surface: "#eee",
    border: "#ddd"
  },
  fonts: {
    primary: "#fff",
    primaryLight: "#000",
    primaryDark: "#fff",
    price: "#b00020",
    error: "#b00020"
  },
  fontSizes: {
    tiny: "0.6em",
    small: "0.8em",
    medium: "1em",
    large: "1.2em",
    huge: "1.4em",
    gargantuan: "1.6em"
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;