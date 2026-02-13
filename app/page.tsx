"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  const pathname = usePathname();

  // Scroll para o projeto pelo hash após montar (evita layout quebrado ao voltar pelo back)
  useEffect(() => {
    if (pathname !== "/" || typeof window === "undefined") return;
    const hash = window.location.hash?.slice(1);
    if (!hash || !hash.startsWith("project-")) return;
    const el = document.getElementById(hash);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [pathname]);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <About />
        <Grid />
        <RecentProjects />
       {/* <Clients />  */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
