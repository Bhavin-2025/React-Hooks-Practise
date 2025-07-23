import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h1 className="text-3xl font-bold mb-6">
        {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </h1>
      
      <button 
        onClick={toggleTheme}
        className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
