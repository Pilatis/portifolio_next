import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid';

const Grid: React.FC = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[{ id: 1, title: 'Title1', description: 'desc1' }].map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
