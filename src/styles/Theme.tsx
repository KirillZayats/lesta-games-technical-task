import { ThemeProvider } from "styled-components";
import React from "react";
import { PropsTheme } from "../additionally/interfaces";

const standartTheme = {
  colors: {
    MAIN_BG_COLOR: "#282C33",
    SECOND_BG_COLOR: "#2d323a",
    TEXT_COLOR: "#fff",
    SECOND_TEXT_COLOR: "#ABB2BF",
    MARKER_COLOR: "#C778DD",
  },
};

export const Theme: React.FC<PropsTheme> = ({ children }) => {
  return <ThemeProvider theme={standartTheme}>{children}</ThemeProvider>;
};