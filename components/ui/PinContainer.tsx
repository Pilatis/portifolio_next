"use client";
import React from "react";
import { PinContainer } from "../ui/3dPin";
import Image from "next/image";

interface AnimatedPinDemoProps {
    title?: string;
    href?: string;
    image?: string;
    iconList: string[];
}

export function AnimatedPinDemo({ title, href, iconList, image }: AnimatedPinDemoProps) {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title={title}
        href={href}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          {iconList.map((icon, index) => (
          <Image key={index} src={icon} width={50} height={50}  alt={icon} />
          ))}
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
