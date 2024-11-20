'use client';
import React from 'react';
import { PinContainer } from '../ui/3dPin';
import Image from 'next/image';

interface AnimatedPinDemoProps {
  title: string;
  href?: string;
  image: string;
  iconList: string[];
}

export function AnimatedPinDemo({
  title,
  href,
  iconList,
  image
}: AnimatedPinDemoProps) {
  return (
    <PinContainer title={title} href={href}>
      <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]">
        <div>
          <img src="/bg.png" alt="bg-image" />
        </div>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="z-10 absolute bottom-0"
        />
      </div>
    </PinContainer>
  );
}
