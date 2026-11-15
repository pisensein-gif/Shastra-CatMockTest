import React, { useState, useEffect } from 'react';
import { updatePassword } from 'firebase/auth';
import { auth, saveUserProfile, fetchUserExamAttempts } from '../firebase';
import ClubHeader from './ClubHeader';
import ClubFooter from './ClubFooter';
import themeBg from '../assets/Theme/Theme.jpg';
import { 
  User, 
  BarChart3, 
  History, 
  Settings, 
  Lock, 
  ArrowLeft, 
  TrendingUp, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function ProfilePage({ candidateProfile, questions, onUpdateProfile, onBack, onLogout }) {
  const [activeTab, setActiveTab] = useState('analytics'); // 'analytics' | 'history' | 'settings'
  const [attempts, setAttempts] = useState([]);
  const [loadingAttempts, setLoadingAttempts] = useState(true);

  // Selected attempt for detailed review
  const [selectedAttempt, setSelectedAttempt] = useState(null);
  const [reviewSection, setReviewSection] = useState('VARC');
  const [selectedReviewQIndex, setSelectedReviewQIndex] = useState(0);

  // Edit Profile State
  const [name, setName] = useState(candidateProfile?.name || '');
  const [department, setDepartment] = useState(candidateProfile?.department || 'Computer Science');
  const [year, setYear] = useState(candidateProfile?.year || '4th Year');
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileMessage, setProfileMessage] = useState({ text: '', type: '' });

  // Password Update State
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState({ text: '', type: '' });

  // Load Exam Attempts from Firestore
  useEffect(() => {
    async function loadAttempts() {
      if (!candidateProfile?.uid) return;
      setLoadingAttempts(true);
      try {
        const userAttempts = await fetchUserExamAttempts(candidateProfile.uid);
        setAttempts(userAttempts);
      } catch (err) {
        console.error("Error loading user exam attempts:", err);
      } finally {
        setLoadingAttempts(false);
      }
    }
    loadAttempts();
  }, [candidateProfile?.uid]);

  // Aggregate Metrics across all attempts
  const totalAttemptsCount = attempts.length;
  const bestScore = attempts.reduce((max, att) => Math.max(max, att.totalScore || 0), 0);
  const bestPercentile = attempts.reduce((max, att) => Math.max(max, att.estimatedPercentile || 0), 0);
  const avgScore = totalAttemptsCount > 0 
    ? Math.round(attempts.reduce((acc, att) => acc + (att.totalScore || 0), 0) / totalAttemptsCount) 
    : 0;
  const totalCorrect = attempts.reduce((acc, att) => acc + (att.totalCorrect || 0), 0);
  const totalAttempted = attempts.reduce((acc, att) => acc + (att.totalAttempted || 0), 0);
  const overallAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  // Sectional aggregate averages
  const sectionalAggregates = {
    VARC: { totalAtt: 0, totalCorr: 0, totalScore: 0 },
    DILR: { totalAtt: 0, totalCorr: 0, totalScore: 0 },
    QA:   { totalAtt: 0, totalCorr: 0, totalScore: 0 }
  };

  attempts.forEach(att => {
    if (att.sectionStats) {
      ['VARC', 'DILR', 'QA'].forEach(sec => {
        if (att.sectionStats[sec]) {
          sectionalAggregates[sec].totalAtt += att.sectionStats[sec].attempted || 0;
          sectionalAggregates[sec].totalCorr += att.sectionStats[sec].correct || 0;
          sectionalAggregates[sec].totalScore += att.sectionStats[sec].score || 0;
        }
      });
    }
  });

  // Handle Save Profile Details (Name, Dept, Year only)
  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setProfileMessage({ text: '', type: '' });

    if (!name.trim()) {
      setProfileMessage({ text: 'Name cannot be blank.', type: 'error' });
      return;
    }

    setProfileSaving(true);
    try {
      const updatedData = {
        name: name.trim(),
        department,
        year
      };
      await saveUserProfile(candidateProfile.uid, updatedData);
      onUpdateProfile({ ...candidateProfile, ...updatedData });
      setProfileMessage({ text: 'Profile details updated successfully!', type: 'success' });
    } catch (err) {
      setProfileMessage({ text: err.message || 'Failed to update profile.', type: 'error' });
    } finally {
      setProfileSaving(false);
    }
  };

  // Handle Change Password
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPasswordMessage({ text: '', type: '' });

    if (!newPassword || newPassword.length < 6) {
      setPasswordMessage({ text: 'Password must be at least 6 characters long.', type: 'error' });
      return;
    }
    if (!/[A-Za-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
      setPasswordMessage({ text: 'Password must contain both letters and numbers.', type: 'error' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordMessage({ text: 'Passwords do not match.', type: 'error' });
      return;
    }

    setPasswordSaving(true);
    try {
      if (auth.currentUser) {
        await updatePassword(auth.currentUser, newPassword);
      }
      setPasswordMessage({ text: 'Password updated successfully! Use this for future email logins.', type: 'success' });
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/requires-recent-login') {
        setPasswordMessage({ text: 'For security, please log out and log back in before updating your password.', type: 'error' });
      } else {
        setPasswordMessage({ text: err.message || 'Failed to change password.', type: 'error' });
      }
    } finally {
      setPasswordSaving(false);
    }
  };

  // Questions for detailed attempt review
  const reviewQuestions = selectedAttempt ? questions.filter(q => q.section === reviewSection) : [];
  const currentReviewQ = reviewQuestions[selectedReviewQIndex] || reviewQuestions[0];
  const currentReviewResp = (selectedAttempt?.userResponses && currentReviewQ) 
    ? selectedAttempt.userResponses[currentReviewQ.id] 
    : null;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#040817] text-slate-100 font-sans relative select-none overflow-x-hidden">
      
      {/* Background Theme with cyber overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-30 mix-blend-screen scale-100 pointer-events-none"
        style={{ backgroundImage: `url(${themeBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#040817]/95 via-[#040817]/85 to-[#040817] pointer-events-none" />

      {/* Header */}
      <ClubHeader 
        candidateProfile={candidateProfile} 
        onLogout={onLogout} 
        showCandidate={true} 
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 flex flex-col z-10 my-2">
        
        {/* Top Breadcrumb & User Title Bar - Sharp Boxes */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-950/50 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white transition-colors text-xs font-semibold cursor-pointer shadow-xs shrink-0"
            >
              <ArrowLeft size={15} />
              <span className="hidden xs:inline">Back</span>
            </button>

            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                <span className="truncate max-w-[180px] sm:max-w-none">{candidateProfile?.name || 'Candidate Profile'}</span>
                <span className="text-[10px] sm:text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 font-mono shrink-0">
                  CET Student
                </span>
                <span className="text-[10px] sm:text-xs bg-blue-500/20 text-cyan-200 border border-cyan-500/30 px-2 py-0.5 font-sans shrink-0 hidden sm:inline-block">
                  Shastra CET × College Union 2026-27
                </span>
              </h1>
              <p className="text-[11px] sm:text-xs text-gray-400 truncate max-w-[260px] sm:max-w-none">
                {candidateProfile?.department} • {candidateProfile?.year}
              </p>
            </div>
          </div>

          {/* Navigation Tabs - Sharp Box */}
          <div className="flex items-center gap-1 sm:gap-1.5 bg-[#0a122e]/90 p-1 sm:p-1.5 border border-cyan-500/25 w-full sm:w-auto overflow-x-auto shadow-md shrink-0">
            <button
              onClick={() => { setActiveTab('analytics'); setSelectedAttempt(null); }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'analytics' && !selectedAttempt
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <BarChart3 size={14} />
              <span>Analytics</span>
            </button>

            <button
              onClick={() => { setActiveTab('history'); }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'history' || selectedAttempt
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <History size={14} />
              <span>Attempts ({totalAttemptsCount})</span>
            </button>

            <button
              onClick={() => { setActiveTab('settings'); setSelectedAttempt(null); }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'settings'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Settings size={14} />
              <span>Settings</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: ANALYTICS & PERFORMANCE TRENDS WITH GRAPHS */}
        {/* ========================================================================= */}
        {activeTab === 'analytics' && !selectedAttempt && (
          <div className="space-y-6">
            
            {/* Top Metric KPI Cards - Sharp Boxes */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
              
              <div className="p-4 bg-[#070e24]/90 border border-cyan-500/25 shadow-lg flex flex-col justify-between">
                <span className="text-[11px] text-cyan-400 uppercase tracking-wider font-semibold">Total Attempts</span>
                <div className="text-3xl font-black text-white mt-2">{totalAttemptsCount}</div>
                <span className="text-[10px] text-gray-400 mt-1">Full-length CAT Mocks</span>
              </div>

              <div className="p-4 bg-[#070e24]/90 border border-emerald-500/30 shadow-lg flex flex-col justify-between">
                <span className="text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">Best Score</span>
                <div className="text-3xl font-black text-emerald-400 mt-2">{bestScore}</div>
                <span className="text-[10px] text-gray-400 mt-1">out of 198 marks</span>
              </div>

              <div className="p-4 bg-[#070e24]/90 border border-amber-500/30 shadow-lg flex flex-col justify-between">
                <span className="text-[11px] text-amber-400 uppercase tracking-wider font-semibold">Peak Percentile</span>
                <div className="text-3xl font-black text-amber-400 mt-2">{bestPercentile}%ile</div>
                <span className="text-[10px] text-gray-400 mt-1">Projected CAT standing</span>
              </div>

              <div className="p-4 bg-[#070e24]/90 border border-blue-500/30 shadow-lg flex flex-col justify-between">
                <span className="text-[11px] text-blue-400 uppercase tracking-wider font-semibold">Average Score</span>
                <div className="text-3xl font-black text-blue-300 mt-2">{avgScore}</div>
                <span className="text-[10px] text-gray-400 mt-1">Mean across all attempts</span>
              </div>

              <div className="p-4 bg-[#070e24]/90 border border-purple-500/30 shadow-lg col-span-2 lg:col-span-1 flex flex-col justify-between">
                <span className="text-[11px] text-purple-400 uppercase tracking-wider font-semibold">Overall Accuracy</span>
                <div className="text-3xl font-black text-purple-300 mt-2">{overallAccuracy}%</div>
                <span className="text-[10px] text-gray-400 mt-1">{totalCorrect} correct answers</span>
              </div>

            </div>

            {/* VISUAL GRAPHS SECTION - Sharp Boxes */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Graph 1: Score & Percentile Progression Graph (SVG Line/Area Chart) */}
              <div className="lg:col-span-8 p-5 sm:p-6 bg-[#070e24]/90 border border-cyan-500/25 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                        <TrendingUp size={18} className="text-cyan-400" />
                        <span>Score Progression & Percentile Trajectory</span>
                      </h3>
                      <p className="text-[11px] text-gray-400">
                        Tracks your total marks (blue) and percentile (amber) across chronological mock tests
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 bg-cyan-400"></div>
                        <span className="text-gray-300 font-medium">Score</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 bg-amber-400"></div>
                        <span className="text-gray-300 font-medium">Percentile</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  {attempts.length > 0 ? (
                    <div className="h-64 w-full relative pt-4 pb-2">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
                        {/* Grid lines */}
                        <line x1="0" y1="20" x2="500" y2="20" stroke="#1e293b" strokeDasharray="4 4" />
                        <line x1="0" y1="70" x2="500" y2="70" stroke="#1e293b" strokeDasharray="4 4" />
                        <line x1="0" y1="120" x2="500" y2="120" stroke="#1e293b" strokeDasharray="4 4" />
                        <line x1="0" y1="170" x2="500" y2="170" stroke="#334155" />

                        {/* Y-axis labels */}
                        <text x="5" y="24" fill="#64748b" fontSize="10">150+</text>
                        <text x="5" y="74" fill="#64748b" fontSize="10">100</text>
                        <text x="5" y="124" fill="#64748b" fontSize="10">50</text>
                        <text x="5" y="166" fill="#64748b" fontSize="10">0</text>

                        {/* Generate points for Score line */}
                        {(() => {
                          const pts = attempts.slice().reverse().map((att, i, arr) => {
                            const x = arr.length === 1 ? 250 : 40 + (i * (440 / (arr.length - 1)));
                            const s = Math.max(0, Math.min(198, att.totalScore || 0));
                            const y = 170 - (s / 198) * 150;
                            return { x, y, score: att.totalScore, p: att.estimatedPercentile };
                          });

                          const pathData = pts.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`, '');
                          const areaData = `${pathData} L ${pts[pts.length - 1].x} 170 L ${pts[0].x} 170 Z`;

                          // Percentile line
                          const pPts = attempts.slice().reverse().map((att, i, arr) => {
                            const x = arr.length === 1 ? 250 : 40 + (i * (440 / (arr.length - 1)));
                            const p = Math.max(0, Math.min(100, att.estimatedPercentile || 0));
                            const y = 170 - (p / 100) * 150;
                            return { x, y };
                          });
                          const pPath = pPts.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`, '');

                          return (
                            <>
                              <defs>
                                <linearGradient id="scoreAreaGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                                </linearGradient>
                              </defs>

                              {/* Fill Area */}
                              <path d={areaData} fill="url(#scoreAreaGrad)" />

                              {/* Lines */}
                              <path d={pathData} fill="none" stroke="#22d3ee" strokeWidth="2.5" />
                              <path d={pPath} fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />

                              {/* Points */}
                              {pts.map((pt, idx) => (
                                <g key={idx}>
                                  <circle cx={pt.x} cy={pt.y} r="4" fill="#06b6d4" stroke="#ffffff" strokeWidth="1.5" />
                                  <text x={pt.x} y={pt.y - 8} fill="#22d3ee" fontSize="10" textAnchor="middle" fontWeight="bold">
                                    {pt.score}m
                                  </text>
                                </g>
                              ))}
                            </>
                          );
                        })()}
                      </svg>
                    </div>
                  ) : (
                    <div className="h-64 flex flex-col items-center justify-center text-gray-500 border border-dashed border-gray-800">
                      <TrendingUp size={32} className="mb-2 opacity-40 text-cyan-400" />
                      <p className="text-xs">No attempt history yet to plot score trajectory.</p>
                      <p className="text-[11px] text-gray-600 mt-0.5">Complete your first test to view analytics graphs.</p>
                    </div>
                  )}
                </div>

                <div className="mt-3 pt-3 border-t border-cyan-500/15 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Based on your recent exam submissions</span>
                  <span className="text-cyan-300 font-mono">100% Verified TCS CBT format</span>
                </div>
              </div>

              {/* Graph 2: Sectional Accuracy Breakdown - Sharp Box */}
              <div className="lg:col-span-4 p-5 sm:p-6 bg-[#070e24]/90 border border-cyan-500/25 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 mb-1">
                    <Layers size={18} className="text-blue-400" />
                    <span>Sectional Performance</span>
                  </h3>
                  <p className="text-[11px] text-gray-400 mb-5">
                    Comparative accuracy across Verbal, LRDI, and Quant
                  </p>

                  <div className="space-y-4">
                    {/* VARC */}
                    {(() => {
                      const sec = sectionalAggregates.VARC;
                      const acc = sec.totalAtt > 0 ? Math.round((sec.totalCorr / sec.totalAtt) * 100) : 0;
                      return (
                        <div className="bg-black/30 p-3 border border-white/5 space-y-1.5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-cyan-300">VARC (Verbal & RC)</span>
                            <span className="font-mono text-cyan-400 font-bold">{acc}% Acc</span>
                          </div>
                          <div className="w-full bg-gray-800 h-2 overflow-hidden">
                            <div className="h-full bg-cyan-400 transition-all duration-500" style={{ width: `${acc}%` }} />
                          </div>
                          <div className="flex justify-between text-[10px] text-gray-400 pt-0.5">
                            <span>{sec.totalCorr} correct / {sec.totalAtt} attempted</span>
                            <span>Score: {sec.totalScore} pts</span>
                          </div>
                        </div>
                      );
                    })()}

                    {/* DILR */}
                    {(() => {
                      const sec = sectionalAggregates.DILR;
                      const acc = sec.totalAtt > 0 ? Math.round((sec.totalCorr / sec.totalAtt) * 100) : 0;
                      return (
                        <div className="bg-black/30 p-3 border border-white/5 space-y-1.5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-amber-300">DILR (Data & Reasoning)</span>
                            <span className="font-mono text-amber-400 font-bold">{acc}% Acc</span>
                          </div>
                          <div className="w-full bg-gray-800 h-2 overflow-hidden">
                            <div className="h-full bg-amber-400 transition-all duration-500" style={{ width: `${acc}%` }} />
                          </div>
                          <div className="flex justify-between text-[10px] text-gray-400 pt-0.5">
                            <span>{sec.totalCorr} correct / {sec.totalAtt} attempted</span>
                            <span>Score: {sec.totalScore} pts</span>
                          </div>
                        </div>
                      );
                    })()}

                    {/* QA */}
                    {(() => {
                      const sec = sectionalAggregates.QA;
                      const acc = sec.totalAtt > 0 ? Math.round((sec.totalCorr / sec.totalAtt) * 100) : 0;
                      return (
                        <div className="bg-black/30 p-3 border border-white/5 space-y-1.5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-purple-300">QA (Quant Aptitude)</span>
                            <span className="font-mono text-purple-400 font-bold">{acc}% Acc</span>
                          </div>
                          <div className="w-full bg-gray-800 h-2 overflow-hidden">
                            <div className="h-full bg-purple-400 transition-all duration-500" style={{ width: `${acc}%` }} />
                          </div>
                          <div className="flex justify-between text-[10px] text-gray-400 pt-0.5">
                            <span>{sec.totalCorr} correct / {sec.totalAtt} attempted</span>
                            <span>Score: {sec.totalScore} pts</span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-cyan-500/15 text-[11px] text-gray-400 text-center">
                  Target CAT accuracy: <strong className="text-emerald-400">80%+</strong>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: EXAM ATTEMPTS LIST & DETAILED RESPONSE INSPECTION */}
        {/* ========================================================================= */}
        {(activeTab === 'history' || selectedAttempt) && (
          <div>
            {/* If an attempt is selected for detailed inspection */}
            {selectedAttempt ? (
              <div className="bg-[#070e24]/95 border border-cyan-500/30 overflow-hidden shadow-2xl">
                
                {/* Review Header - Sharp Box */}
                <div className="bg-gradient-to-r from-blue-950 via-[#0a183d] to-cyan-950 p-5 border-b border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <button
                      onClick={() => setSelectedAttempt(null)}
                      className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold flex items-center gap-1.5 mb-1 cursor-pointer"
                    >
                      <ArrowLeft size={14} />
                      <span>Back to All Attempts</span>
                    </button>
                    <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                      <span>Exam Attempt Detailed Review</span>
                      <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 font-mono">
                        Score: {selectedAttempt.totalScore} / 198
                      </span>
                      <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 font-mono">
                        {selectedAttempt.estimatedPercentile}%ile
                      </span>
                    </h2>
                  </div>

                  {/* Section Switcher for Review - Sharp Buttons */}
                  <div className="flex gap-2">
                    {['VARC', 'DILR', 'QA'].map(sec => (
                      <button
                        key={sec}
                        onClick={() => { setReviewSection(sec); setSelectedReviewQIndex(0); }}
                        className={`px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                          reviewSection === sec 
                            ? 'bg-[#1f78b4] text-white shadow-md' 
                            : 'bg-black/40 text-gray-300 hover:bg-black/60 border border-white/10'
                        }`}
                      >
                        {sec}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question & Solution View */}
                <div className="flex flex-col lg:flex-row">
                  
                  {/* Left: Question statement, options & explanation */}
                  <div className="flex-1 p-6 space-y-4 border-r border-cyan-500/20 overflow-y-auto max-h-[70vh]">
                    {currentReviewQ ? (
                      <div className="space-y-4">
                        
                        {/* Status bar */}
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-cyan-400">
                            Question No. {currentReviewQ.questionNumber} ({currentReviewQ.type})
                          </span>

                          {/* Response Status Badge - Sharp */}
                          {(() => {
                            if (!currentReviewResp || currentReviewResp.answer === null || currentReviewResp.answer === undefined || currentReviewResp.answer === '') {
                              return <span className="px-2.5 py-1 text-xs font-bold bg-gray-800 text-gray-400">Unattempted (0 pts)</span>;
                            }
                            const isCorrect = currentReviewQ.type === 'MCQ'
                              ? parseInt(currentReviewResp.answer, 10) === currentReviewQ.correctAnswer
                              : String(currentReviewResp.answer).trim().toLowerCase() === String(currentReviewQ.correctAnswer).trim().toLowerCase();

                            return isCorrect ? (
                              <span className="px-2.5 py-1 text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                                <CheckCircle2 size={13} /> Correct (+3 pts)
                              </span>
                            ) : (
                              <span className="px-2.5 py-1 text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
                                <AlertCircle size={13} /> Incorrect ({currentReviewQ.type === 'MCQ' ? '-1 pt' : '0 pts'})
                              </span>
                            );
                          })()}
                        </div>

                        {/* Passage if present - Sharp Box */}
                        {currentReviewQ.passage && (
                          <div className="p-4 bg-black/40 border-l-4 border-cyan-500 text-xs text-gray-300 italic max-h-48 overflow-y-auto whitespace-pre-line leading-relaxed">
                            {currentReviewQ.passage}
                          </div>
                        )}

                        {/* Diagram if present - Sharp Box */}
                        {currentReviewQ.diagramUrl && (
                          <div className="my-3 flex justify-center bg-black/40 border border-cyan-500/20 p-3">
                            <img 
                              src={currentReviewQ.diagramUrl} 
                              alt="Problem Diagram" 
                              className="max-h-60 object-contain" 
                            />
                          </div>
                        )}

                        {/* Question Text */}
                        <div className="text-sm font-medium text-white whitespace-pre-line leading-relaxed">
                          {currentReviewQ.questionText}
                        </div>

                        {/* Options - Sharp Boxes */}
                        {currentReviewQ.type === 'MCQ' && (
                          <div className="space-y-2.5 pt-2 text-xs">
                            {currentReviewQ.options.map((opt, oIdx) => {
                              const isCorrect = oIdx === currentReviewQ.correctAnswer;
                              const isUserChoice = currentReviewResp && parseInt(currentReviewResp.answer, 10) === oIdx;

                              let optBorder = "border-white/10 bg-black/30 text-gray-300";
                              if (isCorrect) {
                                optBorder = "border-emerald-500 bg-emerald-950/50 text-emerald-200 font-semibold ring-1 ring-emerald-500";
                              } else if (isUserChoice && !isCorrect) {
                                optBorder = "border-rose-500 bg-rose-950/50 text-rose-200 font-semibold ring-1 ring-rose-500";
                              }

                              return (
                                <div key={oIdx} className={`p-3 border flex items-start gap-3 ${optBorder}`}>
                                  <span className="font-bold text-gray-400">({String.fromCharCode(65 + oIdx)})</span>
                                  <span className="flex-1">{opt}</span>
                                  {isCorrect && (
                                    <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 font-bold">
                                      Official Key
                                    </span>
                                  )}
                                  {isUserChoice && !isCorrect && (
                                    <span className="text-[10px] bg-rose-600 text-white px-2 py-0.5 font-bold">
                                      Your Answer
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* TITA Response display - Sharp Box */}
                        {currentReviewQ.type === 'TITA' && (
                          <div className="p-4 bg-black/40 border border-white/10 text-xs space-y-1.5">
                            <div>
                              <strong className="text-gray-400">Your Keyed Answer:</strong>{' '}
                              {currentReviewResp?.answer ? (
                                <span className="font-mono font-bold text-white px-2 py-0.5 bg-black/50 border border-white/20">
                                  {currentReviewResp.answer}
                                </span>
                              ) : (
                                <span className="text-gray-500 italic">None</span>
                              )}
                            </div>
                            <div>
                              <strong className="text-gray-400">Correct Answer:</strong>{' '}
                              <span className="font-mono font-bold text-emerald-400 px-2 py-0.5 bg-emerald-950/50 border border-emerald-500/30">
                                {currentReviewQ.correctAnswer}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Explanation - Sharp Box */}
                        <div className="p-4 bg-cyan-950/30 border border-cyan-500/25 text-xs space-y-1 mt-4">
                          <span className="font-bold text-cyan-300 flex items-center gap-1.5">
                            <FileText size={15} /> Explanation & Solution Key:
                          </span>
                          <p className="text-gray-300 leading-relaxed pt-1">
                            {currentReviewQ.explanation || "Official solution is verified from CAT answer keys."}
                          </p>
                        </div>

                      </div>
                    ) : (
                      <div className="text-gray-400 text-center py-10">Select a question to inspect.</div>
                    )}
                  </div>

                  {/* Right: Question Navigation Palette - Sharp Buttons */}
                  <div className="w-full lg:w-72 bg-[#050b1d] p-5 border-t lg:border-t-0 lg:border-l border-cyan-500/20 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-cyan-300 mb-3 uppercase tracking-wider">
                        {reviewSection} Questions
                      </h4>
                      <div className="grid grid-cols-4 gap-2">
                        {reviewQuestions.map((q, idx) => {
                          const resp = selectedAttempt?.userResponses ? selectedAttempt.userResponses[q.id] : null;
                          let bg = "bg-gray-800 text-gray-400 border border-gray-700";
                          if (resp && resp.answer !== null && resp.answer !== undefined && resp.answer !== '') {
                            const isCorrect = q.type === 'MCQ'
                              ? parseInt(resp.answer, 10) === q.correctAnswer
                              : String(resp.answer).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
                            bg = isCorrect ? "bg-emerald-600 text-white shadow-xs" : "bg-rose-600 text-white shadow-xs";
                          }

                          const isCurrent = idx === selectedReviewQIndex;

                          return (
                            <button
                              key={q.id}
                              onClick={() => setSelectedReviewQIndex(idx)}
                              className={`h-9 font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${bg} ${
                                isCurrent ? 'ring-2 ring-cyan-400 scale-105 shadow-md' : 'opacity-85 hover:opacity-100'
                              }`}
                            >
                              {q.questionNumber}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Palette Legend - Sharp Indicators */}
                    <div className="mt-6 pt-4 border-t border-cyan-500/15 space-y-2 text-[11px] text-gray-400">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 bg-emerald-600" />
                        <span>Correct Answer</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 bg-rose-600" />
                        <span>Incorrect Answer</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 bg-gray-800 border border-gray-600" />
                        <span>Unattempted</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            ) : (
              /* All Past Attempts List - Sharp Cards */
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <History size={18} className="text-cyan-400" />
                    <span>Past Test Attempts ({attempts.length})</span>
                  </h3>
                  <span className="text-xs text-gray-400">Sorted by most recent submission</span>
                </div>

                {loadingAttempts ? (
                  <div className="p-12 text-center text-gray-400 bg-[#070e24]/90 border border-cyan-500/20">
                    <div className="inline-block animate-spin h-8 w-8 border-2 border-cyan-400 border-t-transparent mb-3" />
                    <p className="text-xs">Loading your exam records from Firestore...</p>
                  </div>
                ) : attempts.length === 0 ? (
                  <div className="p-12 text-center text-gray-400 bg-[#070e24]/90 border border-dashed border-gray-700">
                    <h4 className="text-sm font-bold text-gray-200">No attempts found yet</h4>
                    <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                      Complete a full mock exam to log your score, view marked responses, and track your percentile.
                    </p>
                    <button
                      onClick={onBack}
                      className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-md cursor-pointer"
                    >
                      Start Mock Exam
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {attempts.map((att, idx) => {
                      const attDate = att.submittedAt?.toMillis 
                        ? new Date(att.submittedAt.toMillis()).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
                        : (att.date ? new Date(att.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Recent');

                      const acc = att.totalAttempted > 0 ? Math.round((att.totalCorrect / att.totalAttempted) * 100) : 0;

                      return (
                        <div 
                          key={att.id || idx}
                          className="p-5 bg-[#070e24]/90 border border-cyan-500/25 shadow-lg flex flex-col justify-between hover:border-cyan-400 transition-all group"
                        >
                          <div>
                            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                              <span className="flex items-center gap-1.5 font-medium">
                                <Calendar size={13} className="text-cyan-400" />
                                {attDate}
                              </span>
                              <span className="text-[10px] bg-cyan-500/10 text-cyan-300 px-2 py-0.5 border border-cyan-500/30 font-mono">
                                Mock #{attempts.length - idx}
                              </span>
                            </div>

                            {/* Score Callout */}
                            <div className="flex items-baseline gap-2 mb-3">
                              <span className="text-3xl font-black text-white">{att.totalScore}</span>
                              <span className="text-xs text-gray-400">/ 198 marks</span>
                              <span className="ml-auto text-sm font-bold text-amber-400">{att.estimatedPercentile}%ile</span>
                            </div>

                            {/* Section breakdown chips */}
                            <div className="grid grid-cols-3 gap-1.5 py-2.5 my-2 border-y border-white/5 text-center text-[11px]">
                              <div>
                                <span className="text-gray-400 block text-[10px]">VARC</span>
                                <strong className="text-cyan-300">{att.sectionStats?.VARC?.score ?? '-'}m</strong>
                              </div>
                              <div>
                                <span className="text-gray-400 block text-[10px]">DILR</span>
                                <strong className="text-amber-300">{att.sectionStats?.DILR?.score ?? '-'}m</strong>
                              </div>
                              <div>
                                <span className="text-gray-400 block text-[10px]">QA</span>
                                <strong className="text-purple-300">{att.sectionStats?.QA?.score ?? '-'}m</strong>
                              </div>
                            </div>

                            {/* Stats */}
                            <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                              <span>Accuracy: <strong className="text-emerald-400">{acc}%</strong></span>
                              <span>Attempted: <strong className="text-white">{att.totalAttempted} / 68</strong></span>
                            </div>
                          </div>

                          {/* Button to open question-by-question review - Sharp Box */}
                          <button
                            onClick={() => { setSelectedAttempt(att); setSelectedReviewQIndex(0); }}
                            className="w-full py-2.5 px-3 bg-cyan-950/60 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 border border-cyan-500/30 hover:border-transparent text-cyan-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer group-hover:border-cyan-400"
                          >
                            <span>Inspect Solutions & Marked Answers</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: EDIT PROFILE & PASSWORD MANAGEMENT (RESTRICTED FIELDS) */}
        {/* ========================================================================= */}
        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-4xl mx-auto w-full">
            
            {/* Left: Edit Candidate Profile - Sharp Box */}
            <div className="md:col-span-7 bg-[#070e24]/90 p-6 border border-cyan-500/25 shadow-xl space-y-4">
              <div className="border-b border-cyan-500/20 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <User size={18} className="text-cyan-400" />
                  <span>Personal Profile Details</span>
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Update your candidate credentials below.
                </p>
              </div>

              {profileMessage.text && (
                <div className={`p-3 text-xs flex items-center gap-2 ${
                  profileMessage.type === 'success' 
                    ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-500/40' 
                    : 'bg-red-950/70 text-red-300 border border-red-500/40'
                }`}>
                  {profileMessage.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  <span>{profileMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
                {/* Name (Editable) */}
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Full Candidate Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-base sm:text-sm bg-[#040817] border border-cyan-500/30 text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 font-sans"
                    required
                  />
                </div>

                {/* Email (READ ONLY - CANNOT BE EDITED) */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-gray-300 font-semibold">College Email Address</label>
                    <span className="text-[10px] text-amber-400 font-mono flex items-center gap-1">
                      <Lock size={10} /> Locked / Permanent
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      value={candidateProfile?.email || ''}
                      disabled
                      className="w-full px-3 py-2 text-base sm:text-sm bg-black/40 border border-gray-700 text-gray-400 cursor-not-allowed font-mono opacity-80"
                    />
                  </div>
                  <span className="text-[10px] text-gray-500 mt-1 block">
                    College email (@cet.ac.in) cannot be changed to preserve student test verification.
                  </span>
                </div>

                {/* Mobile (READ ONLY - CANNOT BE EDITED) */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-gray-300 font-semibold">Registered Mobile Number</label>
                    <span className="text-[10px] text-amber-400 font-mono flex items-center gap-1">
                      <Lock size={10} /> Locked / Verified
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      value={candidateProfile?.mobile || ''}
                      disabled
                      className="w-full px-3 py-2 text-base sm:text-sm bg-black/40 border border-gray-700 text-gray-400 cursor-not-allowed font-mono opacity-80"
                    />
                  </div>
                  <span className="text-[10px] text-gray-500 mt-1 block">
                    Mobile number is tied to your account security and cannot be edited.
                  </span>
                </div>

                {/* Department & Year (Editable) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Department</label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-2.5 py-2 text-base sm:text-sm bg-[#040817] border border-cyan-500/30 text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
                    >
                      <option value="Computer Science">Computer Science</option>
                      <option value="Electronics and Communication">Electronics and Communication</option>
                      <option value="Applied Electronics">Applied Electronics</option>
                      <option value="Electrical and Electronics">Electrical and Electronics</option>
                      <option value="Electrical and Computer">Electrical and Computer</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Civil">Civil</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Year of Study</label>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full px-2.5 py-2 text-base sm:text-sm bg-[#040817] border border-cyan-500/30 text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Working Pro">Working Professional</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={profileSaving}
                  className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs transition-all shadow-md cursor-pointer mt-2"
                >
                  {profileSaving ? 'Saving Changes...' : 'Save Profile Changes'}
                </button>
              </form>
            </div>

            {/* Right: Change Password - Sharp Box */}
            <div className="md:col-span-5 bg-[#070e24]/90 p-4 sm:p-6 border border-cyan-500/25 shadow-xl space-y-4 flex flex-col justify-between">
              <div>
                <div className="border-b border-cyan-500/20 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Lock size={18} className="text-cyan-400" />
                    <span>Change Password</span>
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Update your account login password.
                  </p>
                </div>

                {passwordMessage.text && (
                  <div className={`mt-3 p-3 text-xs flex items-center gap-2 ${
                    passwordMessage.type === 'success' 
                      ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-500/40' 
                      : 'bg-red-950/70 text-red-300 border border-red-500/40'
                  }`}>
                    {passwordMessage.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                    <span>{passwordMessage.text}</span>
                  </div>
                )}

                <form onSubmit={handleChangePassword} className="space-y-4 text-xs mt-4">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">New Password</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Min 6 alphanumeric characters"
                      className="w-full px-3 py-2 text-base sm:text-sm bg-[#040817] border border-cyan-500/30 text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 font-sans"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-type new password"
                      className="w-full px-3 py-2 text-base sm:text-sm bg-[#040817] border border-cyan-500/30 text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 font-sans"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={passwordSaving}
                    className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs transition-all shadow-md cursor-pointer"
                  >
                    {passwordSaving ? 'Updating Password...' : 'Update Password'}
                  </button>
                </form>
              </div>

              <div className="p-3 bg-cyan-950/30 border border-cyan-500/20 text-[11px] text-cyan-300/80 leading-relaxed mt-4">
                💡 <strong>Tip:</strong> You can always sign in with your verified Google CET email address if you forget your password.
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Footer */}
      <ClubFooter />

    </div>
  );
}
