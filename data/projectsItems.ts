import { ProjectsItemsTypes } from '@/types/projectsItemsTypes';

export const projectsItems: ProjectsItemsTypes[] = [
  {
    id: 1,
    title: 'text random',
    description: 'text random',
    image: '/p1.svg',
    iconsList: [
      {
        id: 1,
        icons: ['/re.svg', 'ts.svg', '/three.svg', '/fm.svg'],
        names: ['React.js', 'Typescript']
      }
    ],
    link: ''
  },
  {
    id: 2,
    title: 'text random',
    description: 'text random',
    image: '/p2.svg',
    iconsList: [
      {
        id: 2,
        icons: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
        names: ['nemae']
      }
    ],
    link: ''
  },
  {
    id: 3,
    title: 'text random',
    description: 'text random',
    image: '/p3.svg',
    iconsList: [
      {
        id: 3,
        icons: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
        names: ['React.js', 'tailiw']
      }
    ],
    link: ''
  },
  {
    id: 4,
    title: 'text random',
    description: 'text random',
    image: '/p4.svg',
    iconsList: [
      {
        id: 4,
        icons: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
        names: ['name']
      }
    ],
    link: ''
  }
];
