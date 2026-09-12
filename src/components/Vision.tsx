import React from 'react';
import { Compass, CheckCircle2, CircleDot, Clock, ArrowRight, Globe2 } from 'lucide-react';
import { siteConfig, type RoadmapStage } from '../config/site';

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-cyan/10 via-brand-teal/5 to-brand-indigo/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-semibold text-brand-teal uppercase tracking-wider mb-5">
            <Compass className="w-3.5 h-3.5 text-brand-teal" />
            <span>{siteConfig.vision.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {siteConfig.vision.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {siteConfig.vision.narrative}
          </p>
        </div>

        {/* Expansion Pillars Grid */}
        <div className="mb-24 rounded-3xl p-8 sm:p-10 bg-brand-card/60 border border-brand-border backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.06]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold block mb-1">
                Strategic Expansion
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Core Dimensions of Educational Innovation
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-brand-surface px-3 py-1.5 rounded-xl border border-white/[0.06]">
              <Globe2 className="w-4 h-4 text-brand-cyan" />
              <span>India-Rooted • Global Vision</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.vision.expansionPillars.map((pillar) => (
              <div
                key={pillar}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-brand-surface/70 border border-white/[0.05] hover:border-brand-cyan/30 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  {pillar}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap / What's Next Section */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-teal font-semibold block mb-2">
              Technology Roadmap
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              What's Next for Veyora Labs
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              A phased, disciplined progression toward an integrated, intelligent education ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {siteConfig.vision.roadmap.map((stage: RoadmapStage, idx: number) => {
              const isFirst = idx === 0;
              const isSecond = idx === 1;

              return (
                <div
                  key={stage.phase}
                  className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                    isFirst
                      ? 'bg-gradient-to-b from-brand-card/90 to-brand-surface/90 border-2 border-brand-cyan/40 shadow-xl shadow-brand-cyan/10'
                      : isSecond
                      ? 'bg-brand-card/70 border border-brand-border'
                      : 'bg-brand-card/50 border border-brand-border/60'
                  }`}
                >
                  {/* Top indicator */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                          isFirst
                            ? 'bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30'
                            : isSecond
                            ? 'bg-brand-teal/15 text-brand-teal border border-brand-teal/30'
                            : 'bg-brand-indigo/15 text-brand-indigo border border-brand-indigo/30'
                        }`}
                      >
                        {isFirst ? (
                          <CircleDot className="w-3 h-3 animate-pulse" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                        <span>{stage.phase}</span>
                      </span>

                      <span className="text-[11px] font-mono text-slate-400 font-medium">
                        {stage.timeframe}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2">{stage.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {stage.description}
                    </p>

                    {/* Milestones list */}
                    <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                      {stage.milestones.map((m) => (
                        <div key={m} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <ArrowRight
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isFirst ? 'text-brand-cyan' : isSecond ? 'text-brand-teal' : 'text-slate-400'
                            }`}
                          />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Status</span>
                    <span
                      className={`font-semibold capitalize ${
                        stage.status === 'active'
                          ? 'text-emerald-400'
                          : stage.status === 'upcoming'
                          ? 'text-brand-cyan'
                          : 'text-indigo-300'
                      }`}
                    >
                      {stage.status === 'active' ? '● In Active Development' : stage.status === 'upcoming' ? '○ Scheduled Next' : '◇ Strategic Horizon'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
