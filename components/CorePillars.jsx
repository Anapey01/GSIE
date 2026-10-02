'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const pillars = [
  {
    number: '01 / ACCREDITATION',
    title: 'Professional Certification',
    description:
      'Direct alignment with the Engineering Council Act 2011 (Act 819) to guide student membership and professional licensure.',
  },
  {
    number: '02 / TECHNICAL',
    title: 'Technical Mastery',
    description:
      'Practical engineering workshops, software bootcamps, and technical skill acquisition led by practicing professionals.',
  },
  {
    number: '03 / MENTORSHIP',
    title: 'Industry Mentorship',
    description:
      'Direct access to senior practicing engineers, industrial field visits, and structured career mentorship schemes.',
  },
  {
    number: '04 / POLICY',
    title: 'National Innovation',
    description:
      'Collaborating on national engineering standards, sustainable infrastructure research, and community impact projects.',
  },
];

export default function CorePillars() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.pillar-item',
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
    <section ref={containerRef} className="py-24 sm:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-[#00a2e8] uppercase block mb-2">
              CHAPTER PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight">
              Building technical excellence and professional integrity.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-sm mt-4 md:mt-0 font-normal leading-relaxed">
            Four core strategic pillars guiding the GhIE AAMUSTED Student Chapter.
          </p>
        </div>

        {/* Executive 4-Column Journal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-item flex flex-col justify-between pt-6 border-t-2 border-[#0c2340]">
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-[#00a2e8] block mb-4">
                  {pillar.number}
                </span>
                <h3 className="text-xl font-bold text-[#0c2340] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
