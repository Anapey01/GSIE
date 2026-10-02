'use client';

import { useState, useRef } from 'react';
import MinimalistCalendar from './MinimalistCalendar';
import { ArrowRight, Plus, X, MapPin, Clock } from 'lucide-react';
import gsap from 'gsap';

const INITIAL_EVENTS = [
  {
    id: 'evt-1',
    date: '2026-10-08',
    title: "Dean's Engineering Faculty Colloquium & Act 819 Licensure Roadshow",
    time: '10:00 AM – 02:00 PM',
    location: 'Faculty of Technical Education Auditorium, AAMUSTED',
    category: 'Statutory Licensure',
    cpd: '3.0 CPD Points',
    description: 'High-level orientation co-hosted with the GhIE Ashanti Regional Branch on Engineering Council Act 819 compliance, graduate trainee registration pathways, and professional ethics.',
    speaker: 'Engr. Dr. Kwabena Mensah, PE GhIE'
  },
  {
    id: 'evt-2',
    date: '2026-10-16',
    title: 'CAD, BIM & SolidWorks Infrastructure Modeling Workshop',
    time: '09:00 AM – 04:30 PM',
    location: 'Advanced CAD & Robotics Laboratory, Block B',
    category: 'Technical Workshop',
    cpd: '5.0 CPD Points',
    description: 'Hands-on simulation for civil, mechanical, and electrical engineering students focusing on parametric 3D design, clash detection, and structural integrity analysis.',
    speaker: 'Lead Instructor: Ing. Emmanuel Osei'
  },
  {
    id: 'evt-3',
    date: '2026-10-27',
    title: 'Young Engineers Technical Symposium & Project Pitching Day',
    time: '11:00 AM – 04:00 PM',
    location: 'Main University Auditorium, AAMUSTED',
    category: 'Symposium & Innovation',
    cpd: '4.0 CPD Points',
    description: 'Inter-departmental capstone and design exhibition featuring solar power innovations, agricultural mechanization prototypes, and autonomous IoT sensor networks.',
    speaker: 'GhIE National Council Representatives'
  },
  {
    id: 'evt-4',
    date: '2026-11-12',
    title: 'Bui Power Authority & Regional Substation Industrial Excursion',
    time: '06:30 AM – 06:00 PM',
    location: 'Bui Hydroelectric Plant & Grid Substation',
    category: 'Field Excursion',
    cpd: '6.0 CPD Points',
    description: 'Guided field inspection of high-voltage transmission lines, turbine maintenance protocols, and national renewable energy grid synchronization.',
    speaker: 'Plant Operations Directorate'
  },
  {
    id: 'evt-5',
    date: '2026-11-24',
    title: 'GhIE Professional Ethics, Arbitration & Contract Administration',
    time: '02:00 PM – 05:30 PM',
    location: 'Virtual & Executive Conference Room 3',
    category: 'Professional Practice',
    cpd: '3.5 CPD Points',
    description: 'Legal frameworks for young engineers, engineering consultancy tenders, and FIDIC standard dispute resolution procedures.',
    speaker: 'GhIE Legal & Professional Ethics Directorate'
  }
];

