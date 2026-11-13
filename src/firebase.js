import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  updatePassword,
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  getDocs, 
  addDoc, 
  serverTimestamp,
  writeBatch,
  query,
  where
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIQwxvG_VrYpJrtrioo_TpENDnhulwfyA",
  authDomain: "shastracet-8b6cc.firebaseapp.com",
  projectId: "shastracet-8b6cc",
  storageBucket: "shastracet-8b6cc.firebasestorage.app",
  messagingSenderId: "936848249764",
  appId: "1:936848249764:web:c3e3bc577800a8d3d4a731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// User Profile Helpers
export async function saveUserProfile(uid, data) {
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, {
    ...data,
    updatedAt: serverTimestamp()
  }, { merge: true });
}

export async function getUserProfile(uid) {
  const userRef = doc(db, "users", uid);
  const snap = await getDoc(userRef);
  if (snap.exists()) {
    return snap.data();
  }
  return null;
}

// Exam Result / Attempt Helper
export async function saveExamAttempt(attemptData) {
  try {
    const attemptsCol = collection(db, "exam_attempts");
    const docRef = await addDoc(attemptsCol, {
      ...attemptData,
      submittedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (err) {
    console.error("Error saving exam attempt to Firestore:", err);
    return null;
  }
}

export async function fetchUserExamAttempts(userId) {
  try {
    const attemptsCol = collection(db, "exam_attempts");
    const q = query(attemptsCol, where("userId", "==", userId));
    const snapshot = await getDocs(q);
    const attempts = [];
    snapshot.forEach(docSnap => {
      attempts.push({ id: docSnap.id, ...docSnap.data() });
    });
    // Sort descending by submission time in JS
    attempts.sort((a, b) => {
      const tA = a.submittedAt?.toMillis ? a.submittedAt.toMillis() : new Date(a.date || 0).getTime();
      const tB = b.submittedAt?.toMillis ? b.submittedAt.toMillis() : new Date(b.date || 0).getTime();
      return tB - tA;
    });
    return attempts;
  } catch (err) {
    console.error("Error fetching user attempts:", err);
    return [];
  }
}

// Fetch CAT Questions from Firestore
export async function fetchQuestionsFromFirestore() {
  try {
    const qCol = collection(db, "cat_mock_questions");
    const snapshot = await getDocs(qCol);
    if (!snapshot.empty) {
      const questions = [];
      snapshot.forEach(docSnap => {
        questions.push({ id: docSnap.id, ...docSnap.data() });
      });
      // Sort by sectionOrder and questionNumber
      questions.sort((a, b) => {
        if (a.section !== b.section) {
          const order = { VARC: 1, DILR: 2, QA: 3 };
          return (order[a.section] || 9) - (order[b.section] || 9);
        }
        return a.questionNumber - b.questionNumber;
      });
      return questions;
    }
    return [];
  } catch (err) {
    console.warn("Could not fetch questions from Firestore (might not be seeded yet):", err);
    return [];
  }
}

// Seed Questions into Firestore
export async function seedQuestionsToFirestore(questionsList) {
  try {
    const batch = writeBatch(db);
    questionsList.forEach(q => {
      // Use deterministic doc id e.g. "VARC_1", "DILR_5"
      const docId = `${q.section}_${q.questionNumber}`;
      const docRef = doc(db, "cat_mock_questions", docId);
      batch.set(docRef, q);
    });
    await batch.commit();
    return true;
  } catch (err) {
    console.error("Error seeding questions to Firestore:", err);
    throw err;
  }
}

