"use client";

import React from "react";
import { workExperience } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { useViewMode } from "@/context/ViewModeContext";
import { cn } from "@/lib/utils";

type ExpItemT = {
  title: string;
  company: string;
  period: string;
  desc: string;
  bullets?: string[];
};

type ExperienceT = {
  heading: string;
  highlight: string;
  items: ExpItemT[];
};

const Experience = () => {
  const { t } = useLanguage();
  const { viewMode } = useViewMode();
  const experienceT = t("experience") as ExperienceT;
  const isTechnical = viewMode === "technical";

  return (
    <section id="experience" className="w-full scroll-mt-20 py-20">
      <h1 className="heading">
        {experienceT.heading}{" "}
        <span className="text-purple">{experienceT.highlight}</span>
      </h1>

      <ol className="relative mx-auto mt-12 max-w-3xl space-y-0 border-l border-white/10 pl-6 sm:pl-8">
        {workExperience.map((card, index) => {
          const item = experienceT.items[index];
          const title = item?.title ?? card.title;
          const company = item?.company ?? card.company;
          const period = item?.period ?? card.period;
          const desc = item?.desc ?? card.desc;
          const bullets = item?.bullets ?? card.bullets ?? [];

          return (
            <li key={card.id} className="relative pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[1.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-purple bg-black-100 sm:-left-[2.05rem]"
              />
              <div
                className={cn(
                  "rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6",
                  "transition-colors hover:border-white/[0.14]",
                )}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h2 className="text-lg font-bold text-white sm:text-xl">{title}</h2>
                  <span className="text-xs font-medium uppercase tracking-wider text-purple/90 sm:text-sm">
                    {period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-white-200/80">{company}</p>
                <p className="mt-3 text-sm leading-relaxed text-white-200">{desc}</p>
                {isTechnical && bullets.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 text-sm leading-relaxed text-white-200/85"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;
