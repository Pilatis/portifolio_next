import { projectsItems } from '@/data/projectsItems';
import React from 'react';
import { AnimatedPinDemo } from '../ui/PinContainer';

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of
        <span className="text-purple pl-4">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projectsItems.map((item) => (
            <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <AnimatedPinDemo title={item.title} href={item.link} image={item.image} iconList={item.iconsList} />
          </div>
        )

)}
      </div>
    </div>
  );
};

export default RecentProjects;
