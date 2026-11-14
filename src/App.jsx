import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { 
  auth, 
  getUserProfile, 
  fetchQuestionsFromFirestore, 
  seedQuestionsToFirestore 
} from './firebase';
import { officialCatQuestionsBank, DIAGRAM_MAP } from './data/catOfficialQuestions';
import { getExamPaper } from './utils/catExamGenerator';
import LoadingScreen from './components/LoadingScreen';
import LoginSignup from './components/LoginSignup';
import InstructionPage from './components/InstructionPage';
import CatExamWindow from './components/CatExamWindow';
import ResultModal from './components/ResultModal';
import ProfilePage from './components/ProfilePage';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [screen, setScreen] = useState('login'); // 'login' | 'instructions' | 'exam' | 'result' | 'profile'
  const [currentUser, setCurrentUser] = useState(null);
  const [candidateProfile, setCandidateProfile] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Full Question Pool (136 Questions)
  const [questionBank, setQuestionBank] = useState(officialCatQuestionsBank);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);

  // Active Exam Paper (68 Questions satisfying exact CAT pattern)
  const [examQuestions, setExamQuestions] = useState(() => getExamPaper('dynamic_random', officialCatQuestionsBank));
  const [activePaperMode, setActivePaperMode] = useState('dynamic_random');

  // User exam responses
  const [userResponses, setUserResponses] = useState({});

  // 1. Listen to Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        try {
          const profile = await getUserProfile(user.uid);
          if (profile && profile.isProfileComplete) {
            setCandidateProfile(profile);
            setScreen(prev => (prev === 'login' ? 'instructions' : prev));
          } else {
            setCandidateProfile(null);
          }
        } catch (err) {
          console.error("Error reading profile:", err);
        }
      } else {
        setCurrentUser(null);
        setCandidateProfile(null);
        setScreen('login');
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 2. Load / Seed questions from Firestore
  useEffect(() => {
    async function loadQuestions() {
      try {
        const firestoreQuestions = await fetchQuestionsFromFirestore();
        if (firestoreQuestions && firestoreQuestions.length >= 68) {
          // Re-attach diagram URLs from local asset map if needed
          const resolved = firestoreQuestions.map(q => ({
            ...q,
            diagramUrl: q.diagramPath && DIAGRAM_MAP[q.diagramPath] ? DIAGRAM_MAP[q.diagramPath] : q.diagramUrl
          }));
          setQuestionBank(resolved);
        } else {
          // Auto-seed Official CAT Question Bank (136 Qs) into Firestore
          try {
            await seedQuestionsToFirestore(officialCatQuestionsBank);
            console.log("Successfully seeded official CAT question bank into Firestore.");
          } catch (seedErr) {
            console.warn("Seeding notice (running in local offline fallback):", seedErr);
          }
          setQuestionBank(officialCatQuestionsBank);
        }
      } catch (err) {
        console.error("Error in loadQuestions:", err);
        setQuestionBank(officialCatQuestionsBank);
      } finally {
        setQuestionsLoaded(true);
      }
    }

    loadQuestions();
  }, []);

  // Handle successful login
  const handleLoginSuccess = ({ user, profile }) => {
    setCurrentUser(user);
    setCandidateProfile(profile);
    setScreen('instructions');
  };

  // Handle start exam with selected paper mode
  const handleStartExam = (paperMode = 'dynamic_random') => {
    setActivePaperMode(paperMode);
    const generatedPaper = getExamPaper(paperMode, questionBank);
    setExamQuestions(generatedPaper);
    setUserResponses({});
    setScreen('exam');
  };

  // Handle exam submission
  const handleSubmitExam = (finalResponses) => {
    setUserResponses(finalResponses);
    setScreen('result');
  };

  // Handle retake mock
  const handleRestartExam = () => {
    setUserResponses({});
    setScreen('instructions');
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setCandidateProfile(null);
      setUserResponses({});
      setScreen('login');
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // Show Loading Animation on initial launch
  if (showSplash || (authLoading && !currentUser)) {
    return (
      <LoadingScreen onFinish={() => setShowSplash(false)} />
    );
  }

  return (
    <div className="min-h-screen bg-[#040817] text-slate-100 font-sans">
      
      {/* Screen 1: Login / Sign Up */}
      {screen === 'login' && (
        <LoginSignup onLoginSuccess={handleLoginSuccess} />
      )}

      {/* Screen 2: Instructions Page */}
      {screen === 'instructions' && (
        <InstructionPage
          candidateProfile={candidateProfile}
          onStartExam={handleStartExam}
          onLogout={handleLogout}
          onOpenProfile={() => setScreen('profile')}
        />
      )}

      {/* Screen 3: The Authentic CAT Exam Window (Exact TCS iON interface) */}
      {screen === 'exam' && (
        <CatExamWindow
          candidateProfile={candidateProfile}
          questions={examQuestions}
          onSubmitExam={handleSubmitExam}
        />
      )}

      {/* Screen 4: Results & Solutions Scorecard */}
      {screen === 'result' && (
        <ResultModal
          candidateProfile={candidateProfile}
          questions={examQuestions}
          userResponses={userResponses}
          onRestart={handleRestartExam}
          onViewProfile={() => setScreen('profile')}
        />
      )}

      {/* Screen 5: Candidate Profile, Complete Analytics & Past Attempts */}
      {screen === 'profile' && (
        <ProfilePage
          candidateProfile={candidateProfile}
          questions={questionBank}
          onUpdateProfile={setCandidateProfile}
          onBack={() => setScreen('instructions')}
          onLogout={handleLogout}
        />
      )}

    </div>
  );
}
