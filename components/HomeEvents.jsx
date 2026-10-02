'use client';

const events = [
  {
    date: '16 – 20 March 2026',
    category: 'Annual General Meeting',
    title: '56th GhIE Annual General Meeting & Young Engineers Forum',
    venue: 'Volta Serene Hotel, Ho, Volta Region',
    details: 'Theme: "Engineering the Food Security and Sustainable Agriculture Value Chain." Open to all registered student and professional members across Ghana.',
    isConfirmed: true,
  },
  {
    date: '[Date: TBD]',
    category: '[Event Category Placeholder]',
    title: '[Event Title: Chapter Workshop, Technical Seminar, or Guest Lecture]',
    venue: '[Venue: AAMUSTED Campus, Kumasi]',
    details: '[Placeholder: Programme details, speaker profiles, registration guidelines, and schedule will be announced here once finalized by the Executive Committee.]',
    isConfirmed: false,
  },
  {
    date: '[Date: TBD]',
    category: '[Field Excursion Placeholder]',
    title: '[Event Title: Industrial Site Visit & Infrastructure Inspection Tour]',
    venue: '[Venue: Selected Industrial Facility / Region]',
    details: '[Placeholder: Notice on field trips, industrial safety requirements, departure schedules, and participating engineering departments.]',
    isConfirmed: false,
  },
];

export default function HomeEvents() {
  return (
    <section id="events" className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-b border-slate-200 bg-white">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 border-b border-slate-200 pb-6 gap-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight font-heading">
          Upcoming Events
        </h2>
        <p className="text-sm text-slate-500">
          Official agenda and chapter programmes
        </p>
      </div>

      {/* Structured Calendar Agenda */}
      <div className="divide-y divide-slate-200 border-b border-slate-200">
        {events.map((evt, idx) => (
          <article
            key={idx}
            className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
          >
            {/* Date Column */}
            <div className="md:col-span-3">
              <span className={`text-base sm:text-lg font-bold block font-heading ${evt.isConfirmed ? 'text-[#0c2340]' : 'text-slate-400 font-mono'}`}>
                {evt.date}
              </span>
              <span className="text-xs text-slate-500 mt-1 block">
                {evt.venue}
              </span>
            </div>

            {/* Details Column */}
            <div className="md:col-span-9 space-y-2">
              <span className={`text-xs font-bold uppercase tracking-wider block font-heading ${evt.isConfirmed ? 'text-[#00a2e8]' : 'text-slate-400 font-mono'}`}>
                {evt.category}
              </span>
              <h3 className={`text-xl font-bold font-heading leading-snug ${evt.isConfirmed ? 'text-[#0c2340]' : 'text-slate-700'}`}>
                {evt.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {evt.details}
              </p>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
