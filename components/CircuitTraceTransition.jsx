'use client';

export default function CircuitTraceTransition() {
  return (
    <div className="relative w-full overflow-hidden bg-white select-none pointer-events-none -mt-4 -mb-2 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* ========================================================
            DESKTOP CIRCUIT TRACE (Routed 45° from Right Chip to Center)
            ======================================================== */}
        <div className="hidden lg:block w-full h-24">
          <svg
            viewBox="0 0 1200 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="traceGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Static Trace 1: Primary Data Bus (Cyan) */}
            <path
              d="M 880 0 V 22 L 858 44 H 622 L 600 66 V 96"
              stroke="#00a2e8"
              strokeWidth="1.5"
              strokeOpacity="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Static Trace 2: Secondary Ground / Reference Track (Slate) */}
            <path
              d="M 896 0 V 16 L 868 44 H 632 L 608 68 V 96"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              strokeOpacity="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Circuit Solder Pads / Vias */}
            <circle cx="880" cy="0" r="3" fill="#00a2e8" />
            <circle cx="858" cy="44" r="2.5" fill="#94a3b8" />
            <circle cx="622" cy="44" r="2.5" fill="#94a3b8" />
            <circle cx="600" cy="96" r="3.5" fill="#00a2e8" />
            <circle cx="608" cy="96" r="2.5" fill="#cbd5e1" />

            {/* Animated Data Packets / Photons on Trace 1 */}
            <circle r="3" fill="#00a2e8" filter="url(#traceGlow)">
              <animateMotion
                path="M 880 0 V 22 L 858 44 H 622 L 600 66 V 96"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>

            <circle r="2.5" fill="#38bdf8" filter="url(#traceGlow)">
              <animateMotion
                path="M 880 0 V 22 L 858 44 H 622 L 600 66 V 96"
                dur="2.8s"
                begin="1.4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Animated Data Packet on Trace 2 */}
            <circle r="2.2" fill="#00a2e8" opacity="0.8" filter="url(#traceGlow)">
              <animateMotion
                path="M 896 0 V 16 L 868 44 H 632 L 608 68 V 96"
                dur="3.4s"
                begin="0.7s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>

        {/* ========================================================
            MOBILE / TABLET CIRCUIT TRACE (Straight Down from Centered Chip)
            ======================================================== */}
        <div className="block lg:hidden w-full h-16">
          <svg
            viewBox="0 0 360 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="traceGlowMob" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Primary Center Trace */}
            <path
              d="M 180 0 V 64"
              stroke="#00a2e8"
              strokeWidth="1.5"
              strokeOpacity="0.75"
              strokeLinecap="round"
            />

            {/* Secondary Parallel Trace */}
            <path
              d="M 190 0 V 64"
              stroke="#cbd5e1"
              strokeWidth="1"
              strokeDasharray="3 3"
              strokeOpacity="0.7"
              strokeLinecap="round"
            />

            {/* Solder Points */}
            <circle cx="180" cy="0" r="2.5" fill="#00a2e8" />
            <circle cx="180" cy="32" r="2" fill="#94a3b8" />
            <circle cx="180" cy="64" r="3" fill="#00a2e8" />

            {/* Flowing Data Pulses */}
            <circle r="3" fill="#00a2e8" filter="url(#traceGlowMob)">
              <animateMotion
                path="M 180 0 V 64"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>

            <circle r="2.2" fill="#38bdf8" filter="url(#traceGlowMob)">
              <animateMotion
                path="M 180 0 V 64"
                dur="1.8s"
                begin="0.9s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
}
