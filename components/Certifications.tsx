"use client";

import React, { useState, useCallback } from "react";
import { certifications, certificationCategories } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import type { Certification } from "@/data";

type CertificationsT = {
  heading: string;
  highlight: string;
  filterAll: string;
  inProgress: string;
  categoryLabels: Record<string, string>;
  items: Array<{ title: string; description: string; issuer: string }>;
};

function formatDateRange(startedAt: string, issuedAt: string | null, inProgress: string): string {
  if (issuedAt === null) return inProgress;
  return `${startedAt} – ${issuedAt}`;
}

function CertificationCard({
  cert,
  itemT,
  inProgress,
}: {
  cert: Certification;
  itemT: CertificationsT["items"][number];
  inProgress: string;
}) {
  const [imgError, setImgError] = useState(false);
  const showPlaceholder = !cert.image || imgError;

  return (
    <article
      className="rounded-2xl border border-white/[0.08] bg-black-200/80 p-5 flex flex-col h-full"
      style={{ minHeight: "280px" }}
    >
      <div className="rounded-xl overflow-hidden bg-black-300 flex items-center justify-center h-32 mb-4">
        {showPlaceholder ? (
          <div
            className="w-full h-full flex items-center justify-center text-white-200/60 text-sm"
            aria-hidden
          >
            Certificado
          </div>
        ) : (
          <img
            src={cert.image}
            alt=""
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <h3 className="font-bold text-lg text-white line-clamp-2">{itemT?.title ?? cert.title}</h3>
      <p className="text-sm text-white-200 mt-0.5">{itemT?.issuer ?? cert.issuer}</p>
      <p className="text-xs text-white-200/80 mt-2">
        {formatDateRange(cert.startedAt, cert.issuedAt, inProgress)}
      </p>
      <p className="text-sm text-white-200 mt-2 line-clamp-2 flex-1">
        {itemT?.description ?? cert.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-0.5 rounded-md text-xs bg-white/[0.06] text-white-200 border border-white/[0.06]"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Certifications() {
  const { t } = useLanguage();
  const certT = t("certifications") as CertificationsT;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered =
    selectedCategory === null
      ? certifications
      : certifications.filter((c) => c.category.includes(selectedCategory));

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

      <div className="flex flex-wrap gap-2 mt-8 mb-10" role="group" aria-label="Filter by category">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((cert) => (
          <CertificationCard
            key={cert.id}
            cert={cert}
            itemT={certT.items[cert.id - 1]}
            inProgress={certT.inProgress}
          />
        ))}
      </div>
    </section>
  );
}
