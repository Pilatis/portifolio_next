"use client";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "@/context/LanguageContext";
import { useViewMode } from "@/context/ViewModeContext";

const RecentProjects = () => {
  const { t } = useLanguage();
  const { viewMode } = useViewMode();
  const projectsT = t("projects") as {
    heading: string;
    highlight: string;
    checkLiveSite: string;
    viewAll?: string;
    items: Array<{ title: string; des: string }>;
  };
  const showClientBadge = viewMode === "technical";
  const isRecruiter = viewMode === "recruiter";
  const recruiterFeaturedIds = [4, 2];
  const list = isRecruiter
    ? recruiterFeaturedIds
        .map((id) => projects.find((p) => p.id === id))
        .filter((p): p is (typeof projects)[number] => p != null)
    : projects;

  return (
    <div id="projects" className="scroll-mt-20">
      <h1 className="heading">
        {projectsT.heading}{" "}
        <span className="text-purple">{projectsT.highlight}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {list.map((item) => {
          const itemIndex = item.id - 1;
          return (
            <div key={item.id} id={`project-${item.id}`} className="scroll-mt-24">
              <ProjectCard
                item={item}
                title={projectsT.items[itemIndex]?.title ?? item.title}
                des={projectsT.items[itemIndex]?.des ?? item.des}
                checkLiveSite={projectsT.checkLiveSite}
                showClientBadge={showClientBadge}
                variant="home"
              />
            </div>
          );
        })}
      </div>
      {projects.length > 2 && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple/20 text-purple border border-purple/30 hover:bg-purple/30 transition-colors font-medium text-sm"
          >
            {projectsT.viewAll ?? "Ver mais projetos"}
            <FaLocationArrow className="text-sm" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
