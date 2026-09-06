import React from 'react';
import { Sparkles, ArrowDown, BellOff } from 'lucide-react';
import { siteConfig } from '../config/site';

export const ComingSoon: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="coming-soon" className="py-28 relative overflow-hidden">
      {/* Background Visual Flare */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-brand-cyan/20 via-brand-teal/15 to-brand-indigo/20 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Futuristic Card Container */}
        <div className="relative rounded-3xl p-6 sm:p-10 md:p-16 bg-gradient-to-b from-brand-surface/90 to-brand-card/90 border border-brand-border hover:border-brand-cyan/40 transition-colors duration-500 shadow-2xl shadow-black/60">
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-semibold text-brand-cyan mb-8 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
            <span>{siteConfig.comingSoon.badge}</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {siteConfig.comingSoon.heading}
          </h2>

          {/* Descriptive Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            {siteConfig.comingSoon.description}
          </p>

          {/* Pure Visual / Navigational CTA Button (No Email Forms, No Account Capture) */}
          <div className="flex flex-col items-center justify-center gap-3">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-lg shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <span>{siteConfig.comingSoon.ctaText}</span>
              <ArrowDown className="w-4 h-4 text-slate-950" />
            </a>

            {/* Privacy Reassurance Note */}
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 mt-2">
              <BellOff className="w-3.5 h-3.5 text-slate-400" />
              <span>No spam, no notifications, and no user registration required.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
