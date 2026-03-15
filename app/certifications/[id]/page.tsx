"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { IoArrowBack } from "react-icons/io5";
import { certifications } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

type CertDetailT = {
  backToCertifications: string;
  notFound: string;
  inProgress: string;
  period: string;
  year: string;
  hoursLabel: string;
  topicsLabel: string;
  practicalApplicationLabel: string;
  impactLabel: string;
  skillsLabel: string;
  categoryLabel: string;
  issuerLabel: string;
  categoryLabels: Record<string, string>;
  items: Array<{ title: string; description: string; issuer: string; skills?: string[] }>;
};

function formatDateRange(startedAt: string, issuedAt: string | null, inProgress: string): string {
  if (issuedAt === null) return inProgress;
  return `${startedAt} – ${issuedAt}`;
}

export default function CertificationDetailPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const { t, lang } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const certT = t("certifications") as CertDetailT;
  const from = searchParams.get("from");
  const backHref = useMemo(
    () => (from === "home" ? "/#certifications" : "/certifications"),
    [from]
  );

  const cert = certifications.find((c) => String(c.id) === String(id));
  const index = cert ? certifications.findIndex((c) => c.id === cert.id) : -1;
  const itemT = cert && index >= 0 ? certT.items[index] : null;

  if (!cert) {
    return (
      <div className="min-h-screen bg-black-100 flex flex-col items-center justify-center px-4">
        <p className="text-white-200 text-lg mb-6">{certT.notFound}</p>
        <Link
          href={backHref}
          scroll={true}
          className="text-purple hover:underline flex items-center gap-2"
        >
          <IoArrowBack /> {certT.backToCertifications}
        </Link>
      </div>
    );
  }

  const certificationImages =
    cert.imagePt != null || cert.imageEn != null
      ? [lang === "pt" ? (cert.imagePt ?? cert.image) : (cert.imageEn ?? cert.image)]
      : cert.images?.length
        ? cert.images
        : [cert.image];
  const showPlaceholder = certificationImages.length === 0 || imgError;
  const getCategoryLabel = (key: string) => certT.categoryLabels?.[key] ?? key;
  const title = itemT?.title ?? cert.title;
  const issuer = itemT?.issuer ?? cert.issuer;
  const topics = (cert.topics?.length ? cert.topics : cert.skills).slice(0, 5);
  const displaySkills = itemT?.skills ?? cert.skills;

  return (
    <div className="min-h-screen bg-black-100 relative overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none bg-grid-white/[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255,255,255,0.03)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="fixed inset-0 pointer-events-none bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 md:mb-12"
        >
          <Link
            href={backHref}
            scroll={true}
            className="inline-flex items-center gap-2 text-white-200 hover:text-purple transition-colors text-sm md:text-base"
          >
            <IoArrowBack className="text-lg" />
            {certT.backToCertifications}
          </Link>
        </motion.div>

        {/* 1. Título */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>

        {/* 2. Imagem(ns) do certificado – destaque visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8 md:mb-10 space-y-6"
        >
          {certificationImages.map((src, i) => (
            <div
              key={src + i}
              className="rounded-2xl overflow-hidden border border-white/10 bg-black-200/80 shadow-2xl shadow-purple/10"
            >
              <div className="aspect-[4/3] w-full bg-black-300 flex items-center justify-center">
                {certificationImages.length === 1 && imgError ? (
                  <div className="text-white-200/60 text-sm">Certificado</div>
                ) : (
                  <img
                    src={src}
                    alt={certificationImages.length > 1 ? `Página ${i + 1}` : ""}
                    className="w-full h-full object-contain"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
            </div>
          ))}
          {showPlaceholder && certificationImages.length === 0 && (
            <div className="aspect-[4/3] w-full rounded-2xl bg-black-300 flex items-center justify-center border border-white/10 text-white-200/60 text-sm">
              Certificado
            </div>
          )}
        </motion.div>

        {/* 3. Instituição · 4. Ano/Período · 5. Carga horária */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white-200 mb-10 pb-6 border-b border-white/10"
        >
          <span><strong className="text-purple/90">{certT.issuerLabel ?? "Instituição"}:</strong> {issuer}</span>
          <span className="text-white-200/50">·</span>
          <span><strong className="text-purple/90">{certT.period}:</strong> {formatDateRange(cert.startedAt, cert.issuedAt, certT.inProgress)}</span>
          {cert.hours && (
            <>
              <span className="text-white-200/50">·</span>
              <span><strong className="text-purple/90">{certT.hoursLabel}:</strong> {cert.hours}</span>
            </>
          )}
        </motion.div>

        {/* Grid: conteúdo principal (aprendizado → aplicação → impacto) + sidebar */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Descrição resumida */}
            <p className="text-white-200 text-base md:text-lg leading-relaxed">
              {itemT?.description ?? cert.description}
            </p>

            {/* Principais tópicos */}
            {topics.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-purple mb-3">
                  {certT.topicsLabel ?? "Principais tópicos"}
                </h2>
                <ul className="list-none flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <li key={topic}>
                      <span className="px-3 py-1.5 rounded-xl text-sm bg-white/[0.06] text-white-200 border border-white/10">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Aplicação prática */}
            {cert.practicalApplication && (
              <div>
                <h2 className="text-lg font-semibold text-purple mb-3">
                  {certT.practicalApplicationLabel ?? "Aplicação prática"}
                </h2>
                <p className="text-white-200 text-base md:text-lg leading-relaxed">
                  {cert.practicalApplication}
                </p>
              </div>
            )}

            {/* Impacto */}
            {cert.impact && (
              <div>
                <h2 className="text-lg font-semibold text-purple mb-3">
                  {certT.impactLabel ?? "Impacto"}
                </h2>
                <p className="text-white-200 text-base md:text-lg leading-relaxed">
                  {cert.impact}
                </p>
              </div>
            )}
          </motion.div>

          {/* Sidebar: categoria e competências */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="space-y-8"
          >
            {cert.category.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-purple mb-4">{certT.categoryLabel}</h2>
                <div className="flex flex-wrap gap-2">
                  {cert.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1.5 rounded-xl text-sm font-medium bg-purple/20 text-purple border border-purple/30"
                    >
                      {getCategoryLabel(cat)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {displaySkills.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-purple mb-4">{certT.skillsLabel}</h2>
                <div className="flex flex-wrap gap-3">
                  {displaySkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-sm bg-white/[0.06] text-white-200 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
