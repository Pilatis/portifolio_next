"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
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
};

export default function ProjectCarousel({
  images,
  media,
  alt,
  className,
}: ProjectCarouselProps) {
  const items: MediaItem[] = media?.length
    ? media
    : (images ?? []).map((src) => ({ src, type: "image" as const }));
  const [index, setIndex] = useState(0);
  const count = items.length;

  const goPrev = () => setIndex((i) => (i - 1 + count) % count);
  const goNext = () => setIndex((i) => (i + 1) % count);

  useEffect(() => {
    if (count <= 1) return;
    const currentItem = items[index];
    if (currentItem?.type === "video") return; // pausa troca automática no vídeo
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTO_PLAY_MS);
    return () => clearInterval(t);
  }, [count, index]);

  if (!count) return null;

  const current = items[index];
  const isVideo = current.type === "video";

  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl", className)}>
      <div className="relative aspect-video w-full bg-black/40 border border-white/10 rounded-2xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center p-4"
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
              <img
                key={current.src}
                src={current.src}
                alt={current.title ?? `${alt} - ${index + 1}`}
                className="max-h-full w-auto object-contain object-center rounded-xl"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white transition-colors"
            >
              <IoChevronBack className="text-xl" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white transition-colors"
            >
              <IoChevronForward className="text-xl" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-6 bg-purple" : "w-2 bg-white/40 hover:bg-white/60"
                  )}
                />
              ))}
            </div>
            <div
              className="absolute bottom-3 right-3 text-xs text-white/60 z-10"
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
    </div>
  );
}
