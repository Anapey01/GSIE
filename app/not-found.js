import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-slate-50 text-slate-900 text-center">
      <h1 className="text-6xl font-extrabold text-[#00a2e8] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-[#0c2340] mb-2">Page Not Found</h2>
      <p className="text-sm text-slate-600 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-[#00a2e8] hover:bg-[#008bcb] text-white font-bold text-sm shadow-md transition-all"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
