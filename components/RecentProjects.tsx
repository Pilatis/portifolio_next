"use client";

import { useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa6";

import { projects, STACK_LABELS } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useLanguage } from "@/context/LanguageContext";

const RecentProjects = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const projectsT = t("projects") as { heading: string; highlight: string; checkLiveSite: string; items: Array<{ title: string; des: string }> };
  return (
    <div id="projects" className=" scroll-mt-20">
      <h1 className="heading">
        {projectsT.heading}{" "}
        <span className="text-purple">{projectsT.highlight}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, index) => (
          <div key={item.id} id={`project-${item.id}`} className="scroll-mt-24">
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
            <PinContainer
              title={projectsT.checkLiveSite}
              href={`/${item.id}`}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {projectsT.items[index]?.title ?? item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {projectsT.items[index]?.des ?? item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists && item.iconLists.length > 0 && item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      title={STACK_LABELS[icon] ?? icon.replace(/^\/(.*)\.svg$/i, "$1")}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center cursor-default"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={STACK_LABELS[icon] ?? ""} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href={item.link?.startsWith("http") ? item.link : `https://${item.link?.replace(/^\//, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center lg:text-xl md:text-xs text-sm text-purple hover:underline"
                  >
                    <span className="flex">{projectsT.checkLiveSite}</span>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
