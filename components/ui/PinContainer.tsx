'use client';
import React from 'react';
import { PinContainer } from '../ui/3dPin';
import Image from 'next/image';
import { IconsListTypes, ProjectsItemsTypes } from '@/types/projectsItemsTypes';
import { AnimatedTooltip } from './AnimatedTooltip';
import { FaLocationArrow } from 'react-icons/fa';

interface AnimatedPinDemoProps {
  title: string;
  description: string;
  href?: string;
  image: string;
  iconList: IconsListTypes[];
}

export function AnimatedPinDemo({
  title,
  href,
  description,
  iconList,
  image
}: AnimatedPinDemoProps) {
  return (
    <PinContainer title={title} href={href}>
      <div className="relative flex items-center justify-center sm:w-[570px] w-[60vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
        <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
          <Image src="/bg.png" alt="bg-image" width={500} height={500} />
        </div>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="z-10 absolute bottom-0"
        />
      </div>
      <h1 className="font-bold lg:text-2xl md:text-xl text-base line-camp-1">
        {title}
      </h1>
      <p className="text-left lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
        {description}
      </p>
      <div className="flex items-center justify-between flex-row sm:flex-col lg:flex-row sm:gap-2 mt-7 mb-3">
        <div className="flex items-center">
          {iconList.map((iconItem) => {
            const items = iconItem.icons.map((image, index) => ({
              id: index,
              names: iconItem.names[index],
              icons: image
            }));

            return <AnimatedTooltip key={iconItem.id} items={items} />;
          })}
        </div>
        <div className="flex items-center justify-center">
          <p className="flex lg:text-xl md:text-xs text-sm text-purple">
            Check Live Site
          </p>
          <FaLocationArrow className="ms-3" color="#CBACF9" />
        </div>
      </div>
    </PinContainer>
  );
}
