'use client';

import React from 'react';
import Image from 'next/image'
import { FloatingNav } from '@/components/ui/FloatingNav';
import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import { navItems } from '@/data/navItems';
import { NavItemsTypes } from '@/types/NavItemsTypes';
import RecentProjects from '@/components/RecentProjects';
import SVG from '../public/chakra-ui.svg'
import Experiences from '@/components/Experiences';
import Approach from '@/components/Approach';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <div className="pb-20">
          <Hero />
        </div>
        <div className="pb-11">
          <Grid />
        </div>
        <div className="">
          <RecentProjects />
        </div>
        <div className="">
          <Experiences />
        </div>
        <div className="">
          <Approach />
        </div>
      </div>
    </main>
  );
}
