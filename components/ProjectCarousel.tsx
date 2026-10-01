"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoChevronBack,
  IoChevronForward,
  IoExpand,
  IoClose,
  IoPause,
  IoPlay,
} from "react-icons/io5";
import { cn } from "@/lib/utils";

const AUTO_PLAY_MS = 4500;

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
  pauseLabel?: string;
  playLabel?: string;
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
}: ProjectCarouselProps) {
  const items: MediaItem[] = media?.length
    ? media
    : (images ?? []).map((src) => ({ src, type: "image" as const }));
  const [index, setIndex] = useState(0);
  const [imageReady, setImageReady] = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState(false);
  const [paused, setPaused] = useState(false);
  const hasAnimated = useRef(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = items.length;

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    clearAutoplay();
    if (count <= 1 || expanded || paused) return;
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_PLAY_MS);
  }, [clearAutoplay, count, expanded, paused]);

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex(nextIndex);
      if (!expanded && !paused) startAutoplay();
    },
    [startAutoplay, expanded, paused],
  );

  const goPrev = () => goTo((index - 1 + count) % count);
  const goNext = () => goTo((index + 1) % count);

  const togglePause = () => {
    setPaused((prev) => !prev);
  };

  const openExpand = () => {
    if (items[index]?.type === "video") return;
    clearAutoplay();
    setExpanded(true);
  };

  const closeExpand = () => {
    setExpanded(false);
  };

  const imageSrcKey = items
    .filter((item) => item.type === "image")
    .map((item) => item.src)
    .join("|");

  useEffect(() => {
    items.forEach((item) => {
      if (item.type !== "image" || !item.src) return;
      const img = new window.Image();
      img.src = item.src;
    });
  }, [imageSrcKey]);

  useEffect(() => {
    if (count <= 1 || expanded || paused) return clearAutoplay;
    if (items[index]?.type === "video") {
      clearAutoplay();
      return;
    }
    startAutoplay();
    return clearAutoplay;
  }, [index, count, imageSrcKey, clearAutoplay, startAutoplay, expanded, paused]);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
      if (count <= 1) return;
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [expanded, count]);

  if (!count) return null;

  const current = items[index];
  const isVideo = current.type === "video";

  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl", className)}>
      <div className="relative aspect-video w-full bg-black/40 border border-white/10 rounded-2xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={hasAnimated.current ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: hasAnimated.current ? 0.25 : 0 }}
            onAnimationComplete={() => {
              hasAnimated.current = true;
            }}
            className="absolute inset-0 flex items-center justify-center px-4 pt-4 pb-6 md:pb-8"
          >
            {isVideo ? (
              <video
                key={current.src}
                src={current.src}
                controls
                className="max-h-full w-auto max-w-full object-contain rounded-xl"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <button
                type="button"
                key={current.src}
                onClick={openExpand}
                aria-label="Expand image"
                className="relative w-full h-full min-h-[12rem] max-h-[calc(100%-2rem)] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/50 rounded-xl"
              >
                {!imageReady[current.src] && (
                  <div
                    className="absolute inset-0 animate-pulse rounded-xl bg-white/[0.06]"
                    aria-hidden
                  />
                )}
                <Image
                  src={current.src}
                  alt={current.title ?? `${alt} - ${index + 1}`}
                  fill
                  priority={index === 0}
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className={cn(
                    "object-contain object-center rounded-xl transition-opacity duration-200",
                    imageReady[current.src] ? "opacity-100" : "opacity-0",
                  )}
                  onLoad={() =>
                    setImageReady((prev) => ({ ...prev, [current.src]: true }))
                  }
                />
              </button>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-2 pointer-events-none">
          {count > 1 ? (
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

        {count > 1 && (
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={closeExpand}
            role="dialog"
            aria-modal="true"
            aria-label={current.title ?? alt}
          >
            <button
              type="button"
              onClick={closeExpand}
              aria-label="Close"
              className="absolute top-4 right-4 z-[110] w-11 h-11 rounded-full bg-black/70 hover:bg-black/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
            >
              <IoClose className="text-2xl" />
            </button>

            {count > 1 && (
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
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] max-w-[95vw] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[min(85vh,900px)]">
                <Image
                  src={current.src}
                  alt={current.title ?? `${alt} - ${index + 1}`}
                  fill
                  unoptimized
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
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
