import React, { useReducer } from "react";


const initialState = {
  theme: "light",
};

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

export default function Theme() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const isLight = state.theme === "light";

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center transition-all duration-500 ${
        isLight ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6">
        {state.theme.toUpperCase()} MODE
      </h1>

      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        className="px-6 py-2 rounded-md text-white !bg-blue-500 hover:!bg-blue-600 transition duration-300"
      >
        Toggle Theme
      </button>
    </div>
  );
}
