"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { brandProducts, getBrandTranslationItem, STACK_LABELS } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import ProjectCarousel from "@/components/ProjectCarousel";
import MagicButton from "@/components/MagicButton";
import { StackTooltip } from "@/components/ui/StackTooltip";
import { splitDescriptionParagraphs } from "@/lib/utils";

type BrandsPageT = {
  openSite: string;
  previewSoon: string;
  statusLive: string;
  statusBuilding: string;
  platformsLabel: string;
  pillarsTitle: string;
  aboutTitle: string;
  techStack: string;
  backToBrands: string;
  notFound: string;
  pauseSlideshow?: string;
  playSlideshow?: string;
  lockCover?: string;
  unlockCover?: string;
  items: Array<{
    id?: string;
    brandName: string;
    tagline: string;
    des: string;
    fullDes?: string;
    pillars?: Array<{ title: string; description: string }>;
    media?: Array<{ title: string; description: string }>;
  }>;
};

function getStackLabel(icon: string): string {
  const key = icon.startsWith("/") ? icon : `/${icon}`;
  return STACK_LABELS[key] ?? icon.replace(/^\/(.*)\.svg$/i, "$1");
}

export default function BrandDetailPage() {
  const { brandId } = useParams();
  const { t, lang } = useLanguage();
  const brandsT = t("brands") as BrandsPageT;

  const brandIndex = brandProducts.findIndex((b) => b.id === String(brandId));
  const brand = brandIndex >= 0 ? brandProducts[brandIndex] : undefined;
  const itemT = brand
    ? getBrandTranslationItem(brandsT.items, brand.id, brandIndex)
    : undefined;

  if (!brand) {
    return (
      <div key={lang} className="min-h-screen bg-black-100 flex flex-col items-center justify-center px-4">
        <p className="text-white-200 text-lg mb-6">{brandsT.notFound}</p>
        <Link href="/#brands" className="text-purple hover:underline flex items-center gap-2">
          <IoArrowBack /> {brandsT.backToBrands}
        </Link>
      </div>
    );
  }

  const title = itemT?.brandName ?? brand.brandName;
  const tagline = itemT?.tagline ?? "";
  const description = itemT?.fullDes ?? itemT?.des ?? "";
  const paragraphs = splitDescriptionParagraphs(description);
  const pillars = itemT?.pillars ?? [];
  const accent = brand.accent ?? "#3B82F6";
  const statusLabel = brand.status === "live" ? brandsT.statusLive : brandsT.statusBuilding;
  const stackIcons =
    brand.iconListsDetail && brand.iconListsDetail.length > 0
      ? brand.iconListsDetail
      : brand.iconLists;

  const mediaCaptions = itemT?.media;
  const media =
    brand.media && brand.media.length > 0
      ? brand.media.map((m, i) => ({
          src: m.src,
          type: m.type as "image" | "video",
          title: mediaCaptions?.[i]?.title,
          description: mediaCaptions?.[i]?.description,
        }))
      : brand.coverImg
        ? [{ src: brand.coverImg, type: "image" as const }]
        : [];

  return (
    <div key={lang} className="min-h-screen bg-black-100 relative overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% -10%, ${accent}33 0%, transparent 60%)`,
        }}
      />
      <div className="fixed inset-0 pointer-events-none bg-grid-white/[0.02]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 md:mb-12"
        >
          <Link
            href={`/#brand-${brand.id}`}
            scroll={false}
            className="inline-flex items-center gap-2 text-white-200 hover:text-purple transition-colors text-sm md:text-base"
          >
            <IoArrowBack className="text-lg" />
            {brandsT.backToBrands}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4"
        >
          <div
            className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10"
            style={{ boxShadow: `0 0 24px -6px ${accent}` }}
          >
            <Image
              src={brand.logoIcon}
              alt=""
              width={48}
              height={48}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              {title === "CoreNote" ? (
                <>
                  <span>Core</span>
                  <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
                    Note
                  </span>
                </>
              ) : (
                title
              )}
            </h1>
            {tagline && (
              <p className="mt-1 text-[11px] sm:text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                {tagline}
              </p>
            )}
          </div>
          <span
            className={
              brand.status === "live"
                ? "ml-auto rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/30"
                : "ml-auto rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-200 ring-1 ring-amber-400/30"
            }
          >
            {statusLabel}
          </span>
        </motion.div>

        {/* Media or placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mt-8 mb-10"
        >
          {media.length > 0 ? (
            <ProjectCarousel
              media={media}
              alt={title}
              coverMode
              lockCoverLabel={brandsT.lockCover ?? "Show cover only"}
              unlockCoverLabel={brandsT.unlockCover ?? "Show app images"}
            />
          ) : (
            <div
              className="relative flex aspect-[16/9] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-white/[0.08]"
              style={{
                background: `linear-gradient(145deg, ${accent}22 0%, #0a0f1e 50%, #050810 100%)`,
              }}
            >
              {brand.logoFull ? (
                <Image
                  src={brand.logoFull}
                  alt={title}
                  width={420}
                  height={140}
                  className="max-h-28 w-auto object-contain opacity-95"
                />
              ) : (
                <Image
                  src={brand.logoIcon}
                  alt={title}
                  width={80}
                  height={80}
                  className="rounded-2xl"
                />
              )}
              <p className="text-sm text-white/45">{brandsT.previewSoon}</p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.18 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold text-white mb-4">{brandsT.aboutTitle}</h2>
          <div className="space-y-4 text-white-200 leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>

        {pillars.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.22 }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-white mb-4">{brandsT.pillarsTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4"
                >
                  <h3 className="font-semibold text-white text-sm mb-1">{pillar.title}</h3>
                  <p className="text-sm text-white-200/80">{pillar.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.26 }}
          className="mb-6"
        >
          <h2 className="text-xl font-semibold text-white mb-4">{brandsT.techStack}</h2>
          <div className="flex flex-wrap gap-3">
            {stackIcons.map((icon, index) => {
              const label = getStackLabel(icon);
              const src = icon.startsWith("/") ? icon : `/${icon}`;
              return (
                <StackTooltip key={`${src}-${index}`} label={label}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.15] bg-black">
                    <img src={src} alt={label} className="h-full w-full object-contain p-2.5" />
                  </div>
                </StackTooltip>
              );
            })}
          </div>
        </motion.div>

        {brand.platforms.length > 0 && (
          <p className="mb-8 text-sm text-white-200">
            <span className="text-white/50">{brandsT.platformsLabel}: </span>
            {brand.platforms.join(" · ")}
          </p>
        )}

        <MagicButton
          title={brandsT.openSite}
          icon={<FaExternalLinkAlt />}
          position="right"
          href={brand.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
}
