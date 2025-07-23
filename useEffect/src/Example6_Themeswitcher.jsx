import { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme; 
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme; 
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Current Theme: {theme}</h2>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
