'use client';

import AnimatedSection from './animations/AnimatedSection';
import Image from 'next/image';
import { Target, Lightbulb, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-[#00a2e8]" />,
      title: 'Professional GhIE Ethics',
      description: 'Instilling national engineering codes, ethical practice, and safety standards certified by the Ghana Institution of Engineering.',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#00a2e8]" />,
      title: 'Practical Entrepreneurship',
      description: 'Merging applied engineering skills with business acumen fostered at AAMUSTED University.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00a2e8]" />,
      title: 'Certified Mentorship',
      description: 'Direct exposure to registered professional engineers, industrial visits, and career guidance.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#00a2e8]" />,
      title: 'Student Innovation Tracks',
      description: 'Hands-on design competitions, technical research papers, and collaborative student project labs.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Institutional Overview Banner (No Pill Badges) */}
        <AnimatedSection className="ice-card p-8 sm:p-12 mb-20" animation="scaleUp">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-extrabold text-[#00a2e8] uppercase tracking-widest">
                Institutional Partnership
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0c2340] leading-tight">
                Bridging Professional Engineering Standards with Technical Skills
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The <strong>GhIE Student Chapter</strong> connects engineering students at the <strong>University of Skills Training and Entrepreneurial Development (AAMUSTED)</strong> directly with Ghana's premier professional engineering body, the <strong>Ghana Institution of Engineering (GhIE)</strong>.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-sky-200 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4 shadow-sm">
              <Image
                src="/images/ghie-association-logo.png"
                alt="Ghana Institution of Engineering Logo"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest text-center">In Partnership With</div>
              <Image
                src="/images/school-logo.png"
                alt="University of Skills Training and Entrepreneurial Development Logo"
                width={190}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Section Heading */}
        <AnimatedSection className="text-center mb-14" animation="fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] mb-3">
            Core Chapter <span className="text-[#00a2e8]">Pillars</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Guiding student engineers toward technical mastery, innovation, and career readiness.
          </p>
        </AnimatedSection>

        {/* Pillars Grid */}
        <AnimatedSection
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          animation="fadeInUp"
          stagger={0.15}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="gsap-item corporate-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-sky-50 rounded-xl w-fit mb-5 border border-sky-100">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0c2340] mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
