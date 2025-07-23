import { useState } from "react";

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10">
      <div
        className="cursor-pointer bg-blue-600 p-4 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>What is React</h2>
      </div>

      {isOpen && (
        <div className="p-4 bg-blue-300 border">
          React is a JavaScript library for building user interfaces.
        </div>
      )}
    </div>
  );
}

export default FAQ
