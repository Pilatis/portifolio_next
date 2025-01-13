import React from 'react';
import { CardDemo as CardApproach } from '@/components/ui/CardApproach';
import { approachItems } from '@/data/approachItems';
import { GridBackgroundDemo } from '../ui/GridBackgroundDemo';

const Approach: React.FC = () => {
  return (
    <div className="w-full relative py-20 flex items-center justify-center flex-col gap-10" id="">
    <div className="w-screen lg:h-[800px] h-min absolute top-5 left-10">
        <img className="w-screen bg-cover bg-center opacity-8" src="/grid.svg" alt="grid" />
      </div>
      <h1 className="heading">
        My
        <span className="text-purple">Approach</span>
      </h1>
      <div className="py-5 relative flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        {approachItems.map((item) => (
          <CardApproach
            key={item.id}
            title={item.title}
            text={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Approach;
