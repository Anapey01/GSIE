import './globals.css';
import GsapProvider from '@/components/animations/GsapProvider';

export const metadata = {
  title: 'GhIE Student Chapter - University of Skills Training and Entrepreneurial Development',
  description: 'Official web portal for the Ghana Institution of Engineering (GhIE) Student Chapter hosted at the University of Skills Training and Entrepreneurial Development (AAMUSTED).',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="antialiased bg-white text-slate-900 selection:bg-sky-500 selection:text-white font-sans">
        <GsapProvider>
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}
