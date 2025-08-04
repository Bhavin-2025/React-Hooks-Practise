import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Greeting = () => {
  const { language } = useContext(LanguageContext);

  const message = language === "en" ? "Hello, friend!" : "नमस्ते, मित्र!";

  return <h2>{message}</h2>;
};

export default Greeting;
