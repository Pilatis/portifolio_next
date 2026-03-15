"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { certifications, certificationCategories } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { useViewMode } from "@/context/ViewModeContext";
import { CertificationCard } from "./CertificationCard";
import { CertificationCometCard } from "./CertificationCometCard";
import { FaLocationArrow } from "react-icons/fa6";

type CertificationsT = {
  heading: string;
  highlight: string;
  filterAll: string;
  searchPlaceholder?: string;
  inProgress: string;
  viewAll?: string;
  viewDetails?: string;
  topicsLabel: string;
  practicalApplicationLabel: string;
  impactLabel: string;
  hoursLabel: string;
  categoryLabels: Record<string, string>;
  items: Array<{ title: string; description: string; issuer: string }>;
};

type CertificationsProps = {
  /** Se true, mostra apenas 3 em destaque + link "Ver mais". Se false, mostra todas com filtro (página /certifications). */
  variant?: "home" | "full";
};

export default function Certifications({ variant = "home" }: CertificationsProps) {
  const { t } = useLanguage();
  const { viewMode } = useViewMode();
  const certT = t("certifications") as CertificationsT;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const isHome = variant === "home";
  /** Na página full (/certifications) o modo não afeta: sempre conteúdo técnico (busca, filtros, cards completos). */
  const isCompact = isHome && viewMode === "recruiter";

  const featuredList = certifications.filter((c) => c.featured === true);

  const byCategory =
    selectedCategory === null
      ? certifications
      : certifications.filter((c) => c.category.includes(selectedCategory));

  const filtered = React.useMemo(() => {
    if (isHome || isCompact) return byCategory;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter((cert) => {
      const idx = cert.id - 1;
      const item = certT.items[idx];
      const title = item?.title ?? cert.title;
      const description = item?.description ?? cert.description;
      const issuer = item?.issuer ?? cert.issuer;
      const searchText = [title, description, issuer, ...cert.skills, ...cert.category].join(" ").toLowerCase();
      return searchText.includes(q);
    });
  }, [byCategory, searchQuery, isHome, isCompact, certT.items]);

  const list = isHome ? featuredList : isCompact ? certifications : filtered;

  const getCategoryLabel = useCallback(
    (key: string) => {
      return certT.categoryLabels?.[key] ?? key;
    },
    [certT.categoryLabels]
  );

  return (
    <section id="certifications" className="py-20 w-full scroll-mt-20">
      <h1 className="heading">
        {certT.heading} <span className="text-purple">{certT.highlight}</span>
      </h1>

      {!isHome && !isCompact && (
        <div className="mt-8 mb-10 flex flex-wrap items-center gap-2">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={certT.searchPlaceholder ?? "Search certifications..."}
            className="w-48 min-w-[12rem] flex-1 max-w-xs px-4 py-2 rounded-lg bg-black-200/80 border border-white/[0.08] text-white placeholder:text-white-200/50 focus:outline-none focus:border-purple/50 transition-colors text-sm"
            aria-label={certT.searchPlaceholder ?? "Search certifications"}
          />
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === null
                ? "bg-purple text-white"
                : "bg-white/[0.06] text-white-200 hover:bg-white/[0.1] border border-white/[0.08]"
            }`}
          >
            {certT.filterAll}
          </button>
          {certificationCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-purple text-white"
                  : "bg-white/[0.06] text-white-200 hover:bg-white/[0.1] border border-white/[0.08]"
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>
      )}

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 ${isHome || isCompact ? "mt-8" : ""} ${!isHome ? "items-start" : ""}`}
      >
        {list.map((cert) =>
          isHome ? (
            <CertificationCometCard
              key={cert.id}
              cert={cert}
              itemT={certT.items[cert.id - 1]}
              inProgress={certT.inProgress}
              compact={isCompact}
              viewDetailsLabel={certT.viewDetails ?? "Ver detalhes"}
              labels={{
                topicsLabel: certT.topicsLabel ?? "Principais tópicos",
                practicalApplicationLabel: certT.practicalApplicationLabel ?? "Aplicação prática",
                impactLabel: certT.impactLabel ?? "Impacto",
                hoursLabel: certT.hoursLabel ?? "Carga horária",
              }}
            />
          ) : (
            <CertificationCard
              key={cert.id}
              cert={cert}
              itemT={certT.items[cert.id - 1]}
              inProgress={certT.inProgress}
              compact={isCompact}
              viewDetailsLabel={certT.viewDetails ?? "Ver detalhes"}
              labels={{
                topicsLabel: certT.topicsLabel ?? "Principais tópicos",
                practicalApplicationLabel: certT.practicalApplicationLabel ?? "Aplicação prática",
                impactLabel: certT.impactLabel ?? "Impacto",
                hoursLabel: certT.hoursLabel ?? "Carga horária",
              }}
              from="list"
            />
          )
        )}
      </div>

      {isHome && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple/20 text-purple border border-purple/30 hover:bg-purple/30 transition-colors font-medium text-sm"
          >
            {certT.viewAll ?? "Ver mais certificações"}
            <FaLocationArrow className="text-sm" />
          </Link>
        </div>
      )}
    </section>
  );
}
