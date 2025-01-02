import React from 'react';
import { CardDemo as CardApproach } from '@/components/ui/CardApproach';
import { approachItems } from '@/data/approachItems';

const Approach: React.FC = () => {
  return (
    <div className="w-full py-20" id="">
      <h1 className="heading">
        My
        <span className="text-purple">Approach</span>
      </h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
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
