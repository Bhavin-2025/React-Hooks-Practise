import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollPercent(Math.round(scrolled));
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-200">
      <div
        className="h-2 bg-blue-500 transition-all duration-200"
        style={{ width: `${scrollPercent}%` }}
      />
      <p className="text-center text-sm mt-1">
        You've scrolled {scrollPercent}%
      </p>
    </div>
  );
}
