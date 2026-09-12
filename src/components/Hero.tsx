import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Layers,
  GraduationCap,
  Bot,
  School,
  Video,
  UserCheck,
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('zeleon');

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-32 pb-24 overflow-hidden"
    >
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-brand-cyan/15 via-brand-teal/10 to-brand-indigo/15 blur-[130px] rounded-full" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-brand-cyan/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-brand-violet/10 blur-[90px] rounded-full" />

        {/* Subtle geometric dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface/90 border border-brand-border text-xs font-semibold text-slate-300 shadow-sm mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
          </span>
          <span className="text-slate-400 font-normal">Domain:</span>
          <span className="text-brand-cyan font-semibold tracking-wider">
            {siteConfig.hero.eyebrow}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-5xl mx-auto">
          {siteConfig.hero.headlinePrefix}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-indigo text-glow">
            {siteConfig.hero.headlineHighlight}
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          {siteConfig.hero.supportingText}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#products"
            onClick={(e) => handleScrollTo(e, '#products')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-lg shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <Layers className="w-4 h-4 text-slate-950" />
            <span>{siteConfig.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-brand-surface/80 border border-brand-border hover:bg-white/5 hover:border-slate-500 transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <span>{siteConfig.hero.secondaryCta}</span>
          </a>
        </div>

        {/* Connected Ecosystem Visual (Requirement 5) */}
        <div className="relative max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-brand-surface/90 to-brand-card/90 border border-brand-border shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Veyora Labs Connected Ecosystem Architecture
              </span>
            </div>
            <div className="text-[11px] font-mono text-brand-teal">
              Interlocking Tech Stack
            </div>
          </div>

          {/* Interactive Connected Architecture Canvas */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative items-center">
            {/* 1. Students / Learners */}
            <div className="p-3.5 rounded-2xl bg-brand-card/80 border border-white/[0.08] flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-white">Students & Parents</div>
              <div className="text-[10px] text-slate-400 mt-0.5 font-mono">Learner Needs</div>
            </div>

            {/* 2. Zeleon Learn */}
            <div
              onClick={() => setActiveNode('zeleon')}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-center ${
                activeNode === 'zeleon'
                  ? 'bg-emerald-500/15 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                  : 'bg-brand-card/60 border-white/[0.08] hover:border-emerald-500/30'
              }`}
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2">
                <Video className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-white">Zeleon Learn</div>
              <div className="text-[10px] text-emerald-300 mt-0.5 font-mono">1-on-1 Tuition</div>
            </div>

            {/* 3. MyBuddy Learn */}
            <div
              onClick={() => setActiveNode('mybuddy')}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-center ${
                activeNode === 'mybuddy'
                  ? 'bg-brand-cyan/15 border-brand-cyan/50 shadow-lg shadow-brand-cyan/10'
                  : 'bg-brand-card/60 border-white/[0.08] hover:border-brand-cyan/30'
              }`}
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mb-2">
                <Bot className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-white">MyBuddy Learn</div>
              <div className="text-[10px] text-brand-cyan mt-0.5 font-mono">Adaptive AI</div>
            </div>

            {/* 4. Nuvexa */}
            <div
              onClick={() => setActiveNode('nuvexa')}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-center ${
                activeNode === 'nuvexa'
                  ? 'bg-indigo-500/15 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                  : 'bg-brand-card/60 border-white/[0.08] hover:border-indigo-500/30'
              }`}
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mb-2">
                <School className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-white">Nuvexa</div>
              <div className="text-[10px] text-indigo-300 mt-0.5 font-mono">Institution ERP</div>
            </div>

            {/* 5. Schools & Institutions */}
            <div className="p-3.5 rounded-2xl bg-brand-card/80 border border-white/[0.08] flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-2">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-white">Schools & Educators</div>
              <div className="text-[10px] text-slate-400 mt-0.5 font-mono">Operations & Admin</div>
            </div>
          </div>

          {/* Active Node Detail Strip */}
          <div className="mt-5 p-3.5 rounded-xl bg-brand-surface/80 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-left text-xs gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-cyan shrink-0" />
              <span className="text-slate-300 font-medium">
                {activeNode === 'zeleon' &&
                  'Zeleon Learn: Personalized paid 1-on-1 tutoring for Grades 1–10 designed around individual learning pace.'}
                {activeNode === 'mybuddy' &&
                  'MyBuddy Learn: Intelligent AI learning assistance, concept clarification, and adaptive recommendations.'}
                {activeNode === 'nuvexa' &&
                  'Nuvexa: Connected ERP managing digital diary, student attendance, parent communication, and administration.'}
              </span>
            </div>
            <a
              href="#products"
              onClick={(e) => handleScrollTo(e, '#products')}
              className="text-brand-cyan hover:text-white font-mono shrink-0 flex items-center gap-1 font-semibold"
            >
              <span>Explore Products</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
