import React, { useState, useCallback } from "react";


const Button = React.memo(({ onClick, label }) => {
  console.log("🧒 Child Rendered:", label);
  return (
    <button
      onClick={onClick}
      className="!bg-blue-500 text-white px-4 py-2 rounded mr-2"
    >
      {label}
    </button>
  );
});

function CounterApp() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);


  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  
  const toggleState = () => {
    setOtherState((prev) => !prev);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4"> Count: {count}</h2>
      <Button onClick={handleIncrement} label="Increment" />
      <Button onClick={toggleState} label="Toggle Other State" />
      <p className="mt-4">Other state: {otherState.toString()}</p>
    </div>
  );
}

export default CounterApp;
