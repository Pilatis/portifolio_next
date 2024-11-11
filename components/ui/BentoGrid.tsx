import { BentoGridItemTypes } from '@/types/bentoGridItemTypes';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { BackgroundGradientAnimation } from './BackgroundGradiantAnimation';

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
}: BentoGridItemTypes) => {
  return (
    <div
      className={cn(
        'row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border-2 justify-between flex flex-col space-y-4  border-red-500',
        className
      )}
      style={{
        background: 'rgb(4, 7, 29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    >
      <div className={`${id === 6} && 'flex justify-center h-full'`}>
        <div className="w-full h-full absolute">
          {image && (
            <Image
              src={image}
              alt={image}
              width={100}
              height={100}
              className={cn(imageClassName, 'object-cover, object-center')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full backdrop-opacity-80'}`}
        >
          {spareImage && (
            <Image
              src={spareImage}
              alt={spareImage}
              width={100}
              height={100}
              className={'object-cover, object-center, w-full, h-full'}
            />
          )}
        </div>
        {id === 6 && (
          <>
            <BackgroundGradientAnimation>
              <div className="absolute z-50 flex items-center justify-center  text-white font-bold"></div>
            </BackgroundGradientAnimation>

            <div
              className={cn(
                titleClassName,
                'group-hover/bento:translate-x-2 trasition duration-200 relative md:h-fulll min-h-40 flex flex-col px-5 pl-5 lg:p-10'
              )}
            >
              <div>{description}</div>
            </div>
          </>
        )}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative ">
        <div
          className={`font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 ${titleClassName}`}
        >
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
