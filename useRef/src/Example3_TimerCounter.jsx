import { useRef, useState } from "react";

function TimerApp() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null); 

  const startTimer = () => {
  
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current); 
    intervalRef.current = null; 
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">⏱ Timer App</h1>
      <p className="text-2xl mb-6">Time: {seconds} seconds</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={startTimer}
          className="!bg-green-600 text-white px-4 py-2 rounded hover:!bg-green-700"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="!bg-red-600 text-white px-4 py-2 rounded hover:!bg-red-700"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="!bg-gray-600 text-white px-4 py-2 rounded hover:!bg-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TimerApp;
