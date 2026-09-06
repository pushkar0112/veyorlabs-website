import React from 'react';
import { BookOpen, Lightbulb, Compass, Layers } from 'lucide-react';
import { siteConfig, type ExploringCard } from '../config/site';

const iconMap = {
  BookOpen: BookOpen,
  Lightbulb: Lightbulb,
  Compass: Compass,
};

export const WhatWeAreExploring: React.FC = () => {
  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-medium text-brand-cyan mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Foundational Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            What We're Exploring
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Our exploratory work focuses on fundamental areas where technology can empower learners and educators.
          </p>
        </div>

        {/* 3 Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.whatWeAreExploring.map((card: ExploringCard) => {
            const IconComponent = iconMap[card.iconName];
            return (
              <div
                key={card.id}
                className="group relative rounded-2xl p-8 bg-brand-card/70 border border-brand-border hover:border-brand-border-highlight transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_12px_35px_rgba(56,189,248,0.1)] flex flex-col justify-between"
              >
                {/* Subtle top indicator glow */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/30 transition-all duration-300 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Badge */}
                  <div className="text-xs uppercase tracking-wider font-semibold text-brand-teal mb-2">
                    {card.badge}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom subtle status line */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                  <span>Exploration Stage</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
