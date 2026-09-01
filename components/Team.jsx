'use client';

import AnimatedSection from './animations/AnimatedSection';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const members = [
    {
      name: 'Emmanuel Mensah',
      role: 'Chapter President',
      department: 'Electrical & Electronic Engineering',
      initials: 'EM',
      bg: 'bg-[#00a2e8]',
    },
    {
      name: 'Abena Owusu-Ansah',
      role: 'Vice President & Tech Coordinator',
      department: 'Mechanical & Manufacturing Eng',
      initials: 'AO',
      bg: 'bg-[#0c2340]',
    },
    {
      name: 'Kofi Addo',
      role: 'General Secretary',
      department: 'Civil & Construction Engineering',
      initials: 'KA',
      bg: 'bg-[#00a2e8]',
    },
    {
      name: 'Priscilla Baah',
      role: 'Head of GhIE Relations & Events',
      department: 'Automotive & Technical Education',
      initials: 'PB',
      bg: 'bg-[#0c2340]',
    },
  ];

  return (
    <section id="team" className="py-24 px-4 sm:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14" animation="fadeInUp">
          <div className="text-xs font-bold text-[#00a2e8] uppercase tracking-widest mb-2">Student Leadership</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] mb-3">
            Executive <span className="text-[#00a2e8]">Board</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Student leaders dedicated to advancing engineering excellence at AAMUSTED.
          </p>
        </AnimatedSection>

        <AnimatedSection
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          animation="fadeInUp"
          stagger={0.12}
        >
          {members.map((m, idx) => (
            <div
              key={idx}
              className="gsap-item corporate-card p-6 text-center"
            >
              {/* Member Initials Badge */}
              <div className={`w-18 h-18 mx-auto mb-4 rounded-2xl ${m.bg} flex items-center justify-center text-lg font-black text-white shadow-md transition-transform group-hover:scale-105`}>
                {m.initials}
              </div>

              <h3 className="text-base font-bold text-[#0c2340] mb-1">{m.name}</h3>
              <div className="text-xs font-extrabold text-[#00a2e8] mb-2 uppercase tracking-wide">
                {m.role}
              </div>
              <div className="text-[11px] text-slate-500 mb-5">{m.department}</div>

              {/* Social Contacts */}
              <div className="flex justify-center gap-2 text-slate-400 pt-3 border-t border-slate-100">
                <a href="#" aria-label="LinkedIn Profile" className="p-1.5 rounded-lg hover:bg-sky-50 hover:text-[#00a2e8] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" aria-label="GitHub Profile" className="p-1.5 rounded-lg hover:bg-sky-50 hover:text-[#00a2e8] transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Email Address" className="p-1.5 rounded-lg hover:bg-sky-50 hover:text-[#00a2e8] transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
