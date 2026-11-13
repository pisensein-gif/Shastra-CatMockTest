import React, { useState } from 'react';
import ClubHeader from './ClubHeader';
import ClubFooter from './ClubFooter';
import themeBg from '../assets/Theme/Theme.jpg';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, BookOpen, AlertTriangle, Maximize, BarChart3, User } from 'lucide-react';

export default function InstructionPage({ candidateProfile, onStartExam, onLogout, onOpenProfile }) {
  const [agreed, setAgreed] = useState(false);
  const candidateName = candidateProfile?.name || "Abhishek K P";

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

    onStartExam();
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

      {/* Main Instruction Card */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-2.5 sm:p-6 flex flex-col z-10 my-1 sm:my-2">
        <div className="bg-[#070e24]/90 backdrop-blur-xl rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-cyan-500/30 flex-1 flex flex-col overflow-hidden">
          
          {/* Sub Header */}
          <div className="bg-gradient-to-r from-blue-900/60 via-[#0a1b42] to-cyan-950/60 border-b border-cyan-500/20 px-4 sm:px-6 py-3 sm:py-4 flex flex-col xs:flex-row xs:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                <BookOpen size={16} />
              </div>
              <div>
                <h2 className="text-xs sm:text-base font-bold text-white tracking-wide">
                  General Instructions for Candidates
                </h2>
                <p className="text-[10px] sm:text-[11px] text-cyan-300/70">
                  Please read the exam guidelines carefully before starting the test.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 self-start xs:self-auto bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold text-cyan-300 shrink-0">
              <Clock size={13} className="text-cyan-400" />
              <span>Duration: 120 Minutes</span>
            </div>
          </div>

          {/* Student Candidate Banner & View Analytics Button inside the Window */}
          <div className="bg-[#091538] border-b border-cyan-500/25 px-4 sm:px-6 py-3 sm:py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-teal-300 p-0.5 shadow-md shrink-0">
                <div className="w-full h-full rounded-full bg-[#040817] flex items-center justify-center text-cyan-300 font-extrabold text-sm sm:text-base">
                  {candidateName ? candidateName.charAt(0).toUpperCase() : 'S'}
                </div>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 flex-wrap">
                  <span>Student: {candidateName}</span>
                  <span className="text-[9px] sm:text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full font-mono">
                    {candidateProfile?.department || 'CET'}
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs text-cyan-300/80 truncate max-w-[220px] sm:max-w-none">
                  {candidateProfile?.email} • {candidateProfile?.year || 'Candidate'}
                </div>
              </div>
            </div>

            {/* View Analytics Button in Window */}
            {onOpenProfile && (
              <button
                onClick={onOpenProfile}
                className="w-full sm:w-auto px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all cursor-pointer group hover:scale-102"
              >
                <BarChart3 size={17} className="text-white group-hover:scale-110 transition-transform" />
                <span>View Analytics & Past Attempts</span>
              </button>
            )}
          </div>

          {/* Scrollable Instruction Content */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm leading-relaxed flex-1 text-gray-300">
            
            {/* Fullscreen Mandatory Banner */}
            <div className="p-3.5 bg-amber-950/40 border border-amber-500/40 rounded-xl flex items-start gap-3 text-xs text-amber-200">
              <Maximize size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-100 font-bold block mb-0.5">Mandatory Fullscreen Security Policy:</strong>
                <span>
                  The examination window will automatically launch in <strong>locked Fullscreen mode</strong>. Exiting fullscreen, switching tabs, or pressing Escape is strictly prohibited and will pause your examination until fullscreen is restored.
                </span>
              </div>
            </div>

            {/* Sectional Rules Notice */}
            <div className="p-4 bg-gradient-to-r from-blue-950/60 to-cyan-950/60 border-l-4 border-cyan-400 rounded-r-xl space-y-1.5 text-xs text-cyan-100">
              <p className="font-bold text-white text-sm flex items-center gap-2">
                <ShieldCheck size={16} className="text-cyan-400" />
                <span>CAT Examination Pattern & Sectional Timing:</span>
              </p>
              <p className="text-gray-300">
                The test comprises three mandatory sections to be attempted in a strictly sequential order:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="bg-black/30 border border-cyan-500/20 p-2.5 rounded-lg">
                  <div className="font-bold text-white">Section I: VARC</div>
                  <div className="text-[11px] text-cyan-400">40 Minutes • 24 Qs</div>
                </div>
                <div className="bg-black/30 border border-cyan-500/20 p-2.5 rounded-lg">
                  <div className="font-bold text-white">Section II: DILR</div>
                  <div className="text-[11px] text-cyan-400">40 Minutes • 20 Qs</div>
                </div>
                <div className="bg-black/30 border border-cyan-500/20 p-2.5 rounded-lg">
                  <div className="font-bold text-white">Section III: QA</div>
                  <div className="text-[11px] text-cyan-400">40 Minutes • 22 Qs</div>
                </div>
              </div>
              <p className="text-[11px] text-cyan-300/80 pt-1">
                ⚠️ As soon as the 40-minute timer for a section expires, your answers will be automatically submitted, and the next section will open. You cannot return to a previous section.
              </p>
            </div>

            {/* Marking Scheme */}
            <div className="bg-white/5 border border-cyan-500/20 p-4 rounded-xl">
              <h3 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                <span>1. Marking Scheme & Evaluation</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                <li className="flex items-center gap-2 bg-black/20 p-2 rounded border border-white/5">
                  <span className="font-black text-emerald-400">+3 marks</span>
                  <span>for each correct response.</span>
                </li>
                <li className="flex items-center gap-2 bg-black/20 p-2 rounded border border-white/5">
                  <span className="font-black text-rose-400">-1 mark</span>
                  <span>for wrong answers in Multiple Choice (MCQ).</span>
                </li>
                <li className="flex items-center gap-2 bg-black/20 p-2 rounded border border-white/5">
                  <span className="font-black text-cyan-400">0 marks</span>
                  <span>(No negative marking) for Non-MCQ / TITA questions.</span>
                </li>
                <li className="flex items-center gap-2 bg-black/20 p-2 rounded border border-white/5">
                  <span className="font-black text-gray-400">0 marks</span>
                  <span>for unattempted questions.</span>
                </li>
              </ul>
            </div>

            {/* Question Palette Legend */}
            <div className="bg-white/5 border border-cyan-500/20 p-4 rounded-xl">
              <h3 className="font-bold text-white text-sm mb-3">
                2. TCS iON Question Palette Symbols & Color Codes
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* 1. Not Visited */}
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-black/30 border border-white/10">
                  <div className="w-8 h-8 rounded bg-[#e9ecef] border border-gray-400 flex items-center justify-center font-bold text-gray-800 shadow shrink-0">
                    24
                  </div>
                  <span>You have <strong>not visited</strong> the question yet.</span>
                </div>

                {/* 2. Not Answered */}
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-black/30 border border-white/10">
                  <div className="w-8 h-8 cat-shape-not-answered flex items-center justify-center font-bold text-white shadow shrink-0">
                    01
                  </div>
                  <span>You have <strong>not answered</strong> the question.</span>
                </div>

                {/* 3. Answered */}
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-black/30 border border-white/10">
                  <div className="w-8 h-8 cat-shape-answered flex items-center justify-center font-bold text-white shadow shrink-0">
                    05
                  </div>
                  <span>You have <strong>answered</strong> the question.</span>
                </div>

                {/* 4. Marked for Review */}
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-black/30 border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-[#6f42c1] flex items-center justify-center font-bold text-white shadow shrink-0">
                    09
                  </div>
                  <span>You have <strong>marked for review</strong> (unanswered).</span>
                </div>

                {/* 5. Answered & Marked for Review */}
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-black/30 border border-white/10 sm:col-span-2">
                  <div className="relative w-8 h-8 rounded-full bg-[#6f42c1] flex items-center justify-center font-bold text-white shadow shrink-0">
                    12
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border border-white flex items-center justify-center text-[8px]">✓</span>
                  </div>
                  <span>The question is <strong>Answered & Marked for Review</strong> (this <em>WILL</em> be evaluated).</span>
                </div>
              </div>
            </div>

            {/* Navigating and Answering */}
            <div className="bg-white/5 border border-cyan-500/20 p-4 rounded-xl text-xs space-y-2 text-gray-300">
              <h3 className="font-bold text-white text-sm mb-1">3. Navigating & Answering Questions</h3>
              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>To select an option, click on the desired radio button.</li>
                <li>To save your answer, you <strong>must click Save & Next</strong>.</li>
                <li>For Non-MCQ (TITA) questions, use the on-screen numeric keypad or keyboard.</li>
                <li>An on-screen <strong>Virtual Calculator</strong> is available at the top right of the examination window.</li>
              </ul>
            </div>

            {/* Declaration Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer select-none group p-3.5 bg-cyan-950/40 border border-cyan-500/30 rounded-xl hover:bg-cyan-950/60 transition-colors">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-cyan-500 text-cyan-500 focus:ring-cyan-400 cursor-pointer"
                />
                <span className="text-xs text-cyan-100 leading-snug">
                  I have read and understood all instructions. All hardware allotted is in proper working condition. I agree that the test will run in <strong>locked Fullscreen mode</strong> and cannot be exited before final exam submission.
                </span>
              </label>
            </div>

          </div>

          {/* Action Footer */}
          <div className="bg-[#050b1e] px-6 py-4 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">
                Assigned Candidate System: <strong className="text-cyan-300">SHASTRA-CBT-01</strong>
              </span>
              {onOpenProfile && (
                <>
                  <span className="text-gray-600 hidden sm:inline">•</span>
                  <button
                    onClick={onOpenProfile}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer hidden sm:flex"
                  >
                    <BarChart3 size={14} />
                    <span>View Performance Analytics</span>
                  </button>
                </>
              )}
            </div>

            <button
              onClick={handleBeginExam}
              disabled={!agreed}
              className={`w-full sm:w-auto px-8 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] ${
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
