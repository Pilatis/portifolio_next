"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scroll para #project-* ao voltar à home com hash (client-only). */
export default function HomeHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/" || typeof window === "undefined") return;
    const hash = window.location.hash?.slice(1);
    if (!hash || !hash.startsWith("project-")) return;
    const el = document.getElementById(hash);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [pathname]);

  return null;
}
