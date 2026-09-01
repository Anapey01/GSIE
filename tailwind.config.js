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
          cyan: '#00a2e8',
          hover: '#008bcb',
          light: '#e0f2fe',
          tint: '#f0f9ff',
          navy: '#0c2340',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-open-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        open: ['var(--font-open-sans)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
