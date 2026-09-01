import './globals.css';
import GsapProvider from '@/components/animations/GsapProvider';
import { Inter, Open_Sans, Montserrat } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'GhIE Student Chapter - University of Skills Training and Entrepreneurial Development',
  description: 'Official web portal for the Ghana Institution of Engineering (GhIE) Student Chapter hosted at the University of Skills Training and Entrepreneurial Development (AAMUSTED).',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${openSans.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning className="antialiased bg-white text-slate-900 selection:bg-sky-500 selection:text-white font-sans">
        <GsapProvider>
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}
