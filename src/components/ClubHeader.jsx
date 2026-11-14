import React from 'react';
import shastraLogo from '../assets/logo.png';
import { User, LogOut, Settings } from 'lucide-react';

export default function ClubHeader({ candidateProfile, onLogout, onOpenProfile, showCandidate = false }) {
  return (
    <header className="w-full bg-[#040817]/95 backdrop-blur-md border-b border-cyan-500/25 px-3 sm:px-8 py-2.5 sm:py-3 z-30 shrink-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand & Logo */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src={shastraLogo} 
              alt="Shastra CET" 
              className="h-8 sm:h-11 w-auto object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]" 
            />
            <div className="h-6 sm:h-7 w-px bg-cyan-500/30 hidden xs:block"></div>
            <div>
              <span className="text-xs sm:text-base font-bold tracking-wider text-white hidden xs:block leading-none">
                CAT MOCK PORTAL
              </span>
              <span className="text-[9px] sm:text-[10px] text-cyan-400 font-semibold tracking-wider sm:tracking-widest uppercase block mt-0.5 sm:mt-1">
                powered by shastra cet
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        {showCandidate && candidateProfile ? (
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* PROMINENT CANDIDATE PROFILE BUTTON WITH STUDENT NAME (Sharp Box) */}
            <button
              onClick={onOpenProfile}
              className="flex items-center gap-2 sm:gap-3 bg-[#070e24] hover:bg-[#0c183d] border border-cyan-500/40 hover:border-cyan-300 px-2.5 py-1.5 sm:px-4 sm:py-2 shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all cursor-pointer group text-left"
              title="Click to open your Profile & Analytics dashboard"
            >
              {/* Avatar Icon */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-tr from-cyan-400 via-blue-500 to-teal-300 p-0.5 shadow-md group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
                <div className="w-full h-full bg-[#040817] flex items-center justify-center text-cyan-300 font-extrabold text-xs sm:text-sm">
                  {candidateProfile.name ? candidateProfile.name.charAt(0).toUpperCase() : <User size={15} />}
                </div>
              </div>

              {/* Student Name & Department */}
              <div className="text-left flex flex-col justify-center">
                <div className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="max-w-[120px] sm:max-w-[200px] truncate">{candidateProfile.name || "Student"}</span>
                  <Settings size={12} className="text-cyan-400 opacity-70 group-hover:opacity-100 group-hover:rotate-90 transition-all shrink-0" />
                </div>
                <div className="text-[10px] sm:text-[11px] text-cyan-300/80 font-medium truncate max-w-[120px] sm:max-w-[200px]">
                  {candidateProfile.department ? `${candidateProfile.department}` : candidateProfile.email}
                </div>
              </div>
            </button>

            {/* Logout button (Sharp Box) */}
            {onLogout && (
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-semibold p-2 sm:px-3 sm:py-2 border border-red-500/30 hover:bg-red-500/10 transition-colors cursor-pointer shrink-0"
                title="Logout from Account"
              >
                <LogOut size={15} />
                <span className="hidden md:inline">Logout</span>
              </button>
            )}
          </div>
        ) : null}

      </div>
    </header>
  );
}
