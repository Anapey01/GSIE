'use client';

import Image from 'next/image';
import { Send, ExternalLink, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-50/80 border-t border-slate-200 text-slate-900 pt-16 sm:pt-20 pb-12 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 mb-14">
        
        {/* Col 1: Institutional Logos, Tel/Email/P.O. Box & Social Links */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center gap-3 sm:gap-4 py-1">
            <Image
              src="/images/ghie-association-logo.png"
              alt="Ghana Institution of Engineering (GhIE)"
              width={160}
              height={48}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
            
            <div className="h-7 sm:h-8 w-[1.5px] bg-slate-300" />

            <Image
              src="/images/school-logo.png"
              alt="University of Skills Training and Entrepreneurial Development (AAMUSTED)"
              width={180}
              height={48}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </div>

          {/* Official Contact Details */}
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 font-sans pt-1 leading-relaxed">
            <div>
              <strong className="text-slate-900 font-semibold font-heading">Tel:</strong> +233 (0) 3220 60021 / +233 (0) 240 000 000
            </div>
            <div>
              <strong className="text-slate-900 font-semibold font-heading">Email:</strong> ghie.chapter@aamusted.edu.gh
            </div>
            <div>
              <strong className="text-slate-900 font-semibold font-heading">P.O. Box:</strong> P.O. Box 1277, Kumasi, Ghana
            </div>
          </div>

          {/* Social Media Links directly beneath Contact Info */}
          <div className="pt-2 flex items-center gap-2.5">
            <a href="#" className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-white hover:bg-[#00a2e8] hover:border-[#00a2e8] flex items-center justify-center transition-colors shadow-xs" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-white hover:bg-[#00a2e8] hover:border-[#00a2e8] flex items-center justify-center transition-colors shadow-xs" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-white hover:bg-[#00a2e8] hover:border-[#00a2e8] flex items-center justify-center transition-colors shadow-xs" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-white hover:bg-[#00a2e8] hover:border-[#00a2e8] flex items-center justify-center transition-colors shadow-xs" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="lg:col-span-3 space-y-3.5">
          <h4 className="text-xs sm:text-sm font-bold text-[#0c2340] uppercase tracking-wider font-heading">
            Chapter Navigation
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-sans">
            <li>
              <a href="#about" className="hover:text-[#00a2e8] transition-colors py-0.5 block">
                Vision & Mission
              </a>
            </li>
            <li>
              <a href="#history" className="hover:text-[#00a2e8] transition-colors py-0.5 block">
                Chapter History
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-[#00a2e8] transition-colors py-0.5 block">
                Executive Student Board
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-[#00a2e8] transition-colors py-0.5 block">
                Event Calendar & News
              </a>
            </li>
            <li>
              <a href="#join" className="hover:text-[#00a2e8] transition-colors py-0.5 block">
                Join Student Chapter
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Portal & Newsletter */}
        <div className="lg:col-span-4 space-y-3.5">
          <h4 className="text-xs sm:text-sm font-bold text-[#0c2340] uppercase tracking-wider font-heading">
            Portals & Resources
          </h4>
          
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-sans">
            <li>
              <a href="#join" className="hover:text-[#00a2e8] transition-colors py-0.5 block">
                Student Member Portal Access
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#00a2e8] transition-colors py-0.5 block">
                Alumni Engineers Platform
              </a>
            </li>
            <li>
              <a href="https://ghie.org.gh" target="_blank" rel="noopener noreferrer" className="hover:text-[#00a2e8] transition-colors inline-flex items-center gap-1.5 font-semibold text-[#00a2e8]">
                <span>Official GhIE National Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>

          {/* Unified Newsletter */}
          <div className="pt-2 space-y-2">
            <div className="text-xs font-bold text-[#0c2340] uppercase tracking-wider font-heading">
              Stay Informed
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-1.5">
              <div className="flex items-center p-1 rounded-full bg-white border border-slate-300 focus-within:border-[#00a2e8] focus-within:ring-2 focus-within:ring-[#00a2e8]/20 transition-all shadow-xs">
                <input
                  type="email"
                  placeholder="Enter student email"
                  className="w-full px-3.5 py-1.5 text-xs sm:text-sm bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none font-sans"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-full bg-[#00a2e8] hover:bg-[#008bcb] text-white text-xs font-semibold font-heading transition-all shrink-0 flex items-center gap-1.5 shadow-xs"
                  aria-label="Subscribe"
                >
                  <span>Subscribe</span>
                  <Send className="w-3 h-3" />
                </button>
              </div>
              <p className="text-[11px] text-slate-500 font-sans">
                Official GhIE announcements & CAD workshops. Unsubscribe anytime.
              </p>
            </form>
          </div>

        </div>

      </div>

      {/* Footer Bottom Bar: Legal Disclosures & Copyright */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500 font-sans text-center sm:text-left">
        <div suppressHydrationWarning>
          © {new Date().getFullYear()} GhIE Student Chapter — AAMUSTED. All rights reserved.
        </div>

        {/* Legal Disclosures */}
        <div className="flex items-center gap-3.5 text-slate-500">
          <a href="#" className="hover:text-[#00a2e8] transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-[#00a2e8] transition-colors">Terms of Service</a>
          <span>•</span>
          <a href="https://ghie.org.gh" target="_blank" rel="noopener noreferrer" className="hover:text-[#00a2e8] transition-colors">GhIE Main Portal</a>
        </div>
      </div>
    </footer>
  );
}
