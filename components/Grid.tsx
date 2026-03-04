"use client";

import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useLanguage } from "@/context/LanguageContext";
import { useViewMode } from "@/context/ViewModeContext";

const Grid = () => {
  const { t } = useLanguage();
  const { viewMode } = useViewMode();
  const gridTexts = t("grid.items") as Array<{ title: string; description: string }>;
  const filtered =
    viewMode === "recruiter"
      ? gridItems
      : gridItems.filter(
          (item) => !item.visibleIn || item.visibleIn.includes(viewMode)
        );
  return (
    <section id="grid">
      <BentoGrid className="w-full py-20">
        {filtered.map((item, i) => {
          const originalIndex = gridItems.findIndex((g) => g.id === item.id);
          return (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={gridTexts[originalIndex]?.title ?? item.title}
            description={gridTexts[originalIndex]?.description ?? item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        );
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
