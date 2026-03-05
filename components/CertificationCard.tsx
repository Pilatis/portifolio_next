"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { Certification } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

export type CertificationItemT = {
  title: string;
  description: string;
  issuer: string;
};

function formatDateRange(startedAt: string, issuedAt: string | null, inProgress: string): string {
  if (issuedAt === null) return inProgress;
  return `${startedAt} – ${issuedAt}`;
}

type CertificationCardProps = {
  cert: Certification;
  itemT: CertificationItemT | undefined;
  inProgress: string;
  compact: boolean;
  viewDetailsLabel: string;
  from?: "home" | "list";
};

export function CertificationCard({
  cert,
  itemT,
  inProgress,
  compact,
  viewDetailsLabel,
  from,
}: CertificationCardProps) {
  const [imgError, setImgError] = useState(false);
  const displayImage = cert.images?.[0] ?? cert.image;
  const showPlaceholder = !displayImage || imgError;
  const detailHref = `/certifications/${cert.id}${from ? `?from=${from}` : ""}`;
  const isGridLayout = from === "list";

  return (
    <div
      className={`w-full flex items-center justify-center ${isGridLayout ? "min-h-[28rem] lg:min-h-[32rem]" : "lg:min-h-[32.5rem] h-[25rem]"}`}
    >
      <div
        className={`p-4 rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] hover:border-white/[0.2] transition duration-700 overflow-hidden ${isGridLayout ? "w-full min-w-0" : "sm:w-96 w-[85vw]"}`}
      >
        <Link href={detailHref} className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 rounded-xl">
          {/* Área da imagem – mesmo estilo do card de projeto */}
          <div className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
            <div
              className="relative w-full h-full overflow-hidden rounded-3xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <img src="/bg.png" alt="" className="w-full object-cover opacity-40" />
            </div>
            {showPlaceholder ? (
              <div className="z-10 absolute inset-0 flex items-center justify-center text-white-200/60 text-sm rounded-3xl bg-black-300/80">
                Certificado
              </div>
            ) : (
              <img
                src={displayImage}
                alt=""
                className="z-10 absolute bottom-0 left-1/2 -translate-x-1/2 max-h-full w-auto object-contain"
                style={{ maxWidth: "100%" }}
                onError={() => setImgError(true)}
              />
            )}
          </div>

          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
            {itemT?.title ?? cert.title}
          </h1>

          <p
            className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
            style={{ color: "#BEC1DD", margin: "1vh 0" }}
          >
            {compact
              ? `${itemT?.issuer ?? cert.issuer} · ${formatDateRange(cert.startedAt, cert.issuedAt, inProgress)}`
              : (itemT?.description ?? cert.description)}
          </p>

          {!compact && (
            <p className="text-xs text-white-200/80 mt-1">
              {itemT?.issuer ?? cert.issuer} · {formatDateRange(cert.startedAt, cert.issuedAt, inProgress)}
            </p>
          )}

          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex flex-wrap gap-1.5">
              {(from === "list" ? cert.skills : cert.skills.slice(0, 3)).map((skill) =>
                skill !== "" ? (
                  <span
                    key={skill}
                    className="border border-white/[0.2] rounded-full bg-black px-2.5 py-1 text-xs text-white-200"
                  >
                    {skill}
                  </span>
                ) : null
              )}
            </div>
            <div className="flex items-center text-purple hover:underline text-sm font-medium shrink-0 ml-2">
              <span className="flex">{viewDetailsLabel}</span>
              <FaLocationArrow className="ms-2" color="#CBACF9" size={14} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
