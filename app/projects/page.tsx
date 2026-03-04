"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { projects, STACK_LABELS } from "@/data";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

/** Ícones únicos de stack usados nos projetos (normalizados com /) */
const ALL_STACK_OPTIONS = Array.from(
  new Set(
    projects.flatMap((p) =>
      (p.iconLists ?? []).map((icon) => (icon.startsWith("/") ? icon : `/${icon}`))
    )
  )
).sort();

/** Tags de filtro: apenas React e Java */
const getStackLabelFromIcon = (icon: string) =>
  STACK_LABELS[icon] ?? icon.replace(/^\/(.*)\.svg$/i, "$1");
const STACK_FILTER_OPTIONS = ALL_STACK_OPTIONS.filter((icon) =>
  ["React", "Java"].includes(getStackLabelFromIcon(icon))
);

type ProjectsPageT = {
  heading: string;
  pageBack: string;
  searchPlaceholder: string;
  filterAll: string;
  noResults: string;
};

type ProjectsT = {
  checkLiveSite: string;
  items: Array<{ title: string; des: string }>;
};

export default function ProjectsPage() {
  const { t } = useLanguage();
  const pageT = t("projectsPage") as ProjectsPageT;
  const projectsT = t("projects") as ProjectsT;

  const [search, setSearch] = useState("");
  const [selectedStack, setSelectedStack] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = projects;
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.des && p.des.toLowerCase().includes(q))
      );
    }
    if (selectedStack) {
      list = list.filter((p) =>
        (p.iconLists ?? []).some(
          (icon) => (icon.startsWith("/") ? icon : `/${icon}`) === selectedStack
        )
      );
    }
    return list;
  }, [search, selectedStack]);

  const getStackLabel = useCallback((icon: string) => {
    const key = icon.startsWith("/") ? icon : `/${icon}`;
    return STACK_LABELS[key] ?? icon.replace(/^\/(.*)\.svg$/i, "$1");
  }, []);

  return (
    <div className="min-h-screen bg-black-100 relative overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none bg-grid-white/[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255,255,255,0.03)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="fixed inset-0 pointer-events-none bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-white-200 hover:text-purple transition-colors text-sm md:text-base mb-10"
        >
          <IoArrowBack className="text-lg" />
          {pageT.pageBack ?? "Back to portfolio"}
        </Link>

        <h1 className="heading mt-4">
          <span className="text-purple">{pageT.heading ?? "Projects"}</span>
        </h1>

        {/* Busca + Filtro */}
        <div className="mt-8 mb-10 flex flex-col sm:flex-row gap-4">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={pageT.searchPlaceholder ?? "Search projects..."}
            className="flex-1 min-w-0 px-4 py-2.5 rounded-xl bg-black-200/80 border border-white/[0.08] text-white placeholder:text-white-200/50 focus:outline-none focus:border-purple/50 transition-colors"
            aria-label={pageT.searchPlaceholder}
          />
          <div className="flex flex-wrap gap-2 items-center">
            <button
              type="button"
              onClick={() => setSelectedStack(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedStack === null
                  ? "bg-purple text-white"
                  : "bg-white/[0.06] text-white-200 hover:bg-white/[0.1] border border-white/[0.08]"
              }`}
            >
              {pageT.filterAll ?? "All"}
            </button>
            {STACK_FILTER_OPTIONS.map((icon) => (
              <button
                key={icon}
                type="button"
                onClick={() => setSelectedStack(selectedStack === icon ? null : icon)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedStack === icon
                    ? "bg-purple text-white"
                    : "bg-white/[0.06] text-white-200 hover:bg-white/[0.1] border border-white/[0.08]"
                }`}
              >
                {getStackLabel(icon)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de projetos - ProjectCard com PinContainer fullWidth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {filtered.map((item) => {
            const idx = item.id - 1;
            return (
              <ProjectCard
                key={item.id}
                item={item}
                title={projectsT.items[idx]?.title ?? item.title}
                des={projectsT.items[idx]?.des ?? item.des}
                checkLiveSite={projectsT.checkLiveSite}
                showClientBadge={true}
                variant="grid"
              />
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white-200 py-12">
            {pageT.noResults ?? "No projects found."}
          </p>
        )}
      </div>
    </div>
  );
}
