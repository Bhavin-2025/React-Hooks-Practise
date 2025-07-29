import { useEffect, useRef } from "react";

function AutoFocusInput() {
  
  const inputRef = useRef(null);

  
  useEffect(() => {
   
    inputRef.current.focus();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Auto-Focus Example</h1>
      <input
        ref={inputRef} 
        type="text"
        placeholder="Start typing..."
        className="border p-2 rounded w-full"
      />
    </div>
  );
}

export default AutoFocusInput;




  