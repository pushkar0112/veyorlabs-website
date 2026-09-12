import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-8 h-8', showText = true }) => {
  return (
    <div className="flex items-center gap-3 select-none group">
      <div className={`relative ${className} flex items-center justify-center`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full"
          aria-hidden="true"
        >
          <rect width="40" height="40" rx="8" fill="#245C4A" stroke="#245C4A" strokeWidth="1" />
          <path
            d="M11 12L20 30L29 12"
            stroke="#F8F7F4"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="14" r="2" fill="#F8F7F4" />
          <path
            d="M16.5 22L20 19L23.5 22"
            stroke="#F8F7F4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {showText && (
        <span className="font-semibold text-lg tracking-tight text-neutral-900 flex items-center">
          Veyora<span className="text-brand-cyan">Labs</span>
        </span>
      )}
    </div>
  );
};
