"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { aboutMe } from "@/data";
import { MovingBorder } from "./ui/MovingBorders";
import { cn } from "@/lib/utils";

// Photo in public folder (spaces encoded for URL)
const PHOTO_SRC = "/Foto%20Profissional%20-%202.PNG";


export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 mt-52 md:py-28 overflow-hidden"
    >
      {/* Subtle grid background - same as Hero */}
      <div
        className="absolute mt-52 align-center justify-center left-1/2 top-[20rem] -translate-x-1/2 -translate-y-1/2 inset-0 w-full h-[40rem] dark:bg-grid-white/[0.02] bg-grid-black-100/[0.2] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <motion.div
            className="flex flex-col justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              About{" "}
              <span className="text-purple">{aboutMe.highlight}</span>
            </h2>
            <div className="space-y-4 text-white-200 text-base md:text-lg leading-relaxed">
              {aboutMe.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Right: photo with Aceternity MovingBorder */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <PhotoWithMovingBorder />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhotoWithMovingBorder() {
  const [mounted, setMounted] = useState(false);
  const borderRadius = "1.5rem";
  const innerRadius = "calc(1.5rem * 0.96)";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full max-w-sm aspect-[3/4] overflow-hidden p-[2px]",
        "bg-transparent"
      )}
      style={{ borderRadius }}
    >
      {/* Moving border only on client to avoid hydration mismatch (SVG/useAnimationFrame) */}
      {mounted && (
        <div
          className="absolute inset-0 rounded-[1.5rem]"
          style={{ borderRadius: innerRadius }}
        >
          <MovingBorder duration={4000} rx="20%" ry="20%">
            <div className="h-24 w-24 opacity-90 bg-[radial-gradient(#CBACF9_40%,transparent_60%)]" />
          </MovingBorder>
        </div>
      )}

      {/* Inner content: photo + subtle border */}
      <div
        className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-white/10 bg-black/40"
        style={{ borderRadius: innerRadius }}
      >
        <img
          src={PHOTO_SRC}
          alt={aboutMe.imageAlt}
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
      </div>
    </div>
  );
}
