import React from 'react';
import { Info, Compass, Cpu, Layers, CheckCircle2, Shield } from 'lucide-react';
import { siteConfig } from '../config/site';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-brand-surface/30 border-t border-brand-border">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-6">
              <Info className="w-3.5 h-3.5" />
              <span>{siteConfig.about.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8 leading-tight">
              {siteConfig.about.heading}
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {siteConfig.about.paragraphs.map((para, idx) => (
                <p key={idx} className={idx === 0 ? 'text-slate-100 font-medium' : 'text-slate-300'}>
                  {para}
                </p>
              ))}
            </div>

            {/* Core Values / Pillar Badges */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-brand-border">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Compass className="w-4 h-4 text-brand-cyan shrink-0" />
                <span className="font-medium">Human-Centric Design</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Cpu className="w-4 h-4 text-brand-teal shrink-0" />
                <span className="font-medium">Intelligent Systems</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Shield className="w-4 h-4 text-brand-indigo shrink-0" />
                <span className="font-medium">Institutional Trust</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Matrix Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-8 bg-gradient-to-b from-brand-card/95 to-brand-surface/95 border border-brand-border shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cyan font-semibold">
                  Product Architecture
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-brand-surface/70 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-emerald-400 font-mono font-semibold">ZELEON LEARN</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Live Tutoring
                    </span>
                  </div>
                  <p className="text-sm font-medium text-white">1-on-1 Tuition Platform for Grades 1–10</p>
                  <p className="text-xs text-slate-400 mt-1">Personalized pacing, individual attention, concept focus.</p>
                </div>

                <div className="p-4 rounded-2xl bg-brand-surface/70 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-brand-cyan font-mono font-semibold">MYBUDDY LEARN</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                      AI Platform
                    </span>
                  </div>
                  <p className="text-sm font-medium text-white">Intelligent AI-Powered Learning Application</p>
                  <p className="text-xs text-slate-400 mt-1">Concept clarification, explanations, and adaptive assistance.</p>
                </div>

                <div className="p-4 rounded-2xl bg-brand-surface/70 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-indigo-300 font-mono font-semibold">NUVEXA</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      Education ERP
                    </span>
                  </div>
                  <p className="text-sm font-medium text-white">Enterprise Institution Management Platform</p>
                  <p className="text-xs text-slate-400 mt-1">Digital diary, attendance, exams, fees, and communication.</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-brand-teal" /> Multi-Product Ecosystem
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Production-Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
