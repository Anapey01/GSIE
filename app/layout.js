import './globals.css';
import { IBM_Plex_Sans } from 'next/font/google';
import GsapProvider from '@/components/animations/GsapProvider';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});

export const metadata = {
  title: 'Engineering Students’ Association · Student Chapter',
  description: 'Official web portal for the Engineering Students’ Association (GhIE Student Chapter) — A community of thinkers, makers & tomorrow’s engineers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={ibmPlexSans.variable}>
      <body suppressHydrationWarning className="antialiased bg-white text-slate-900 selection:bg-[#05b0f0] selection:text-[#001e5a] font-sans">
        <GsapProvider>
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}
