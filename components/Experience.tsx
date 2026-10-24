"use client";

import React from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { workExperience, STACK_LABELS } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { Button } from "./ui/MovingBorders";
import { StackTooltip } from "./ui/StackTooltip";
import { cn } from "@/lib/utils";

type ExpItemT = {
  id?: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  desc: string;
};

type ExperienceT = {
  heading: string;
  highlight: string;
  viewDetails: string;
  items: ExpItemT[];
};

function getStackLabel(icon: string): string {
  const key = icon.startsWith("/") ? icon : `/${icon}`;
  return STACK_LABELS[key] ?? icon.replace(/^\/(.*)\.svg$/i, "$1");
}

type ExpCardBodyProps = {
  title: string;
  company: string;
  period: string;
  location?: string;
  desc: string;
  thumbnail?: string;
  iconLists: string[];
  viewDetails: string;
  href: string;
};

function ExpCardBody({
  title,
  company,
  period,
  location,
  desc,
  thumbnail,
  iconLists,
  viewDetails,
  href,
}: ExpCardBodyProps) {
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

        {iconLists.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center">
            {iconLists.slice(0, 6).map((icon, i) => {
              const label = getStackLabel(icon);
              const src = icon.startsWith("/") ? icon : `/${icon}`;
              return (
                <StackTooltip key={`${src}-${i}`} label={label}>
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] bg-black/80"
                    style={{ marginLeft: i === 0 ? 0 : -8 }}
                  >
                    <img src={src} alt={label} className="h-full w-full object-contain p-2" />
                  </div>
                </StackTooltip>
              );
            })}
          </div>
        )}

        <div className="mt-5">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-purple/50 hover:bg-white/[0.07]"
          >
            {viewDetails}
            <FaLocationArrow className="text-[11px] text-purple" />
          </Link>
        </div>
      </div>
    </article>
  );
}

const Experience = () => {
  const { t } = useLanguage();
  const isDesktop = useIsDesktop();
  const experienceT = t("experience") as ExperienceT;

  return (
    <section id="experience" className="relative w-full scroll-mt-20 py-20">
      <h1 className="heading">
        {experienceT.heading}{" "}
        <span className="text-purple">{experienceT.highlight}</span>
      </h1>

      <div className="mx-auto mt-12 flex w-full max-w-5xl flex-col gap-6 md:gap-8">
        {workExperience.map((card, index) => {
          const item =
            experienceT.items.find((it) => it.id === card.id) ?? experienceT.items[index];
          const bodyProps: ExpCardBodyProps = {
            title: item?.title ?? card.title,
            company: item?.company ?? card.company,
            period: item?.period ?? card.period,
            location: item?.location ?? card.location,
            desc: item?.desc ?? "",
            thumbnail: card.thumbnail,
            iconLists: card.iconLists,
            viewDetails: experienceT.viewDetails,
            href: `/experience/${card.id}`,
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
                <ExpCardBody {...bodyProps} />
              </Button>
            );
          }

          return (
            <div
              key={card.id}
              className="rounded-[1.75rem] border border-slate-800 bg-slate-900/[0.7] text-white"
            >
              <ExpCardBody {...bodyProps} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
