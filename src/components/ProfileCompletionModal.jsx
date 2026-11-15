import React, { useState } from 'react';
import { updatePassword } from 'firebase/auth';
import { auth, saveUserProfile } from '../firebase';
import shastraLogo from '../assets/logo.png';
import cetLogo from '../assets/cet_logo.png';
import { UserCheck, Lock, Phone, GraduationCap, Building2, User, AlertCircle, CheckCircle, ShieldCheck } from 'lucide-react';

export default function ProfileCompletionModal({ user, onComplete }) {
  const [name, setName] = useState(user?.displayName || '');
  const [mobile, setMobile] = useState('');
  const [department, setDepartment] = useState('Computer Science');
  const [year, setYear] = useState('4th Year');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Validation functions (all JS based)
  const validateMobile = (mob) => {
    // 10 digits starting with 6, 7, 8, or 9
    const regex = /^[6-9]\d{9}$/;
    return regex.test(mob.trim());
  };

  const validatePassword = (pass) => {
    // Minimum 6 characters, must contain at least one letter and one number
    if (pass.length < 6) {
      return { valid: false, message: 'Password must be at least 6 characters long.' };
    }
    if (!/[A-Za-z]/.test(pass) || !/[0-9]/.test(pass)) {
      return { valid: false, message: 'Password should contain at least one letter and one number.' };
    }
    return { valid: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    // 1. Mobile Number Validation
    if (!validateMobile(mobile)) {
      setError('Invalid Mobile Number: Must be a valid 10-digit number starting with 6, 7, 8, or 9.');
      return;
    }

    // 2. Password Validation
    const passCheck = validatePassword(password);
    if (!passCheck.valid) {
      setError(passCheck.message);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please verify and re-enter.');
      return;
    }

    setLoading(true);

    try {
      // 1. Set the password on Firebase Auth user
      if (auth.currentUser) {
        try {
          await updatePassword(auth.currentUser, password);
        } catch (pwErr) {
          console.warn("Could not set Auth password directly:", pwErr);
        }
      }

      // 2. Save complete profile in Firestore
      const profileData = {
        uid: user.uid,
        email: user.email,
        name: name.trim(),
        mobile: mobile.trim(),
        department,
        year,
        hasPasswordSet: true,
        isProfileComplete: true,
        createdAt: new Date().toISOString()
      };

      await saveUserProfile(user.uid, profileData);
      onComplete(profileData);
    } catch (err) {
      console.error("Error updating profile:", err);
      setError(err.message || 'Failed to save candidate profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-4">
      <div className="bg-[#070e24] shadow-[0_0_50px_rgba(14,165,233,0.3)] max-w-md w-full max-h-[92vh] flex flex-col overflow-hidden border border-cyan-500/40 animate-fadeIn font-sans text-gray-200">
        
        {/* Header with Dual Logos & Collaboration Subtitle */}
        <div className="bg-gradient-to-r from-blue-950 via-[#0a183d] to-cyan-950 p-4 sm:p-5 text-center border-b border-cyan-500/20 shrink-0">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <img 
              src={shastraLogo} 
              alt="Shastra CET" 
              className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" 
            />
            <div className="h-6 sm:h-7 w-px bg-cyan-500/30" />
            <img 
              src={cetLogo} 
              alt="College Union 2026-27" 
              className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" 
            />
          </div>
          <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">Finish Candidate Profile</h2>
          <p className="text-[11px] text-cyan-300 font-medium">
            Shastra CET × College Union 2026-27
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Verified: <span className="font-mono text-cyan-300 font-semibold">{user.email}</span>
          </p>
        </div>

        {/* Form - Scrollable */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3.5 sm:space-y-4 overflow-y-auto flex-1">
          {error && (
            <div className="flex items-start gap-2.5 p-3 text-xs bg-red-950/70 text-red-200 border border-red-500/40">
              <AlertCircle size={16} className="shrink-0 text-red-400 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">Full Name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <User size={16} />
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Abhishek K P"
                className="w-full pl-9 pr-3 py-2 text-base sm:text-sm bg-[#040817] border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 font-sans"
                required
              />
            </div>
          </div>

          {/* Mobile Number with JS format constraints */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-semibold text-gray-300">Mobile Number (10 digits)</label>
              <span className="text-[10px] text-gray-400 font-mono">Starts with 6-9</span>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <Phone size={16} />
              </span>
              <input
                type="tel"
                maxLength={10}
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                placeholder="e.g. 9876543210"
                className="w-full pl-9 pr-3 py-2 text-base sm:text-sm bg-[#040817] border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 font-mono"
                required
              />
            </div>
          </div>

          {/* Department & Year (Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full py-2 px-2.5 text-base sm:text-sm bg-[#040817] border border-cyan-500/30 text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
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
              <label className="block text-xs font-semibold text-gray-300 mb-1">Year of Study</label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full py-2 px-2.5 text-sm bg-[#040817] border border-cyan-500/30 text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
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

          {/* Password Setup */}
          <div className="pt-2 border-t border-cyan-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-cyan-300/90 font-medium">Create Login Password</span>
              <span className="text-[10px] text-gray-400">Min 6 chars (letters + numbers)</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Account Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <Lock size={16} />
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 chars with letter & digit"
                    className="w-full pl-9 pr-3 py-2 text-base sm:text-sm bg-[#040817] border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 font-sans"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Confirm Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <Lock size={16} />
                  </span>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter password"
                    className="w-full pl-9 pr-3 py-2 text-base sm:text-sm bg-[#040817] border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 font-sans"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold py-2.5 px-4 transition-all shadow-[0_0_15px_rgba(14,165,233,0.4)] flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            ) : (
              <>
                <CheckCircle size={18} />
                <span>Save Profile & Enter Portal</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
