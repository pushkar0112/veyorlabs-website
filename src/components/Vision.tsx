import React from 'react';
import { Compass, CheckCircle2, CircleDot, Clock, ArrowRight, Globe2 } from 'lucide-react';
import { siteConfig, type RoadmapStage } from '../config/site';
import { Reveal } from './Reveal';

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-28 relative overflow-hidden bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-5 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{siteConfig.vision.eyebrow}</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
              {siteConfig.vision.heading}
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {siteConfig.vision.narrative}
            </p>
          </Reveal>
        </div>

        {/* Expansion Pillars Grid */}
        <Reveal delay={250}>
          <div className="mb-24 rounded-3xl p-8 sm:p-10 bg-white border border-brand-border shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-brand-border">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold block mb-1">
                  Strategic Expansion
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  Core Dimensions of Educational Innovation
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 bg-brand-surface px-3 py-1.5 rounded-xl border border-brand-border">
                <Globe2 className="w-4 h-4 text-brand-cyan" />
                <span>India-Rooted • Global Vision</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {siteConfig.vision.expansionPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-cyan transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-white border border-brand-border flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Roadmap / What's Next Section */}
        <div className="mt-20">
          <Reveal delay={300}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold block mb-2">
                Technology Roadmap
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                What's Next for Veyora Labs
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base mt-3">
                A phased, disciplined progression toward an integrated, intelligent education ecosystem.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {siteConfig.vision.roadmap.map((stage: RoadmapStage, idx: number) => {
              const isFirst = idx === 0;

              return (
                <Reveal key={stage.phase} delay={350 + idx * 100}>
                  <div
                    className={`relative h-full rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 shadow-sm ${
                      isFirst
                        ? 'bg-white border-2 border-brand-cyan shadow-md'
                        : 'bg-white border border-brand-border'
                    }`}
                  >
                    {/* Top indicator */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                            isFirst
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                              : 'bg-brand-surface text-neutral-700 border border-brand-border'
                          }`}
                        >
                          {isFirst ? (
                            <CircleDot className="w-3 h-3 text-emerald-600 animate-pulse" />
                          ) : (
                            <Clock className="w-3 h-3 text-neutral-500" />
                          )}
                          <span>{stage.phase}</span>
                        </span>

                        <span className="text-[11px] font-mono text-neutral-500 font-medium">
                          {stage.timeframe}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-neutral-900 mb-2">{stage.title}</h4>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                        {stage.description}
                      </p>

                      {/* Milestones list */}
                      <div className="space-y-2.5 pt-4 border-t border-brand-border">
                        {stage.milestones.map((m) => (
                          <div key={m} className="flex items-start gap-2.5 text-xs text-neutral-700">
                            <ArrowRight className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-brand-border flex items-center justify-between text-[11px] font-mono">
                      <span className="text-neutral-500">Status</span>
                      <span
                        className={`font-semibold capitalize ${
                          stage.status === 'active'
                            ? 'text-emerald-700'
                            : stage.status === 'upcoming'
                            ? 'text-brand-cyan'
                            : 'text-neutral-600'
                        }`}
                      >
                        {stage.status === 'active' ? '● In Active Development' : stage.status === 'upcoming' ? '○ Scheduled Next' : '◇ Strategic Horizon'}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
