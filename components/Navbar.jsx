'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import PortalModal from './PortalModal';

export default function Navbar() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('student');

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, { scope: navRef });

  const navigationData = [
    {
      id: 'about',
      title: 'About',
      subitems: [
        { name: 'Vision & Mission', href: '#about' },
        { name: 'Chapter History', href: '#history' },
        { name: 'Executive Board', href: '#team' },
        { name: 'Photo & Media Gallery', href: '#gallery' },
      ],
    },
    {
      id: 'events-news',
      title: 'Events & News',
      subitems: [
        { name: 'Event Calendar', href: '#events' },
        { name: 'News & Announcements', href: '#news' },
      ],
    },
    {
      id: 'get-involved',
      title: 'Get Involved',
      subitems: [
        { name: 'Join Student Chapter / Recruitment', href: '#join' },
        { name: 'Giving & Donations', href: '#donate' },
        { name: 'Contact Us', href: '#contact' },
      ],
    },
  ];

  const handleOpenPortalModal = (role = 'student') => {
    setSelectedRole(role);
    setIsPortalModalOpen(true);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 header-glass h-16 sm:h-20 flex items-center px-4 sm:px-8 transition-all duration-300 shadow-sm"
      >
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between gap-4">
          {/* Institutional Dual-Logo Lockup */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <div className="flex items-center gap-2 sm:gap-3 py-1">
              <Image
                src="/images/ghie-association-logo.png"
                alt="Ghana Institution of Engineering (GhIE)"
                width={130}
                height={36}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
              
              <div className="h-6 sm:h-7 w-[1.5px] bg-slate-300" />

              <Image
                src="/images/school-logo.png"
                alt="University of Skills Training and Entrepreneurial Development"
                width={150}
                height={36}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>

            <div className="hidden xl:flex flex-col border-l border-slate-200 pl-3">
              <span className="text-xs font-extrabold tracking-wider text-[#0c2340] uppercase leading-none font-heading">
                GhIE STUDENT CHAPTER
              </span>
              <span className="text-[10px] text-[#00a2e8] font-bold tracking-tight leading-tight mt-0.5">
                AAMUSTED UNIVERSITY
              </span>
            </div>
          </a>

          {/* Desktop Hover Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationData.map((menu) => (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menu.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#00a2e8] rounded-lg hover:bg-slate-100/80 transition-all tracking-wide"
                >
                  <span>{menu.title}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${activeDropdown === menu.id ? 'rotate-180 text-[#00a2e8]' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === menu.id && (
                  <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-2 space-y-1">
                      {menu.subitems.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#00a2e8] hover:bg-sky-50/70 rounded-lg transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Portal CTA Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 relative"
            onMouseEnter={() => setActiveDropdown('portal')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              onClick={() => handleOpenPortalModal('student')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold rounded-lg bg-[#00a2e8] hover:bg-[#008bcb] text-white transition-all shadow-md shadow-[#00a2e8]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Portal Login</span>
              <ChevronDown className="w-4 h-4 ml-0.5" />
            </button>

            {/* Portal Role Split Dropdown (Pure Typography, No Lucide Icons) */}
            {activeDropdown === 'portal' && (
              <div className="absolute top-full right-0 w-72 pt-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 space-y-1.5">
                  <div className="text-[10px] font-extrabold text-[#00a2e8] uppercase tracking-wider px-2 pt-1 font-heading">
                    Select Portal Role
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenPortalModal('student')}
                    className="w-full text-left p-3 rounded-xl hover:bg-sky-50 border border-transparent hover:border-sky-100 transition-all group"
                  >
                    <div className="text-sm font-bold text-[#0c2340] group-hover:text-[#00a2e8] transition-colors">
                      Student Member Portal
                    </div>
                    <div className="text-xs text-slate-500 font-medium leading-tight mt-0.5">
                      Dues, Directory, RSVP, Documents
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenPortalModal('alumni')}
                    className="w-full text-left p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                  >
                    <div className="text-sm font-bold text-[#0c2340] group-hover:text-[#00a2e8] transition-colors">
                      Alumni Engineers Platform
                    </div>
                    <div className="text-xs text-slate-500 font-medium leading-tight mt-0.5">
                      Directory, Mentorship, Job Board
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-[#00a2e8] transition-colors focus:outline-none rounded-lg active:bg-slate-100"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#00a2e8] transition-transform rotate-90 duration-200" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Expandable Mobile Accordion Drawer (Pure Typography, Zero Lucide Icons) */}
        {isOpen && (
          <div className="lg:hidden fixed top-16 sm:top-20 left-0 right-0 z-[999] bg-white border-b border-slate-200 shadow-2xl p-5 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            
            <div className="divide-y divide-slate-100">
              
              {/* Parent Category Accordions (About, Events & News, Get Involved) */}
              {navigationData.map((menu) => (
                <div key={menu.id} className="py-2.5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(menu.id)}
                    className="w-full flex items-center justify-between py-1 text-base font-bold text-[#0c2340] hover:text-[#00a2e8] transition-colors"
                  >
                    <span>{menu.title}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openAccordion === menu.id ? 'rotate-180 text-[#00a2e8]' : ''}`} />
                  </button>

                  {/* Expanded Subitems */}
                  {openAccordion === menu.id && (
                    <div className="pl-3 pt-2 space-y-1.5 border-l-2 border-sky-100 mt-2 animate-in fade-in duration-150">
                      {menu.subitems.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#00a2e8] transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Category 4: Member & Alumni Portals (Pure Typography) */}
              <div className="py-2.5">
                <button
                  type="button"
                  onClick={() => toggleAccordion('portal')}
                  className="w-full flex items-center justify-between py-1 text-base font-bold text-[#00a2e8] hover:text-[#008bcb] transition-colors"
                >
                  <span>Member & Alumni Portals</span>
                  <ChevronDown className={`w-5 h-5 text-[#00a2e8] transition-transform duration-200 ${openAccordion === 'portal' ? 'rotate-180' : ''}`} />
                </button>

                {openAccordion === 'portal' && (
                  <div className="pl-3 pt-2 space-y-2 border-l-2 border-[#00a2e8] mt-2 animate-in fade-in duration-150">
                    <button
                      type="button"
                      onClick={() => handleOpenPortalModal('student')}
                      className="w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-[#00a2e8]"
                    >
                      Student Member Portal
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOpenPortalModal('alumni')}
                      className="w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-[#00a2e8]"
                    >
                      Alumni Engineers Platform
                    </button>
                  </div>
                )}
              </div>

            </div>

          </div>
        )}
      </header>

      {/* Interactive Portal Login Modal */}
      <PortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
        initialRole={selectedRole}
      />
    </>
  );
}
