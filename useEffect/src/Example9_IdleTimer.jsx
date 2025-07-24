import { useEffect, useState, useRef } from 'react';

export default function IdleTimer() {
  const [isIdle, setIsIdle] = useState(false);
  const timerRef = useRef(null); 
  const idleTime = 10000; 

  const resetTimer = () => {
    setIsIdle(false);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsIdle(true); 
    }, idleTime);
  };

  useEffect(() => {
    
    const events = ['mousemove', 'keydown', 'scroll', 'click'];

    events.forEach((event) =>
      window.addEventListener(event, resetTimer)
    );

    resetTimer();

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, resetTimer)
      );
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="p-4 m-4 text-center">
      <h2 className="text-xl font-semibold">Idle Timer Example</h2>
      <p className="mt-4 text-lg">
        {isIdle ? '😴 You’ve been inactive for 10 seconds' : '✅ You are active'}
      </p>
    </div>
  );
}
