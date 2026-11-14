/**
 * CAT Exam Question Paper Generator
 * 
 * Generates official CAT CBT examination papers satisfying the exact exam constraints:
 * - Total 68 Questions (VARC: 24, DILR: 22, QA: 22)
 * - VARC: 4 complete RC Passages (16 Qs) + 8 Verbal Ability Qs (Parajumbles, Summaries, Placements, Odd-one-out)
 * - DILR: 5 complete intact Caselet Sets (two 5-Q sets + three 4-Q sets = 22 Qs) with diagram preservation
 * - QA: 22 Questions balanced across Arithmetic, Algebra, Geometry, Numbers (~14 MCQ, ~8 TITA)
 */

import { officialCatQuestionsBank, officialSlot1Questions, officialSlot2Questions } from '../data/catOfficialQuestions';

export const PAPER_MODES = [
  {
    id: 'dynamic_random',
    title: 'Dynamic CAT Mock Test',
    subtitle: 'Randomly synthesized from Official Question Bank satisfying exact CAT sectional rules',
    badge: 'Recommended'
  },
  {
    id: 'official_slot1',
    title: 'Official CAT Previous Paper — Slot 1',
    subtitle: 'Standard Slot 1 68-question examination paper (VARC 24, DILR 22, QA 22)',
    badge: 'Slot 1 Official'
  },
  {
    id: 'official_slot2',
    title: 'Official CAT Previous Paper — Slot 2',
    subtitle: 'Standard Slot 2 68-question examination paper (VARC 24, DILR 22, QA 22)',
    badge: 'Slot 2 Official'
  }
];

// Helper to shuffle array (Fisher-Yates)
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Helper to sample k elements
function sample(array, k) {
  const shuffled = shuffle(array);
  return shuffled.slice(0, k);
}

/**
 * Generate a dynamic random CAT question paper from the question bank.
 */
