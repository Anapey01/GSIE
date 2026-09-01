'use client';

import AnimatedSection from './animations/AnimatedSection';
import { Calendar, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: 'GhIE Engineering Ethics & Professional Practice',
      date: 'Oct 14, 2026',
      time: '10:00 AM GMT',
      location: 'AAMUSTED Kumasi Main Auditorium',
      category: 'Professional Seminar',
      description: 'Keynote address by certified GhIE senior engineers on career registration, ethical codes, and industrial engineering practice in Ghana.',
    },
    {
      title: 'Practical CAD & Structural Modeling Workshop',
      date: 'Nov 02, 2026',
      time: '02:00 PM GMT',
      location: 'AAMUSTED Engineering Lab 1',
      category: 'Technical Workshop',
      description: 'Hands-on technical workshop introducing computer-aided design, 3D structural analysis, and digital prototyping for engineering students.',
    },
    {
      title: 'Annual AAMUSTED Student Engineering Hackathon',
      date: 'Nov 20 - Nov 22, 2026',
      time: '09:00 AM GMT',
      location: 'AAMUSTED Innovation Hub',
      category: 'Innovation Challenge',
      description: '48-hour student design hackathon focusing on renewable energy, smart infrastructure, and entrepreneurial technical solutions.',
    },
  ];

  return (
    <section id="events" className="py-24 px-4 sm:px-8 relative bg-slate-50/60">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-4" animation="fadeInUp">
          <div>
            <div className="text-xs font-bold text-[#00a2e8] uppercase tracking-widest mb-2">Chapter Calendar</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340]">
              Upcoming <span className="text-[#00a2e8]">Events & Workshops</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="px-4.5 py-2 rounded-lg border border-slate-300 bg-white text-xs font-bold text-slate-700 hover:text-[#00a2e8] hover:border-[#00a2e8] transition-all shadow-sm"
          >
            Propose an Event
          </a>
        </AnimatedSection>

        <AnimatedSection
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          animation="fadeInUp"
          stagger={0.15}
        >
          {events.map((event, idx) => (
            <div
              key={idx}
              className="gsap-item corporate-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-[#00a2e8] uppercase tracking-wider">
                    {event.category}
                  </span>
                  <div className="p-1.5 rounded-lg text-slate-400 group-hover:text-[#00a2e8] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0c2340] mb-2 group-hover:text-[#00a2e8] transition-colors">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#00a2e8]" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#00a2e8]" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00a2e8]" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
