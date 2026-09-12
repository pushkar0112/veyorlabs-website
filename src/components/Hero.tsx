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
      className="hero-enter relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-brand-teal/10 via-brand-cyan/10 to-brand-border/30 blur-[130px] rounded-full" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-brand-cyan/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-brand-teal/10 blur-[90px] rounded-full" />

        {/* Subtle geometric dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(#245C4A 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Badge */}
        <div className="hero-enter-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-xs font-semibold text-neutral-700 shadow-sm mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
          </span>
          <span className="text-neutral-500 font-normal">Domain:</span>
          <span className="text-brand-cyan font-semibold tracking-wider">
            {siteConfig.hero.eyebrow}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-enter-2 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.08] mb-6 max-w-5xl mx-auto">
          {siteConfig.hero.headlinePrefix}{' '}
          <span className="text-brand-cyan">
            {siteConfig.hero.headlineHighlight}
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="hero-enter-3 text-base sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          {siteConfig.hero.supportingText}
        </p>

        {/* CTA Buttons */}
        <div className="hero-enter-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#products"
            onClick={(e) => handleScrollTo(e, '#products')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm text-white bg-brand-cyan hover:bg-brand-cyan/90 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <Layers className="w-4 h-4 text-white" />
            <span>{siteConfig.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>

          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-neutral-800 bg-white border border-brand-border hover:bg-brand-surface hover:border-neutral-400 transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-cyan shadow-sm"
          >
            <span>{siteConfig.hero.secondaryCta}</span>
          </a>
        </div>

        {/* Connected Ecosystem Visual (Requirement 5) */}
        <div className="hero-visual-enter relative max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-white border border-brand-border shadow-lg">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-border">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold">
                Veyora Labs Connected Ecosystem Architecture
              </span>
            </div>
            <div className="text-[11px] font-mono text-brand-cyan font-medium">
              Interlocking Tech Stack
            </div>
          </div>

          {/* Interactive Connected Architecture Canvas */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative items-center">
            {/* 1. Students / Learners */}
            <div className="p-3.5 rounded-2xl bg-brand-surface border border-brand-border flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-cyan mb-2">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-neutral-800">Students & Parents</div>
              <div className="text-[10px] text-neutral-500 mt-0.5 font-mono">Learner Needs</div>
            </div>

            {/* 2. Zeleon Learn */}
            <div
              onClick={() => setActiveNode('zeleon')}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-center ${
                activeNode === 'zeleon'
                  ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                  : 'bg-white border-brand-border hover:border-emerald-400'
              }`}
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-2">
                <Video className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-neutral-900">Zeleon Learn</div>
              <div className="text-[10px] text-emerald-700 mt-0.5 font-mono">1-on-1 Tuition</div>
            </div>

            {/* 3. MyBuddy Learn */}
            <div
              onClick={() => setActiveNode('mybuddy')}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-center ${
                activeNode === 'mybuddy'
                  ? 'bg-teal-50 border-brand-cyan shadow-sm'
                  : 'bg-white border-brand-border hover:border-teal-400'
              }`}
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-teal-100 border border-teal-300 flex items-center justify-center text-brand-cyan mb-2">
                <Bot className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-neutral-900">MyBuddy Learn</div>
              <div className="text-[10px] text-brand-cyan mt-0.5 font-mono">Adaptive AI</div>
            </div>

            {/* 4. Nuvexa */}
            <div
              onClick={() => setActiveNode('nuvexa')}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-center ${
                activeNode === 'nuvexa'
                  ? 'bg-amber-50 border-amber-600 shadow-sm'
                  : 'bg-white border-brand-border hover:border-amber-400'
              }`}
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mb-2">
                <School className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-neutral-900">Nuvexa</div>
              <div className="text-[10px] text-amber-800 mt-0.5 font-mono">Institution ERP</div>
            </div>

            {/* 5. Schools & Institutions */}
            <div className="p-3.5 rounded-2xl bg-brand-surface border border-brand-border flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-neutral-700 mb-2">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-neutral-800">Schools & Educators</div>
              <div className="text-[10px] text-neutral-500 mt-0.5 font-mono">Operations & Admin</div>
            </div>
          </div>

          {/* Active Node Detail Strip */}
          <div className="mt-5 p-3.5 rounded-xl bg-brand-surface border border-brand-border flex flex-col sm:flex-row items-center justify-between text-left text-xs gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-cyan shrink-0" />
              <span className="text-neutral-700 font-medium">
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
              className="text-brand-cyan hover:text-neutral-900 font-mono shrink-0 flex items-center gap-1 font-semibold"
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
