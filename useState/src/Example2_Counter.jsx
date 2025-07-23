import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div  className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-2.5">Counter:{count}</h1>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-300 cursor-pointer" onClick={handleIncrement}>Increment</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-300 cursor-pointer" onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
