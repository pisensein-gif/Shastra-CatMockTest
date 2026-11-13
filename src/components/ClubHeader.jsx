import React from 'react';
import shastraLogo from '../assets/logo.png';
import { User, LogOut, ShieldCheck, Clock, BookOpen, BarChart3, Settings } from 'lucide-react';

export default function ClubHeader({ candidateProfile, onLogout, onOpenProfile, showCandidate = false }) {
  return (
    <header className="w-full bg-[#040817]/95 backdrop-blur-md border-b border-cyan-500/25 px-3 sm:px-8 py-2.5 sm:py-3.5 z-30 shrink-0">
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
          <div className="flex items-center gap-1.5 sm:gap-3">
            
            {/* DEDICATED VIEW ANALYTICS BUTTON IN HEADER */}
            {onOpenProfile && (
              <button
                onClick={onOpenProfile}
                className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/50 hover:border-cyan-300 text-cyan-300 hover:text-white font-bold text-[11px] sm:text-xs shadow-[0_0_15px_rgba(34,211,238,0.25)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all cursor-pointer group shrink-0"
                title="View your exam performance analytics, score trends and question reviews"
              >
                <BarChart3 size={15} className="text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                <span className="hidden sm:inline">View Analytics</span>
                <span className="sm:hidden text-[10px]">Analytics</span>
              </button>
            )}

            {/* BIGGER, PROMINENT CANDIDATE PROFILE CARD WITH STUDENT NAME */}
            <button
              onClick={onOpenProfile}
              className="flex items-center gap-2 sm:gap-3 bg-[#070e24] hover:bg-[#0c183d] border-2 border-cyan-500/40 hover:border-cyan-300 px-2 py-1 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all cursor-pointer group text-left"
              title="Click to open your Profile & Analytics dashboard"
            >
              {/* Glow Avatar */}
              <div className="relative shrink-0">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-teal-300 p-0.5 shadow-md group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-[#040817] flex items-center justify-center text-cyan-300 font-extrabold text-xs sm:text-base">
                    {candidateProfile.name ? candidateProfile.name.charAt(0).toUpperCase() : <User size={16} />}
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#040817]" title="Active Student"></span>
              </div>

              {/* Student Name & Department */}
              <div className="text-left hidden xs:block">
                <div className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span className="max-w-[80px] sm:max-w-[160px] truncate">{candidateProfile.name || "Student"}</span>
                  <Settings size={12} className="text-cyan-400 opacity-70 group-hover:opacity-100 group-hover:rotate-90 transition-all shrink-0 hidden sm:block" />
                </div>
                <div className="text-[9px] sm:text-[11px] text-cyan-300/80 font-medium truncate max-w-[80px] sm:max-w-[160px] hidden sm:block">
                  {candidateProfile.department ? `${candidateProfile.department}` : candidateProfile.email}
                </div>
              </div>
            </button>

            {/* Logout button */}
            {onLogout && (
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-semibold p-2 sm:px-3 sm:py-2 rounded-xl border border-red-500/30 hover:bg-red-500/10 transition-colors cursor-pointer shrink-0"
                title="Logout from Account"
              >
                <LogOut size={15} />
                <span className="hidden md:inline">Logout</span>
              </button>
            )}
          </div>
        ) : (
          /* Public Header Quick Info */
          <div className="flex items-center gap-2 sm:gap-4 text-xs">
            <div className="hidden md:flex items-center gap-4 text-gray-300 font-medium">
              <span className="flex items-center gap-1.5 text-cyan-300/90">
                <Clock size={14} className="text-cyan-400" />
                120 Mins (40m / Sec)
              </span>
              <span className="flex items-center gap-1.5 text-blue-300/90">
                <BookOpen size={14} className="text-blue-400" />
                66 Questions (VARC, DILR, QA)
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold text-[10px] sm:text-[11px] shadow-[0_0_10px_rgba(34,211,238,0.15)]">
              <ShieldCheck size={13} className="text-cyan-400 shrink-0" />
              <span className="hidden xs:inline">Official CBT Pattern</span>
              <span className="xs:hidden">CBT</span>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
