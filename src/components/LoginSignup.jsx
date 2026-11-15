import React, { useState } from 'react';
import { 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';
import { auth, googleProvider, getUserProfile } from '../firebase';
import ProfileCompletionModal from './ProfileCompletionModal';
import ClubHeader from './ClubHeader';
import ClubFooter from './ClubFooter';
import themeBg from '../assets/Theme/Theme.jpg';
import shastraLogo from '../assets/logo.png';
import cetLogo from '../assets/cet_logo.png';
import { LogIn, UserPlus, Mail, Lock, AlertCircle, ShieldAlert } from 'lucide-react';

export default function LoginSignup({ onLoginSuccess }) {
  const [isLoginTab, setIsLoginTab] = useState(true);
  
  // Login form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pendingGoogleUser, setPendingGoogleUser] = useState(null);

  // Helper to validate @cet.ac.in domain
  const isCollegeEmail = (emailStr) => {
    return emailStr && emailStr.trim().toLowerCase().endsWith('@cet.ac.in');
  };

  // Google Sign-In / Sign-Up Flow
  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // STRICT VALIDATION: Only official college email ID (@cet.ac.in)
      if (!isCollegeEmail(user.email)) {
        await signOut(auth);
        setError(`Access Denied: (${user.email}) is not an official CET college email. Only email IDs ending with @cet.ac.in are permitted.`);
        setLoading(false);
        return;
      }

      // Check if user profile already exists in Firestore
      const existingProfile = await getUserProfile(user.uid);

      if (!existingProfile || !existingProfile.isProfileComplete) {
        // First time signup: open popup to set up mobile, department, year, password
        setPendingGoogleUser(user);
      } else {
        // Profile is already complete!
        onLoginSuccess({
          user,
          profile: existingProfile
        });
      }
    } catch (err) {
      console.error("Google sign-in error:", err);
      if (err.code !== 'auth/popup-closed-by-user') {
        setError(err.message || 'Failed to authenticate with Google. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Email / Password Login Flow (Using saved email & password)
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim().toLowerCase();

    // STRICT VALIDATION: Email must end with @cet.ac.in
    if (!isCollegeEmail(trimmedEmail)) {
      setError('Access Restricted: Please enter your official college email ID ending with @cet.ac.in');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, trimmedEmail, password);
      const user = result.user;

      if (!isCollegeEmail(user.email)) {
        await signOut(auth);
        setError('Access Denied: Only @cet.ac.in college email IDs are permitted.');
        setLoading(false);
        return;
      }

      let profile = await getUserProfile(user.uid);

      if (!profile || !profile.isProfileComplete) {
        setPendingGoogleUser(user);
      } else {
        onLoginSuccess({ user, profile });
      }
    } catch (err) {
      console.error("Email login error:", err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Invalid credentials. If this is your first time, please click "Sign up with Google" to register with your @cet.ac.in email.');
      } else {
        setError(err.message || 'Failed to sign in.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleProfileComplete = (savedProfile) => {
    const user = pendingGoogleUser;
    setPendingGoogleUser(null);
    onLoginSuccess({ user, profile: savedProfile });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans relative bg-[#040817] text-slate-100 overflow-x-hidden">
      
      {/* Background with Theme.jpg image and cyber overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-40 mix-blend-screen scale-100 pointer-events-none"
        style={{ backgroundImage: `url(${themeBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#040817]/90 via-[#040817]/70 to-[#040817] pointer-events-none" />

      {/* Glow Orbs */}
      <div className="fixed -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <ClubHeader />

      {/* Main Centerpiece - Sharp Rectangular Card */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-6 z-10 my-3 sm:my-6">
        <div className="max-w-md w-full shadow-[0_0_50px_rgba(0,0,0,0.85)] border border-cyan-500/35 bg-[#070e24]/95 backdrop-blur-xl p-5 sm:p-8">
          
          {/* Brand Header with Dual Logos & Collaboration */}
          <div className="flex flex-col items-center justify-center mb-6 text-center">
            {/* Dual Logos */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
              <img 
                src={shastraLogo} 
                alt="Shastra CET" 
                className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]" 
              />
              <div className="h-7 sm:h-8 w-px bg-cyan-500/40" />
              <img 
                src={cetLogo} 
                alt="College Union 2026-27" 
                className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]" 
              />
            </div>

            <h1 className="text-base sm:text-lg font-bold text-white tracking-wider uppercase">
              CAT MOCK TEST PORTAL
            </h1>
            <p className="text-[11px] text-cyan-300 font-semibold tracking-wide mt-1">
              Provided by Shastra CET in collaboration with College Union 2026-27
            </p>
            <p className="text-[10px] text-gray-400">
              College of Engineering Trivandrum (CET)
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-cyan-500/25 mb-5 gap-2 sm:gap-6">
            <button
              onClick={() => { setIsLoginTab(true); setError(''); }}
              className={`pb-2.5 text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-colors relative flex-1 justify-center ${
                isLoginTab 
                  ? 'text-cyan-400 border-b-2 border-cyan-400' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <LogIn size={15} />
              <span>Candidate Login</span>
            </button>
            <button
              onClick={() => { setIsLoginTab(false); setError(''); }}
              className={`pb-2.5 text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-colors relative flex-1 justify-center ${
                !isLoginTab 
                  ? 'text-cyan-400 border-b-2 border-cyan-400' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <UserPlus size={15} />
              <span>Register (Sign Up)</span>
            </button>
          </div>

          {/* Error Message - Sharp Box */}
          {error && (
            <div className="mb-4 flex items-start gap-2.5 p-3 text-xs bg-red-950/70 text-red-200 border border-red-500/40 animate-shake">
              <AlertCircle size={16} className="shrink-0 text-red-400 mt-0.5" />
              <span className="leading-relaxed">{error}</span>
            </div>
          )}

          {/* College Domain Notice Banner - Sharp Box */}
          <div className="mb-4 p-2.5 sm:p-3 bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-2 text-xs text-cyan-200">
            <ShieldAlert size={16} className="text-cyan-400 shrink-0" />
            <span className="text-[11px] sm:text-xs">
              <strong>College Restricted:</strong> Only official CET email IDs (<strong className="text-white underline">@cet.ac.in</strong>) are allowed.
            </span>
          </div>

          {/* TAB 1: LOGIN (Google OR Email & Saved Password) */}
          {isLoginTab ? (
            <div className="space-y-4">
              {/* Google Sign-In - Sharp Button */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2.5 py-2.5 px-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold text-xs sm:text-sm shadow transition-all hover:shadow-cyan-500/20 disabled:opacity-60 cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="truncate">Sign in with Google (@cet.ac.in)</span>
              </button>

              <div className="relative flex items-center justify-center my-3">
                <div className="border-t border-cyan-500/20 w-full"></div>
                <span className="bg-[#070e24] px-2.5 text-[11px] sm:text-xs text-gray-400 font-medium">Or enter credentials</span>
                <div className="border-t border-cyan-500/20 w-full"></div>
              </div>

              {/* Email / Password Form - Sharp Inputs & Buttons */}
              <form onSubmit={handleEmailLogin} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">College Email Address</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <Mail size={16} />
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="yourname@cet.ac.in"
                      className="w-full pl-9 pr-3 py-2 text-base sm:text-sm bg-[#040817] border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 font-sans"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Password</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <Lock size={16} />
                    </span>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full pl-9 pr-3 py-2 text-base sm:text-sm bg-[#040817] border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 font-sans"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold py-2.5 px-4 transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)] flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm mt-1"
                >
                  {loading ? (
                    <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <LogIn size={15} />
                      <span>Login & Enter Test Portal</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* TAB 2: SIGN UP (Sharp Google Sign-Up Button) */
            <div className="space-y-4 py-3">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-white hover:bg-gray-100 text-gray-800 font-bold text-xs sm:text-sm shadow-md transition-all hover:shadow-cyan-500/30 disabled:opacity-60 cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="truncate">Sign up with Google (@cet.ac.in)</span>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <ClubFooter />

      {/* Profile Completion Modal for Google Users */}
      {pendingGoogleUser && (
        <ProfileCompletionModal
          user={pendingGoogleUser}
          onComplete={handleProfileComplete}
        />
      )}
    </div>
  );
}
