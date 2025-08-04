import React, { useState, useCallback } from "react";

const ThemeToggle = React.memo(({ onToggle }) => {
  console.log("🎯 ThemeToggle Button Rendered");

  return (
    <button
      onClick={onToggle}
      className="px-4 py-2 rounded bg-indigo-600 text-white"
    >
      Toggle Theme
    </button>
  );
});

function App() {
  const [darkMode, setDarkMode] = useState(false);


  const toggleTheme = useCallback(() => {
    setDarkMode((prevMode) => !prevMode);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl mb-4">
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </h1>

      <ThemeToggle onToggle={toggleTheme} />
    </div>
  );
}

export default App;
