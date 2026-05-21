export default function SectionSkeleton({ className = "h-64" }: { className?: string }) {
  return (
    <div
      className={`w-full animate-pulse rounded-2xl bg-white/[0.04] ${className}`}
      aria-hidden
    />
  );
}
