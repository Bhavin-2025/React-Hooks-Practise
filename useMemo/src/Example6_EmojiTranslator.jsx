import React, { useState, useMemo } from 'react';

const EmojiMoodTranslator = () => {
  const [mood, setMood] = useState('');

  const emojiDictionary = {
    happy: '😊',
    sad: '😢',
    angry: '😡',
    excited: '🤩',
    tired: '😴',
    confused: '😕',
    love: '❤️',
    surprised: '😲',
  };

  
  const translatedEmoji = useMemo(() => {
    console.log('Calculating emoji...');
    const cleaned = mood.toLowerCase().trim();
    return emojiDictionary[cleaned] || '🤔';
  }, [mood]); 

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      <h2>🧠 Emoji Mood Translator</h2>
      <input
        type="text"
        placeholder="Enter your mood..."
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <h3 style={{ marginTop: '1rem' }}>
        Your mood emoji: <span style={{ fontSize: '2rem' }}>{translatedEmoji}</span>
      </h3>
    </div>
  );
};

export default EmojiMoodTranslator;
