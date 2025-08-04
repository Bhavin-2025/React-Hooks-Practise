import { useState } from "react";

// Custom hook starts here
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const reset = () => setCount(initialValue);

  return { count, increment, reset }; // Return values so we can use them
}

export default useCounter;
