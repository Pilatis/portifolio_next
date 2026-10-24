import type { ViewMode } from "@/context/ViewModeContext";

export type BrandCopyFields = {
  brandName: string;
  tagline: string;
  des: string;
  fullDes?: string;
  desTechnical?: string;
  fullDesTechnical?: string;
  pillars?: Array<{ title: string; description: string }>;
  media?: Array<{ title: string; description: string }>;
};

/** Escolhe des/fullDes do modo Recrutador ou Técnico. */
export function resolveBrandCopy<T extends BrandCopyFields>(
  item: T,
  viewMode: ViewMode,
): T & { des: string; fullDes: string } {
  const isTechnical = viewMode === "technical";
  const des = isTechnical
    ? (item.desTechnical ?? item.des)
    : item.des;
  const fullDes = isTechnical
    ? (item.fullDesTechnical ?? item.fullDes ?? item.desTechnical ?? item.des)
    : (item.fullDes ?? item.des);

  return { ...item, des, fullDes };
}
