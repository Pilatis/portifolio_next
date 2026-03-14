"use client";

import React from "react";
import Link from "next/link";
import { engineeringPrinciples } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { useViewMode } from "@/context/ViewModeContext";
import { PrincipleCard } from "./PrincipleCard";
import { FaLocationArrow } from "react-icons/fa6";

type PrinciplesT = {
  heading: string;
  highlight: string;
  viewAll?: string;
  categoryLabels: Record<string, string>;
  items: Array<{ title: string; description: string }>;
};

type EngineeringPrinciplesProps = {
  /** home = apenas em destaque + link "Ver mais". full = todos na página /principles (sem filtro). */
  variant?: "home" | "full";
};

export default function EngineeringPrinciples({ variant = "home" }: EngineeringPrinciplesProps) {
  const { t } = useLanguage();
  const { viewMode } = useViewMode();
  const principlesT = t("principles") as PrinciplesT;

  const isHome = variant === "home";
  const featuredList = engineeringPrinciples.filter((p) => p.featured === true);
  /** Na página full (/principles) o modo não afeta: sempre o mesmo conteúdo do technical (todos + cards completos). */
  const list = isHome
    ? featuredList.filter((p) => !p.visibleIn || p.visibleIn.includes(viewMode))
    : engineeringPrinciples.filter((p) => !p.visibleIn || p.visibleIn.includes("technical"));

  const getCategoryLabel = (category: string) => {
    return principlesT.categoryLabels?.[category] ?? category;
  };

  return (
    <section id="principles" className="py-20 w-full scroll-mt-20">
      <h1 className="heading">
        {principlesT.heading} <span className="text-purple">{principlesT.highlight}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {list.map((principle) => (
          <PrincipleCard
            key={principle.id}
            principle={principle}
            itemT={principlesT.items[principle.id - 1]}
            categoryLabel={getCategoryLabel(principle.category)}
            compact={isHome && viewMode === "recruiter"}
          />
        ))}
      </div>

      {isHome && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/principles"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple/20 text-purple border border-purple/30 hover:bg-purple/30 transition-colors font-medium text-sm"
          >
            {principlesT.viewAll ?? "Ver mais princípios"}
            <FaLocationArrow className="text-sm" />
          </Link>
        </div>
      )}
    </section>
  );
}
