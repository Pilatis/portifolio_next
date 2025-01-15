import React from 'react';
import { CardDemo as CardApproach } from '@/components/ui/CardApproach';
import { approachItems } from '@/data/approachItems';
import { GridBackgroundDemo } from '../ui/GridBackgroundDemo';

const Approach: React.FC = () => {
  return (
    <div className="w-full relative py-20 flex items-center justify-center flex-col gap-10 z-10" id="">
       <GridBackgroundDemo />
      <h1 className="heading z-10">
        My
        <span className="text-purple ml-2">Approach</span>
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
