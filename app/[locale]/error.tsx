"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-sand-50 px-4 pt-20">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-4xl text-ink mb-6">Sorèr Dental Clinic</h1>
        <p className="text-muted mb-1">Ndodhi një gabim. · Something went wrong. · Si è verificato un errore.</p>
        <button
          onClick={reset}
          className="mt-6 inline-flex items-center justify-center bg-ink text-white font-medium px-7 py-3 rounded-full hover:bg-ink-soft transition-colors text-sm"
        >
          ↻
        </button>
      </div>
    </div>
  );
}
