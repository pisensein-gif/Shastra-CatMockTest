import React, { useState } from 'react';
import ClubHeader from './ClubHeader';
import ClubFooter from './ClubFooter';
import themeBg from '../assets/Theme/Theme.jpg';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  BookOpen, 
  Maximize
} from 'lucide-react';

export default function InstructionPage({ candidateProfile, onStartExam, onLogout, onOpenProfile }) {
  const [agreed, setAgreed] = useState(false);

  const handleBeginExam = async () => {
    if (!agreed) return;

    // Trigger automatic fullscreen on user gesture
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        await document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        await document.documentElement.msRequestFullscreen();
      }
    } catch (err) {
      console.warn("Fullscreen auto-trigger warning:", err);
    }

    onStartExam('dynamic_random');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#040817] text-slate-100 font-sans relative select-none overflow-x-hidden">
      
      {/* Background with Theme.jpg image and cyber overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-30 mix-blend-screen scale-100 pointer-events-none"
        style={{ backgroundImage: `url(${themeBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#040817]/95 via-[#040817]/80 to-[#040817] pointer-events-none" />

      {/* Header with Candidate Profile */}
      <ClubHeader 
        candidateProfile={candidateProfile} 
        onLogout={onLogout} 
        onOpenProfile={onOpenProfile}
        showCandidate={true} 
      />

      {/* Main Instruction Card - Sharp Rectangular Box */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-2.5 sm:p-6 flex flex-col z-10 my-1 sm:my-2">
        <div className="bg-[#070e24]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-cyan-500/30 flex-1 flex flex-col overflow-hidden">
          
          {/* Sub Header */}
          <div className="bg-gradient-to-r from-blue-900/60 via-[#0a1b42] to-cyan-950/60 border-b border-cyan-500/20 px-4 sm:px-6 py-3 sm:py-4 flex flex-col xs:flex-row xs:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                <BookOpen size={16} />
              </div>
              <div>
                <h2 className="text-xs sm:text-base font-bold text-white tracking-wide">
                  General Instructions for Candidates
                </h2>
                <p className="text-[10px] sm:text-[11px] text-cyan-300/70">
                  Please read the exam guidelines carefully • Provided by Shastra CET in collaboration with College Union 2026-27
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 self-start xs:self-auto bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-cyan-300 shrink-0">
              <Clock size={13} className="text-cyan-400" />
              <span>Duration: 120 Minutes</span>
            </div>
          </div>

          {/* Scrollable Instruction Content */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm leading-relaxed flex-1 text-gray-300">
            
            {/* Fullscreen Mandatory Banner - Sharp Box */}
            <div className="p-3.5 bg-amber-950/40 border border-amber-500/40 flex items-start gap-3 text-xs text-amber-200">
              <Maximize size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-100 font-bold block mb-0.5">Mandatory Fullscreen Security Policy:</strong>
                <span>
                  The examination window will automatically launch in <strong>locked Fullscreen mode</strong>. Exiting fullscreen, switching tabs, or pressing Escape is strictly prohibited and will pause your examination until fullscreen is restored.
                </span>
              </div>
            </div>

            {/* Sectional Rules Notice - Sharp Box */}
            <div className="p-4 bg-gradient-to-r from-blue-950/60 to-cyan-950/60 border-l-4 border-cyan-400 space-y-1.5 text-xs text-cyan-100">
              <p className="font-bold text-white text-sm flex items-center gap-2">
                <ShieldCheck size={16} className="text-cyan-400" />
                <span>CAT Examination Pattern & Sectional Timing:</span>
              </p>
              <p className="text-gray-300">
                The test comprises three mandatory sections (total 68 questions) to be attempted in a strictly sequential order:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="bg-black/30 border border-cyan-500/20 p-2.5">
                  <div className="font-bold text-white">Section I: VARC</div>
                  <div className="text-[11px] text-cyan-400">40 Minutes • 24 Qs</div>
                </div>
                <div className="bg-black/30 border border-cyan-500/20 p-2.5">
                  <div className="font-bold text-white">Section II: DILR</div>
                  <div className="text-[11px] text-cyan-400">40 Minutes • 22 Qs</div>
                </div>
                <div className="bg-black/30 border border-cyan-500/20 p-2.5">
                  <div className="font-bold text-white">Section III: QA</div>
                  <div className="text-[11px] text-cyan-400">40 Minutes • 22 Qs</div>
                </div>
              </div>
              <p className="text-[11px] text-cyan-300/80 pt-1">
                ⚠️ As soon as the 40-minute timer for a section expires, your answers will be automatically submitted, and the next section will open. You cannot return to a previous section.
              </p>
            </div>

            {/* Marking Scheme - Sharp Box */}
            <div className="bg-white/5 border border-cyan-500/20 p-4">
              <h3 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                <span>1. Marking Scheme & Evaluation</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                <li className="flex items-center gap-2 bg-black/20 p-2 border border-white/5">
                  <span className="font-black text-emerald-400">+3 marks</span>
                  <span>for each correct response.</span>
                </li>
                <li className="flex items-center gap-2 bg-black/20 p-2 border border-white/5">
                  <span className="font-black text-rose-400">-1 mark</span>
                  <span>for wrong answers in Multiple Choice (MCQ).</span>
                </li>
                <li className="flex items-center gap-2 bg-black/20 p-2 border border-white/5">
                  <span className="font-black text-cyan-400">0 marks</span>
                  <span>(No negative marking) for Non-MCQ / TITA questions.</span>
                </li>
                <li className="flex items-center gap-2 bg-black/20 p-2 border border-white/5">
                  <span className="font-black text-gray-400">0 marks</span>
                  <span>for unattempted questions.</span>
                </li>
              </ul>
            </div>

            {/* Question Palette Legend - Sharp Box */}
            <div className="bg-white/5 border border-cyan-500/20 p-4">
              <h3 className="font-bold text-white text-sm mb-3">
                2. TCS iON Question Palette Symbols & Color Codes
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-white text-gray-800 font-bold border border-gray-400 flex items-center justify-center shrink-0 shadow-xs">
                    1
                  </div>
                  <span>You have not visited the question yet.</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#d9534f] text-white font-bold flex items-center justify-center shrink-0 shadow-xs">
                    2
                  </div>
                  <span>You have not answered the question.</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#5cb85c] text-white font-bold flex items-center justify-center shrink-0 shadow-xs">
                    3
                  </div>
                  <span>You have answered the question.</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#843577] text-white font-bold flex items-center justify-center shrink-0 shadow-xs">
                    4
                  </div>
                  <span>You have NOT answered the question, but marked it for review.</span>
                </div>

                <div className="flex items-center gap-3 sm:col-span-2">
                  <div className="w-7 h-7 bg-[#843577] text-white font-bold flex items-center justify-center shrink-0 relative shadow-xs">
                    5
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#5cb85c]" />
                  </div>
                  <span>The question is answered and marked for review (will be considered for evaluation).</span>
                </div>
              </div>
            </div>

            {/* Navigating and Answering - Sharp Box */}
            <div className="bg-white/5 border border-cyan-500/20 p-4 text-xs space-y-2 text-gray-300">
              <h3 className="font-bold text-white text-sm mb-1">3. Navigating & Answering Questions</h3>
              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>To select an option, click on the desired radio button.</li>
                <li>To save your answer, you <strong>must click Save & Next</strong>.</li>
                <li>For Non-MCQ (TITA) questions, use the on-screen numeric keypad or keyboard.</li>
                <li>An on-screen <strong>Virtual Calculator</strong> is available at the top right of the examination window.</li>
              </ul>
            </div>

            {/* Declaration Checkbox - Sharp Box */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer select-none group p-3.5 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-950/60 transition-colors">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 border-cyan-500 text-cyan-500 focus:ring-cyan-400 cursor-pointer"
                />
                <span className="text-xs text-cyan-100 leading-snug">
                  I have read and understood all instructions. All hardware allotted is in proper working condition. I agree that the test will run in <strong>locked Fullscreen mode</strong> and cannot be exited before final exam submission.
                </span>
              </label>
            </div>

          </div>

          {/* Action Footer - Sharp Box */}
          <div className="bg-[#050b1e] px-6 py-4 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="text-xs text-gray-400">
                Assigned Candidate System: <strong className="text-cyan-300">SHASTRA-CBT-01</strong>
              </span>
              <span className="hidden sm:inline text-gray-600">•</span>
              <span className="text-[11px] sm:text-xs text-cyan-400/90 font-medium">
                Shastra CET × College Union 2026-27
              </span>
            </div>

            <button
              onClick={handleBeginExam}
              disabled={!agreed}
              className={`w-full sm:w-auto px-8 py-2.5 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] ${
                agreed 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white cursor-pointer active:scale-98' 
                  : 'bg-gray-800 text-gray-500 border border-gray-700 cursor-not-allowed opacity-60'
              }`}
            >
              <span>I am ready to begin</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <ClubFooter />

    </div>
  );
}
