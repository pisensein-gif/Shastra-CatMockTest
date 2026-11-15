import React, { useEffect, useState } from 'react';
import shastraLogo from '../assets/logo.png';
import cetLogo from '../assets/cet_logo.png';
import themeBg from '../assets/Theme/Theme.jpg';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 300);
          return 100;
        }
        const inc = Math.floor(Math.random() * 12) + 8;
        return Math.min(100, prev + inc);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#040817] text-white font-sans select-none overflow-hidden">
      
      {/* Background Theme with deep smooth gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url(${themeBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040817]/90 via-[#040817]/70 to-[#040817] pointer-events-none" />

      {/* Subtle Soft Ambient Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Central Content: Dual Logos + Collaboration + Loading Bar */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-md w-full px-6 text-center">
        
        {/* Dual Logos (Shastra CET & College Union CET) */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-5">
          <img 
            src={shastraLogo} 
            alt="Shastra CET" 
            className="h-13 sm:h-16 w-auto object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.7)]"
          />
          <div className="h-9 sm:h-11 w-px bg-cyan-500/40" />
          <img 
            src={cetLogo} 
            alt="College Union CET 2026-27" 
            className="h-13 sm:h-16 w-auto object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.7)]"
          />
        </div>

        {/* Title & Collaboration Banner */}
        <div className="mb-6 space-y-1">
          <h1 className="text-base sm:text-lg font-bold text-white tracking-wider uppercase">
            CAT MOCK TEST PORTAL
          </h1>
          <p className="text-xs sm:text-sm text-cyan-300 font-semibold tracking-wide">
            Shastra CET × College Union 2026-27
          </p>
          <p className="text-[11px] text-gray-400">
            College of Engineering Trivandrum
          </p>
        </div>

        {/* Clean Loading Bar (Sharp Corners) */}
        <div className="w-full bg-[#0a1533] border border-cyan-500/30 h-2 overflow-hidden p-0.5 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* System Initialisation & Percentage */}
        <div className="w-full flex items-center justify-between text-xs text-cyan-300/80 mt-3 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-cyan-400 animate-pulse"></span>
            <span>System Initialisation...</span>
          </span>
          <span className="font-bold text-cyan-200">{progress}%</span>
        </div>

        {/* Subtitle Attribution */}
        <div className="mt-8 text-[11px] text-gray-400 font-mono tracking-wide">
          Provided by <strong className="text-cyan-300">Shastra CET</strong> in collaboration with <strong className="text-cyan-300">College Union 2026-27</strong>
        </div>

      </div>

    </div>
  );
}
