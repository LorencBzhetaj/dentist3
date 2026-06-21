import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafb] px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-semibold text-teal-600 mb-4">404</p>
        <h1 className="text-2xl font-semibold text-[#0d1b2a] mb-3">Page Not Found</h1>
        <p className="text-slate-500 mb-8">
          The page you're looking for doesn't exist. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-flex items-center justify-center bg-teal-600 text-white font-medium px-7 py-3 rounded-full hover:bg-teal-700 transition-colors text-sm">
            Go Home
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center border border-slate-200 text-[#0d1b2a] font-medium px-7 py-3 rounded-full hover:bg-slate-50 transition-colors text-sm">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
