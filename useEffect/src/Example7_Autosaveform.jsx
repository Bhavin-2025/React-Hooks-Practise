import { useState, useEffect } from "react";

function AutoSaveForm() {
  const [bio, setBio] = useState("");

  
  useEffect(() => {
    const savedBio = localStorage.getItem("userBio");
    if (savedBio) {
      setBio(savedBio);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("userBio", bio);
  }, [bio]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Auto-Save Form</h2>
      <textarea
        className="w-full h-40 p-2 border border-gray-300 rounded"
        placeholder="Write your bio..."
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <p className="mt-2 text-sm text-gray-500">
        Your draft is saved automatically.
      </p>
    </div>
  );
}

export default AutoSaveForm;
