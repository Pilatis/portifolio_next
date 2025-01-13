'use client';

import { useState } from 'react';
import { GridItemTypes } from '@/types/bentoGridItemTypes';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { skillsItems } from '@/data/skillsItems';
import { SkillsItemsTypes } from '@/types/SkillsItemsTypes';
import MagicButton from './MagicButton';
import { IoCopyOutline } from "react-icons/io5";
import animationData from '@/data/json/confetti.json'
import dynamic from 'next/dynamic';

const BackgroundAnimation = dynamic(() => import('./BackgroundGradiantAnimation'), { ssr: false });
const LottieComponent = dynamic(() => import('react-lottie'), { ssr:  false });

export const BentoGrid = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imageClassName,
  titleClassName,
  image,
  spareImage,
  id
}: GridItemTypes) => {
  const [copied, setCopied] = useState<boolean>(false);
  
  const hadleCopy = ():void => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText('pilatidev1@gmail.com')
      setCopied(true);
    } 
  }

  return (
    <div
      className={cn(
        `row-span-1 relative overflow-hidden rounded-3xl max-h-72 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]`,
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} relative h-full`}>
        <div className="w-full h-full absolute">
          {image && (
            <Image
              src={image}
              alt={image}
              width={500}
              height={500}
              className={cn(imageClassName, 'object-cover, object-center')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 ${id === 4 && 'h-20 sm:h-20 -bottom-4'} ${
            id === 5 && 'w-full opacity-80'
          } `}
        >
          {spareImage && (
            <Image
              src={spareImage}
              alt={spareImage}
              width={id === 4 ? 200 : 100}
              height={100}
              className={'object-cover, object-center, w-full, h-full'}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundAnimation />          
        )}

        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-20 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`${id === 2 && 'text-center'} ${id === 6 && 'top-2 md:top-4 sm:top-0'} font-sans relative text-sm lg:text-2xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit h-full absolute -right-3 lg:-right-2">
              <div className="flex relative flex-col h-full gap-2 md:gap-3 lg:gap-4">
                {skillsItems.map((item: SkillsItemsTypes) => (
                  <span
                    key={item.id}
                    className="lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item.name}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex relative flex-col h-full gap-2 md:gap-3 lg:gap-4">
                {skillsItems.map(
                  (item: SkillsItemsTypes, index: number) =>
                    index >= 3 && (
                      <span
                        key={item.id}
                        className="lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                      >
                        {item.name}
                      </span>
                    )
                )}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>
            </div>
          )}
          {id === 5 && (
            <div className="h-20">

            </div>
          )}
          {id === 6 && 
          <div className="relative lg:bottom-4 md:mt-2 sm:-bottom-3">
             <div className="absolute -bottom-5 right-0">
              <LottieComponent options={{ loop: copied, autoplay: copied, animationData, rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              } }} />
             </div>
             <MagicButton handleClick={hadleCopy} otherClasses="bg-[#161a31]" icon={<IoCopyOutline />} iconPosition="left">
              {copied ? 'Email copied' : 'Copy my email address'}
             </MagicButton>
            </div>
          }
        </div>
      </div>
    </div>
  );
};
