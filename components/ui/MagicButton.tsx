import React from 'react';

interface MagicButtonType {
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: string;
  otherClasses?: string;
  handleClick?: () => void;
}

const MagicButton = ({ children, href, icon, iconPosition, otherClasses, handleClick }: MagicButtonType) => {
  return (
    <a href={href}>
      <button onClick={handleClick} className="relative inline-flex w-full h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 gap-2 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
          {iconPosition === 'left' && icon}
          {children}
          {iconPosition === 'right' && icon}
        </span>
      </button>
    </a>
  );
};

export default MagicButton;
