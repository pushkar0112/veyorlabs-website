import React from 'react';
import {
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Building2,
  CheckCircle2,
  Network,
  ArrowDown,
} from 'lucide-react';
import { siteConfig, type StakeholderSolution } from '../config/site';
import { Reveal } from './Reveal';

const stakeholderIconMap = {
  GraduationCap: GraduationCap,
  HeartHandshake: HeartHandshake,
  Briefcase: Briefcase,
  Building2: Building2,
};

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-28 relative bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-5 shadow-sm">
              <Network className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{siteConfig.solutions.eyebrow}</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6">
              {siteConfig.solutions.heading}
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {siteConfig.solutions.subheading}
            </p>
          </Reveal>
        </div>

        {/* 4 Premium Stakeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {siteConfig.solutions.stakeholders.map((item: StakeholderSolution, idx: number) => {
            const Icon = stakeholderIconMap[item.iconName];
            return (
              <Reveal key={item.id} delay={100 + idx * 80}>
                <div className="group relative h-full rounded-3xl p-6 bg-white border border-brand-border hover:border-brand-cyan transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-sm hover:shadow-md">
                  <div>
                    {/* Icon Header */}
                    <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-all mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-semibold mb-1">
                      {item.subtitle}
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-border space-y-2">
                    {item.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Brand Architecture Visual Flow (Requirement 25) */}
        <Reveal delay={300}>
          <div className="rounded-3xl p-8 sm:p-10 bg-white border border-brand-border shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold block mb-2">
                Connected Architecture
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-neutral-900">
                The Veyora Labs Ecosystem Flow
              </h4>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Tier 1: Veyora Labs Master Brand */}
              <div className="flex justify-center">
                <div className="px-6 py-3 rounded-2xl bg-brand-surface border border-brand-cyan shadow-sm text-center">
                  <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                    Technology Anchor
                  </div>
                  <div className="text-lg font-extrabold text-neutral-900">Veyora Labs</div>
                </div>
              </div>

              {/* Connection arrow */}
              <div className="flex justify-center my-3 text-neutral-400">
                <ArrowDown className="w-5 h-5 text-brand-cyan" />
              </div>

              {/* Tier 2: Three Products Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-brand-surface border border-emerald-300 text-center">
                  <div className="text-xs font-mono text-emerald-800 uppercase font-semibold">
                    Personalized Tutoring
                  </div>
                  <div className="text-base font-bold text-neutral-900 mt-1">Zeleon Learn</div>
                  <div className="text-[11px] text-neutral-600 mt-1">Grades 1–10 • 1-on-1 Tuition</div>
                </div>

                <div className="p-4 rounded-2xl bg-brand-surface border border-teal-300 text-center">
                  <div className="text-xs font-mono text-brand-cyan uppercase font-semibold">
                    AI-Powered Learning
                  </div>
                  <div className="text-base font-bold text-neutral-900 mt-1">MyBuddy Learn</div>
                  <div className="text-[11px] text-neutral-600 mt-1">Concept Clarification • Adaptive AI</div>
                </div>

                <div className="p-4 rounded-2xl bg-brand-surface border border-amber-300 text-center">
                  <div className="text-xs font-mono text-amber-800 uppercase font-semibold">
                    Institution ERP & Ops
                  </div>
                  <div className="text-base font-bold text-neutral-900 mt-1">Nuvexa</div>
                  <div className="text-[11px] text-neutral-600 mt-1">Digital Diary • Attendance • Admin</div>
                </div>
              </div>

              {/* Connection arrow */}
              <div className="flex justify-center my-3 text-neutral-400">
                <ArrowDown className="w-5 h-5 text-brand-cyan" />
              </div>

              {/* Tier 3: Connected Stakeholders */}
              <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border text-center">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-semibold mb-1">
                  Connected Education Ecosystem
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-semibold text-neutral-800">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" /> Students
                  </span>
                  <span className="text-neutral-400 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-600" /> Parents
                  </span>
                  <span className="text-neutral-400 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600" /> Educators
                  </span>
                  <span className="text-neutral-400 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-neutral-800" /> Institutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
