import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);


  const playClickSound = () => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.1, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1);
    
    oscillator.connect(gain);
    gain.connect(context.destination);
    
    oscillator.start();
    oscillator.stop(context.currentTime + 0.1);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    
    if (navigator.vibrate) navigator.vibrate(50);
    
    
    playClickSound();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className={`fixed bottom-10 right-10 z-[1000] transition-all duration-1000 
      ${showScroll ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'}`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center h-24 w-24 active:scale-90 transition-transform duration-200"
      >
        {}
        <div className="absolute inset-0 animate-[spin_12s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <svg viewBox="0 0 100 100" className="w-full h-full scale-110">
            <defs>
              <path id="textCircle" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
            </defs>
            <text className="text-[5.5px] font-black uppercase tracking-[0.6em] fill-indigo-500/60 dark:fill-indigo-400/60">
              <textPath xlinkHref="#textCircle">
                • Scroll to top • Scroll to top • Scroll to top
              </textPath>
            </text>
          </svg>
        </div>

        {}
        <svg className="absolute inset-0 h-full w-full -rotate-90 transform pointer-events-none">
          <circle
            cx="48" cy="48" r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
            className="text-slate-200 dark:text-slate-800"
          />
          <circle
            cx="48" cy="48" r={radius}
            fill="transparent"
            stroke="url(#nexusGradient)"
            strokeWidth="3"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: offset, transition: 'stroke-dashoffset 0.3s ease-out' }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="nexusGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>

        {}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full 
          bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl
          border border-slate-200 dark:border-white/10
          shadow-[0_0_40px_rgba(99,102,241,0.1)] group-hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]
          transition-all duration-500"
        >
          {}
          <div className="relative h-6 w-6 overflow-hidden">
            <div className="flex flex-col items-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
              <ArrowUp className="h-6 w-6 text-slate-400" />
              <ArrowUp className="h-6 w-6 text-indigo-500 mt-6" />
            </div>
          </div>
          
          {}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
        </div>
      </button>

      {}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-6 transition-all duration-500 pointer-events-none">
        <div className="px-3 py-1 rounded-md bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-2xl">
          <span className="text-[9px] font-black text-indigo-600 dark:text-indigo-300 tracking-[0.2em] uppercase whitespace-nowrap">
            Launch Top
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTopButton;