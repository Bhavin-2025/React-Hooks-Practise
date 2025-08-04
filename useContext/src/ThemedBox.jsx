
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedBox = () => {
  const { theme } = useContext(ThemeContext);

  const boxStyle = {
    marginTop: "20px",
    padding: "30px",
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
  };

  return <div style={boxStyle}>This box uses {theme} theme 🌈</div>;
};

export default ThemedBox;
