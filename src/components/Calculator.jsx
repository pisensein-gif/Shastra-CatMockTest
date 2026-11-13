import React, { useState } from 'react';
import { X, Minimize2 } from 'lucide-react';

export default function Calculator({ isOpen, onClose }) {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState(0);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [prevValue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);

  if (!isOpen) return null;

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearEntry = () => {
    setDisplay('0');
  };

  const backspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const toggleSign = () => {
    setDisplay(String(parseFloat(display) * -1));
  };

  const performOperation = (nextOp) => {
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(inputValue);
    } else if (operation) {
      const currentValue = prevValue || 0;
      let newValue = currentValue;

      if (operation === '+') newValue = currentValue + inputValue;
      else if (operation === '-') newValue = currentValue - inputValue;
      else if (operation === '*') newValue = currentValue * inputValue;
      else if (operation === '/') newValue = inputValue !== 0 ? currentValue / inputValue : 0;

      setPrevValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOp);
  };

  const calculateEquals = () => {
    if (!operation || prevValue === null) return;
    const inputValue = parseFloat(display);
    let result = prevValue;

    if (operation === '+') result = prevValue + inputValue;
    else if (operation === '-') result = prevValue - inputValue;
    else if (operation === '*') result = prevValue * inputValue;
    else if (operation === '/') result = inputValue !== 0 ? prevValue / inputValue : 'Error';

    setDisplay(String(result));
    setPrevValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  };

  const performUnary = (type) => {
    const val = parseFloat(display);
    if (type === 'sqrt') {
      if (val < 0) setDisplay('Error');
      else setDisplay(String(Math.sqrt(val)));
    } else if (type === 'inv') {
      if (val === 0) setDisplay('Error');
      else setDisplay(String(1 / val));
    } else if (type === 'percent') {
      setDisplay(String(val / 100));
    }
    setWaitingForOperand(true);
  };

  // Memory functions
  const memoryAdd = () => setMemory(memory + parseFloat(display));
  const memorySubtract = () => setMemory(memory - parseFloat(display));
  const memoryRecall = () => {
    setDisplay(String(memory));
    setWaitingForOperand(true);
  };
  const memoryClear = () => setMemory(0);

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/40 sm:hidden backdrop-blur-2xs"
        onClick={onClose}
      />

      <div 
        className="fixed z-50 shadow-2xl rounded-lg overflow-hidden border border-gray-400 bg-[#f0f0f0] font-sans top-14 sm:top-20 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-10 w-[calc(100vw-32px)] max-w-[280px]"
      >
        {/* Title Bar */}
        <div className="bg-[#1f78b4] text-white px-3 py-1.5 flex items-center justify-between cursor-move select-none text-sm font-semibold">
          <div className="flex items-center gap-1.5">
            <span>Calculator</span>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-red-600 rounded p-0.5 text-white transition-colors cursor-pointer"
            title="Close Calculator"
          >
            <X size={16} />
          </button>
        </div>

      {/* Screen */}
      <div className="p-2.5 bg-[#e3e7eb]">
        <div className="text-right text-xs text-gray-500 h-4 overflow-hidden">
          {prevValue !== null ? `${prevValue} ${operation || ''}` : ''}
        </div>
        <div className="bg-white border border-gray-400 px-2 py-1.5 text-right font-mono text-xl font-bold rounded overflow-x-auto text-gray-800 shadow-inner">
          {display}
        </div>
      </div>

      {/* Button Pad */}
      <div className="p-2 grid grid-cols-5 gap-1 text-xs">
        {/* Memory Row */}
        <button onClick={memoryClear} className="cat-calc-btn bg-gray-200">MC</button>
        <button onClick={memoryRecall} className="cat-calc-btn bg-gray-200">MR</button>
        <button onClick={memoryAdd} className="cat-calc-btn bg-gray-200">M+</button>
        <button onClick={memorySubtract} className="cat-calc-btn bg-gray-200">M-</button>
        <button onClick={backspace} className="cat-calc-btn bg-orange-100 text-orange-700 font-bold">←</button>

        {/* Clear & Functions */}
        <button onClick={clearEntry} className="cat-calc-btn bg-orange-100 text-orange-700">CE</button>
        <button onClick={clearAll} className="cat-calc-btn bg-orange-100 text-orange-700 font-bold">C</button>
        <button onClick={toggleSign} className="cat-calc-btn bg-gray-200">±</button>
        <button onClick={() => performUnary('sqrt')} className="cat-calc-btn bg-gray-200">√</button>
        <button onClick={() => performOperation('/')} className="cat-calc-btn bg-blue-100 font-bold text-blue-800">÷</button>

        {/* 7 8 9 * % */}
        <button onClick={() => inputDigit(7)} className="cat-calc-num">7</button>
        <button onClick={() => inputDigit(8)} className="cat-calc-num">8</button>
        <button onClick={() => inputDigit(9)} className="cat-calc-num">9</button>
        <button onClick={() => performOperation('*')} className="cat-calc-btn bg-blue-100 font-bold text-blue-800">×</button>
        <button onClick={() => performUnary('percent')} className="cat-calc-btn bg-gray-200">%</button>

        {/* 4 5 6 - 1/x */}
        <button onClick={() => inputDigit(4)} className="cat-calc-num">4</button>
        <button onClick={() => inputDigit(5)} className="cat-calc-num">5</button>
        <button onClick={() => inputDigit(6)} className="cat-calc-num">6</button>
        <button onClick={() => performOperation('-')} className="cat-calc-btn bg-blue-100 font-bold text-blue-800">-</button>
        <button onClick={() => performUnary('inv')} className="cat-calc-btn bg-gray-200">1/x</button>

        {/* 1 2 3 + = */}
        <button onClick={() => inputDigit(1)} className="cat-calc-num">1</button>
        <button onClick={() => inputDigit(2)} className="cat-calc-num">2</button>
        <button onClick={() => inputDigit(3)} className="cat-calc-num">3</button>
        <button onClick={() => performOperation('+')} className="cat-calc-btn bg-blue-100 font-bold text-blue-800">+</button>
        <button onClick={calculateEquals} className="cat-calc-btn row-span-2 bg-[#1f78b4] text-white font-bold text-base hover:bg-blue-700">=</button>

        {/* 0 . */}
        <button onClick={() => inputDigit(0)} className="cat-calc-num col-span-2">0</button>
        <button onClick={inputDecimal} className="cat-calc-num">.</button>
        <div className="hidden"></div>
      </div>
    </div>
    </>
  );
}

