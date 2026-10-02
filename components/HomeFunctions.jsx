'use client';

const functionsList = [
  {
    number: '01',
    title: 'Regulation & Certification',
    description:
      'Deriving authority from Act 819, GhIE regulates the practice of engineering disciplines across Ghana, administering qualifying examinations and certifying Professional Engineers, Professional Engineering Technologists, and Craftsmen.',
  },
  {
    number: '02',
    title: 'Continuing Professional Development (CPD)',
    description:
      'Organizing structured training programmes, technical symposiums, workshops, and publications to ensure practicing engineers and student members maintain cutting-edge competence throughout their careers.',
  },
  {
    number: '03',
    title: 'National Policy & Advisory',
    description:
      'Advising government, industry leaders, regulatory bodies, and universities on national infrastructure policies, engineering standards, public safety codes, and sustainable industrialization.',
  },
  {
    number: '04',
    title: 'Code of Ethics & Discipline',
    description:
      'Establishing and strictly enforcing the Code of Ethics for the engineering profession in Ghana to protect the public interest, uphold integrity, and maintain international engineering standards.',
  },
];

export default function HomeFunctions() {
  return (
    <section id="functions" className="py-20 sm:py-28 bg-[#0c2340] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold tracking-widest text-[#00a2e8] uppercase mb-2 font-heading">
            Statutory Mandate
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight text-white">
            Functions of the Institution
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Responsibilities entrusted to the Ghana Institution of Engineering under the Engineering Council Act 2011 (Act 819) and NRCD 143 of 1973.
          </p>
        </div>

        {/* 4 Functions Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 border-t border-white/15 pt-10">
          {functionsList.map((item) => (
            <div key={item.number} className="space-y-3">
              <span className="text-sm font-bold text-[#00a2e8] font-mono block">
                {item.number}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statutory Grounding Note */}
        <div className="mt-16 pt-8 border-t border-white/10 text-xs text-slate-400">
          Governed by the Engineering Council of Ghana • Established under Act 819 (2011) & NRCD 143 (1973)
        </div>

      </div>
    </section>
  );
}
