"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

type DefinitionTooltipProps = {
  definition: string;
  children: ReactNode;
  className?: string;
};

export function DefinitionTooltip({
  definition,
  children,
  className,
}: DefinitionTooltipProps) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tooltipId = useId();

  const updatePosition = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const gap = 8;
    setCoords({
      left: r.left + r.width / 2,
      top: r.top - gap,
    });
  }, []);

  const show = useCallback(() => {
    updatePosition();
    setOpen(true);
  }, [updatePosition]);

  const hide = useCallback(() => {
    if (!pinned) setOpen(false);
  }, [pinned]);

  const togglePin = useCallback(() => {
    setPinned((prev) => {
      const next = !prev;
      setOpen(next);
      return next;
    });
    updatePosition();
  }, [updatePosition]);

  const dismiss = useCallback(() => {
    setPinned(false);
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    updatePosition();
    const onMove = () => updatePosition();
    window.addEventListener("scroll", onMove, true);
    window.addEventListener("resize", onMove);
    return () => {
      window.removeEventListener("scroll", onMove, true);
      window.removeEventListener("resize", onMove);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      const el = triggerRef.current;
      if (el && !el.contains(e.target as Node)) dismiss();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, dismiss]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className={cn(
          "inline cursor-help rounded-md px-1.5 py-0.5 font-semibold text-amber-200",
          "border-b-2 border-amber-400/80 bg-amber-500/15 shadow-[0_1px_0_0_rgba(251,191,36,0.12)]",
          "transition-colors hover:border-amber-300 hover:bg-amber-500/25 hover:text-amber-50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/45",
          open &&
            "border-amber-300 bg-amber-500/30 text-amber-50 ring-1 ring-amber-400/35",
          className,
        )}
        aria-expanded={open}
        aria-describedby={open ? tooltipId : undefined}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={() => {
          if (!pinned) setOpen(false);
        }}
        onClick={(e) => {
          e.preventDefault();
          togglePin();
        }}
      >
        {children}
      </button>
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <span
            id={tooltipId}
            role="tooltip"
            style={{
              position: "fixed",
              left: coords.left,
              top: coords.top,
              transform: "translate(-50%, -100%)",
              zIndex: 99999,
            }}
            className="pointer-events-none max-w-[16rem] rounded-lg border border-amber-400/25 bg-black-100/95 px-3 py-2 text-left text-xs leading-relaxed text-white-200 shadow-lg shadow-black/50 backdrop-blur-sm"
          >
            {definition}
          </span>,
          document.body,
        )}
    </>
  );
}
