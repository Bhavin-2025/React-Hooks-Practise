import { useEffect, useState } from "react";

function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup function to remove listeners
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-4">Network Status</h2>
      {isOnline ? (
        <p className="text-green-600 font-semibold">✅ You are Online</p>
      ) : (
        <p className="text-red-600 font-semibold">❌ You are Offline</p>
      )}
    </div>
  );
}

export default OnlineStatus;
