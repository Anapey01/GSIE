'use client';

export default function HeroChipDesign() {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] aspect-square mx-auto flex items-center justify-center select-none">
      <svg
        viewBox="0 0 560 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_35px_rgba(12,35,64,0.06)]"
      >
        <defs>
          {/* Silicon Die Gradients */}
          <linearGradient id="chipSubstrate" x1="190" y1="190" x2="370" y2="370" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0f2b48" />
            <stop offset="50%" stopColor="#0c2340" />
            <stop offset="100%" stopColor="#08182c" />
          </linearGradient>

          <linearGradient id="dieCore" x1="230" y1="230" x2="330" y2="330" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="50%" stopColor="#152e4d" />
            <stop offset="100%" stopColor="#0a1c32" />
          </linearGradient>

          <linearGradient id="metallicBevel" x1="180" y1="180" x2="380" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00a2e8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="goldCorner" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          <filter id="chipGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ========================================================
            CIRCUIT TRACES (RADIATING ACROSS BACKGROUND)
            ======================================================== */}
        <g strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
          {/* Top Left Traces */}
          <path d="M70 90 H130 L170 130 V190" stroke="#cbd5e1" strokeWidth="1.2" />
          <circle cx="70" cy="90" r="2.5" fill="#94a3b8" />
          
          <path d="M110 50 V110 L150 150 H200" stroke="#00a2e8" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="110" cy="50" r="2.5" fill="#00a2e8" />

          <path d="M40 160 H110 L140 190" stroke="#e2e8f0" strokeWidth="1.2" />
          <circle cx="40" cy="160" r="2.5" fill="#cbd5e1" />

          <path d="M160 40 V100 L210 150 V190" stroke="#0c2340" strokeWidth="1.2" strokeOpacity="0.4" />
          <circle cx="160" cy="40" r="2.5" fill="#0c2340" fillOpacity="0.4" />

          {/* Top Right Traces */}
          <path d="M490 90 H430 L390 130 V190" stroke="#cbd5e1" strokeWidth="1.2" />
          <circle cx="490" cy="90" r="2.5" fill="#94a3b8" />

          <path d="M450 50 V110 L410 150 H360" stroke="#00a2e8" strokeWidth="1.5" strokeOpacity="0.7" />
          <circle cx="450" cy="50" r="2.5" fill="#00a2e8" />

          <path d="M520 160 H450 L420 190" stroke="#e2e8f0" strokeWidth="1.2" />
          <circle cx="520" cy="160" r="2.5" fill="#cbd5e1" />

          <path d="M400 40 V100 L350 150 V190" stroke="#0c2340" strokeWidth="1.2" strokeOpacity="0.4" />
          <circle cx="400" cy="40" r="2.5" fill="#0c2340" fillOpacity="0.4" />

          {/* Bottom Left Traces */}
          <path d="M70 470 H130 L170 430 V370" stroke="#cbd5e1" strokeWidth="1.2" />
          <circle cx="70" cy="470" r="2.5" fill="#94a3b8" />

          <path d="M110 510 V450 L150 410 H200" stroke="#00a2e8" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="110" cy="510" r="2.5" fill="#00a2e8" />

          <path d="M40 400 H110 L140 370" stroke="#e2e8f0" strokeWidth="1.2" />
          <circle cx="40" cy="400" r="2.5" fill="#cbd5e1" />

          <path d="M160 520 V460 L210 410 V370" stroke="#0c2340" strokeWidth="1.2" strokeOpacity="0.4" />
          <circle cx="160" cy="520" r="2.5" fill="#0c2340" fillOpacity="0.4" />

          {/* Bottom Right Traces */}
          <path d="M490 470 H430 L390 430 V370" stroke="#cbd5e1" strokeWidth="1.2" />
          <circle cx="490" cy="470" r="2.5" fill="#94a3b8" />

          <path d="M450 510 V450 L410 410 H360" stroke="#00a2e8" strokeWidth="1.5" strokeOpacity="0.7" />
          <circle cx="450" cy="510" r="2.5" fill="#00a2e8" />

          <path d="M520 400 H450 L420 370" stroke="#e2e8f0" strokeWidth="1.2" />
          <circle cx="520" cy="400" r="2.5" fill="#cbd5e1" />

          <path d="M400 520 V460 L350 410 V370" stroke="#0c2340" strokeWidth="1.2" strokeOpacity="0.4" />
          <circle cx="400" cy="520" r="2.5" fill="#0c2340" fillOpacity="0.4" />

          {/* Cardinal Bus Lines (Direct Orthogonal Feeds) */}
          {/* North */}
          <path d="M250 80 V190" stroke="#00a2e8" strokeWidth="1.2" strokeOpacity="0.5" />
          <circle cx="250" cy="80" r="2" fill="#00a2e8" />
          <path d="M280 60 V190" stroke="#0c2340" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="280" cy="60" r="2.5" fill="#0c2340" />
          <path d="M310 80 V190" stroke="#00a2e8" strokeWidth="1.2" strokeOpacity="0.5" />
          <circle cx="310" cy="80" r="2" fill="#00a2e8" />

          {/* South */}
          <path d="M250 480 V370" stroke="#00a2e8" strokeWidth="1.2" strokeOpacity="0.5" />
          <circle cx="250" cy="480" r="2" fill="#00a2e8" />
          <path d="M280 500 V370" stroke="#0c2340" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="280" cy="500" r="2.5" fill="#0c2340" />
          <path d="M310 480 V370" stroke="#00a2e8" strokeWidth="1.2" strokeOpacity="0.5" />
          <circle cx="310" cy="480" r="2" fill="#00a2e8" />

          {/* Animated Pulses Heading South */}
          <circle r="2.5" fill="#00a2e8" filter="url(#chipGlow)">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M280 370 V500" />
          </circle>
          <circle r="2" fill="#38bdf8" filter="url(#chipGlow)">
            <animateMotion dur="2.6s" begin="1s" repeatCount="indefinite" path="M310 370 V480" />
          </circle>
          <circle r="2" fill="#00a2e8" filter="url(#chipGlow)">
            <animateMotion dur="2.8s" begin="0.5s" repeatCount="indefinite" path="M250 370 V480" />
          </circle>

          {/* West */}
          <path d="M80 250 H190" stroke="#00a2e8" strokeWidth="1.2" strokeOpacity="0.5" />
          <circle cx="80" cy="250" r="2" fill="#00a2e8" />
          <path d="M60 280 H190" stroke="#0c2340" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="60" cy="280" r="2.5" fill="#0c2340" />
          <path d="M80 310 H190" stroke="#00a2e8" strokeWidth="1.2" strokeOpacity="0.5" />
          <circle cx="80" cy="310" r="2" fill="#00a2e8" />

          {/* East */}
          <path d="M480 250 H370" stroke="#00a2e8" strokeWidth="1.2" strokeOpacity="0.5" />
          <circle cx="480" cy="250" r="2" fill="#00a2e8" />
          <path d="M500 280 H370" stroke="#0c2340" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="500" cy="280" r="2.5" fill="#0c2340" />
          <path d="M480 310 H370" stroke="#00a2e8" strokeWidth="1.2" strokeOpacity="0.5" />
          <circle cx="480" cy="310" r="2" fill="#00a2e8" />
        </g>

        {/* ========================================================
            PERIMETER PINS / CONTACT LEADS (40 Micro-Leads)
            ======================================================== */}
        <g stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round">
          {/* Top Pins */}
          {[205, 220, 235, 250, 265, 280, 295, 310, 325, 340, 355].map((x) => (
            <line key={`pin-t-${x}`} x1={x} y1="176" x2={x} y2="190" stroke={x === 280 ? '#00a2e8' : '#94a3b8'} />
          ))}
          {/* Bottom Pins */}
          {[205, 220, 235, 250, 265, 280, 295, 310, 325, 340, 355].map((x) => (
            <line key={`pin-b-${x}`} x1={x} y1="370" x2={x} y2="384" stroke={x === 280 ? '#00a2e8' : '#94a3b8'} />
          ))}
          {/* Left Pins */}
          {[205, 220, 235, 250, 265, 280, 295, 310, 325, 340, 355].map((y) => (
            <line key={`pin-l-${y}`} x1="176" y1={y} x2="190" y2={y} stroke={y === 280 ? '#00a2e8' : '#94a3b8'} />
          ))}
          {/* Right Pins */}
          {[205, 220, 235, 250, 265, 280, 295, 310, 325, 340, 355].map((y) => (
            <line key={`pin-r-${y}`} x1="370" y1={y} x2="384" y2={y} stroke={y === 280 ? '#00a2e8' : '#94a3b8'} />
          ))}
        </g>

        {/* ========================================================
            CHIP PACKAGE / SUBSTRATE (Minimalist Square)
            ======================================================== */}
        {/* Outer Shadow Ring */}
        <rect
          x="188"
          y="188"
          width="184"
          height="184"
          rx="18"
          fill="none"
          stroke="url(#metallicBevel)"
          strokeWidth="2"
        />

        {/* Main Silicon Ceramic / Matte Substrate */}
        <rect
          x="190"
          y="190"
          width="180"
          height="180"
          rx="16"
          fill="url(#chipSubstrate)"
          stroke="#0c2340"
          strokeWidth="1.5"
        />

        {/* Subtle Pin 1 / Index Marker (Minimalist Gold Corner Dot) */}
        <circle cx="210" cy="210" r="4.5" fill="url(#goldCorner)" />

        {/* Inner Precision Die Frame */}
        <rect
          x="222"
          y="222"
          width="116"
          height="116"
          rx="10"
          fill="none"
          stroke="#00a2e8"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Central Silicon Core */}
        <rect
          x="232"
          y="232"
          width="96"
          height="96"
          rx="8"
          fill="url(#dieCore)"
          stroke="#38bdf8"
          strokeWidth="1"
          strokeOpacity="0.6"
        />

        {/* Minimalist Geometric Silicon Core Layout (No text, pure architecture) */}
        <g stroke="#00a2e8" strokeWidth="0.8" strokeOpacity="0.4" fill="none">
          {/* Quadrant Partition Dividers */}
          <line x1="280" y1="236" x2="280" y2="324" />
          <line x1="236" y1="280" x2="324" y2="280" />

          {/* Micro Geometric Core Blocks */}
          <rect x="242" y="242" width="32" height="32" rx="3" fill="#00a2e8" fillOpacity="0.08" />
          <rect x="286" y="242" width="32" height="32" rx="3" fill="#00a2e8" fillOpacity="0.08" />
          <rect x="242" y="286" width="32" height="32" rx="3" fill="#00a2e8" fillOpacity="0.08" />
          <rect x="286" y="286" width="32" height="32" rx="3" fill="#00a2e8" fillOpacity="0.08" />

          {/* Center Micro Die Node */}
          <circle cx="280" cy="280" r="5" fill="#00a2e8" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="280" cy="280" r="1.5" fill="#ffffff" />
        </g>

        {/* Subtle Precision Corner Guides */}
        <path d="M200 230 V200 H230" stroke="#00a2e8" strokeWidth="1" strokeOpacity="0.5" fill="none" />
        <path d="M360 230 V200 H330" stroke="#00a2e8" strokeWidth="1" strokeOpacity="0.5" fill="none" />
        <path d="M200 330 V360 H230" stroke="#00a2e8" strokeWidth="1" strokeOpacity="0.5" fill="none" />
        <path d="M360 330 V360 H330" stroke="#00a2e8" strokeWidth="1" strokeOpacity="0.5" fill="none" />
      </svg>
    </div>
  );
}
