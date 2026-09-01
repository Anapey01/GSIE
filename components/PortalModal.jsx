'use client';

import { useState } from 'react';
import { X, ArrowRight, Lock } from 'lucide-react';

export default function PortalModal({ isOpen, onClose, initialRole = 'student' }) {
  const [role, setRole] = useState(initialRole);
  const [portalId, setPortalId] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging into ${role === 'student' ? 'Student Member Portal' : 'Alumni Engineers Platform'} with ID: ${portalId}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#0c2340] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-xs font-mono font-semibold text-[#00a2e8] uppercase tracking-widest mb-1">
            GhIE Chapter Gateway
          </div>
          <h3 className="text-xl font-bold font-heading">
            Chapter Portal Access
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Select your affiliation to access tailored portal features.
          </p>
        </div>

        {/* Role Selector Tabs (Pure Crisp Typography) */}
        <div className="grid grid-cols-2 p-2 bg-slate-100 border-b border-slate-200">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
              role === 'student'
                ? 'bg-white text-[#0c2340] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Student Member
          </button>

          <button
            type="button"
            onClick={() => setRole('alumni')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
              role === 'alumni'
                ? 'bg-white text-[#0c2340] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Alumni Engineer
          </button>
        </div>

        {/* Form & Features Container */}
        <div className="p-6 space-y-5">
          
          {/* Role Feature Highlights */}
          <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-3.5 space-y-1.5">
            <div className="text-xs font-extrabold text-[#00a2e8] uppercase tracking-wider font-heading">
              {role === 'student' ? 'Student Member Features' : 'Alumni Platform Features'}
            </div>
            <ul className="text-xs text-slate-700 space-y-1 font-medium">
              {role === 'student' ? (
                <>
                  <li>• Dues Payment Status & Digital Membership Card</li>
                  <li>• Event RSVP & Technical Workshop Attendance</li>
                  <li>• Chapter Documents, CAD & Lab Resources</li>
                </>
              ) : (
                <>
                  <li>• Alumni Engineers Directory & Mentorship Network</li>
                  <li>• Engineering Job Board & Internship Placement</li>
                  <li>• Chapter Development & Sponsorship Support</li>
                </>
              )}
            </ul>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                {role === 'student' ? 'Student Index / GhIE ID' : 'GhIE Registration / Alumni ID'}
              </label>
              <input
                type="text"
                required
                value={portalId}
                onChange={(e) => setPortalId(e.target.value)}
                placeholder={role === 'student' ? 'e.g. 5201040001 or STU-892' : 'e.g. GhIE-ENG-4910'}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00a2e8] focus:ring-2 focus:ring-[#00a2e8]/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00a2e8] focus:ring-2 focus:ring-[#00a2e8]/20 transition-all"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00a2e8] hover:bg-[#008bcb] text-white font-bold text-sm shadow-md active:scale-[0.99] transition-all"
            >
              <span>Access {role === 'student' ? 'Member Portal' : 'Alumni Platform'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Assistance Line */}
          <div className="text-center pt-1 border-t border-slate-100">
            <span className="text-[11px] text-slate-500 font-medium">
              Need assistance? Contact <a href="#contact" onClick={onClose} className="text-[#00a2e8] font-bold hover:underline">Chapter IT Helpdesk</a>
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
