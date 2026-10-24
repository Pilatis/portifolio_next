"use client";

import React from "react";
import { workExperience } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { useViewMode } from "@/context/ViewModeContext";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { Button } from "./ui/MovingBorders";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";

type ExpItemT = {
  title: string;
  company: string;
  period: string;
  location?: string;
  desc: string;
  bullets?: string[];
};

type ExperienceT = {
  heading: string;
  highlight: string;
  items: ExpItemT[];
};

type ExpCardContentProps = {
  title: string;
  company: string;
  period: string;
  location?: string;
  desc: string;
  bullets: string[];
  thumbnail?: string;
  isTechnical: boolean;
};

function ExpCardContent({
  title,
  company,
  period,
  location,
  desc,
  bullets,
  thumbnail,
  isTechnical,
}: ExpCardContentProps) {
  return (
    <article className="flex w-full flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6 md:p-8">
      {thumbnail && (
        <div className="flex shrink-0 justify-start sm:pt-1">
          <img
            src={thumbnail}
            alt=""
            className="h-12 w-12 object-contain opacity-90 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
          />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h2 className="text-lg font-bold text-white sm:text-xl md:text-2xl">{title}</h2>
          <span className="text-xs font-medium uppercase tracking-wider text-purple sm:text-sm">
            {period}
          </span>
        </div>

        <p className="mt-1 text-sm font-medium text-white-200 md:text-base">
          {company}
          {location ? <span className="text-white-200/55"> · {location}</span> : null}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-white-200 md:text-[15px]">{desc}</p>

        {isTechnical && bullets.length > 0 && (
          <ul className="mt-4 space-y-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex gap-2.5 text-sm leading-relaxed text-white-200/90"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

const Experience = () => {
  const { t } = useLanguage();
  const { viewMode } = useViewMode();
  const isDesktop = useIsDesktop();
  const experienceT = t("experience") as ExperienceT;
  const isTechnical = viewMode === "technical";

  return (
    <section id="experience" className="relative w-full scroll-mt-20 py-20">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-[80vh]"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[60vh] w-[50vw]" fill="blue" />

      <div className="relative z-10">
        <h1 className="heading">
          {experienceT.heading}{" "}
          <span className="text-purple">{experienceT.highlight}</span>
        </h1>

        <div className="mx-auto mt-12 flex w-full max-w-5xl flex-col gap-6 md:gap-8">
          {workExperience.map((card, index) => {
            const item = experienceT.items[index];
            const contentProps: ExpCardContentProps = {
              title: item?.title ?? card.title,
              company: item?.company ?? card.company,
              period: item?.period ?? card.period,
              location: item?.location ?? card.location,
              desc: item?.desc ?? card.desc,
              bullets: item?.bullets ?? card.bullets ?? [],
              thumbnail: card.thumbnail,
              isTechnical,
            };

            if (isDesktop) {
              return (
                <Button
                  key={card.id}
                  as="div"
                  borderRadius="1.75rem"
                  duration={9000 + index * 3000}
                  containerClassName="w-full md:col-span-1"
                  className={cn(
                    "flex min-h-[8rem] flex-col items-stretch justify-start border border-slate-800 bg-slate-900/[0.7] p-0 text-left text-white",
                  )}
                  borderClassName="opacity-70"
                >
                  <ExpCardContent {...contentProps} />
                </Button>
              );
            }

            return (
              <div
                key={card.id}
                className="rounded-[1.75rem] border border-slate-800 bg-slate-900/[0.7] text-white"
              >
                <ExpCardContent {...contentProps} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
