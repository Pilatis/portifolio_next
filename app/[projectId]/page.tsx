"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { projects, STACK_LABELS } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import ProjectCarousel from "@/components/ProjectCarousel";
import MagicButton from "@/components/MagicButton";
import { cn } from "@/lib/utils";

export default function ProjectPage() {
  const { projectId } = useParams();
  const { t, lang } = useLanguage();
  const projectsT = t("projects") as {
    checkLiveSite: string;
    items: Array<{
      title: string;
      des: string;
      fullDes?: string;
      media?: Array<{ title: string; description: string }>;
    }>;
  };
  const projectPageT = t("projectPage") as {
    backToProjects: string;
    aboutTitle: string;
    techStack: string;
    inPartnershipWith: string;
    notFound: string;
  };

  const project = projects.find((p) => String(p.id) === String(projectId));
  const index = project ? projects.findIndex((p) => p.id === project.id) : -1;
  const title = project && index >= 0 ? projectsT.items[index]?.title ?? project.title : "";
  const itemT = project && index >= 0 ? projectsT.items[index] : null;
  const description = itemT?.fullDes ?? itemT?.des ?? (project?.des ?? "");

  const projectMedia = project && "media" in project && Array.isArray((project as { media?: { src: string; type: "image" | "video" }[] }).media)
    ? (project as { media: { src: string; type: "image" | "video" }[] }).media
    : null;
  const mediaCaptions = itemT?.media;
  const carouselMedia =
    projectMedia && mediaCaptions?.length
      ? projectMedia.map((m, i) => ({
          src: m.src,
          type: m.type,
          title: mediaCaptions[i]?.title,
          description: mediaCaptions[i]?.description,
        }))
      : projectMedia
        ? projectMedia.map((m) => ({ src: m.src, type: m.type }))
        : undefined;
  const carouselImages =
    !carouselMedia && project
      ? "images" in project && Array.isArray((project as { images?: string[] }).images)
        ? (project as { images: string[] }).images
        : [project.img]
      : [];

  if (!project) {
    return (
      <div key={lang} className="min-h-screen bg-black-100 flex flex-col items-center justify-center px-4">
        <p className="text-white-200 text-lg mb-6">{projectPageT.notFound}</p>
        <Link
          href="/#projects"
          className="text-purple hover:underline flex items-center gap-2"
        >
          <IoArrowBack /> {projectPageT.backToProjects}
        </Link>
      </div>
    );
  }

  const backHref = `/#project-${project.id}`;

  return (
    <div key={lang} className="min-h-screen bg-black-100 relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 pointer-events-none bg-grid-white/[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255,255,255,0.03)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="fixed inset-0 pointer-events-none bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 md:mb-12"
        >
          <Link
            href={backHref}
            scroll={false}
            className="inline-flex items-center gap-2 text-white-200 hover:text-purple transition-colors text-sm md:text-base"
          >
            <IoArrowBack className="text-lg" />
            {projectPageT.backToProjects}
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-10 md:mb-14"
        >
          <ProjectCarousel
            media={carouselMedia}
            images={carouselImages}
            alt={title}
            className="shadow-2xl shadow-purple/10"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h2 className="text-lg font-semibold text-purple mb-3">{projectPageT.aboutTitle}</h2>
            <p className="text-white-200 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Sidebar: Tech + CTA */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="space-y-8"
          >
            {/* Tech stack */}
            {project.iconLists && project.iconLists.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-purple mb-4">{projectPageT.techStack}</h2>
                <div className="flex flex-wrap gap-3">
                  {project.iconLists.map((icon, i) => (
                    <div
                      key={i}
                      title={STACK_LABELS[icon] ?? icon.replace(/^\/(.*)\.svg$/i, "$1")}
                      className="w-12 h-12 rounded-xl border border-white/10 bg-black/40 flex items-center justify-center hover:border-purple/30 transition-colors cursor-default"
                    >
                      <img src={icon} alt={STACK_LABELS[icon] ?? ""} className="w-7 h-7 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cliente / Parceiro */}
            {"clientName" in project && project.clientName && (
              <div>
                <p className="text-sm text-white-200 mb-2">{projectPageT.inPartnershipWith}</p>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  {"clientLogo" in project && project.clientLogo && (
                    <img
                      src={project.clientLogo}
                      alt=""
                      className="h-9 w-auto object-contain flex-shrink-0 rounded-lg"
                    />
                  )}
                  <span className="text-white font-medium text-sm">{project.clientName}</span>
                </div>
              </div>
            )}

            {/* Live link */}
            {project.link && (
              <MagicButton
                title={projectsT.checkLiveSite}
                icon={<FaLocationArrow />}
                position="right"
                href={project.link.startsWith("http") ? project.link : `https://${project.link.replace(/^\//, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
