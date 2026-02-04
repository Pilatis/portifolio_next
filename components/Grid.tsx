"use client";

import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

const Grid = () => {
  const { t } = useLanguage();
  const gridTexts = t("grid.items") as Array<{ title: string; description: string }>;
  return (
    <section id="grid">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={gridTexts[i]?.title ?? item.title}
            description={gridTexts[i]?.description ?? item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
