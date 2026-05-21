"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa6";
import { projects, STACK_LABELS } from "@/data";
import { PinContainer } from "./ui/Pin";
import { StackTooltip } from "./ui/StackTooltip";

export type ProjectItem = (typeof projects)[number];

type ProjectCardProps = {
  item: ProjectItem;
  title: string;
  des: string;
  checkLiveSite: string;
  showClientBadge: boolean;
  /** "home" = seção na home (largura fixa, Pin centralizado). "grid" = página /projects (largura 100% do grid). */
  variant: "home" | "grid";
};

function getStackLabel(icon: string): string {
  const key = icon.startsWith("/") ? icon : `/${icon}`;
  return STACK_LABELS[key] ?? icon.replace(/^\/(.*)\.svg$/i, "$1");
}

export function ProjectCard({
  item,
  title,
  des,
  checkLiveSite,
  showClientBadge,
  variant,
}: ProjectCardProps) {
  const router = useRouter();
  const isGrid = variant === "grid";

  const content = (
    <>
      <div
        className={
          isGrid
            ? "relative flex items-center justify-center w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-10"
            : "relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"
        }
      >
        <div
          className="relative w-full h-full overflow-hidden lg:rounded-3xl"
          style={{ backgroundColor: "#13162D" }}
        >
          <Image
            src="/bg.png"
            alt=""
            fill
            sizes="(max-width: 768px) 80vw, 400px"
            className="object-cover opacity-40"
          />
        </div>
        <div
          className={
            isGrid
              ? "z-10 absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-full max-w-full"
              : "z-10 absolute bottom-0 left-0 right-0 h-full"
          }
        >
          <Image
            src={item.img}
            alt={title}
            fill
            sizes="(max-width: 768px) 80vw, 384px"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
        {title}
      </h1>

      <p
        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
        style={{ color: "#BEC1DD", margin: "1vh 0" }}
      >
        {des}
      </p>

      {showClientBadge && "clientName" in item && item.clientName && (
        <div className="flex items-center gap-2 mt-2">
          {"clientLogo" in item && item.clientLogo && (
            <Image
              src={item.clientLogo}
              alt=""
              width={96}
              height={24}
              className="h-6 w-auto object-contain rounded"
            />
          )}
          <span className="text-xs text-white-200/80">{item.clientName}</span>
        </div>
      )}

      <div className="flex items-center justify-between mt-7 mb-3">
        <div className="flex items-center">
          {item.iconLists?.slice(0, 5).map((icon, index) => {
            const label = getStackLabel(icon);
            const src = icon.startsWith("/") ? icon : `/${icon}`;
            return (
              <StackTooltip key={`${src}-${index}`} label={label}>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center cursor-default"
                  style={!isGrid ? { transform: `translateX(-${5 * index + 2}px)` } : undefined}
                >
                  <Image src={src} alt={label} width={24} height={24} className="p-2" />
                </div>
              </StackTooltip>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <span className="flex items-center lg:text-xl md:text-xs text-sm text-purple">
            {checkLiveSite}
            <FaLocationArrow className="ms-3" color="#CBACF9" />
          </span>
        </div>
      </div>
    </>
  );

  if (isGrid) {
    return (
      <div className="w-full min-w-0 lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center">
        <PinContainer
          title={checkLiveSite}
          href={`/${item.id}`}
          fullWidth
          className="w-full min-w-0"
        >
          <Link
            href={`/${item.id}`}
            className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 rounded-xl"
          >
            {content}
          </Link>
        </PinContainer>
      </div>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] cursor-pointer"
      onClick={() => router.push(`/${item.id}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(`/${item.id}`);
        }
      }}
    >
      <PinContainer title={checkLiveSite} href={`/${item.id}`}>
        {content}
      </PinContainer>
    </div>
  );
}
