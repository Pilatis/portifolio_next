'use client';

import React from 'react'
import { FloatingNav } from '@/components/ui/FloatingNav';
import Hero from "@/components/Hero";
import Grid from '@/components/Grid';
import { navItems, NavItemsTypes } from '@/utils/navItems';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems.map((item: NavItemsTypes) => ({
          name: item.title,
          link: item.title
        }))} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
