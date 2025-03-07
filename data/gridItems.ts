import { GridItemTypes } from '@/types/bentoGridItemTypes';

export const gridItems: GridItemTypes[] = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imageClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    image: '/earth.jpg'
  },
  {
    id: 2,
    title: 'I´m very flexible with time zone commnuicatios',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    titleClassName: 'justify-start',
    imageClassName: 'absolute bottom-0',
    image: 'section.svg',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    titleClassName: 'justif-center',
    image: '/grid.svg'
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1 max-h-44',
    titleClassName: 'justify-start',
    image: '/grid.svg',
    spareImage: '/b4.svg'
  },
  {
    id: 5,
    title: 'Currently building a JS Animation library',
    description: 'The inside Scoop',
    className: 'md:col-span-3 md:row-span-2 lg:min-h-full',
    imageClassName: 'absolute right-0 w-full bottom md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    image: '/b5.svg',
    spareImage: '/grid.svg'
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    className: 'lg:col-span-2 md:col-span-3 w-full md:row-span-1 max-h-44',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center'
  }
];