"use client";

import { useEffect, useState } from "react";

/** Tailwind `md` — efeitos 3D / hover leves só a partir daqui. */
export const DESKTOP_MQ = "(min-width: 768px)";

/**
 * `true` em viewport desktop+. No SSR e no 1º paint assume mobile
 * para não montar tilt/glare pesados em celular.
 */
export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isDesktop;
}
