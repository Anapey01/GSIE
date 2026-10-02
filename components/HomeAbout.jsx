'use client';

export default function HomeAbout() {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto bg-white border-b border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Official Historical Narrative */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#00a2e8] uppercase mb-2 font-heading">
              AAMUSTED Student Chapter
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight font-heading leading-tight">
              The Ghana Institution of Engineering
            </h2>
          </div>

          <p className="text-slate-900 font-medium text-lg sm:text-xl leading-relaxed">
            The Ghana Institution of Engineering was officially founded in 1968 to succeed the Ghana Group of professional Engineers, as an autonomous professional body with no political affiliation. The Institution derives its authority from the Engineering Council Act 2011, Act 819 and the Professional Bodies Registration Decree NRCD 143 of 1973. The late Ing. Dr. E. Sackey became its first President.
          </p>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            GhIE brings engineers, technicians, and innovators together to collaborate, build skills, and help shape national standards and policies. Start where you are, grow with us.
          </p>
        </div>

        {/* Right Column: Clean Institutional Facts Sidebar */}
        <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-8 lg:pt-0 lg:pl-10 space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-heading">
            Institutional Context
          </h3>

          <div className="space-y-4 text-sm text-slate-600">
            <div>
              <span className="font-bold text-[#0c2340] block">Founded</span>
              <span className="text-slate-500">1968 (Successor to Ghana Group of Professional Engineers)</span>
            </div>

            <div>
              <span className="font-bold text-[#0c2340] block">Statutory Authority</span>
              <span className="text-slate-500">Engineering Council Act 2011 (Act 819)</span>
            </div>

            <div>
              <span className="font-bold text-[#0c2340] block">Registration</span>
              <span className="text-slate-500">Professional Bodies Registration Decree NRCD 143 (1973)</span>
            </div>

            <div>
              <span className="font-bold text-[#0c2340] block">First President</span>
              <span className="text-slate-500">The late Ing. Dr. E. Sackey</span>
            </div>

            <div>
              <span className="font-bold text-[#0c2340] block">University Chapter</span>
              <span className="text-slate-500">AAMUSTED, Kumasi & Mampong Campuses</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
