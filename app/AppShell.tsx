"use client";

import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

function LangSync({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);
  return <>{children}</>;
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LangSync>
        <LanguageSwitcher />
        {children}
      </LangSync>
    </LanguageProvider>
  );
}
