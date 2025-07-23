import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");
  const limit = 100;

  return (
    <div className="p-6 max-w-md mx-auto">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        className="border border-gray-400 p-3 w-full rounded"
        rows={4}
      />

      <div className={`mt-2 text-right font-medium ${text.length > limit ? "text-red-500" : "text-gray-600"}`}>
        {text.length}/{limit} characters
      </div>
    </div>
  );
}

export default CharacterCounter;
