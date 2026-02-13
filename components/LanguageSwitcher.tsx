"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="fixed top-6 right-6 z-50 flex items-center gap-0.5 p-1 rounded-lg bg-black-200/80 backdrop-blur border border-white/10"
      role="group"
      aria-label="Switch language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
          lang === "en"
            ? "bg-purple/20 text-purple"
            : "text-white-200 hover:text-white hover:bg-white/5"
        )}
      >
        EN
      </button>
      <span className="text-white/30" aria-hidden>
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("pt")}
        className={cn(
          "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
          lang === "pt"
            ? "bg-purple/20 text-purple"
            : "text-white-200 hover:text-white hover:bg-white/5"
        )}
      >
        PT
      </button>
    </div>
  );
}
