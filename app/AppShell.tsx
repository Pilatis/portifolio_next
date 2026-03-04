"use client";

import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { ViewModeProvider } from "@/context/ViewModeContext";
import { useEffect } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ViewModeSwitcher from "@/components/ViewModeSwitcher";

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
      <ViewModeProvider>
        <LangSync>
          <div className="fixed top-6 right-6 z-50 flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3">
            <ViewModeSwitcher />
            <LanguageSwitcher />
          </div>
          {children}
        </LangSync>
      </ViewModeProvider>
    </LanguageProvider>
  );
}
