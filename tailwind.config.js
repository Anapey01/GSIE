/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ghie: {
          cyan: '#05b0f0',
          hover: '#049ad3',
          light: '#eaf7fd',
          tint: '#f0f9ff',
          navy: '#001e5a',
          deepnavy: '#001640',
        },
        primaryNavy: '#001e5a',
        deepNavy: '#001640',
        accentCyan: '#05b0f0',
        cardBg: '#ffffff',
        sectionBg: '#f7f8f9',
        textMuted: '#617086',
        textLight: '#c6d5ed',
        textMutedLight: '#8fa5c8',
        borderMuted: '#b6beca',
      },
      fontFamily: {
        sans: [
          'var(--font-crimson)',
          'Crimson Pro',
          'Georgia',
          'serif',
        ],
        heading: [
          'var(--font-playfair)',
          'Playfair Display',
          'Georgia',
          'serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
