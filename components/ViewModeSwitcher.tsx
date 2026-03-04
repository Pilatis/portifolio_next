"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useViewMode } from "@/context/ViewModeContext";
import { cn } from "@/lib/utils";

type ViewModeT = { label: string; recruiter: string; technical: string };

export default function ViewModeSwitcher() {
  const { viewMode, setViewMode } = useViewMode();
  const { t } = useLanguage();
  const viewModeT = t("viewMode") as ViewModeT;

  return (
    <div
      className="flex items-center gap-0.5 p-1 rounded-lg bg-black-200/80 backdrop-blur border border-white/10"
      role="group"
      aria-label="Switch view mode"
    >
      <span className="px-2 text-xs text-white-200/80 mr-1 hidden sm:inline">{viewModeT?.label ?? "View:"}</span>
      <button
        type="button"
        onClick={() => setViewMode("recruiter")}
        className={cn(
          "px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors",
          viewMode === "recruiter"
            ? "bg-purple/20 text-purple"
            : "text-white-200 hover:text-white hover:bg-white/5"
        )}
      >
        {viewModeT?.recruiter ?? "Recruiter"}
      </button>
      <button
        type="button"
        onClick={() => setViewMode("technical")}
        className={cn(
          "px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors",
          viewMode === "technical"
            ? "bg-purple/20 text-purple"
            : "text-white-200 hover:text-white hover:bg-white/5"
        )}
      >
        {viewModeT?.technical ?? "Technical"}
      </button>
    </div>
  );
}
