import { useEffect, useRef, useState } from "react";

function PreviousValueTracker() {
  const [count, setCount] = useState(0);

  // Step 1: Create a ref to store previous value
  const prevCountRef = useRef();

  // Step 2: Update ref after every render (with latest count)
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Tracking Previous Count</h1>

      <p className="text-xl mb-2">Current Count: {count}</p>
      <p className="text-xl text-gray-600">
        Previous Count: {prevCountRef.current ?? "N/A"}
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 !bg-blue-600 text-white px-4 py-2 rounded hover:!bg-blue-700"
      >
        Increment
      </button>
    </div>
  );
}

export default PreviousValueTracker;
