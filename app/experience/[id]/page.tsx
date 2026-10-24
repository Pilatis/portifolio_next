"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { IoArrowBack } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import {
  getWorkExperience,
  projects,
  getProjectTranslationItem,
  STACK_LABELS,
} from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { StackTooltip } from "@/components/ui/StackTooltip";
import { cn } from "@/lib/utils";

type WorkItem = { title: string; description: string };

type ExpDetailItemT = {
  id?: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  desc: string;
  summary?: string;
  works?: WorkItem[];
  learned?: string[];
  outcomes?: string[];
};

type ExperienceT = {
  backToExperience: string;
  notFound: string;
  aboutTitle: string;
  worksTitle: string;
  learnedTitle: string;
  outcomesTitle: string;
  stackTitle: string;
  relatedProjectsTitle: string;
  viewDetails: string;
  items: ExpDetailItemT[];
};

function getStackLabel(icon: string): string {
  const key = icon.startsWith("/") ? icon : `/${icon}`;
  return STACK_LABELS[key] ?? icon.replace(/^\/(.*)\.svg$/i, "$1");
}

function SectionCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6 md:p-8",
        className,
      )}
    >
      <h2 className="text-lg font-bold text-white md:text-xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function ExperienceDetailPage() {
  const { id } = useParams();
  const { t, lang } = useLanguage();
  const experienceT = t("experience") as ExperienceT;
  const projectsT = t("projects") as {
    checkLiveSite: string;
    items: Array<{ title: string; des: string }>;
  };

  const expId = String(id);
  const exp = getWorkExperience(expId);
  const itemT = experienceT.items.find((it) => it.id === expId);

  if (!exp) {
    return (
      <div
        key={lang}
        className="flex min-h-screen flex-col items-center justify-center bg-black-100 px-4"
      >
        <p className="mb-6 text-lg text-white-200">{experienceT.notFound}</p>
        <Link
          href="/#experience"
          className="flex items-center gap-2 text-purple hover:underline"
        >
          <IoArrowBack /> {experienceT.backToExperience}
        </Link>
      </div>
    );
  }

  const title = itemT?.title ?? exp.title;
  const company = itemT?.company ?? exp.company;
  const period = itemT?.period ?? exp.period;
  const location = itemT?.location ?? exp.location;
  const summary = itemT?.summary ?? itemT?.desc ?? "";
  const works = itemT?.works ?? [];
  const learned = itemT?.learned ?? [];
  const outcomes = itemT?.outcomes ?? [];

  const related =
    exp.relatedProjectIds
      ?.map((pid) => projects.find((p) => p.id === pid))
      .filter(Boolean) ?? [];

  return (
    <div key={lang} className="relative min-h-screen overflow-hidden bg-black-100">
      <div
        className="pointer-events-none fixed inset-0 bg-grid-white/[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255,255,255,0.03)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="pointer-events-none fixed inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 md:mb-12"
        >
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm text-white-200 transition-colors hover:text-purple"
          >
            <IoArrowBack /> {experienceT.backToExperience}
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6"
        >
          {exp.thumbnail && (
            <img
              src={exp.thumbnail}
              alt=""
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
            />
          )}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                {title}
              </h1>
              <span className="text-xs font-medium uppercase tracking-wider text-purple sm:text-sm">
                {period}
              </span>
            </div>
            <p className="mt-2 text-base text-white-200 md:text-lg">
              {company}
              {location ? <span className="text-white-200/55"> · {location}</span> : null}
            </p>
          </div>
        </motion.header>

        <div className="flex flex-col gap-6 md:gap-8">
          {summary && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              <SectionCard title={experienceT.aboutTitle}>
                <p className="text-sm leading-relaxed text-white-200 md:text-[15px]">
                  {summary}
                </p>
              </SectionCard>
            </motion.div>
          )}

          {works.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <SectionCard title={experienceT.worksTitle}>
                <ul className="space-y-5">
                  {works.map((work) => (
                    <li key={work.title}>
                      <h3 className="text-sm font-semibold text-white md:text-base">
                        {work.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white-200/90">
                        {work.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </motion.div>
          )}

          {exp.iconLists.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              <SectionCard title={experienceT.stackTitle}>
                <div className="flex flex-wrap gap-3">
                  {exp.iconLists.map((icon, i) => {
                    const label = getStackLabel(icon);
                    const src = icon.startsWith("/") ? icon : `/${icon}`;
                    return (
                      <StackTooltip key={`${src}-${i}`} label={label}>
                        <div className="flex items-center gap-2 rounded-xl border border-white/[0.1] bg-black/50 px-3 py-2">
                          <img
                            src={src}
                            alt={label}
                            className="h-7 w-7 object-contain"
                          />
                          <span className="text-xs text-white-200 sm:text-sm">{label}</span>
                        </div>
                      </StackTooltip>
                    );
                  })}
                </div>
              </SectionCard>
            </motion.div>
          )}

          {learned.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              <SectionCard title={experienceT.learnedTitle}>
                <ul className="space-y-2.5">
                  {learned.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-white-200"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </motion.div>
          )}

          {outcomes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.25 }}
            >
              <SectionCard title={experienceT.outcomesTitle}>
                <ul className="space-y-2.5">
                  {outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-white-200"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </motion.div>
          )}

          {related.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 }}
            >
              <SectionCard title={experienceT.relatedProjectsTitle}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {related.map((project) => {
                    if (!project) return null;
                    const pItem = getProjectTranslationItem(
                      projectsT.items,
                      project.id,
                    );
                    const pTitle = pItem?.title ?? project.title;
                    const pDes = pItem?.des ?? project.des;
                    return (
                      <li key={project.id}>
                        <Link
                          href={`/${project.id}`}
                          className="group flex h-full flex-col rounded-xl border border-white/[0.08] bg-black/40 p-4 transition-colors hover:border-purple/40"
                        >
                          <span className="flex items-start justify-between gap-2">
                            <span className="text-sm font-semibold text-white group-hover:text-purple">
                              {pTitle}
                            </span>
                            <FaLocationArrow className="mt-0.5 shrink-0 text-[10px] text-purple opacity-70" />
                          </span>
                          <span className="mt-2 line-clamp-2 text-xs leading-relaxed text-white-200/80">
                            {pDes}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </SectionCard>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
