import './globals.css';
import GsapProvider from '@/components/animations/GsapProvider';

export const metadata = {
  title: 'Engineering Students’ Association · Student Chapter',
  description: 'Official web portal for the Engineering Students’ Association (GhIE Student Chapter) — A community of thinkers, makers & tomorrow’s engineers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Sora:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="antialiased bg-white text-slate-900 selection:bg-[#05b0f0] selection:text-[#001e5a] font-sans">
        <GsapProvider>
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}
