"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafb] px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-semibold text-[#0d1b2a] mb-3">Something went wrong</h1>
        <p className="text-slate-500 mb-6 text-sm">{error.message || "An unexpected error occurred."}</p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center bg-teal-600 text-white font-medium px-7 py-3 rounded-full hover:bg-teal-700 transition-colors text-sm"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
