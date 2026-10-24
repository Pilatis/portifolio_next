"use client";

import { brandProducts, getBrandTranslationItem } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { useViewMode } from "@/context/ViewModeContext";
import { resolveBrandCopy } from "@/lib/resolveBrandCopy";
import { BrandProductCard } from "./BrandProductCard";
import { Spotlight } from "./ui/Spotlight";

type BrandsT = {
  heading: string;
  highlight: string;
  subtitle: string;
  openSite: string;
  viewDetails: string;
  previewSoon: string;
  statusLive: string;
  statusBuilding: string;
  items: Array<{
    id?: string;
    brandName: string;
    tagline: string;
    des: string;
    desTechnical?: string;
  }>;
};

const BrandsProducts = () => {
  const { t } = useLanguage();
  const { viewMode } = useViewMode();
  const brandsT = t("brands") as BrandsT;

  return (
    <section id="brands" className="relative scroll-mt-20 py-20 w-full">
      {/* Posicionamento no estilo Hero — sem w/h apertados (cortam o blur do SVG). */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-[80vh]"
        fill="blue"
      />
      <Spotlight
        className="top-10 left-full h-[60vh] w-[50vw]"
        fill="white"
      />

      <div className="relative z-10">
        <h1 className="heading">
          {brandsT.heading}{" "}
          <span className="text-purple">{brandsT.highlight}</span>
        </h1>
        {brandsT.subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white-200 md:text-base">
            {brandsT.subtitle}
          </p>
        )}

        <div
          className={
            brandProducts.length === 1
              ? "mt-12 mx-auto grid max-w-xl grid-cols-1 gap-8"
              : "mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10"
          }
        >
          {brandProducts.map((item, index) => {
            const raw = getBrandTranslationItem(brandsT.items, item.id, index) ?? {
              brandName: item.brandName,
              tagline: "",
              des: "",
            };
            const copy = resolveBrandCopy(raw, viewMode);
            return (
              <BrandProductCard
                key={item.id}
                item={item}
                copy={copy}
                openSite={brandsT.openSite}
                viewDetails={brandsT.viewDetails}
                previewSoon={brandsT.previewSoon}
                statusLive={brandsT.statusLive}
                statusBuilding={brandsT.statusBuilding}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandsProducts;
