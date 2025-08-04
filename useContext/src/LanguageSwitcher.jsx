import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button onClick={toggleLanguage}>
      Switch to {language === "en" ? "हिन्दी" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
