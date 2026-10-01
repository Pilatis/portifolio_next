"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoChevronBack,
  IoChevronForward,
  IoExpand,
  IoClose,
  IoPause,
  IoPlay,
  IoLockClosed,
  IoImages,
} from "react-icons/io5";
import { cn } from "@/lib/utils";

const AUTO_PLAY_MS = 4500;
const FADE_MS = 320;
const LIGHTBOX_BODY_CLASS = "carousel-lightbox-open";

export type MediaItem = {
  src: string;
  type: "image" | "video";
  title?: string;
  description?: string;
};

type ProjectCarouselProps = {
  /** @deprecated Use media instead. List of image URLs for backward compatibility. */
  images?: string[];
  /** Media items (images + videos) with optional title and description. */
  media?: MediaItem[];
  alt: string;
  className?: string;
  /** Projetos sem capa: botão pause/play do slideshow. */
  pauseLabel?: string;
  playLabel?: string;
  /**
   * Marcas com capa: 1º item = capa.
   * Toggle: só capa (bloqueada) ↔ galeria de imagens (solta).
   */
  coverMode?: boolean;
  lockCoverLabel?: string;
  unlockCoverLabel?: string;
};

const navBtnClass =
  "absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/70 hover:bg-black/85 backdrop-blur-md border border-white/20 shadow-lg shadow-black/40 flex items-center justify-center text-white transition-colors";

const toolBtnClass =
  "z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black/85 backdrop-blur-md border border-white/20 shadow-lg shadow-black/40 flex items-center justify-center text-white transition-colors";

