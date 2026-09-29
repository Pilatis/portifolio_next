"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import type { BrandProduct } from "@/types/brandProductTypes";
import { STACK_LABELS } from "@/data";
import { cn } from "@/lib/utils";
import { StackTooltip } from "./ui/StackTooltip";

type BrandItemT = {
  brandName: string;
  tagline: string;
  des: string;
};

type BrandProductCardProps = {
  item: BrandProduct;
  copy: BrandItemT;
  openSite: string;
  viewDetails: string;
  previewSoon: string;
  statusLive: string;
  statusBuilding: string;
  index: number;
};

function getStackLabel(icon: string): string {
  const key = icon.startsWith("/") ? icon : `/${icon}`;
  return STACK_LABELS[key] ?? icon.replace(/^\/(.*)\.svg$/i, "$1");
}

export function BrandProductCard({
  item,
  copy,
  openSite,
  viewDetails,
  previewSoon,
  statusLive,
  statusBuilding,
  index,
}: BrandProductCardProps) {
  const accent = item.accent ?? "#3B82F6";
  const statusLabel = item.status === "live" ? statusLive : statusBuilding;
  const hasCover = Boolean(item.coverImg);

  return (
    <motion.article
      id={`brand-${item.id}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="scroll-mt-24 group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(160deg,rgba(8,12,28,0.95)_0%,rgba(4,7,20,0.98)_100%)]"
      style={{
        boxShadow: `0 0 0 1px ${accent}14, 0 24px 60px -28px ${accent}55`,
      }}
    >
      {/* Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: accent }}
      />

      <div className="relative z-10 flex flex-col gap-5 p-5 sm:p-6 md:p-7">
        {/* Header: icon + wordmark + status */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10"
              style={{ boxShadow: `0 0 24px -4px ${accent}88` }}
            >
              <Image
                src={item.logoIcon}
                alt=""
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              {item.logoWordmark ? (
                <Image
                  src={item.logoWordmark}
                  alt={copy.brandName}
                  width={160}
                  height={36}
                  className="h-7 w-auto max-w-[160px] object-contain object-left"
                />
              ) : (
                <h3 className="truncate text-xl font-bold text-white">{copy.brandName}</h3>
              )}
              <p
                className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/50"
              >
                {copy.tagline}
              </p>
            </div>
          </div>
          <span
            className={cn(
              "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider",
              item.status === "live"
                ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30"
                : "bg-amber-500/15 text-amber-200 ring-1 ring-amber-400/30",
            )}
          >
            {statusLabel}
          </span>
        </div>

        {/* Media / placeholder */}
        <div
          className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.06]"
          style={{ background: `linear-gradient(145deg, ${accent}18 0%, #0a0f1e 55%, #050810 100%)` }}
        >
          {hasCover && item.coverImg ? (
            <Image
              src={item.coverImg}
              alt={`${copy.brandName} preview`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <div
                className="h-16 w-16 rounded-2xl opacity-90"
                style={{
                  backgroundImage: `url(${item.logoIcon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: `0 0 40px -8px ${accent}`,
                }}
              />
              <p className="text-sm text-white/45">{previewSoon}</p>
              <div className="mt-1 h-px w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </div>
          )}
          {/* Soft grid overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-white-200 md:text-[15px]">
          {copy.des}
        </p>

        {/* Stack + platforms */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center">
            {item.iconLists.slice(0, 5).map((icon, i) => {
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
          {item.platforms.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-white/55 ring-1 ring-white/10"
                >
                  {p}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.02] min-w-[140px]"
            style={{
              background: `linear-gradient(135deg, ${accent} 0%, #1d4ed8 100%)`,
              boxShadow: `0 8px 24px -10px ${accent}`,
            }}
          >
            {openSite}
            <FaExternalLinkAlt className="text-[11px] opacity-90" />
          </a>
          <Link
            href={`/brands/${item.id}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white-100 transition-colors hover:border-white/30 hover:bg-white/[0.06] min-w-[140px]"
          >
            {viewDetails}
            <FaArrowRight className="text-[11px]" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
