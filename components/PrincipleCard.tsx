"use client";

import React from "react";
import type { EngineeringPrinciple } from "@/data";

export type PrincipleItemT = {
  title: string;
  description: string;
};

export type PrincipleCardProps = {
  principle: EngineeringPrinciple;
  itemT: PrincipleItemT | undefined;
  categoryLabel: string;
  /** Reservado para uso futuro (ex.: layout compacto). Atualmente descrição e tags são sempre exibidos. */
  compact?: boolean;
};

export function PrincipleCard({
  principle,
  itemT,
  categoryLabel,
}: PrincipleCardProps) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-black-200/80 p-5 flex flex-col h-full">
      <span className="inline-flex w-fit px-2.5 py-1 rounded-md text-xs font-medium bg-purple/20 text-purple border border-purple/30 mb-3">
        {categoryLabel}
      </span>
      <h3 className="font-bold text-lg text-white mb-2">{itemT?.title ?? principle.title}</h3>
      <p className="text-sm text-white-200 leading-relaxed flex-1">
        {itemT?.description ?? principle.description}
      </p>
      {principle.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {principle.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs bg-white/[0.06] text-white-200 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
