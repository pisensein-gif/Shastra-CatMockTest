import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, XCircle, MinusCircle, BarChart3, RotateCcw, ChevronRight, FileText, Check, AlertCircle } from 'lucide-react';
import { saveExamAttempt } from '../firebase';

export default function ResultModal({ candidateProfile, questions, userResponses, onRestart, onViewProfile }) {
  const [activeTab, setActiveTab] = useState('summary'); // 'summary' | 'review'
  const [reviewSection, setReviewSection] = useState('VARC');
  const [selectedReviewQIndex, setSelectedReviewQIndex] = useState(0);

  // Compute results
  let totalScore = 0;
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let totalAttempted = 0;

  const sectionStats = {
    VARC: { total: 0, attempted: 0, correct: 0, incorrect: 0, score: 0 },
    DILR: { total: 0, attempted: 0, correct: 0, incorrect: 0, score: 0 },
    QA:   { total: 0, attempted: 0, correct: 0, incorrect: 0, score: 0 }
  };

  questions.forEach(q => {
    const sec = q.section;
    if (!sectionStats[sec]) return;

    sectionStats[sec].total += 1;
    const response = userResponses[q.id];

    if (response && response.answer !== null && response.answer !== undefined && response.answer !== '') {
      sectionStats[sec].attempted += 1;
      totalAttempted += 1;

      let isCorrect = false;
      if (q.type === 'MCQ') {
        isCorrect = parseInt(response.answer, 10) === q.correctAnswer;
      } else {
        // TITA
        isCorrect = String(response.answer).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
      }

      if (isCorrect) {
        sectionStats[sec].correct += 1;
        sectionStats[sec].score += 3;
        totalCorrect += 1;
        totalScore += 3;
      } else {
        sectionStats[sec].incorrect += 1;
        totalIncorrect += 1;
        if (q.type === 'MCQ') {
          sectionStats[sec].score -= 1;
          totalScore -= 1;
        }
      }
    }
  });

  // Percentile Estimation Formula
  const maxPossible = questions.length * 3;
  let estimatedPercentile = 50;
  if (totalScore >= 100) estimatedPercentile = 99.8;
  else if (totalScore >= 80) estimatedPercentile = 99.0;
  else if (totalScore >= 65) estimatedPercentile = 98.0;
  else if (totalScore >= 50) estimatedPercentile = 95.0;
  else if (totalScore >= 40) estimatedPercentile = 90.0;
  else if (totalScore >= 30) estimatedPercentile = 82.0;
  else if (totalScore >= 20) estimatedPercentile = 70.0;
  else if (totalScore > 0) estimatedPercentile = Math.max(20, Math.round((totalScore / 30) * 60));
  else estimatedPercentile = 10;

  // Save to Firestore on mount
  useEffect(() => {
    if (candidateProfile?.uid) {
      saveExamAttempt({
        userId: candidateProfile.uid,
        userName: candidateProfile.name || 'Candidate',
        userEmail: candidateProfile.email,
        totalScore,
        estimatedPercentile,
        totalAttempted,
        totalCorrect,
        totalIncorrect,
        sectionStats,
        userResponses,
        date: new Date().toISOString()
      });
    }
  }, []);

  const reviewQuestions = questions.filter(q => q.section === reviewSection);
  const currentReviewQ = reviewQuestions[selectedReviewQIndex] || reviewQuestions[0];
  const currentResp = currentReviewQ ? userResponses[currentReviewQ.id] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-gray-300 font-sans my-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1f78b4] via-[#145a8a] to-[#0a3858] text-white p-3.5 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 select-none shadow shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center text-amber-300 shrink-0">
              <Award size={20} />
            </div>
            <div>
              <h2 className="text-sm sm:text-lg font-bold leading-tight">CAT Mock Examination — Scorecard</h2>
              <p className="text-[10px] sm:text-xs text-blue-200 mt-0.5">Candidate: {candidateProfile?.name || 'Candidate'} • Roll: SHASTRA-{candidateProfile?.uid?.slice(0, 6) || 'CBT'}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('summary')}
              className={`flex-1 sm:flex-initial text-center px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'summary' ? 'bg-white text-[#1f78b4]' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('review')}
              className={`flex-1 sm:flex-initial text-center px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'review' ? 'bg-white text-[#1f78b4]' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Review & Solutions
            </button>
          </div>
        </div>

        {/* Tab 1: Overview Scorecard */}
        {activeTab === 'summary' && (
          <div className="p-3.5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6 flex-1 text-gray-800">
            {/* Top Score Callouts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              <div className="bg-blue-50 border border-blue-200 p-3 sm:p-4 rounded-xl text-center shadow-xs">
                <span className="text-[10px] sm:text-xs text-blue-700 font-semibold uppercase tracking-wider">Total Score</span>
                <div className="text-2xl sm:text-3xl font-black text-[#1f78b4] mt-0.5 sm:mt-1">{totalScore}</div>
                <span className="text-[10px] sm:text-[11px] text-gray-500">out of {maxPossible}</span>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-3 sm:p-4 rounded-xl text-center shadow-xs">
                <span className="text-[10px] sm:text-xs text-amber-700 font-semibold uppercase tracking-wider">Est. Percentile</span>
                <div className="text-2xl sm:text-3xl font-black text-amber-600 mt-0.5 sm:mt-1">{estimatedPercentile}%ile</div>
                <span className="text-[10px] sm:text-[11px] text-gray-500">Based on cutoffs</span>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-3 sm:p-4 rounded-xl text-center shadow-xs">
                <span className="text-[10px] sm:text-xs text-emerald-700 font-semibold uppercase tracking-wider">Accuracy</span>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 mt-0.5 sm:mt-1">
                  {totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0}%
                </div>
                <span className="text-[10px] sm:text-[11px] text-gray-500">{totalCorrect} of {totalAttempted} att.</span>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-3 sm:p-4 rounded-xl text-center shadow-xs">
                <span className="text-[10px] sm:text-xs text-purple-700 font-semibold uppercase tracking-wider">Attempt Rate</span>
                <div className="text-2xl sm:text-3xl font-black text-purple-600 mt-0.5 sm:mt-1">
                  {Math.round((totalAttempted / questions.length) * 100)}%
                </div>
                <span className="text-[10px] sm:text-[11px] text-gray-500">{totalAttempted} / {questions.length} Qs</span>
              </div>
            </div>

            {/* Section-Wise Table */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-xs">
              <div className="bg-gray-100 px-4 py-3 font-bold text-xs uppercase text-gray-700 tracking-wide border-b border-gray-200">
                Section-Wise Performance Breakdown
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50 text-gray-600 border-b border-gray-200 font-semibold">
                    <tr>
                      <th className="py-2.5 px-4">Section Name</th>
                      <th className="py-2.5 px-4 text-center">Total Qs</th>
                      <th className="py-2.5 px-4 text-center">Attempted</th>
                      <th className="py-2.5 px-4 text-center text-green-700">Correct (+3)</th>
                      <th className="py-2.5 px-4 text-center text-red-600">Incorrect (-1/0)</th>
                      <th className="py-2.5 px-4 text-center font-bold text-gray-900">Score</th>
                      <th className="py-2.5 px-4 text-center">Accuracy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700 font-medium">
                    {['VARC', 'DILR', 'QA'].map(sec => {
                      const s = sectionStats[sec];
                      const acc = s.attempted > 0 ? Math.round((s.correct / s.attempted) * 100) : 0;
                      return (
                        <tr key={sec} className="hover:bg-gray-50/70 transition-colors">
                          <td className="py-3 px-4 font-bold text-[#1f78b4]">{sec}</td>
                          <td className="py-3 px-4 text-center">{s.total}</td>
                          <td className="py-3 px-4 text-center">{s.attempted}</td>
                          <td className="py-3 px-4 text-center font-semibold text-green-700">{s.correct}</td>
                          <td className="py-3 px-4 text-center font-semibold text-red-600">{s.incorrect}</td>
                          <td className="py-3 px-4 text-center font-black text-sm text-gray-900">{s.score}</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                              acc >= 80 ? 'bg-green-100 text-green-800' :
                              acc >= 50 ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {acc}%
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot className="bg-gray-50 border-t-2 border-gray-300 font-bold text-gray-900">
                    <tr>
                      <td className="py-3 px-4">TOTAL</td>
                      <td className="py-3 px-4 text-center">{questions.length}</td>
                      <td className="py-3 px-4 text-center">{totalAttempted}</td>
                      <td className="py-3 px-4 text-center text-green-700">{totalCorrect}</td>
                      <td className="py-3 px-4 text-center text-red-600">{totalIncorrect}</td>
                      <td className="py-3 px-4 text-center text-base text-[#1f78b4] font-black">{totalScore}</td>
                      <td className="py-3 px-4 text-center">
                        {totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0}%
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Quick action notice */}
            <div className="bg-blue-50 border border-blue-200 p-3.5 sm:p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-blue-900">
                  Ready to review solutions and answer keys?
                </p>
                <p className="text-[11px] text-blue-700">
                  Inspect every question, detailed explanation, and your marked choices.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('review')}
                className="w-full sm:w-auto px-4 py-2 bg-[#1f78b4] hover:bg-[#165a88] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Review Questions & Solutions</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Detailed Question Review */}
        {activeTab === 'review' && (
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            
            {/* Left/Middle: Question & Solution Pane */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 text-gray-800 border-r border-gray-200">
              
              {/* Review Section Tabs */}
              <div className="flex gap-2 border-b border-gray-200 pb-3">
                {['VARC', 'DILR', 'QA'].map(sec => (
                  <button
                    key={sec}
                    onClick={() => {
                      setReviewSection(sec);
                      setSelectedReviewQIndex(0);
                    }}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      reviewSection === sec 
                        ? 'bg-[#1f78b4] text-white shadow-xs' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {sec} ({questions.filter(q => q.section === sec).length})
                  </button>
                ))}
              </div>

              {currentReviewQ && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#1f78b4]">
                      Question No. {currentReviewQ.questionNumber} ({currentReviewQ.type})
                    </span>
                    
                    {/* Status badge */}
                    {(() => {
                      if (!currentResp || currentResp.answer === null || currentResp.answer === undefined || currentResp.answer === '') {
                        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-gray-100 text-gray-600">Unattempted (0)</span>;
                      }
                      const isCorrect = currentReviewQ.type === 'MCQ'
                        ? parseInt(currentResp.answer, 10) === currentReviewQ.correctAnswer
                        : String(currentResp.answer).trim().toLowerCase() === String(currentReviewQ.correctAnswer).trim().toLowerCase();
                      
                      return isCorrect ? (
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-green-100 text-green-800 flex items-center gap-1">
                          <Check size={12} /> Correct (+3)
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-red-100 text-red-800 flex items-center gap-1">
                          <XCircle size={12} /> Incorrect ({currentReviewQ.type === 'MCQ' ? '-1' : '0'})
                        </span>
                      );
                    })()}
                  </div>

                  {/* Passage if any */}
                  {currentReviewQ.passage && (
                    <div className="p-3 bg-gray-50 border-l-4 border-gray-400 text-xs text-gray-700 italic max-h-44 overflow-y-auto whitespace-pre-line rounded-r">
                      {currentReviewQ.passage}
                    </div>
                  )}

                  {/* Question Text */}
                  <div className="text-xs sm:text-sm font-medium text-gray-900 whitespace-pre-line leading-relaxed">
                    {currentReviewQ.questionText}
                  </div>

                  {/* MCQ Options */}
                  {currentReviewQ.type === 'MCQ' && (
                    <div className="space-y-2 pt-1 text-xs">
                      {currentReviewQ.options.map((opt, oIdx) => {
                        const isCorrect = oIdx === currentReviewQ.correctAnswer;
                        const isUserChoice = currentResp && parseInt(currentResp.answer, 10) === oIdx;

                        let optClass = "border-gray-200 bg-white text-gray-700";
                        if (isCorrect) {
                          optClass = "border-green-400 bg-green-50 text-green-900 font-semibold ring-1 ring-green-400";
                        } else if (isUserChoice && !isCorrect) {
                          optClass = "border-red-400 bg-red-50 text-red-900 font-semibold ring-1 ring-red-400";
                        }

                        return (
                          <div key={oIdx} className={`p-2.5 rounded-lg border flex items-start gap-2.5 ${optClass}`}>
                            <span className="font-bold text-gray-500">({String.fromCharCode(65 + oIdx)})</span>
                            <span className="flex-1">{opt}</span>
                            {isCorrect && (
                              <span className="text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded font-bold">
                                Correct Answer
                              </span>
                            )}
                            {isUserChoice && !isCorrect && (
                              <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded font-bold">
                                Your Choice
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* TITA Answer Display */}
                  {currentReviewQ.type === 'TITA' && (
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-xs space-y-1">
                      <div>
                        <strong>Your Input:</strong> {currentResp?.answer ? <span className="font-mono font-bold text-gray-900">{currentResp.answer}</span> : <span className="text-gray-400 italic">None</span>}
                      </div>
                      <div>
                        <strong>Correct Answer:</strong> <span className="font-mono font-bold text-green-700">{currentReviewQ.correctAnswer}</span>
                      </div>
                    </div>
                  )}

                  {/* Explanation Box */}
                  <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-lg text-xs space-y-1">
                    <span className="font-bold text-blue-900 flex items-center gap-1.5">
                      <FileText size={14} /> Solution & Explanation:
                    </span>
                    <p className="text-blue-800 leading-relaxed">
                      {currentReviewQ.explanation || "No explanation provided for this question."}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Question Navigation Palette */}
            <div className="w-full md:w-64 bg-gray-50 p-4 border-t md:border-t-0 md:border-l border-gray-200 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-gray-700 mb-3 uppercase tracking-wide">
                  {reviewSection} Questions
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {reviewQuestions.map((q, idx) => {
                    const resp = userResponses[q.id];
                    let bg = "bg-gray-200 text-gray-700";
                    if (resp && resp.answer !== null && resp.answer !== undefined && resp.answer !== '') {
                      const isCorrect = q.type === 'MCQ'
                        ? parseInt(resp.answer, 10) === q.correctAnswer
                        : String(resp.answer).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
                      bg = isCorrect ? "bg-green-600 text-white" : "bg-red-600 text-white";
                    }

                    const isCurrent = idx === selectedReviewQIndex;

                    return (
                      <button
                        key={q.id}
                        onClick={() => setSelectedReviewQIndex(idx)}
                        className={`h-9 rounded font-bold text-xs flex items-center justify-center transition-all ${bg} ${
                          isCurrent ? 'ring-2 ring-blue-500 scale-105 shadow' : 'opacity-90 hover:opacity-100'
                        }`}
                      >
                        {q.questionNumber}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-4 pt-3 border-t border-gray-200 space-y-1.5 text-[11px] text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded bg-green-600" />
                  <span>Correct Answer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded bg-red-600" />
                  <span>Incorrect Answer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded bg-gray-200 border border-gray-400" />
                  <span>Unattempted</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Modal Footer */}
        <div className="bg-gray-100 px-4 sm:px-6 py-3 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0">
          <span className="text-[11px] sm:text-xs text-gray-500 text-center sm:text-left">
            Results automatically saved to your candidate account.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onViewProfile && (
              <button
                onClick={onViewProfile}
                className="flex-1 sm:flex-initial text-center px-3 sm:px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Analytics & Profile</span>
              </button>
            )}
            <button
              onClick={onRestart}
              className="flex-1 sm:flex-initial text-center px-3.5 sm:px-5 py-2 bg-[#1f78b4] hover:bg-[#165a88] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow cursor-pointer"
            >
              <RotateCcw size={14} />
              <span>Retake Test</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

