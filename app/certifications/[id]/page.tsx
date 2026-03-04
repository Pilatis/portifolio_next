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
  skillsLabel: string;
  categoryLabel: string;
  issuerLabel: string;
  categoryLabels: Record<string, string>;
  items: Array<{ title: string; description: string; issuer: string }>;
};

function formatDateRange(startedAt: string, issuedAt: string | null, inProgress: string): string {
  if (issuedAt === null) return inProgress;
  return `${startedAt} – ${issuedAt}`;
}

export default function CertificationDetailPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const { t } = useLanguage();
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

  const [imgError, setImgError] = useState(false);
  const showPlaceholder = !cert.image || imgError;
  const getCategoryLabel = (key: string) => certT.categoryLabels?.[key] ?? key;
  const title = itemT?.title ?? cert.title;

  return (
    <div className="min-h-screen bg-black-100 relative overflow-hidden">
      {/* Background - igual à page de projeto */}
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
            scroll={true}
            className="inline-flex items-center gap-2 text-white-200 hover:text-purple transition-colors text-sm md:text-base"
          >
            <IoArrowBack className="text-lg" />
            {certT.backToCertifications}
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

        {/* Imagem do certificado (equivalente ao carrossel do projeto) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-10 md:mb-14 rounded-2xl overflow-hidden border border-white/10 bg-black-200/80 shadow-2xl shadow-purple/10"
        >
          <div className="aspect-[4/3] w-full bg-black-300 flex items-center justify-center">
            {showPlaceholder ? (
              <div className="text-white-200/60 text-sm">Certificado</div>
            ) : (
              <img
                src={cert.image}
                alt=""
                className="w-full h-full object-contain"
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </motion.div>

        {/* Grid: descrição (2 col) + sidebar (1 col) - igual ao projeto */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h2 className="text-lg font-semibold text-purple mb-3">
              {certT.issuerLabel ?? "Instituição"}
            </h2>
            <p className="text-white-200 text-base md:text-lg mb-6">
              {itemT?.issuer ?? cert.issuer}
            </p>
            <p className="text-white-200 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {itemT?.description ?? cert.description}
            </p>
          </motion.div>

          {/* Sidebar: período, categoria, competências */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="space-y-8"
          >
            {/* Período */}
            <div>
              <h2 className="text-lg font-semibold text-purple mb-4">{certT.period}</h2>
              <p className="text-white-200">
                {formatDateRange(cert.startedAt, cert.issuedAt, certT.inProgress)}
              </p>
            </div>

            {/* Categoria */}
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

            {/* Competências (estilo similar ao tech stack do projeto) */}
            {cert.skills.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-purple mb-4">{certT.skillsLabel}</h2>
                <div className="flex flex-wrap gap-3">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-sm bg-white/[0.06] text-white-200 border border-white/10 hover:border-purple/30 transition-colors"
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
