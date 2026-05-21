import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import About from "@/components/About";
import RecentProjects from "@/components/RecentProjects";
import HomeHashScroll from "@/components/home/HomeHashScroll";
import SectionSkeleton from "@/components/home/SectionSkeleton";

const Grid = dynamic(() => import("@/components/Grid"), {
  loading: () => <SectionSkeleton className="h-[28rem] my-20" />,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <SectionSkeleton className="h-80 my-20" />,
});

const Certifications = dynamic(() => import("@/components/Certifications"), {
  loading: () => <SectionSkeleton className="h-96 my-20" />,
});

const EngineeringPrinciples = dynamic(
  () => import("@/components/EngineeringPrinciples"),
  { loading: () => <SectionSkeleton className="h-72 my-20" /> },
);

const Approach = dynamic(() => import("@/components/Approach"), {
  loading: () => <SectionSkeleton className="h-[32rem] my-20" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <SectionSkeleton className="h-48" />,
});

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
      <HomeHashScroll />
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <Grid />
        <RecentProjects />
        <Experience />
        <Certifications />
        <EngineeringPrinciples />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
