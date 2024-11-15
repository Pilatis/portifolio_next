'use client'

import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid';
import { gridItems } from '@/data/gridItems';
import { GridItemsTypes } from '@/data/gridItems';

const Grid: React.FC = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item: GridItemsTypes) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            imageClassName={item.imageClassName}
            titleClassName={item.titleClassName}
            image={item.image}
            spareImage={item.spareImage}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
