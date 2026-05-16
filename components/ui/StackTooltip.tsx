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

type StackTooltipProps = {
  label: string;
  children: ReactNode;
  /** classes no wrapper do gatilho (ex.: flex, tamanho) */
  className?: string;
};

export function StackTooltip({ label, children, className }: StackTooltipProps) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
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

  return (
    <>
      <div
        ref={triggerRef}
        className={`inline-flex ${className ?? ""}`}
        onMouseEnter={() => {
          updatePosition();
          setOpen(true);
        }}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </div>
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
            className="pointer-events-none whitespace-nowrap rounded-lg border border-purple/30 bg-black-100/95 px-2.5 py-1.5 text-xs font-medium text-white shadow-lg shadow-black/50 backdrop-blur-sm"
          >
            {label}
          </span>,
          document.body
        )}
    </>
  );
}
