import { useState, useRef, useEffect } from 'react';

export default function MyRefTest() {
  const [name, setName] = useState("");
  const prevName = useRef(""); // Doesn't trigger re-render

  useEffect(() => {
    prevName.current = name;
  }, [name]); // Update ref AFTER name changes

  return (
    <div className="p-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border p-2"
      />
      <p>Current: {name}</p>
      <p>Previous: {prevName.current}</p>
    </div>
  );
}
