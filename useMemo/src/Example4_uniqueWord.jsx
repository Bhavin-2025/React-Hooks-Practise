import { use } from "react";
import { useState, useMemo } from "react";

export default function UniqueWords() {
  const [word, setWord] = useState("");

  const wordStats = useMemo(() => {
    const words = word.toLowerCase().split(/\s+/).filter(Boolean);
    const totalWords = words.length;
    const uniqueWords = new Set(words).size;

    return { totalWords, uniqueWords };
  }, [word]);

  return (
    <>
      <h1>Text Analyzer</h1>

      <textarea className="m-2 border-2 rounded-xl" value={word} onChange={(e) => setWord(e.target.value)}>
        rows={8}
        cols={40 }
      </textarea>
      <p>Total Words: {wordStats.totalWords}</p>
      <p>Unique Words: {wordStats.uniqueWords}</p>
    </>
  );
}
