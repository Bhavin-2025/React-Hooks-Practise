import React, { createContext, useState } from "react";

// Create the context
export const LanguageContext = createContext();

// Create provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // default: English

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
