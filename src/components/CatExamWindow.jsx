import React, { useState, useEffect, useRef } from 'react';
import { 
  Maximize2, 
  Minimize2, 
  Calculator as CalcIcon, 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  Info, 
  Check, 
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import Calculator from './Calculator';
import QuestionPaperModal from './QuestionPaperModal';

export default function CatExamWindow({ 
  candidateProfile, 
  questions, 
  onSubmitExam 
}) {
  // Sections: VARC (40 min), DILR (40 min), QA (40 min)
  const sections = ['VARC', 'DILR', 'QA'];
  const [currentSection, setCurrentSection] = useState('VARC');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Question States tracking:
  // key: questionId -> {
  //   status: 'not_visited' | 'not_answered' | 'answered' | 'marked_for_review' | 'answered_marked_for_review',
  //   answer: string | number | null
  // }
  const [userResponses, setUserResponses] = useState({});

  // Timers: 40 minutes per section = 2400 seconds
  const SECTION_TIME = 40 * 60;
  const [sectionTimeLeft, setSectionTimeLeft] = useState(SECTION_TIME);
  const [totalTimeLeft, setTotalTimeLeft] = useState(120 * 60);

  // UI state
  const [isPaletteOpen, setIsPaletteOpen] = useState(true);
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState('question'); // 'passage' | 'question'
  const [isCalcOpen, setIsCalcOpen] = useState(false);
  const [isQuestionPaperOpen, setIsQuestionPaperOpen] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [fullscreenWarning, setFullscreenWarning] = useState(false);

  // Candidate Name
  const candidateName = candidateProfile?.name || "Abhishek K P";

  // Enforce Fullscreen Lock
  useEffect(() => {
    const checkFullscreen = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );

      if (!isCurrentlyFullscreen) {
        setFullscreenWarning(true);
      } else {
        setFullscreenWarning(false);
      }
    };

    document.addEventListener('fullscreenchange', checkFullscreen);
    document.addEventListener('webkitfullscreenchange', checkFullscreen);
    document.addEventListener('mozfullscreenchange', checkFullscreen);
    document.addEventListener('MSFullscreenChange', checkFullscreen);

    // Initial check
    checkFullscreen();

    return () => {
      document.removeEventListener('fullscreenchange', checkFullscreen);
      document.removeEventListener('webkitfullscreenchange', checkFullscreen);
      document.removeEventListener('mozfullscreenchange', checkFullscreen);
      document.removeEventListener('MSFullscreenChange', checkFullscreen);
    };
  }, []);

  const reenterFullscreen = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        await document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        await document.documentElement.msRequestFullscreen();
      }
      setFullscreenWarning(false);
    } catch (err) {
      console.warn("Fullscreen request error:", err);
    }
  };

  // Filter questions for the current section
  const sectionQuestions = questions.filter(q => q.section === currentSection);
  const currentQuestion = sectionQuestions[currentQuestionIndex] || sectionQuestions[0];

  // Resolve passage if question has passageRef
  let resolvedPassage = currentQuestion?.passage;
  let resolvedPassageTitle = currentQuestion?.passageTitle;
  if (!resolvedPassage && currentQuestion?.passageRef) {
    const parentQ = questions.find(q => q.id === currentQuestion.passageRef);
    if (parentQ) {
      resolvedPassage = parentQ.passage;
      resolvedPassageTitle = parentQ.passageTitle;
    }
  }

  // Initialize response state on first render
  useEffect(() => {
    const initial = {};
    questions.forEach((q, idx) => {
      initial[q.id] = {
        status: (idx === 0) ? 'not_answered' : 'not_visited',
        answer: null
      };
    });
    setUserResponses(initial);
  }, [questions]);

  // When current question changes, if it was 'not_visited', turn to 'not_answered'
  useEffect(() => {
    if (!currentQuestion) return;
    setUserResponses(prev => {
      const existing = prev[currentQuestion.id];
      if (!existing || existing.status === 'not_visited') {
        return {
          ...prev,
          [currentQuestion.id]: {
            status: 'not_answered',
            answer: existing?.answer ?? null
          }
        };
      }
      return prev;
    });
  }, [currentQuestionIndex, currentSection]);

  // Section Timer countdown & auto-switch
  useEffect(() => {
    const timer = setInterval(() => {
      setSectionTimeLeft(prev => {
        if (prev <= 1) {
          // Transition to next section or auto-submit
          handleSectionTimeOut();
          return SECTION_TIME;
        }
        return prev - 1;
      });

      setTotalTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitFinal();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentSection]);

  const handleSectionTimeOut = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      const nextSec = sections[currentIndex + 1];
      setCurrentSection(nextSec);
      setCurrentQuestionIndex(0);
      setSectionTimeLeft(SECTION_TIME);
      alert(`Time up for ${currentSection}! Moving automatically to Section: ${nextSec}.`);
    } else {
      // All sections finished!
      alert("Time is up for the entire examination! Submitting your test.");
      handleSubmitFinal();
    }
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Format Time as MM : SS
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? '0' : ''}${m} : ${s < 10 ? '0' : ''}${s}`;
  };

  // Actions for current question:
  const currentAnswer = currentQuestion ? userResponses[currentQuestion.id]?.answer : null;

  const handleOptionSelect = (val) => {
    setUserResponses(prev => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        answer: val
      }
    }));
  };

  // 1. Save & Next
  const handleSaveAndNext = () => {
    if (!currentQuestion) return;

    setUserResponses(prev => {
      const current = prev[currentQuestion.id] || {};
      const hasAnswer = current.answer !== null && current.answer !== undefined && current.answer !== '';
      return {
        ...prev,
        [currentQuestion.id]: {
          ...current,
          status: hasAnswer ? 'answered' : 'not_answered'
        }
      };
    });

    goToNextQuestion();
  };

  // 2. Mark for Review & Next
  const handleMarkForReviewAndNext = () => {
    if (!currentQuestion) return;

    setUserResponses(prev => {
      const current = prev[currentQuestion.id] || {};
      const hasAnswer = current.answer !== null && current.answer !== undefined && current.answer !== '';
      return {
        ...prev,
        [currentQuestion.id]: {
          ...current,
          status: hasAnswer ? 'answered_marked_for_review' : 'marked_for_review'
        }
      };
    });

    goToNextQuestion();
  };

  // 3. Clear Response
  const handleClearResponse = () => {
    if (!currentQuestion) return;
    setUserResponses(prev => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        answer: null,
        status: 'not_answered'
      }
    }));
  };

  // Helper: Next Question
  const goToNextQuestion = () => {
    if (currentQuestionIndex < sectionQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Helper: Direct Palette Navigation
  const handleSelectQuestion = (index) => {
    setCurrentQuestionIndex(index);
    setIsMobilePaletteOpen(false);
  };

  // Switch Section manually (in official CAT, you can't switch until section time ends,
  // but we can allow mock practice switching or show official prompt)
  const handleSectionSwitch = (sec) => {
    if (sec === currentSection) return;
    setCurrentSection(sec);
    setCurrentQuestionIndex(0);
  };

  // Submit Final (Exits fullscreen only after submission)
  const handleSubmitFinal = () => {
    setIsSubmitModalOpen(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    onSubmitExam(userResponses);
  };

  // Palette Status Counts for Current Section
  const getSectionCounts = () => {
    let answered = 0;
    let notAnswered = 0;
    let notVisited = 0;
    let markedForReview = 0;
    let answeredMarked = 0;

    sectionQuestions.forEach(q => {
      const st = userResponses[q.id]?.status || 'not_visited';
      if (st === 'answered') answered++;
      else if (st === 'not_answered') notAnswered++;
      else if (st === 'not_visited') notVisited++;
      else if (st === 'marked_for_review') markedForReview++;
      else if (st === 'answered_marked_for_review') answeredMarked++;
    });

    return { answered, notAnswered, notVisited, markedForReview, answeredMarked };
  };

  const counts = getSectionCounts();

  return (
    <div className="h-screen w-screen flex flex-col bg-white text-gray-900 font-sans select-none overflow-hidden">
      
      {/* ======================================================== */}
      {/* 1. TOP HEADER (EXACT REPLICA OF CAT SCREENSHOTS) */}
      {/* ======================================================== */}
      <header className="h-12 sm:h-14 bg-white border-b border-gray-300 px-2.5 sm:px-4 flex items-center justify-between z-10 shrink-0 gap-2">
        
        {/* Left: Group 1 Pill Button & Mobile Palette Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            onClick={() => setIsInstructionsOpen(true)}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-[#2ea2f8] hover:bg-[#1f8fe2] text-white rounded-full text-xs font-semibold shadow-xs transition-colors shrink-0"
          >
            <span>Group 1</span>
            <div className="w-3.5 h-3.5 rounded-full bg-white text-[#2ea2f8] flex items-center justify-center text-[10px] font-bold">
              i
            </div>
          </button>

          {/* Quick Mobile Palette Toggle */}
          <button
            onClick={() => setIsMobilePaletteOpen(true)}
            className="md:hidden flex items-center gap-1 px-2.5 py-1 rounded bg-[#1f78b4] text-white text-[11px] font-bold shadow-xs shrink-0"
          >
            <span>Palette</span>
            <span className="w-4 h-4 rounded-full bg-white/20 text-white flex items-center justify-center text-[9px]">
              {currentQuestion?.questionNumber}
            </span>
          </button>
        </div>

        {/* Right: Controls & Candidate Profile */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          
          {/* Question Paper Link */}
          <button
            onClick={() => setIsQuestionPaperOpen(true)}
            className="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-[#1f78b4] transition-colors"
          >
            <FileText size={15} />
            <span className="hidden xs:inline">Question Paper</span>
            <span className="xs:hidden">QP</span>
          </button>

          {/* Fullscreen Lock Indicator Button */}
          <button
            onClick={reenterFullscreen}
            className="flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded bg-[#1f78b4] hover:bg-[#165a88] text-white text-xs font-semibold shadow-xs transition-colors"
            title="Fullscreen mode is locked during exam"
          >
            <Maximize2 size={14} />
            <span className="hidden md:inline">Fullscreen Locked</span>
          </button>

          {/* Virtual Calculator Icon */}
          <button
            onClick={() => setIsCalcOpen(!isCalcOpen)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#1f78b4] hover:bg-[#165a88] text-white flex items-center justify-center transition-colors shadow-xs"
            title="Open TCS iON Calculator"
          >
            <CalcIcon size={15} />
          </button>

          {/* Candidate Card (Silhouette + Name from screenshot) */}
          <div className="flex items-center gap-1.5 sm:gap-2 pl-1.5 sm:pl-2 border-l border-gray-300">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center border border-gray-300 shrink-0">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold text-gray-900 leading-tight max-w-[120px] truncate">{candidateName}</div>
            </div>
          </div>

        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. SECTION STRIP & TIMER (MATCHING SCREENSHOT) */}
      {/* ======================================================== */}
      <div className="h-10 sm:h-11 bg-white border-b border-gray-300 px-2.5 sm:px-4 flex items-center justify-between shrink-0 gap-2 overflow-x-auto">
        
        {/* Left: Section Label & Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="text-[11px] sm:text-xs font-semibold text-gray-600 hidden xs:inline">Section</span>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {sections.map(sec => {
              const isActive = sec === currentSection;
              return (
                <button
                  key={sec}
                  onClick={() => handleSectionSwitch(sec)}
                  className={`px-2.5 sm:px-3 py-1 rounded text-xs font-bold flex items-center gap-1 sm:gap-1.5 transition-all shadow-xs shrink-0 ${
                    isActive 
                      ? 'bg-[#1f78b4] text-white' 
                      : 'bg-white text-[#1f78b4] border border-[#1f78b4] hover:bg-blue-50'
                  }`}
                >
                  <span>{sec === 'QA' ? 'Quant' : (sec === 'DILR' ? 'LRDI' : sec)}</span>
                  {isActive && (
                    <div className="w-3.5 h-3.5 rounded-full bg-white text-[#1f78b4] flex items-center justify-center text-[9px] font-bold">
                      i
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Section Timer */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <span className="text-[11px] sm:text-xs font-bold text-gray-800">
            <span className="hidden xs:inline">Time Left: </span>
            <span className="font-mono text-xs sm:text-sm font-black text-gray-950 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 sm:border-0 sm:bg-transparent sm:p-0">
              {formatTime(sectionTimeLeft)}
            </span>
          </span>
        </div>

      </div>

      {/* ======================================================== */}
      {/* 3. QUESTION TYPE & MARKS SUB-HEADER */}
      {/* ======================================================== */}
      <div className="h-7 bg-white border-b border-gray-200 px-2.5 sm:px-4 flex items-center text-xs text-[#d9534f] font-semibold shrink-0">
        <span>
          Type: {currentQuestion?.type || 'MCQ'} | Marks: +{currentQuestion?.marks.correct || 3} {currentQuestion?.marks.negative ?? -1}
        </span>
      </div>

      {/* ======================================================== */}
      {/* 4. MAIN EXAM BODY (SPLIT VIEW + PALETTE SIDEBAR) */}
      {/* ======================================================== */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        
        {/* Mobile Tab Switcher when Passage is Present */}
        {resolvedPassage && (
          <div className="md:hidden flex border-b border-gray-300 bg-gray-100 text-xs font-bold shrink-0">
            <button
              onClick={() => setMobileTab('passage')}
              className={`flex-1 py-2 text-center transition-colors flex items-center justify-center gap-1.5 ${
                mobileTab === 'passage'
                  ? 'bg-white text-[#1f78b4] border-b-2 border-[#1f78b4]'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>📖 Reading Passage</span>
            </button>
            <button
              onClick={() => setMobileTab('question')}
              className={`flex-1 py-2 text-center transition-colors flex items-center justify-center gap-1.5 ${
                mobileTab === 'question'
                  ? 'bg-white text-[#1f78b4] border-b-2 border-[#1f78b4]'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>❓ Question {currentQuestion?.questionNumber}</span>
            </button>
          </div>
        )}

        {/* MAIN QUESTION WORKSPACE */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Column: Passage / Caselet (if present) */}
          {resolvedPassage && (
            <div className={`${mobileTab === 'passage' ? 'flex' : 'hidden'} md:flex flex-col w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 p-4 sm:p-5 overflow-y-auto bg-white text-gray-800 text-xs sm:text-[13px] leading-relaxed`}>
              <div className="font-bold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm border-b pb-2">
                {resolvedPassageTitle || "A set of questions accompanies the passage below. Choose the best answer to each question."}
              </div>
              <div className="whitespace-pre-line font-serif space-y-3 text-justify text-gray-800 pr-1 sm:pr-2">
                {resolvedPassage}
              </div>

              {/* Problem/Set Diagram */}
              {currentQuestion?.diagramUrl && (
                <div className="my-3 flex justify-center bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <img 
                    src={currentQuestion.diagramUrl} 
                    alt="Problem Diagram" 
                    className="max-w-full max-h-[380px] object-contain rounded shadow-xs" 
                  />
                </div>
              )}

              {/* Mobile button to switch straight to question */}
              <div className="md:hidden mt-5 pt-3 border-t border-gray-200">
                <button
                  onClick={() => setMobileTab('question')}
                  className="w-full py-2 bg-[#1f78b4] hover:bg-[#165a88] text-white font-bold text-xs rounded shadow transition-colors flex items-center justify-center gap-2"
                >
                  <span>Answer Question No. {currentQuestion?.questionNumber}</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* Right Column: Question & Options (or Full width if no passage) */}
          <div className={`${resolvedPassage && mobileTab === 'passage' ? 'hidden' : 'flex'} flex-col w-full ${resolvedPassage ? 'md:w-1/2' : 'max-w-4xl mx-auto'} p-4 sm:p-6 overflow-y-auto bg-white justify-between`}>
            
            <div>
              {/* Question Number Banner */}
              <div className="text-sm font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Question No. {currentQuestion?.questionNumber}
              </div>

              {/* Question Text */}
              <div className="text-xs sm:text-sm font-medium text-gray-800 mb-6 leading-relaxed whitespace-pre-line">
                {currentQuestion?.questionText}
              </div>

              {/* Standalone Question Diagram (if not already displayed in passage pane) */}
              {currentQuestion?.diagramUrl && !resolvedPassage && (
                <div className="my-4 flex justify-center bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <img 
                    src={currentQuestion.diagramUrl} 
                    alt="Question Diagram" 
                    className="max-w-full max-h-[350px] object-contain rounded shadow-xs" 
                  />
                </div>
              )}

              {/* MCQ Options */}
              {currentQuestion?.type === 'MCQ' && (
                <div className="space-y-3.5 pl-1">
                  {currentQuestion.options.map((opt, optIndex) => {
                    const isSelected = currentAnswer !== null && parseInt(currentAnswer, 10) === optIndex;
                    return (
                      <label 
                        key={optIndex}
                        onClick={() => handleOptionSelect(optIndex)}
                        className="flex items-start gap-3 cursor-pointer group select-none text-xs sm:text-[13px] text-gray-800"
                      >
                        <input
                          type="radio"
                          name={`q_${currentQuestion.id}`}
                          checked={isSelected}
                          onChange={() => {}}
                          className="mt-1 w-4 h-4 text-[#1f78b4] border-gray-300 focus:ring-[#1f78b4] cursor-pointer"
                        />
                        <span className="leading-snug">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              )}

              {/* TITA (Type-In-The-Answer) Input & On-screen Keypad */}
              {currentQuestion?.type === 'TITA' && (
                <div className="space-y-4 max-w-md">
                  <div className="text-xs text-gray-600 font-semibold">
                    Type your answer in the box below using keyboard or on-screen keypad:
                  </div>

                  <input
                    type="text"
                    value={currentAnswer || ''}
                    onChange={(e) => handleOptionSelect(e.target.value)}
                    placeholder="Enter numerical answer"
                    className="w-full text-base font-mono font-bold px-3 py-2 border-2 border-gray-400 rounded focus:border-[#1f78b4] outline-none"
                  />

                  {/* Virtual Numeric Keypad */}
                  <div className="bg-gray-100 p-2.5 rounded-lg border border-gray-300 inline-block">
                    <div className="grid grid-cols-3 gap-1.5 text-xs font-bold w-48">
                      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', '.'].map(char => (
                        <button
                          key={char}
                          type="button"
                          onClick={() => handleOptionSelect((currentAnswer || '') + char)}
                          className="h-9 bg-white hover:bg-gray-200 border border-gray-300 rounded shadow-xs text-gray-800 font-mono active:scale-95"
                        >
                          {char}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 mt-1.5 text-xs font-semibold">
                      <button
                        type="button"
                        onClick={() => handleOptionSelect((currentAnswer || '').slice(0, -1))}
                        className="py-1.5 bg-orange-100 hover:bg-orange-200 text-orange-800 border border-orange-300 rounded"
                      >
                        Backspace
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOptionSelect('')}
                        className="py-1.5 bg-red-100 hover:bg-red-200 text-red-800 border border-red-300 rounded"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* PALETTE COLLAPSE ARROW TAB (DESKTOP ONLY) */}
        <button
          onClick={() => setIsPaletteOpen(!isPaletteOpen)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-4 h-12 bg-black hover:bg-gray-800 text-white items-center justify-center rounded-l shadow transition-all cursor-pointer"
          style={{ right: isPaletteOpen ? '256px' : '0' }}
          title={isPaletteOpen ? "Collapse Question Palette" : "Expand Question Palette"}
        >
          {isPaletteOpen ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* ======================================================== */}
        {/* 5. RIGHT SIDEBAR: QUESTION PALETTE (DESKTOP) */}
        {/* ======================================================== */}
        {isPaletteOpen && (
          <aside className="hidden md:flex w-64 bg-white border-l border-gray-300 flex-col shrink-0 shadow-md">
            
            {/* Top Legend Box */}
            <div className="p-3 border-b border-gray-300 bg-white space-y-2 text-[11px] text-gray-700">
              
              <div className="grid grid-cols-2 gap-2">
                {/* Answered */}
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 cat-shape-answered flex items-center justify-center font-bold text-white text-[10px] shrink-0">
                    {counts.answered}
                  </div>
                  <span className="truncate">Answered</span>
                </div>

                {/* Not Answered */}
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 cat-shape-not-answered flex items-center justify-center font-bold text-white text-[10px] shrink-0">
                    {counts.notAnswered}
                  </div>
                  <span className="truncate">Not Answered</span>
                </div>

                {/* Not Visited */}
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-[#e9ecef] border border-gray-400 rounded flex items-center justify-center font-bold text-gray-700 text-[10px] shrink-0">
                    {counts.notVisited}
                  </div>
                  <span className="truncate">Not Visited</span>
                </div>

                {/* Marked for Review */}
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-[#6f42c1] rounded-full flex items-center justify-center font-bold text-white text-[10px] shrink-0">
                    {counts.markedForReview}
                  </div>
                  <span className="truncate">Marked for Review</span>
                </div>
              </div>

              {/* Answered & Marked for Review */}
              <div className="flex items-center gap-1.5 pt-0.5 border-t border-gray-100">
                <div className="relative w-5 h-5 bg-[#6f42c1] rounded-full flex items-center justify-center font-bold text-white text-[10px] shrink-0">
                  {counts.answeredMarked}
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
                </div>
                <span className="text-[10px] leading-tight">Answered & Marked for Review</span>
              </div>

            </div>

            {/* Section Banner */}
            <div className="bg-[#1f78b4] text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
              {currentSection === 'QA' ? 'Quant' : (currentSection === 'DILR' ? 'LRDI' : currentSection)}
            </div>

            {/* Choose a Question label */}
            <div className="bg-gray-100 px-3 py-1 border-b border-gray-300 text-xs font-semibold text-gray-700">
              Choose a Question
            </div>

            {/* Question Matrix Grid */}
            <div className="p-3 overflow-y-auto flex-1 bg-white">
              <div className="grid grid-cols-4 gap-2">
                {sectionQuestions.map((q, qIdx) => {
                  const state = userResponses[q.id]?.status || 'not_visited';
                  const isCurrent = qIdx === currentQuestionIndex;

                  let shapeClass = "bg-[#e9ecef] text-gray-800 border border-gray-400 rounded";
                  let isAnsweredMarked = false;

                  if (state === 'answered') {
                    shapeClass = "cat-shape-answered text-white";
                  } else if (state === 'not_answered') {
                    shapeClass = "cat-shape-not-answered text-white";
                  } else if (state === 'marked_for_review') {
                    shapeClass = "bg-[#6f42c1] text-white rounded-full";
                  } else if (state === 'answered_marked_for_review') {
                    shapeClass = "bg-[#6f42c1] text-white rounded-full relative";
                    isAnsweredMarked = true;
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => handleSelectQuestion(qIdx)}
                      className={`h-9 w-full font-bold text-xs flex items-center justify-center transition-all select-none ${shapeClass} ${
                        isCurrent ? 'ring-2 ring-black ring-offset-1 scale-105 z-10 shadow' : 'hover:opacity-90'
                      }`}
                    >
                      <span>{q.questionNumber}</span>
                      {isAnsweredMarked && (
                        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </aside>
        )}

        {/* ======================================================== */}
        {/* MOBILE QUESTION PALETTE DRAWER (FULL HEIGHT OVERLAY) */}
        {/* ======================================================== */}
        {isMobilePaletteOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex bg-black/60 backdrop-blur-xs">
            <div 
              className="absolute inset-0"
              onClick={() => setIsMobilePaletteOpen(false)}
            />
            <div className="relative ml-auto w-[85%] max-w-xs h-full bg-white flex flex-col shadow-2xl z-10 animate-fadeIn">
              
              {/* Drawer Top Header */}
              <div className="bg-[#1f78b4] text-white px-4 py-3 flex items-center justify-between font-bold text-xs select-none shrink-0">
                <span>Question Palette — {currentSection}</span>
                <button 
                  onClick={() => setIsMobilePaletteOpen(false)} 
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/20 text-white font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Legend Box */}
              <div className="p-3 border-b border-gray-300 bg-white space-y-2 text-[10px] text-gray-700 shrink-0">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 cat-shape-answered flex items-center justify-center font-bold text-white text-[9px] shrink-0">
                      {counts.answered}
                    </div>
                    <span className="truncate">Answered ({counts.answered})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 cat-shape-not-answered flex items-center justify-center font-bold text-white text-[9px] shrink-0">
                      {counts.notAnswered}
                    </div>
                    <span className="truncate">Not Answered ({counts.notAnswered})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-[#e9ecef] border border-gray-400 rounded flex items-center justify-center font-bold text-gray-700 text-[9px] shrink-0">
                      {counts.notVisited}
                    </div>
                    <span className="truncate">Not Visited ({counts.notVisited})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-[#6f42c1] rounded-full flex items-center justify-center font-bold text-white text-[9px] shrink-0">
                      {counts.markedForReview}
                    </div>
                    <span className="truncate">Marked ({counts.markedForReview})</span>
                  </div>
                </div>
              </div>

              {/* Choose Question Banner */}
              <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-300 text-xs font-semibold text-gray-700 flex justify-between items-center shrink-0">
                <span>Questions (1 to {sectionQuestions.length})</span>
                <span className="text-[10px] text-gray-500">Tap to Jump</span>
              </div>

              {/* Matrix Grid */}
              <div className="p-3 overflow-y-auto flex-1 bg-white">
                <div className="grid grid-cols-4 gap-2">
                  {sectionQuestions.map((q, qIdx) => {
                    const state = userResponses[q.id]?.status || 'not_visited';
                    const isCurrent = qIdx === currentQuestionIndex;

                    let shapeClass = "bg-[#e9ecef] text-gray-800 border border-gray-400 rounded";
                    let isAnsweredMarked = false;

                    if (state === 'answered') {
                      shapeClass = "cat-shape-answered text-white";
                    } else if (state === 'not_answered') {
                      shapeClass = "cat-shape-not-answered text-white";
                    } else if (state === 'marked_for_review') {
                      shapeClass = "bg-[#6f42c1] text-white rounded-full";
                    } else if (state === 'answered_marked_for_review') {
                      shapeClass = "bg-[#6f42c1] text-white rounded-full relative";
                      isAnsweredMarked = true;
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => handleSelectQuestion(qIdx)}
                        className={`h-9 w-full font-bold text-xs flex items-center justify-center transition-all select-none ${shapeClass} ${
                          isCurrent ? 'ring-2 ring-black ring-offset-1 scale-105 z-10 shadow' : 'hover:opacity-90'
                        }`}
                      >
                        <span>{q.questionNumber}</span>
                        {isAnsweredMarked && (
                          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Bottom Close */}
              <div className="p-3 bg-gray-100 border-t border-gray-300 shrink-0">
                <button
                  onClick={() => setIsMobilePaletteOpen(false)}
                  className="w-full py-2 bg-gray-800 hover:bg-gray-900 text-white font-bold text-xs rounded transition-colors"
                >
                  Close Palette
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* ======================================================== */}
      {/* 6. BOTTOM ACTION FOOTER BAR (MATCHING SCREENSHOTS) */}
      {/* ======================================================== */}
      <footer className="bg-[#f8f9fa] border-t border-gray-300 px-2.5 sm:px-4 py-2 sm:py-0 h-auto sm:h-14 flex flex-col sm:flex-row items-center justify-between shrink-0 z-10 gap-2 sm:gap-0">
        
        {/* Left Action Buttons */}
        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2">
          <button
            onClick={handleMarkForReviewAndNext}
            className="flex-1 sm:flex-initial px-2.5 sm:px-4 py-1.5 sm:py-2 border border-gray-400 bg-white hover:bg-gray-100 text-gray-800 text-[11px] sm:text-xs font-semibold rounded shadow-xs transition-colors"
          >
            <span className="hidden xs:inline">Mark for Review & Next</span>
            <span className="xs:hidden">Review & Next</span>
          </button>

          <button
            onClick={handleClearResponse}
            className="px-2.5 sm:px-4 py-1.5 sm:py-2 border border-gray-400 bg-white hover:bg-gray-100 text-gray-800 text-[11px] sm:text-xs font-semibold rounded shadow-xs transition-colors"
          >
            Clear
          </button>

          <button
            onClick={() => setIsMobilePaletteOpen(true)}
            className="md:hidden px-2.5 py-1.5 border border-[#1f78b4] bg-blue-50 text-[#1f78b4] text-[11px] font-bold rounded shadow-xs transition-colors"
          >
            Palette
          </button>
        </div>

        {/* Right Action Buttons */}
        <div className="w-full sm:w-auto flex items-center justify-end gap-2 sm:gap-3">
          <button
            onClick={handleSaveAndNext}
            className="flex-1 sm:flex-initial px-4 sm:px-6 py-1.5 sm:py-2 bg-[#1f78b4] hover:bg-[#165a88] text-white text-xs font-bold rounded shadow-xs transition-colors text-center"
          >
            Save & Next
          </button>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="px-4 sm:px-6 py-1.5 sm:py-2 bg-[#2ea2f8] hover:bg-[#1f8fe2] text-white text-xs font-bold rounded shadow-xs transition-colors"
          >
            Submit
          </button>
        </div>

      </footer>

      {/* ======================================================== */}
      {/* VIRTUAL CALCULATOR POPUP */}
      {/* ======================================================== */}
      <Calculator
        isOpen={isCalcOpen}
        onClose={() => setIsCalcOpen(false)}
      />

      {/* ======================================================== */}
      {/* QUESTION PAPER MODAL */}
      {/* ======================================================== */}
      <QuestionPaperModal
        isOpen={isQuestionPaperOpen}
        onClose={() => setIsQuestionPaperOpen(false)}
        questions={questions}
        currentSection={currentSection}
      />

      {/* ======================================================== */}
      {/* INSTRUCTIONS POPUP MODAL */}
      {/* ======================================================== */}
      {isInstructionsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden border border-gray-300">
            <div className="bg-[#1f78b4] text-white px-4 py-3 flex items-center justify-between font-bold text-sm">
              <span>Section & Examination Instructions</span>
              <button onClick={() => setIsInstructionsOpen(false)} className="hover:bg-white/20 rounded p-1">✕</button>
            </div>
            <div className="p-5 overflow-y-auto space-y-3 text-xs leading-relaxed text-gray-700">
              <p><strong>Total Duration:</strong> 120 Minutes (40 minutes per section).</p>
              <p><strong>Sectional Lock:</strong> Once the 40-minute sectional clock expires, the section will auto-submit and lock.</p>
              <p><strong>Marking:</strong> +3 for correct answers; -1 for wrong answers in MCQs; No negative marking in TITA.</p>
              <p><strong>Evaluation:</strong> Questions marked <em>Answered</em> or <em>Answered & Marked for Review</em> will be considered for final scoring.</p>
            </div>
            <div className="bg-gray-100 px-4 py-2.5 border-t border-gray-300 flex justify-end">
              <button 
                onClick={() => setIsInstructionsOpen(false)} 
                className="px-4 py-1.5 bg-[#1f78b4] text-white text-xs font-bold rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SUBMIT CONFIRMATION MODAL */}
      {/* ======================================================== */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-300">
            
            <div className="bg-[#1f78b4] text-white px-5 py-3 font-bold text-sm flex items-center gap-2">
              <AlertTriangle size={18} />
              <span>Examination Submission Summary</span>
            </div>

            <div className="p-6 space-y-4 text-xs text-gray-800">
              <p className="font-semibold text-gray-700">
                Please verify your sectional attempt status before final submission:
              </p>

              <div className="border border-gray-200 rounded overflow-hidden">
                <table className="w-full text-center text-xs">
                  <thead className="bg-gray-100 text-gray-700 font-bold border-b border-gray-200">
                    <tr>
                      <th className="py-2 px-3 text-left">Section</th>
                      <th className="py-2 px-2">Total</th>
                      <th className="py-2 px-2 text-green-700">Answered</th>
                      <th className="py-2 px-2 text-red-600">Not Answered</th>
                      <th className="py-2 px-2 text-purple-700">Review</th>
                      <th className="py-2 px-2">Not Visited</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {sections.map(sec => {
                      const secQs = questions.filter(q => q.section === sec);
                      let ans = 0, nAns = 0, rev = 0, nVis = 0;
                      secQs.forEach(q => {
                        const s = userResponses[q.id]?.status || 'not_visited';
                        if (s === 'answered' || s === 'answered_marked_for_review') ans++;
                        else if (s === 'not_answered') nAns++;
                        else if (s === 'marked_for_review') rev++;
                        else nVis++;
                      });
                      return (
                        <tr key={sec} className="hover:bg-gray-50">
                          <td className="py-2 px-3 text-left font-bold text-[#1f78b4]">{sec}</td>
                          <td className="py-2 px-2">{secQs.length}</td>
                          <td className="py-2 px-2 font-bold text-green-700">{ans}</td>
                          <td className="py-2 px-2 font-bold text-red-600">{nAns}</td>
                          <td className="py-2 px-2 font-bold text-purple-700">{rev}</td>
                          <td className="py-2 px-2 text-gray-500">{nVis}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-900">
                ⚠️ <strong>Warning:</strong> Once submitted, you will not be able to return to the test. Your final score will be generated instantly.
              </div>
            </div>

            <div className="bg-gray-100 px-5 py-3 border-t border-gray-300 flex items-center justify-end gap-3">
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="px-4 py-2 border border-gray-400 bg-white hover:bg-gray-50 text-gray-700 text-xs font-bold rounded"
              >
                No, Return to Test
              </button>
              <button
                onClick={handleSubmitFinal}
                className="px-5 py-2 bg-[#2ea2f8] hover:bg-[#1f8fe2] text-white text-xs font-bold rounded shadow-sm"
              >
                Yes, Submit Final Exam
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* FULLSCREEN LOCKDOWN OVERLAY (BLOCKS ACCESS IF ESCAPED) */}
      {/* ======================================================== */}
      {fullscreenWarning && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="bg-[#0b1329] border-2 border-red-500 rounded-2xl max-w-lg w-full p-6 text-center text-white shadow-[0_0_50px_rgba(239,68,68,0.5)]">
            <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-4 border border-red-500/40">
              <AlertTriangle size={32} />
            </div>
            <h2 className="text-xl font-bold text-red-400 mb-2">
              Fullscreen Mode Required
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              To preserve CAT examination integrity, this test must be taken in locked fullscreen mode. You cannot exit fullscreen or view questions in a minimized window until you finish and submit the exam.
            </p>
            <button
              onClick={reenterFullscreen}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm tracking-wide shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              Resume Fullscreen Examination
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

