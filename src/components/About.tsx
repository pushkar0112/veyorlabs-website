import React from 'react';
import { Info, ShieldCheck, Terminal, Compass } from 'lucide-react';
import { siteConfig } from '../config/site';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Principles */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-medium text-brand-indigo mb-6">
              <Info className="w-3.5 h-3.5" />
              <span>{siteConfig.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-8">
              {siteConfig.about.heading}
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {siteConfig.about.paragraphs.map((para, idx) => (
                <p key={idx} className={idx === 0 ? 'text-slate-100 font-medium' : 'text-slate-300'}>
                  {para}
                </p>
              ))}
            </div>

            {/* Principles Badges */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-brand-border">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Compass className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Purpose-Driven</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Terminal className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Tech-Enabled</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-brand-indigo shrink-0" />
                <span>Privacy-First</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural / Vision Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-8 bg-gradient-to-b from-brand-card/90 to-brand-surface/90 border border-brand-border shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Status: Research & Build
                </span>
              </div>

              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-brand-surface/60 border border-white/[0.05]">
                  <span className="text-xs text-brand-cyan font-mono block mb-1">STAGE</span>
                  <p className="text-sm font-semibold text-white">Early-Stage Technology Startup</p>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface/60 border border-white/[0.05]">
                  <span className="text-xs text-brand-teal font-mono block mb-1">FOCUS DOMAIN</span>
                  <p className="text-sm font-semibold text-white">Next-Generation Education & Learning</p>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface/60 border border-white/[0.05]">
                  <span className="text-xs text-brand-indigo font-mono block mb-1">CURRENT PHASE</span>
                  <p className="text-sm font-semibold text-white">Idea Validation & Prototyping</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06] text-center">
                <span className="text-xs text-slate-400 font-mono">
                  More information will be announced soon.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