export default function ProjectCarousel({
  images,
  media,
  alt,
  className,
  pauseLabel = "Pause slideshow",
  playLabel = "Play slideshow",
  coverMode = false,
  lockCoverLabel = "Show cover only",
  unlockCoverLabel = "Show app images",
}: ProjectCarouselProps) {
  const allItems: MediaItem[] = useMemo(
    () =>
      media?.length
        ? media
        : (images ?? []).map((src) => ({ src, type: "image" as const })),
    [media, images],
  );

  const coverItem = coverMode && allItems.length > 0 ? allItems[0] : null;
  const galleryItems = useMemo(
    () => (coverMode ? allItems.slice(1) : allItems),
    [coverMode, allItems],
  );

  /** Capa bloqueada = só capa; solta = galeria de imagens do app. */
  const [coverLocked, setCoverLocked] = useState(coverMode);
  const [index, setIndex] = useState(0);
  const [imageReady, setImageReady] = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState(false);
  const [paused, setPaused] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transitioningRef = useRef(false);

  const items = useMemo(() => {
    if (coverMode && coverLocked && coverItem) return [coverItem];
    return galleryItems;
  }, [coverMode, coverLocked, coverItem, galleryItems]);

  const count = items.length;
  const itemsKey = items.map((i) => i.src).join("|");

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const canAutoplay =
    count > 1 && !expanded && !paused && !(coverMode && coverLocked);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (count <= 0) return;
      const normalized = ((nextIndex % count) + count) % count;
      setIndex((current) => {
        if (current === normalized) return current;
        return normalized;
      });
    },
    [count],
  );

  const goPrev = useCallback(() => {
    if (count <= 1 || transitioningRef.current) return;
    transitioningRef.current = true;
    setIndex((i) => (i - 1 + count) % count);
    window.setTimeout(() => {
      transitioningRef.current = false;
    }, FADE_MS);
  }, [count]);

  const goNext = useCallback(() => {
    if (count <= 1 || transitioningRef.current) return;
    transitioningRef.current = true;
    setIndex((i) => (i + 1) % count);
    window.setTimeout(() => {
      transitioningRef.current = false;
    }, FADE_MS);
  }, [count]);

  const togglePause = () => setPaused((prev) => !prev);

  const toggleCoverLock = () => {
    setCoverLocked((prev) => {
      const next = !prev;
      setIndex(0);
      transitioningRef.current = false;
      if (next) clearAutoplay();
      return next;
    });
  };

  const openExpand = () => {
    if (items[index]?.type === "video") return;
    clearAutoplay();
    setExpanded(true);
  };

  const closeExpand = () => setExpanded(false);

  /** Pré-carrega capa + galeria (troca sem flash). */
  useEffect(() => {
    allItems.forEach((item) => {
      if (item.type !== "image" || !item.src) return;
      const img = new window.Image();
      img.src = item.src;
      const mark = () => {
        setImageReady((prev) =>
          prev[item.src] ? prev : { ...prev, [item.src]: true },
        );
      };
      img.onload = mark;
      if (img.complete) mark();
    });
  }, [allItems]);

  /** Autoplay: reinicia o timer quando o índice muda (após clique ou tick). */
  useEffect(() => {
    clearAutoplay();
    if (!canAutoplay) return;
    if (items[index]?.type === "video") return;

    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_PLAY_MS);

    return clearAutoplay;
  }, [canAutoplay, count, index, itemsKey, clearAutoplay]);

  useEffect(() => {
    if (!expanded) return;
    document.body.classList.add(LIGHTBOX_BODY_CLASS);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
      if (count <= 1) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove(LIGHTBOX_BODY_CLASS);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [expanded, count, goPrev, goNext]);

  /** Se a lista muda e o índice fica inválido, corrige. */
  useEffect(() => {
    if (index >= count && count > 0) setIndex(0);
  }, [count, index]);

  if (!count) return null;

  const current = items[Math.min(index, count - 1)];
  const isVideo = current.type === "video";
  const showPauseControl = !coverMode && count > 1;
  const showCoverControl = coverMode && galleryItems.length > 0;
  const showNav = count > 1 && !(coverMode && coverLocked);

  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl", className)}>
      <div className="relative aspect-video w-full bg-black/40 border border-white/10 rounded-2xl">
        {/* Slides empilhados + crossfade (sem remount / mode=wait) */}
        <div className="absolute inset-0">
          {items.map((item, i) => {
            const active = i === index;
            const ready = item.type === "video" || Boolean(imageReady[item.src]);

            return (
              <div
                key={`${itemsKey}:${item.src}:${i}`}
                className={cn(
                  "absolute inset-0 flex items-center justify-center px-4 pt-4 pb-6 md:pb-8 transition-opacity ease-out",
                  active ? "z-[1] opacity-100" : "z-0 opacity-0 pointer-events-none",
                )}
                style={{ transitionDuration: `${FADE_MS}ms` }}
                aria-hidden={!active}
              >
                {item.type === "video" ? (
                  active ? (
                    <video
                      src={item.src}
                      controls
                      className="max-h-full w-auto max-w-full object-contain rounded-xl"
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : null
                ) : (
                  <button
                    type="button"
                    onClick={openExpand}
                    tabIndex={active ? 0 : -1}
                    aria-label="Expand image"
                    className="relative w-full h-full min-h-[12rem] max-h-[calc(100%-2rem)] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/50 rounded-xl"
                  >
                    {!ready && (
                      <div
                        className="absolute inset-0 animate-pulse rounded-xl bg-white/[0.06]"
                        aria-hidden
                      />
                    )}
                    <Image
                      src={item.src}
                      alt={item.title ?? `${alt} - ${i + 1}`}
                      fill
                      priority={i === 0 || i === index}
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 1100px"
                      className={cn(
                        "object-contain object-center rounded-xl transition-opacity duration-200",
                        ready ? "opacity-100" : "opacity-0",
                      )}
                      onLoadingComplete={() =>
                        setImageReady((prev) =>
                          prev[item.src] ? prev : { ...prev, [item.src]: true },
                        )
                      }
                    />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-2 pointer-events-none">
          {showCoverControl ? (
            <button
              type="button"
              onClick={toggleCoverLock}
              aria-label={coverLocked ? unlockCoverLabel : lockCoverLabel}
              title={coverLocked ? unlockCoverLabel : lockCoverLabel}
              className={cn(toolBtnClass, "pointer-events-auto")}
            >
              {coverLocked ? (
                <IoLockClosed className="text-lg" />
              ) : (
                <IoImages className="text-lg" />
              )}
            </button>
          ) : showPauseControl ? (
            <button
              type="button"
              onClick={togglePause}
              aria-label={paused ? playLabel : pauseLabel}
              title={paused ? playLabel : pauseLabel}
              className={cn(toolBtnClass, "pointer-events-auto")}
            >
              {paused ? <IoPlay className="text-lg ml-0.5" /> : <IoPause className="text-lg" />}
            </button>
          ) : (
            <span />
          )}
          {!isVideo && (
            <button
              type="button"
              onClick={openExpand}
              aria-label="Expand image"
              className={cn(toolBtnClass, "pointer-events-auto")}
            >
              <IoExpand className="text-lg" />
            </button>
          )}
        </div>

        {showNav && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous"
              className={cn(navBtnClass, "left-2")}
            >
              <IoChevronBack className="text-xl" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next"
              className={cn(navBtnClass, "right-2")}
            >
              <IoChevronForward className="text-xl" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-auto rounded-full bg-black/55 backdrop-blur-md px-2.5 py-1.5 border border-white/10">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-6 bg-purple" : "w-2 bg-white/40 hover:bg-white/60",
                  )}
                />
              ))}
            </div>
            <div
              className="absolute bottom-2 right-4 text-xs text-white/80 z-10 rounded-md bg-black/55 backdrop-blur-md px-2 py-0.5 border border-white/10"
              aria-hidden
            >
              {index + 1} / {count}
            </div>
          </>
        )}
      </div>

      {(current.title || current.description) && (
        <div className="mt-2 px-4 py-2 min-h-[3rem]">
          {current.title && (
            <p className="text-white font-medium text-sm md:text-base">{current.title}</p>
          )}
          {current.description && (
            <p className="text-white-200 text-xs md:text-sm mt-0.5 leading-relaxed">
              {current.description}
            </p>
          )}
        </div>
      )}

      <AnimatePresence>
        {expanded && !isVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={closeExpand}
            role="dialog"
            aria-modal="true"
            aria-label={current.title ?? alt}
          >
            <button
              type="button"
              onClick={closeExpand}
              aria-label="Close"
              className="absolute top-4 right-4 z-[10000] w-11 h-11 rounded-full bg-black/70 hover:bg-black/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
            >
              <IoClose className="text-2xl" />
            </button>

            {showNav && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  aria-label="Previous"
                  className={cn(navBtnClass, "left-3 md:left-6")}
                >
                  <IoChevronBack className="text-xl" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  aria-label="Next"
                  className={cn(navBtnClass, "right-3 md:right-6")}
                >
                  <IoChevronForward className="text-xl" />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative max-h-[90vh] max-w-[95vw] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[min(85vh,900px)]">
                {/* Crossfade também no lightbox */}
                {items.map((item, i) =>
                  item.type === "image" ? (
                    <Image
                      key={item.src}
                      src={item.src}
                      alt={item.title ?? `${alt} - ${i + 1}`}
                      fill
                      unoptimized
                      sizes="100vw"
                      className={cn(
                        "object-contain transition-opacity ease-out",
                        i === index ? "opacity-100" : "opacity-0",
                      )}
                      style={{ transitionDuration: `${FADE_MS}ms` }}
                      priority={i === index}
                    />
                  ) : null,
                )}
              </div>
              {(current.title || count > 1) && (
                <div className="mt-3 flex items-center gap-3 text-sm text-white/80">
                  {current.title && <span className="font-medium text-white">{current.title}</span>}
                  {count > 1 && (
                    <span className="rounded-md bg-black/55 px-2 py-0.5 border border-white/10">
                      {index + 1} / {count}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
