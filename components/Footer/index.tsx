import React from 'react';
import MagicButton from '../ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMediaItems } from '@/data/socialMediaItems';
import Image from 'next/image';
import { SocialMediaItemsTypes } from '@/types/socialMediaItemsTypes';

const Footer: React.FC = () => {
  return (
    <div className="w-full relative pt-10 pb-20 flex flex-col items-center justify-center z-10">
      <div className="w-full lg:max-w-[640px] md:mb-10 mb-16 flex flex-col items-center justify-center gap-10">
        <h1 className="heading text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-sm md:text-base text-center font-light">
          Reach out to me today and let&apos;s discuss how i can help you
          achieve your goals
        </p>
      </div>
      <MagicButton otherClasses="md:mb-10" iconPosition="right" icon={<FaLocationArrow size="15px" />}>Let&apos;s get in touch</MagicButton>
      <div className="w-full flex items-center justify-center lg:justify-between flex-col lg:flex-row md:gap-8 gap-3 mt-14 md:mt-10">
        <p className="w-full md:text-base text-sm md:font-normal text-center font-light">
           Copyright Ⓒ 2025 Lucas
        </p>
        <div className="w-full inline-flex items-center justify-center md:gap-3 text-center gap-4">
           {socialMediaItems.map((item: SocialMediaItemsTypes) => (
            <div key={item.id} className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <Image src={item.image} alt={item.name} width={20} height={20} />
            </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
