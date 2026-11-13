import React from 'react';
import { X, FileText, CheckCircle2 } from 'lucide-react';

export default function QuestionPaperModal({ isOpen, onClose, questions, currentSection }) {
  if (!isOpen) return null;

  const sectionQuestions = questions.filter(q => q.section === currentSection);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-2.5 sm:p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[88vh] flex flex-col overflow-hidden border border-gray-300">
        
        {/* Modal Header */}
        <div className="bg-[#1f78b4] text-white px-3 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between select-none shrink-0">
          <div className="flex items-center gap-2">
            <FileText size={16} />
            <h2 className="font-bold text-xs sm:text-sm tracking-wide">
              Question Paper — {currentSection} ({sectionQuestions.length} Qs)
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-white/20 rounded p-1 text-white transition-colors cursor-pointer"
            title="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body - Scrollable Questions */}
        <div className="p-3 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6 text-sm divide-y divide-gray-200">
          {sectionQuestions.map((q, idx) => (
            <div key={q.id} className="pt-4 first:pt-0">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[#1f78b4]">
                  Question No. {q.questionNumber} ({q.type})
                </span>
                <span className="text-xs text-gray-500">
                  Marks: +{q.marks.correct} {q.marks.negative}
                </span>
              </div>

              {q.passage && (
                <div className="mb-3 p-3 bg-gray-50 border-l-4 border-gray-400 text-xs text-gray-700 italic max-h-36 overflow-y-auto whitespace-pre-line rounded-r">
                  {q.passage}
                </div>
              )}

              <p className="font-medium text-gray-900 mb-3 whitespace-pre-line text-xs sm:text-sm">
                {q.questionText}
              </p>

              {q.type === 'MCQ' && (
                <div className="space-y-1.5 pl-2 text-xs">
                  {q.options.map((opt, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-gray-700">
                      <span className="font-semibold text-gray-500">({String.fromCharCode(65 + oIdx)})</span>
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              )}

              {q.type === 'TITA' && (
                <div className="text-xs text-gray-500 italic">
                  [Type in the Answer (Numerical / TITA)]
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-100 px-5 py-3 border-t border-gray-300 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-1.5 bg-[#1f78b4] hover:bg-[#165a88] text-white text-xs font-semibold rounded transition-colors shadow-sm"
          >
            Back to Test
          </button>
        </div>

      </div>
    </div>
  );
}

