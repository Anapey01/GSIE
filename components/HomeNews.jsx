'use client';

import Image from 'next/image';

export default function HomeNews() {
  return (
    <section id="news" className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-b border-slate-200 bg-white">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 border-b border-slate-200 pb-6 gap-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight font-heading">
          Latest News
        </h2>
        <p className="text-sm text-slate-500">
          Official bulletins and conference dispatches from GhIE
        </p>
      </div>

      {/* Editorial News Grid: 1 Featured Lead + 2 Explicit Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Featured Lead Story (56th AGM Young Engineers) */}
        <article className="lg:col-span-7 flex flex-col space-y-4">
          <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#0c2340] border border-slate-200 rounded-sm">
            <Image
              src="/images/ghie-young-engineers-duo-landscape.jpg"
              alt="56th GhIE AGM & Young Engineers Forum at Volta Serene Hotel, Ho"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold tracking-widest text-[#00a2e8] uppercase block font-heading">
              Annual Conference • 16th – 20th March, 2026 • Ho
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0c2340] leading-snug font-heading">
              56th GhIE Annual General Meeting & Young Engineers Forum
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Delegates and student representatives gathered at the Volta Serene Hotel under the national theme: <span className="font-semibold text-slate-800">&ldquo;Engineering the Food Security and Sustainable Agriculture Value Chain.&rdquo;</span> The sessions examined modern agro-processing infrastructure, engineering safety standards, and career development for young engineers.
            </p>
          </div>
        </article>

        {/* Secondary Editorial News Entries (Explicit Placeholders) */}
        <div className="lg:col-span-5 lg:border-l lg:border-slate-200 lg:pl-10 divide-y divide-slate-200">
          
          <article className="pb-8 first:pt-0 pt-8 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase block font-mono">
              [CATEGORY: CHAPTER BULLETIN] • [DATE: TBD]
            </span>
            <h4 className="text-lg font-bold text-[#0c2340] font-heading leading-snug">
              [News Headline: Chapter Announcement or Technical Notice]
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              [Placeholder: Details regarding student membership renewals, committee appointments, or university engineering events will be published here once announced by the Executive Committee.]
            </p>
          </article>

          <article className="pt-8 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase block font-mono">
              [CATEGORY: NATIONAL REGULATION] • [DATE: TBD]
            </span>
            <h4 className="text-lg font-bold text-[#0c2340] font-heading leading-snug">
              [News Headline: Engineering Council Act 819 Regulatory Update]
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              [Placeholder: Official guidelines from the Engineering Council regarding graduate engineer trainee registration and professional requirements.]
            </p>
          </article>

        </div>

      </div>

    </section>
  );
}
