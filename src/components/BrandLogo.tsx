import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'dark', compact = false }) => {
  const isLight = variant === 'light';

  return (
    <div className="inline-flex items-center gap-2.5 sm:gap-3.5 select-none group focus:outline-none">
      <img
        src="/images/apple-college-crest-logo.png"
        alt="Apple College of Nursing Logo"
        className={`${
          compact
            ? 'h-11 w-11 sm:h-12 sm:w-12'
            : 'h-12 w-12 sm:h-14 sm:w-14 lg:h-15 lg:w-15 xl:h-17 xl:w-17'
        } object-contain rounded-full shadow-xs transition-transform duration-300 group-hover:scale-105 shrink-0 bg-white`}
      />
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-display font-black tracking-tight ${
            compact ? 'text-base sm:text-lg' : 'text-base sm:text-lg lg:text-lg xl:text-2xl'
          } ${isLight ? 'text-white' : 'text-[#132847]'}`}
        >
          APPLE COLLEGE
        </span>
        <span
          className={`text-[9px] sm:text-[10px] xl:text-[11px] font-extrabold uppercase tracking-[0.16em] mt-0.5 sm:mt-1 ${
            isLight ? 'text-[#38B6FF]' : 'text-[#FF5E5E]'
          }`}
        >
          OF NURSING
        </span>
      </div>
    </div>
  );
};
