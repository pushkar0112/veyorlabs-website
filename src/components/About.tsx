import React from 'react';
import { Info, Compass, Cpu, Layers, CheckCircle2, Shield } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-brand-surface border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-6 shadow-sm">
                <Info className="w-3.5 h-3.5" />
                <span>{siteConfig.about.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-8 leading-tight">
                {siteConfig.about.heading}
              </h2>
            </Reveal>

            <div className="space-y-6 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {siteConfig.about.paragraphs.map((para, idx) => (
                <Reveal key={idx} delay={150 + idx * 80}>
                  <p className={idx === 0 ? 'text-neutral-900 font-medium' : 'text-neutral-600'}>
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Core Values / Pillar Badges */}
            <Reveal delay={400}>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-brand-border">
                <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                  <Compass className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span className="font-medium">Human-Centric Design</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                  <Cpu className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="font-medium">Intelligent Systems</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                  <Shield className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span className="font-medium">Institutional Trust</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Architectural Matrix Showcase Card */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="relative rounded-3xl p-8 bg-white border border-brand-border shadow-xl">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cyan font-semibold">
                    Product Architecture
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-emerald-700 font-mono font-semibold">ZELEON LEARN</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                        Live Tutoring
                      </span>
                    </div>
                    <p className="text-sm font-medium text-neutral-900">1-on-1 Tuition Platform for Grades 1–10</p>
                    <p className="text-xs text-neutral-500 mt-1">Personalized pacing, individual attention, concept focus.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-brand-cyan font-mono font-semibold">MYBUDDY LEARN</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                        AI Platform
                      </span>
                    </div>
                    <p className="text-sm font-medium text-neutral-900">Intelligent AI-Powered Learning Application</p>
                    <p className="text-xs text-neutral-500 mt-1">Concept clarification, explanations, and adaptive assistance.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-amber-800 font-mono font-semibold">NUVEXA</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                        Education ERP
                      </span>
                    </div>
                    <p className="text-sm font-medium text-neutral-900">Enterprise Institution Management Platform</p>
                    <p className="text-xs text-neutral-500 mt-1">Digital diary, attendance, exams, fees, and communication.</p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-brand-border flex items-center justify-between text-xs text-neutral-600">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-brand-cyan" /> Multi-Product Ecosystem
                  </span>
                  <span className="flex items-center gap-1 text-emerald-700 font-mono font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Production-Ready
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
