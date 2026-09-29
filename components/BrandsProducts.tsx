"use client";

import { brandProducts, getBrandTranslationItem } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
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
  }>;
};

const BrandsProducts = () => {
  const { t } = useLanguage();
  const brandsT = t("brands") as BrandsT;

  return (
    <section id="brands" className="relative scroll-mt-20 py-20 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Spotlight className="top-10 left-0 h-[40vh] w-[50vw]" fill="blue" />
        <Spotlight className="-top-10 right-0 h-[30vh] w-[40vw]" fill="white" />
      </div>

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
            const copy = getBrandTranslationItem(brandsT.items, item.id, index) ?? {
              brandName: item.brandName,
              tagline: "",
              des: "",
            };
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
