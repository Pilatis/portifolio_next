import React from 'react';
import MagicButton from '../ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMediaItems } from '@/data/socialMediaItems';
import Image from 'next/image';
import { SocialMediaItemsTypes } from '@/types/socialMediaItemsTypes';

const Footer: React.FC = () => {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center">
      <div className="w-full lg:max-w-[640px] mb-16 flex flex-col items-center justify-center gap-10">
        <h1 className="heading text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-sm md:text-base font-light">
          Reach out to me today and let&apos;s discuss how i can help you
          achieve your goals
        </p>
      </div>
      <MagicButton iconPosition="right" icon={<FaLocationArrow size="15px" />}>Let's get in touch</MagicButton>
      <div className="w-full flex items-center flex-col md:gap-8 lg:justify-between mt-16">
        <p className="md:text-base text-sm md:font-normal font-light">
           Copyright Ⓒ 2025 Lucas
        </p>
        <div className="w-full flex items-center md:gap-3 gap-6">
           {socialMediaItems.map((item: SocialMediaItemsTypes) => (
            <div key={item.id}>
              <Image src={item.image} alt={item.image} />
            </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
