import { cn } from "@/lib/utils";

type SectionSkeletonProps = {
  className?: string;
};

/** Placeholder enquanto seções abaixo da dobra carregam via dynamic import. */
export default function SectionSkeleton({ className }: SectionSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Carregando seção"
      className={cn(
        "w-full animate-pulse rounded-3xl border border-white/[0.06] bg-white/[0.03]",
        className,
      )}
    />
  );
}
