"use client";

import React from "react";
import { engineeringPrinciples } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import type { EngineeringPrinciple } from "@/data";

type PrinciplesT = {
  heading: string;
  highlight: string;
  categoryLabels: Record<string, string>;
  items: Array<{ title: string; description: string }>;
};

function PrincipleCard({
  principle,
  itemT,
  categoryLabel,
}: {
  principle: EngineeringPrinciple;
  itemT: PrinciplesT["items"][number];
  categoryLabel: string;
}) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-black-200/80 p-5 flex flex-col h-full">
      <span className="inline-flex w-fit px-2.5 py-1 rounded-md text-xs font-medium bg-purple/20 text-purple border border-purple/30 mb-3">
        {categoryLabel}
      </span>
      <h3 className="font-bold text-lg text-white mb-2">{itemT?.title ?? principle.title}</h3>
      <p className="text-sm text-white-200 leading-relaxed flex-1">
        {itemT?.description ?? principle.description}
      </p>
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
    </article>
  );
}

export default function EngineeringPrinciples() {
  const { t } = useLanguage();
  const principlesT = t("principles") as PrinciplesT;

  const getCategoryLabel = (category: string) => {
    return principlesT.categoryLabels?.[category] ?? category;
  };

  return (
    <section id="principles" className="py-20 w-full scroll-mt-20">
      <h1 className="heading">
        {principlesT.heading} <span className="text-purple">{principlesT.highlight}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {engineeringPrinciples.map((principle) => (
          <PrincipleCard
            key={principle.id}
            principle={principle}
            itemT={principlesT.items[principle.id - 1]}
            categoryLabel={getCategoryLabel(principle.category)}
          />
        ))}
      </div>
    </section>
  );
}
