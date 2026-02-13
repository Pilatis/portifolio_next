"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import translations, { Locale, getByPath } from "@/data/translations";

const STORAGE_KEY = "portfolio-lang";

type Translations = typeof translations.en;

const LanguageContext = createContext<{
  lang: Locale;
  setLang: (locale: Locale) => void;
  t: (path: string) => unknown;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "pt") setLangState(stored);
    setMounted(true);
  }, []);

  const setLang = useCallback((locale: Locale) => {
    setLangState(locale);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, locale);
  }, []);

  const t = useCallback(
    (path: string): unknown => {
      const dict = translations[lang] as Record<string, unknown>;
      return getByPath(dict, path);
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
