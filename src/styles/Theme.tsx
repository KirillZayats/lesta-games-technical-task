import { ThemeProvider } from "styled-components";
import React from "react";
import { PropsTheme } from "../additionally/interfaces";

const standartTheme = {
  colors: {
    MAIN_BG_COLOR: "rgb(2, 34, 61)",
    SECOND_BG_COLOR: "#00172C",
    TEXT_COLOR: "#00B4B9",
  },
};

export const Theme: React.FC<PropsTheme> = ({ children }) => {
  return <ThemeProvider theme={standartTheme}>{children}</ThemeProvider>;
};