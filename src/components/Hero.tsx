import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-brand-cyan/15 via-brand-teal/10 to-brand-indigo/15 blur-[120px] rounded-full" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-brand-cyan/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-brand-violet/10 blur-[90px] rounded-full" />
        
        {/* Subtle geometric dot grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Early-Stage Startup Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface/90 border border-brand-border text-xs font-medium text-slate-300 shadow-sm mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
          </span>
          <span className="text-slate-400 font-normal">Initiative:</span>
          <span className="text-brand-cyan font-semibold">{siteConfig.hero.badge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
          Building the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-indigo text-glow">
            Future of Education.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          {siteConfig.hero.supportingText}
        </p>

        {/* Additional Text */}
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
          {siteConfig.hero.additionalText}
        </p>

        {/* CTA Buttons (Strictly Informational Navigation - No Auth) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-brand-cyan to-brand-teal hover:opacity-95 transition-all duration-200 shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/35 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>{siteConfig.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href="#coming-soon"
            onClick={(e) => handleScrollTo(e, '#coming-soon')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-brand-surface/80 border border-brand-border hover:bg-white/5 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <Compass className="w-4 h-4 text-brand-cyan" />
            <span>{siteConfig.hero.secondaryCta}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
