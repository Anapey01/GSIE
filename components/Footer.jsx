'use client';

import Image from 'next/image';
import { Send, ExternalLink, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 border-t border-slate-200 text-slate-900 pt-16 sm:pt-20 pb-14 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 mb-14 sm:mb-16">
        
        {/* Col 1: Institutional Logos, Tel/Email/P.O. Box & Social Links */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center gap-3 sm:gap-4 py-1">
            <Image
              src="/images/ghie-association-logo.png"
              alt="Ghana Institution of Engineering (GhIE)"
              width={160}
              height={48}
              className="h-9 sm:h-11 w-auto object-contain"
              priority
            />
            
            <div className="h-8 sm:h-9 w-[1.5px] bg-slate-300" />

            <Image
              src="/images/school-logo.png"
              alt="University of Skills Training and Entrepreneurial Development (AAMUSTED)"
              width={180}
              height={48}
              className="h-9 sm:h-11 w-auto object-contain"
              priority
            />
          </div>

          {/* Official Contact Details (Boosted Font Sizes) */}
          <div className="space-y-2 text-sm sm:text-base md:text-lg text-slate-800 font-semibold pt-1 leading-relaxed">
            <div>
              <strong className="font-extrabold text-[#0c2340]">Tel:</strong> +233 (0) 3220 60021 / +233 (0) 240 000 000
            </div>
            <div>
              <strong className="font-extrabold text-[#0c2340]">Email:</strong> ghie.chapter@aamusted.edu.gh
            </div>
            <div>
              <strong className="font-extrabold text-[#0c2340]">P.O. Box:</strong> P.O. Box 1277, Kumasi, Ghana
            </div>
          </div>

          {/* Social Media Links directly beneath Contact Info */}
          <div className="pt-2 flex items-center gap-3.5">
            <a href="#" className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#00a2e8] hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#00a2e8] hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#00a2e8] hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#00a2e8] hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links (About & Events) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-base sm:text-lg font-extrabold text-[#0c2340] uppercase tracking-wider font-heading">
            Chapter Navigation
          </h4>
          <ul className="space-y-2.5 text-base sm:text-lg text-slate-700 font-semibold">
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

        {/* Col 3: Portal & Legal Disclosure Links (Pure Typography List) */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-base sm:text-lg font-extrabold text-[#0c2340] uppercase tracking-wider font-heading">
            Portals & Resources
          </h4>
          
          <ul className="space-y-2.5 text-base sm:text-lg text-slate-700 font-semibold">
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
              <a href="https://ghie.org.gh" target="_blank" rel="noopener noreferrer" className="hover:text-[#00a2e8] transition-colors inline-flex items-center gap-1.5 text-base sm:text-lg font-bold text-[#00a2e8] pt-1">
                <span>Official GhIE Portal</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </li>
          </ul>

          {/* Unified 1-Line Newsletter Bar */}
          <div className="pt-3">
            <div className="text-sm sm:text-base font-bold text-[#0c2340] mb-2 uppercase tracking-wider font-heading">
              Stay Informed
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="flex items-center p-1 rounded-xl bg-white border border-slate-300 focus-within:border-[#00a2e8] focus-within:ring-2 focus-within:ring-[#00a2e8]/20 transition-all shadow-sm">
                <input
                  type="email"
                  placeholder="Enter your student email"
                  className="w-full px-3.5 py-2.5 text-sm sm:text-base bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-[#00a2e8] hover:bg-[#008bcb] text-white text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-1.5 shadow-sm active:scale-95"
                  aria-label="Subscribe"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Official GhIE announcements & CAD workshops. Unsubscribe anytime.
              </p>
            </form>
          </div>

        </div>

      </div>

      {/* Footer Bottom Bar: Legal Disclosures & Copyright */}
      <div className="max-w-7xl mx-auto pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base text-slate-600 font-medium text-center sm:text-left">
        <div suppressHydrationWarning>
          © {new Date().getFullYear()} GhIE Student Chapter — AAMUSTED. All rights reserved.
        </div>

        {/* Legal Disclosures */}
        <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-600 font-semibold">
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
