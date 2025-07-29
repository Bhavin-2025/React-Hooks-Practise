import React, { useRef } from 'react';

function AudioPlayer() {
  const audioRef = useRef(null); 

  const handlePlay = () => {
    audioRef.current.play(); 
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div className="p-4">
    
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />

      <div className="mt-4 space-x-2">
        <button onClick={handlePlay} className="!bg-blue-500 text-white px-4 py-2 rounded">Play</button>
        <button onClick={handlePause} className="!bg-red-500 text-white px-4 py-2 rounded">Pause</button>
      </div>
    </div>
  );
}

export default AudioPlayer;
