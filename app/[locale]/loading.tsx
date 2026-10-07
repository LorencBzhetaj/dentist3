export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white">
      <div className="w-10 h-10 border-2 border-sand-200 border-t-sand-600 rounded-full animate-spin" role="status" aria-label="Loading" />
    </div>
  );
}
