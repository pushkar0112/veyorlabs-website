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

const stakeholderIconMap = {
  GraduationCap: GraduationCap,
  HeartHandshake: HeartHandshake,
  Briefcase: Briefcase,
  Building2: Building2,
};

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-28 relative bg-brand-surface/40 border-y border-brand-border">
      {/* Subtle background radial glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-teal/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-semibold text-brand-teal uppercase tracking-wider mb-5">
            <Network className="w-3.5 h-3.5 text-brand-teal" />
            <span>{siteConfig.solutions.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            {siteConfig.solutions.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {siteConfig.solutions.subheading}
          </p>
        </div>

        {/* 4 Premium Stakeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {siteConfig.solutions.stakeholders.map((item: StakeholderSolution) => {
            const Icon = stakeholderIconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl p-6 bg-brand-card/70 border border-brand-border hover:border-brand-border-highlight transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-cyan group-hover:scale-105 group-hover:border-brand-cyan/40 group-hover:bg-brand-cyan/10 transition-all mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold mb-1">
                    {item.subtitle}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  {item.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Architecture Visual Flow (Requirement 25) */}
        <div className="rounded-3xl p-8 sm:p-10 bg-brand-card/50 border border-brand-border relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-2">
              Connected Architecture
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              The Veyora Labs Ecosystem Flow
            </h4>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tier 1: Veyora Labs Master Brand */}
            <div className="flex justify-center">
              <div className="px-6 py-3 rounded-2xl bg-brand-surface border border-brand-cyan/40 shadow-lg shadow-brand-cyan/10 text-center">
                <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                  Technology Anchor
                </div>
                <div className="text-lg font-extrabold text-white">Veyora Labs</div>
              </div>
            </div>

            {/* Connection arrow */}
            <div className="flex justify-center my-3 text-slate-500">
              <ArrowDown className="w-5 h-5 text-brand-cyan/60 animate-bounce" />
            </div>

            {/* Tier 2: Three Products Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-brand-surface/90 border border-emerald-500/30 text-center">
                <div className="text-xs font-mono text-emerald-400 uppercase font-semibold">
                  Personalized Tutoring
                </div>
                <div className="text-base font-bold text-white mt-1">Zeleon Learn</div>
                <div className="text-[11px] text-slate-400 mt-1">Grades 1–10 • 1-on-1 Tuition</div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-surface/90 border border-brand-cyan/30 text-center">
                <div className="text-xs font-mono text-brand-cyan uppercase font-semibold">
                  AI-Powered Learning
                </div>
                <div className="text-base font-bold text-white mt-1">MyBuddy Learn</div>
                <div className="text-[11px] text-slate-400 mt-1">Concept Clarification • Adaptive AI</div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-surface/90 border border-brand-indigo/30 text-center">
                <div className="text-xs font-mono text-indigo-300 uppercase font-semibold">
                  Institution ERP & Ops
                </div>
                <div className="text-base font-bold text-white mt-1">Nuvexa</div>
                <div className="text-[11px] text-slate-400 mt-1">Digital Diary • Attendance • Admin</div>
              </div>
            </div>

            {/* Connection arrow */}
            <div className="flex justify-center my-3 text-slate-500">
              <ArrowDown className="w-5 h-5 text-brand-teal/60" />
            </div>

            {/* Tier 3: Connected Stakeholders */}
            <div className="p-4 rounded-2xl bg-brand-surface border border-white/[0.08] text-center">
              <div className="text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold mb-1">
                Connected Education Ecosystem
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-semibold text-white">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Students
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> Parents
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" /> Educators
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-violet-400" /> Institutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
