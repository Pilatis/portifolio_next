"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const AUTO_PLAY_MS = 4500;

export default function ProjectCarousel({
  images,
  alt,
  className,
}: {
  images: string[];
  alt: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  useEffect(() => {
    if (count <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_PLAY_MS);
    return () => clearInterval(t);
  }, [count]);

  if (!images.length) return null;

  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl", className)}>
      <div className="relative aspect-video w-full bg-black/40 border border-white/10 rounded-2xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center p-4"
          >
            <img
              src={images[index]}
              alt={`${alt} - ${index + 1}`}
              className="max-h-full w-auto object-contain object-center rounded-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
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
            className="absolute bottom-3 right-3 text-xs text-white/60"
            aria-hidden
          >
            {index + 1} / {count}
          </div>
        </>
      )}
    </div>
  );
}
