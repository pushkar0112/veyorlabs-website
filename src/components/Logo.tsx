import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-8 h-8', showText = true }) => {
  return (
    <div className="flex items-center gap-3 select-none group">
      <div className={`relative ${className} flex items-center justify-center`}>
        {/* Subtle luminous ambient glow behind logo icon */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan to-brand-teal rounded-lg blur-[6px] opacity-40 group-hover:opacity-75 transition-opacity duration-300" />
        
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full"
          aria-hidden="true"
        >
          <rect width="40" height="40" rx="10" fill="#0D111A" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <path
            d="M11 12L20 30L29 12"
            stroke="url(#logo-grad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="14" r="2" fill="#38BDF8" />
          <path
            d="M16.5 22L20 19L23.5 22"
            stroke="#2DD4BF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="logo-grad" x1="11" y1="12" x2="29" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#2DD4BF" />
              <stop offset="1" stopColor="#818CF8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <span className="font-semibold text-lg tracking-tight text-white flex items-center">
          Veyor<span className="text-brand-cyan">Labs</span>
        </span>
      )}
    </div>
  );
};