export default function EventsSection() {
  // Format today's date dynamically
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [selectedDate, setSelectedDate] = useState(todayStr); // Defaults to real Today
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionRef = useRef(null);
  const detailRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    date: todayStr,
    time: '10:00 AM – 01:00 PM',
    location: 'AAMUSTED Engineering Auditorium',
    category: 'Technical Workshop',
    cpd: '3.0 CPD Points',
    description: '',
    speaker: ''
  });



  // Smooth fade when selected date changes
  const handleDateSelect = (dateStr) => {
    setSelectedDate(dateStr);
    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
  };

  const eventsForSelectedDate = events.filter((e) => e.date === selectedDate);
  const isSelectedDateToday = selectedDate === todayStr;

  // Next scheduled event calculation
  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
  const nextUpcomingEvent = sortedEvents.find((e) => e.date >= selectedDate && e.date !== selectedDate) || sortedEvents[0];

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date) return;

    const newEvt = {
      id: `evt-${Date.now()}`,
      ...formData,
    };

    setEvents((prev) => [...prev, newEvt]);
    handleDateSelect(newEvt.date);
    setIsModalOpen(false);
    setFormData({
      title: '',
      date: todayStr,
      time: '10:00 AM – 01:00 PM',
      location: 'AAMUSTED Engineering Auditorium',
      category: 'Technical Workshop',
      cpd: '3.0 CPD Points',
      description: '',
      speaker: ''
    });
  };

  return (
    <section
      ref={sectionRef}
      id="events"
      className="relative w-full bg-white pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 lg:pb-32 border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Section Header: Minimalist Editorial Title */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          {/* Circuit Terminal Feed from Hero */}
          <div className="flex flex-col items-center justify-center -mt-6 mb-3">
            <div className="w-px h-5 bg-gradient-to-b from-[#00a2e8] to-slate-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00a2e8] ring-2 ring-[#00a2e8]/25" />
          </div>

          <p className="text-xs font-semibold tracking-widest text-[#00a2e8] uppercase font-heading">
            CALENDAR & PROGRAMS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-[-0.03em] font-heading">
            Upcoming Chapter Events.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
            Select a scheduled date on the calendar to view program details, speaker sessions, and CPD accreditation.
          </p>

          <div className="pt-1">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-[#00a2e8] transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Event (Prototype Admin)</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            CALENDAR (TOP)
            ======================================================== */}
        <div className="mb-12 sm:mb-16">
          <MinimalistCalendar
            events={events}
            selectedDate={selectedDate}
            onSelectDate={handleDateSelect}
          />
        </div>

        {/* ========================================================
            EVENT DETAILS (BENEATH CALENDAR)
            ======================================================== */}
        <div ref={detailRef} className="border-t border-slate-200 pt-8 sm:pt-10">
          {eventsForSelectedDate.length > 0 ? (
            <div className="space-y-12">
              {eventsForSelectedDate.map((evt) => (
                <div key={evt.id} className="space-y-4">
                  {/* Category & Date Metadata */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-semibold text-[#00a2e8] uppercase tracking-wider font-heading">
                      {evt.category}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-medium">
                      {new Date(evt.date + 'T00:00:00').toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                      {evt.date === todayStr && (
                        <span className="ml-2 text-[#00a2e8] font-bold">(Today)</span>
                      )}
                    </span>
                    {evt.cpd && (
                      <>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-600 font-medium">{evt.cpd}</span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0c2340] tracking-tight font-heading leading-snug">
                    {evt.title}
                  </h3>

                  {/* Location & Time */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 pt-1">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 max-w-2xl">
                    {evt.description}
                  </p>

                  {/* Speaker */}
                  {evt.speaker && (
                    <p className="text-xs text-slate-500">
                      <span className="text-slate-700 font-medium">Keynote / Lead:</span> {evt.speaker}
                    </p>
                  )}

                  {/* Action Link */}
                  <div className="pt-4">
                    <a
                      href="#join"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0c2340] hover:text-[#00a2e8] group transition-colors font-heading"
                    >
                      <span>Register for this program</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Minimalist State When Selected Date Has No Event */
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider font-heading">
                <span>
                  {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                {isSelectedDateToday && (
                  <span className="px-2 py-0.5 rounded-full bg-sky-50 text-[#00a2e8] text-[10px] font-bold border border-sky-200">
                    TODAY
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-slate-600">
                {isSelectedDateToday
                  ? 'No official chapter programs scheduled for today.'
                  : 'No official chapter programs scheduled for this date.'}
              </p>

              {/* Seamless link to next scheduled event */}
              {nextUpcomingEvent && (
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block font-heading">
                    Next Upcoming Session
                  </span>
                  <button
                    onClick={() => handleDateSelect(nextUpcomingEvent.date)}
                    className="group text-left inline-flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-sm sm:text-base font-bold text-[#0c2340] hover:text-[#00a2e8] transition-colors font-heading"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-[#00a2e8]">
                      {new Date(nextUpcomingEvent.date + 'T00:00:00').toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span className="underline decoration-slate-300 group-hover:decoration-[#00a2e8]">
                      {nextUpcomingEvent.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#00a2e8] group-hover:translate-x-1 transition-transform inline" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

      </div>

      {/* ========================================================
          ADMIN PROTOTYPE MODAL
          ======================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00a2e8] block">
                  PROTOTYPE ADMIN
                </span>
                <h3 className="text-lg font-bold text-[#0c2340] font-heading">
                  Add New Chapter Event
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddEvent} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Event Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dean's Annual Engineering Symposium"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a2e8]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a2e8]"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a2e8]"
                  >
                    <option value="Statutory Licensure">Statutory Licensure</option>
                    <option value="Technical Workshop">Technical Workshop</option>
                    <option value="Symposium & Innovation">Symposium & Innovation</option>
                    <option value="Field Excursion">Field Excursion</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Time & Location</label>
                <input
                  type="text"
                  placeholder="e.g. 10:00 AM – AAMUSTED Auditorium"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a2e8]"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Description of program..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a2e8]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3.5 py-1.5 text-xs text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#0c2340] hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
                >
                  Publish to Calendar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
