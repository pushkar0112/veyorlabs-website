import React from 'react';
import {
  Sparkles,
  Users,
  Sliders,
  Cpu,
  GraduationCap,
  TrendingUp,
} from 'lucide-react';
import { siteConfig, type FocusArea } from '../config/site';

const focusIconMap = {
  Sparkles: Sparkles,
  Users: Users,
  Sliders: Sliders,
  Cpu: Cpu,
  GraduationCap: GraduationCap,
  TrendingUp: TrendingUp,
};

export const EducationFocus: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-brand-surface/40 border-y border-brand-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark border border-brand-border text-xs font-medium text-brand-teal mb-4">
            <span>Core Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
            {siteConfig.educationFocus.heading}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {siteConfig.educationFocus.subheading}
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.educationFocus.areas.map((area: FocusArea, index: number) => {
            const Icon = focusIconMap[area.iconName];
            return (
              <div
                key={area.title}
                className="group p-6 rounded-2xl bg-brand-card/50 border border-brand-border hover:border-brand-cyan/30 hover:bg-brand-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-surface flex items-center justify-center text-brand-cyan border border-brand-border group-hover:text-brand-teal group-hover:border-brand-teal/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.04] text-[11px] text-slate-400 tracking-wider uppercase font-medium">
                  Exploratory Track
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