export function generateRandomCatPaper(bank = officialCatQuestionsBank) {
  const questionPool = bank && bank.length >= 68 ? bank : officialCatQuestionsBank;

  // 1. ========================================================
  // SECTION 1: VARC (24 Questions)
  // - 4 RC Passages x 4 Questions each = 16 Questions
  // - 8 Verbal Ability Questions
  // ========================================================
  const varcAll = questionPool.filter(q => q.section === 'VARC');

  // Group RC questions by setId
  const rcSetsMap = {};
  const vaQuestions = [];

  varcAll.forEach(q => {
    if (q.subtopic === 'Reading Comprehension' && q.setId) {
      if (!rcSetsMap[q.setId]) {
        rcSetsMap[q.setId] = [];
      }
      rcSetsMap[q.setId].push(q);
    } else {
      vaQuestions.push(q);
    }
  });

  // Pick 4 distinct RC passages out of the available passages
  const rcKeys = Object.keys(rcSetsMap);
  const chosenRcKeys = sample(rcKeys, 4);
  const chosenRcPassages = chosenRcKeys.map(k => rcSetsMap[k]);

  // Pick 8 VA questions with variety across subtopics
  const vaBySubtopic = {};
  vaQuestions.forEach(q => {
    const st = q.subtopic || 'Verbal Ability';
    if (!vaBySubtopic[st]) vaBySubtopic[st] = [];
    vaBySubtopic[st].push(q);
  });

  const selectedVa = [];
  Object.keys(vaBySubtopic).forEach(st => {
    selectedVa.push(...sample(vaBySubtopic[st], Math.min(2, vaBySubtopic[st].length)));
  });

  // Fill up to 8 if needed
  if (selectedVa.length < 8) {
    const remaining = vaQuestions.filter(q => !selectedVa.some(v => v.id === q.id));
    selectedVa.push(...sample(remaining, 8 - selectedVa.length));
  }
  const finalVa = sample(selectedVa, 8);

  // Interleave RC Passages and VA according to authentic CAT order
  // (Passage 1, Passage 2, 4 VA, Passage 3, Passage 4, 4 VA)
  const shuffledRc = shuffle(chosenRcPassages);
  const finalVarcQuestions = [
    ...shuffledRc[0],
    ...shuffledRc[1],
    ...finalVa.slice(0, 4),
    ...shuffledRc[2],
    ...shuffledRc[3],
    ...finalVa.slice(4, 8)
  ];

  // 2. ========================================================
  // SECTION 2: DILR (22 Questions)
  // - Exactly 5 complete sets: two 5-Q sets and three 4-Q sets (10 + 12 = 22)
  // ========================================================
  const dilrAll = questionPool.filter(q => q.section === 'DILR');
  const dilrSetsMap = {};

  dilrAll.forEach(q => {
    const sId = q.setId || 'DILR_SET';
    if (!dilrSetsMap[sId]) {
      dilrSetsMap[sId] = [];
    }
    dilrSetsMap[sId].push(q);
  });

  const allDilrSets = Object.values(dilrSetsMap);
  const sets5Q = allDilrSets.filter(s => s.length === 5);
  const sets4Q = allDilrSets.filter(s => s.length === 4);

  // Fallback if sets don't split cleanly
  let chosenDilrSets = [];
  if (sets5Q.length >= 2 && sets4Q.length >= 3) {
    chosenDilrSets = [...sample(sets5Q, 2), ...sample(sets4Q, 3)];
  } else {
    // Greedy select sets up to 22 questions
    chosenDilrSets = sample(allDilrSets, 5);
  }

  // Shuffle set order
  chosenDilrSets = shuffle(chosenDilrSets);
  const finalDilrQuestions = [];
  chosenDilrSets.forEach(s => {
    finalDilrQuestions.push(...s);
  });

  // 3. ========================================================
  // SECTION 3: QA (22 Questions)
  // - 22 questions balanced between MCQ (~14) and TITA (~8)
  // ========================================================
  const qaAll = questionPool.filter(q => q.section === 'QA');
  const qaMcq = qaAll.filter(q => q.type === 'MCQ');
  const qaTita = qaAll.filter(q => q.type === 'TITA');

  let chosenQa = [];
  if (qaMcq.length >= 14 && qaTita.length >= 8) {
    chosenQa = [...sample(qaMcq, 14), ...sample(qaTita, 8)];
  } else {
    chosenQa = sample(qaAll, 22);
  }
  const finalQaQuestions = shuffle(chosenQa);

  // 4. ========================================================
  // NUMBERING & INTEGRATION
  // Renumber 1..24 (VARC), 1..22 (DILR), 1..22 (QA)
  // Total 68 Questions
  // ========================================================
  const finalPaper = [];

  finalVarcQuestions.forEach((q, idx) => {
    finalPaper.push({
      ...q,
      questionNumber: idx + 1,
      globalNumber: idx + 1
    });
  });

  finalDilrQuestions.forEach((q, idx) => {
    finalPaper.push({
      ...q,
      questionNumber: idx + 1,
      globalNumber: 24 + idx + 1
    });
  });

  finalQaQuestions.forEach((q, idx) => {
    finalPaper.push({
      ...q,
      questionNumber: idx + 1,
      globalNumber: 24 + 22 + idx + 1
    });
  });

  return finalPaper;
}

/**
 * Returns either official Slot 1, official Slot 2, or a dynamic random paper.
 */
export function getExamPaper(mode = 'dynamic_random', questionBank = officialCatQuestionsBank) {
  if (mode === 'official_slot1') {
    return officialSlot1Questions.map((q, idx) => ({
      ...q,
      globalNumber: idx + 1
    }));
  }
  if (mode === 'official_slot2') {
    return officialSlot2Questions.map((q, idx) => ({
      ...q,
      globalNumber: idx + 1
    }));
  }
  // Default to dynamic random
  return generateRandomCatPaper(questionBank);
}
