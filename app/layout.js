import './globals.css';
import { Playfair_Display, Crimson_Pro } from 'next/font/google';
import GsapProvider from '@/components/animations/GsapProvider';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-playfair',
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-crimson',
});

export const metadata = {
  title: 'Engineering Students’ Association · Student Chapter',
  description: 'Official web portal for the Engineering Students’ Association (GhIE Student Chapter) — A community of thinkers, makers & tomorrow’s engineers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfairDisplay.variable} ${crimsonPro.variable}`}>
      <body suppressHydrationWarning className="antialiased bg-white text-slate-900 selection:bg-[#05b0f0] selection:text-[#001e5a] font-sans">
        <GsapProvider>
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}
