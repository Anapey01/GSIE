'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    step: '01',
    phase: 'STUDENT AFFILIATION',
    title: 'Undergraduate Membership at AAMUSTED',
    detail:
      'Join the student chapter during your studies. Gain access to GhIE technical publications, annual general meetings, engineering hackathons, and industrial field tours.',
  },
  {
    step: '02',
    phase: 'GRADUATE TRANSITION',
    title: 'Graduate Engineering Trainee',
    detail:
      'Upon graduation, transition to Graduate Member status. Undertake supervised engineering national service, complete workplace attachments, and document hours in the official GhIE Logbook.',
  },
  {
    step: '03',
    phase: 'PROFESSIONAL LICENSURE',
    title: 'Professional Engineer (PE GhIE)',
    detail:
      'Submit comprehensive engineering project reports, sit for the professional qualifying examinations, and achieve statutory licensure under the Engineering Council Act 2011 (Act 819).',
  },
];

export default function ProfessionalPathway() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.pathway-step',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-24">
        <p className="text-xs font-semibold tracking-widest text-[#00a2e8] uppercase mb-3">
          STATUTORY ROADMAP
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight leading-tight font-heading">
          The Pathway to Professional Licensure
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
          How membership in the GhIE AAMUSTED Chapter guides you from the classroom to recognized professional engineering practice in Ghana.
        </p>
      </div>

      {/* 3-Stage Editorial Linear Sequence */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
        {steps.map((item, idx) => (
          <div key={idx} className="pathway-step pt-6 border-t-2 border-[#0c2340] flex flex-col justify-between">
            <div>
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-2xl font-extrabold text-[#0c2340] font-heading">
                  {item.step}
                </span>
                <span className="text-xs font-semibold tracking-wider text-[#00a2e8]">
                  {item.phase}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0c2340] mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Editorial Action Footer */}
      <div className="mt-20 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-[#0c2340]">Start where you are, grow with us.</h4>
          <p className="text-sm text-slate-500 mt-1">Join the official GhIE student chapter at AAMUSTED today.</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#register"
            className="px-6 py-3 rounded-lg bg-[#0c2340] text-white font-semibold text-sm hover:bg-[#00a2e8] transition-colors"
          >
            Apply for Student Membership
          </a>
        </div>
      </div>

    </section>
  );
}
