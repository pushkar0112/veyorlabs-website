import React from 'react';
import {
  UserCheck,
  Cpu,
  SlidersHorizontal,
  Network,
  TrendingUp,
  Target,
  Sparkles,
} from 'lucide-react';
import { siteConfig, type WhyPrinciple } from '../config/site';

const principleIconMap = {
  UserCheck: UserCheck,
  Cpu: Cpu,
  SlidersHorizontal: SlidersHorizontal,
  Network: Network,
  TrendingUp: TrendingUp,
  Target: Target,
};

export const WhyVeyora: React.FC = () => {
  return (
    <section id="why-veyora" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-cyan/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-indigo/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{siteConfig.whyVeyora.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {siteConfig.whyVeyora.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {siteConfig.whyVeyora.subheading}
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyVeyora.principles.map((item: WhyPrinciple) => {
            const Icon = principleIconMap[item.iconName];
            return (
              <div
                key={item.number}
                className="group relative rounded-3xl p-7 bg-brand-card/60 border border-brand-border hover:border-brand-cyan/30 hover:bg-brand-card/90 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-cyan group-hover:scale-105 group-hover:border-brand-cyan/40 group-hover:bg-brand-cyan/10 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-brand-cyan transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase">
                  <span>Foundational Principle</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal opacity-60" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
