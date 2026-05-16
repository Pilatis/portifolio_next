"use client";

import { motion } from "framer-motion";
import { IoInformationCircleOutline } from "react-icons/io5";
import { DefinitionTooltip } from "@/components/ui/DefinitionTooltip";
import { cn } from "@/lib/utils";

function bodyWithTerm(body: string, term: string, termTooltip: string) {
  const idx = body.indexOf(term);
  if (idx === -1) return body;
  return (
    <>
      {body.slice(0, idx)}
      <DefinitionTooltip definition={termTooltip}>{term}</DefinitionTooltip>
      {body.slice(idx + term.length)}
    </>
  );
}

type StagingProjectDisclaimerProps = {
  title: string;
  body: string;
  term: string;
  termTooltip: string;
  /** Uma linha para listagens (home / /projects). */
  compactText: string;
  variant?: "full" | "compact";
  className?: string;
};

export function StagingProjectDisclaimer({
  title,
  body,
  term,
  termTooltip,
  compactText,
  variant = "full",
  className,
}: StagingProjectDisclaimerProps) {
  if (variant === "compact") {
    return (
      <p
        role="note"
        aria-label={title}
        className={cn(
          "mt-4 max-w-3xl text-xs leading-relaxed text-white-200/85 border-l-2 border-amber-400/35 pl-3.5 py-0.5",
          className,
        )}
      >
        {bodyWithTerm(compactText, term, termTooltip)}
      </p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.15 }}
      role="note"
      aria-label={title}
      className={cn(
        "mb-8 flex gap-3 rounded-xl border border-amber-400/20 bg-gradient-to-br from-amber-500/[0.08] to-transparent px-4 py-3.5 backdrop-blur-sm md:gap-4 md:py-4",
        className,
      )}
    >
      <IoInformationCircleOutline
        className="h-[1.125rem] w-[1.125rem] shrink-0 text-amber-400/95 md:h-5 md:w-5"
        aria-hidden
      />
      <div className="min-w-0 space-y-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-200/95 md:text-xs">
          {title}
        </p>
        <p className="text-sm leading-relaxed text-white-200 md:text-[0.9375rem]">
          {bodyWithTerm(body, term, termTooltip)}
        </p>
      </div>
    </motion.div>
  );
}
