import React from 'react';
import shastraLogo from '../assets/logo.png';
import cetLogo from '../assets/cet_logo.png';

// High-fidelity scalable SVG icons
const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export default function ClubFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030612]/95 border-t border-cyan-500/20 text-gray-400 py-6 sm:py-8 px-4 sm:px-6 z-20 shrink-0 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 sm:gap-6">
        
        {/* Top / Main Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          
          {/* Left: Dual Logos & Club / College Union Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <img 
                src={shastraLogo} 
                alt="Shastra CET" 
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-transform duration-300 hover:scale-105"
              />
              <div className="h-8 sm:h-10 w-px bg-cyan-500/30" />
              <img 
                src={cetLogo} 
                alt="CET College Union 2026-27" 
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="border-t sm:border-t-0 sm:border-l border-cyan-500/20 pt-2 sm:pt-0 sm:pl-4">
              <div className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                SHASTRA CET × COLLEGE UNION 2026-27
              </div>
              <div className="text-[11px] sm:text-xs text-cyan-400 font-medium tracking-wide">
                Provided by Shastra CET in collaboration with College Union 2026-27
              </div>
              <div className="text-[10px] text-gray-400">
                College of Engineering Trivandrum (CET)
              </div>
            </div>
          </div>

          {/* Right: Connect Us with Sharp Social Media Buttons */}
          <div className="flex flex-col items-center sm:items-end gap-2">
            <span className="text-[11px] sm:text-xs font-bold text-gray-300 tracking-wider uppercase">
              Connect With Us
            </span>

            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/shastra_cet/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-cyan-950/50 hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 border border-cyan-500/30 hover:border-transparent text-cyan-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(34,211,238,0.15)] group"
                title="Follow Shastra CET on Instagram"
              >
                <InstagramIcon size={18} className="transition-transform group-hover:scale-110" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/shastracet/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-cyan-950/50 hover:bg-[#0077b5] border border-cyan-500/30 hover:border-transparent text-cyan-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(34,211,238,0.15)] group"
                title="Connect with Shastra CET on LinkedIn"
              >
                <LinkedinIcon size={18} className="transition-transform group-hover:scale-110" />
              </a>

              {/* Email */}
              <a
                href="mailto:teamshastracet@gmail.com"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-cyan-950/50 hover:bg-cyan-600 border border-cyan-500/30 hover:border-transparent text-cyan-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(34,211,238,0.15)] group"
                title="Email: teamshastracet@gmail.com"
              >
                <MailIcon size={18} className="transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

        {/* Center Bottom: Copyright & Developer Attribution */}
        <div className="flex flex-col items-center justify-center text-center gap-1.5 text-xs text-gray-400">
          <div>
            © {currentYear} <strong className="text-gray-200 font-semibold tracking-wide">Shastra CET</strong> in collaboration with <strong className="text-gray-200 font-semibold tracking-wide">College Union 2026-27</strong>. All rights reserved.
          </div>
          
          <div>
            <a
              href="https://www.instagram.com/abhi_sheiik_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-mono text-xs font-semibold py-0.5 px-2.5 bg-cyan-950/40 border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all duration-200 group"
            >
              <span className="text-cyan-300 group-hover:text-cyan-200 font-bold">&lt;/&gt;</span>
              <span>Developed by Abhishek</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
