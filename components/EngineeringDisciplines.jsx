'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const disciplines = [
  {
    code: 'CIVIL & CONSTRUCTION',
    title: 'Civil & Construction Engineering Technology',
    focus: 'Structural systems, highway infrastructure, geotechnical design, and sustainable construction project management.',
  },
  {
    code: 'MECHANICAL & PRODUCTION',
    title: 'Mechanical & Manufacturing Technology',
    focus: 'Machine design, industrial fabrication, thermodynamics, plant maintenance, and computer-integrated manufacturing.',
  },
  {
    code: 'AUTOMOTIVE & TRANSPORT',
    title: 'Automotive Engineering Technology',
    focus: 'Powertrain diagnostics, mechatronic systems, vehicle safety, fleet management, and clean propulsion technologies.',
  },
  {
    code: 'ELECTRICAL & ELECTRONICS',
    title: 'Electrical & Electronic Technology',
    focus: 'Power distribution, industrial instrumentation, renewable energy systems, automation, and control engineering.',
  },
];

export default function EngineeringDisciplines() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.discipline-row',
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs font-semibold tracking-widest text-[#00a2e8] uppercase mb-3">
            TECHNICAL DISCIPLINES
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight leading-tight font-heading">
            Engineering Programmes Represented
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            The chapter brings together students and staff across the Faculty of Technical Education, fostering cross-disciplinary innovation and collaboration.
          </p>
        </div>

        {/* Editorial Disciplines Registry */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {disciplines.map((item, idx) => (
            <div
              key={idx}
              className="discipline-row py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              <div className="md:col-span-4">
                <span className="text-xs font-semibold tracking-wider text-[#00a2e8] block mb-1">
                  {item.code}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0c2340]">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-8">
                <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                  {item.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
