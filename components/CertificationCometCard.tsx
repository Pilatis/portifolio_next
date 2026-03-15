"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { Certification } from "@/data";
import type { CertificationItemT, CertificationCardLabels } from "./CertificationCard";
import { FaLocationArrow } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { CometCard } from "@/components/ui/comet-card";

function formatDateRange(startedAt: string, issuedAt: string | null, inProgress: string): string {
  if (issuedAt === null) return inProgress;
  return `${startedAt} – ${issuedAt}`;
}

export type CertificationCometCardProps = {
  cert: Certification;
  itemT: CertificationItemT | undefined;
  inProgress: string;
  compact: boolean;
  viewDetailsLabel: string;
  labels: CertificationCardLabels;
};

/**
 * Card de certificação com efeito 3D (CometCard). Usado apenas na página principal.
 */
export function CertificationCometCard({
  cert,
  itemT,
  inProgress,
  compact,
  viewDetailsLabel,
  labels,
}: CertificationCometCardProps) {
  const { lang } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const displayImage =
    cert.imagePt != null || cert.imageEn != null
      ? (lang === "pt" ? cert.imagePt ?? cert.image : cert.imageEn ?? cert.image)
      : (cert.images?.[0] ?? cert.image);
  const showPlaceholder = !displayImage || imgError;
  const detailHref = `/certifications/${cert.id}?from=home`;
  const rawSkills = itemT?.skills ?? cert.skills;
  const displaySkills = rawSkills.slice(0, 3);
  const hasExtra = Boolean(cert.practicalApplication || cert.impact || displaySkills.length > 0);

  return (
    <div className="w-full flex items-center justify-center lg:min-h-0">
      <CometCard className="w-[85vw] sm:w-96" rotateDepth={12} translateDepth={14}>
        <Link
          href={detailHref}
          className="flex w-full cursor-pointer flex-col h-full p-4 rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] hover:border-white/[0.2] transition duration-700 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black-100"
          style={{ transformStyle: "preserve-3d" }}
          aria-label={itemT?.title ?? cert.title}
        >
          {/* Área da imagem – igual ao card padrão */}
          <div className="relative flex items-center justify-center w-full overflow-hidden h-[18vh] min-h-[140px] lg:h-[26vh] mb-6 rounded-2xl">
            <div
              className="absolute inset-0 overflow-hidden rounded-2xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <img src="/bg.png" alt="" className="w-full h-full object-cover opacity-40" />
            </div>
            {showPlaceholder ? (
              <div className="z-10 absolute inset-0 flex items-center justify-center text-white-200/60 text-sm rounded-2xl bg-black-300/80">
                Certificado
              </div>
            ) : (
              <img
                src={displayImage}
                alt=""
                className="z-10 relative max-h-full w-auto object-contain"
                style={{ maxWidth: "100%" }}
                onError={() => setImgError(true)}
              />
            )}
          </div>

          <h2 className="font-bold lg:text-xl md:text-lg text-base line-clamp-2 text-white mb-1">
            {itemT?.title ?? cert.title}
          </h2>

          <p className="text-sm text-white-200/90 mb-3 flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span>{itemT?.issuer ?? cert.issuer}</span>
            <span className="text-white-200/50">·</span>
            <span>{formatDateRange(cert.startedAt, cert.issuedAt, inProgress)}</span>
            {cert.hours && (
              <>
                <span className="text-white-200/50">·</span>
                <span>{cert.hours}</span>
              </>
            )}
          </p>

          {!compact && hasExtra && (
            <div className="space-y-3 flex-1">
              {displaySkills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {displaySkills.map((skill) => (
                    <li key={skill}>
                      <span className="border border-white/[0.2] rounded-full bg-black px-2 py-0.5 text-xs text-white-200">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {cert.practicalApplication && (
                <div>
                  <p className="text-xs font-semibold text-purple/90 uppercase tracking-wide mb-1">
                    {labels.practicalApplicationLabel}
                  </p>
                  <p className="text-sm text-white-200/85 line-clamp-2 leading-snug">
                    {cert.practicalApplication}
                  </p>
                </div>
              )}
              {cert.impact && (
                <div>
                  <p className="text-xs font-semibold text-purple/90 uppercase tracking-wide mb-1">
                    {labels.impactLabel}
                  </p>
                  <p className="text-sm text-white-200/85 line-clamp-2 leading-snug">
                    {cert.impact}
                  </p>
                </div>
              )}
            </div>
          )}

          {compact && (
            <p className="text-sm text-white-200/85 line-clamp-2 mb-3">
              {itemT?.description ?? cert.description}
            </p>
          )}

          <div className="mt-auto pt-4 flex items-center justify-end">
            <span className="flex items-center text-purple hover:underline text-sm font-medium">
              {viewDetailsLabel}
              <FaLocationArrow className="ms-2" color="#CBACF9" size={14} />
            </span>
          </div>
        </Link>
      </CometCard>
    </div>
  );
}
