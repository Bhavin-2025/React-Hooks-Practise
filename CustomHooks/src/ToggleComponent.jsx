import React from "react";
import useToggle from "./useToggle"; // Import our custom hook

function ToggleComponent() {
  const [isVisible, toggleVisibility] = useToggle(); // Default is false

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {isVisible && <p>This is a secret message! 👀</p>}
    </div>
  );
}

export default ToggleComponent;
