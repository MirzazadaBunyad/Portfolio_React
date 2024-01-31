import React from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [color, setColor] = useState(true);
  const obj = {
    color,
    setColor,
  };
  return <ThemeContext.Provider value={obj}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
