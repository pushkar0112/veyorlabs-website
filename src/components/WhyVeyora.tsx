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
import { Reveal } from './Reveal';

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
    <section id="why-veyora" className="py-28 relative overflow-hidden bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{siteConfig.whyVeyora.eyebrow}</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
              {siteConfig.whyVeyora.heading}
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {siteConfig.whyVeyora.subheading}
            </p>
          </Reveal>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyVeyora.principles.map((item: WhyPrinciple, idx: number) => {
            const Icon = principleIconMap[item.iconName];
            return (
              <Reveal key={item.number} delay={100 + idx * 80}>
                <div className="group relative h-full rounded-3xl p-7 bg-white border border-brand-border hover:border-brand-cyan transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-brand-cyan transition-colors">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase">
                    <span>Foundational Principle</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan opacity-75" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
