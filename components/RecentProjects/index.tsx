import { projectsItems } from '@/data/projectsItems';
import React from 'react';
import { AnimatedPinDemo } from '../ui/PinContainer';
import { ProjectsItemsTypes } from '@/types/projectsItemsTypes';

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of
        <span className="text-purple pl-4">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8">
        {projectsItems.map((item: ProjectsItemsTypes) => (
          <div
            key={item.id}
            className="sm-h-[41rem] md:h-[22rem] sm:h-[20rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <AnimatedPinDemo
              title={item.title}
              description={item.description}
              href={item.link}
              image={item.image}
              iconList={item.iconsList}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
