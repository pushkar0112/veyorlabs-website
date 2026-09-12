import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Video, Bot, School, Check, UserCheck } from 'lucide-react';
import { type ProductItem } from '../config/site';

interface ProductCardProps {
  product: ProductItem;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  // Product specific abstract UI visuals
  const renderProductVisual = () => {
    switch (product.id) {
      case 'zeleon-learn':
        return (
          <div className="w-full h-48 sm:h-52 rounded-2xl bg-brand-surface/90 border border-white/[0.08] p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-emerald-500/40 transition-colors">
            {/* Ambient inner glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Top Bar: Session Status */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                  1-on-1 Live Tuition Session
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                Grades 1–10
              </span>
            </div>

            {/* Middle: Tutor & Student Interaction Representation */}
            <div className="grid grid-cols-2 gap-2.5 my-auto z-10">
              <div className="p-2.5 rounded-xl bg-brand-card/80 border border-white/[0.06] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold text-white truncate">Expert Tutor</div>
                  <div className="text-[9px] text-emerald-400 font-mono flex items-center gap-1">
                    <UserCheck className="w-2.5 h-2.5" /> Concept Guide
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-brand-card/80 border border-white/[0.06] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                  <span className="text-xs font-bold">G7</span>
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold text-white truncate">Learner</div>
                  <div className="text-[9px] text-slate-400 font-mono">Customized Pace</div>
                </div>
              </div>
            </div>

            {/* Bottom Progress Bar: Concept Mastery */}
            <div className="z-10 p-2 rounded-xl bg-black/20 border border-white/[0.04]">
              <div className="flex items-center justify-between text-[10px] mb-1.5">
                <span className="text-slate-300 font-medium">Individual Learning Path</span>
                <span className="font-mono text-emerald-400 font-semibold">Concept-Focused</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[88%]" />
              </div>
            </div>
          </div>
        );

      case 'mybuddy-learn':
        return (
          <div className="w-full h-48 sm:h-52 rounded-2xl bg-brand-surface/90 border border-white/[0.08] p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-cyan-500/40 transition-colors">
            {/* Ambient inner glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />

            {/* Top Bar: AI Model Engine */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
                  <Bot className="w-3 h-3" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cyan font-semibold">
                  Adaptive AI Assistant
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                Intelligent Explanations
              </span>
            </div>

            {/* Middle: Step-by-Step Concept Breakdown Simulation */}
            <div className="space-y-2 my-auto z-10">
              <div className="p-2 rounded-xl bg-brand-card/90 border border-white/[0.06] text-left">
                <div className="text-[10px] text-slate-400 font-mono mb-0.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-cyan" /> Student Query Clarification
                </div>
                <div className="text-[11px] font-medium text-slate-200">
                  Breaking down concept into intuitive, interactive steps...
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                <div className="px-2.5 py-1.5 rounded-lg bg-black/30 border border-brand-cyan/20 flex items-center gap-1.5 text-[10px] text-slate-300">
                  <Check className="w-3 h-3 text-brand-cyan shrink-0" />
                  <span className="truncate">Clear Step Logic</span>
                </div>
                <div className="px-2.5 py-1.5 rounded-lg bg-black/30 border border-brand-cyan/20 flex items-center gap-1.5 text-[10px] text-slate-300">
                  <Sparkles className="w-3 h-3 text-sky-400 shrink-0" />
                  <span className="truncate">Adaptive Feedback</span>
                </div>
              </div>
            </div>

            {/* Bottom: Smart Recommendation */}
            <div className="z-10 flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-black/20 border border-white/[0.04] text-[10px]">
              <span className="text-slate-400">Interactive Support:</span>
              <span className="font-mono text-brand-cyan font-medium">Concept Clarified</span>
            </div>
          </div>
        );

      case 'nuvexa':
        return (
          <div className="w-full h-48 sm:h-52 rounded-2xl bg-brand-surface/90 border border-white/[0.08] p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-indigo-500/40 transition-colors">
            {/* Ambient inner glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Top Bar: Connected ERP */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <School className="w-3 h-3" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300 font-semibold">
                  Institution Command Hub
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                Multi-Department ERP
              </span>
            </div>

            {/* Middle: 3 Quick Metric Cards */}
            <div className="grid grid-cols-3 gap-2 my-auto z-10">
              <div className="p-2 rounded-xl bg-brand-card/90 border border-white/[0.06] text-center">
                <div className="text-[9px] text-slate-400 font-mono">Attendance</div>
                <div className="text-xs font-bold text-white mt-0.5">Automated</div>
                <div className="text-[8px] text-emerald-400 mt-0.5">Real-time</div>
              </div>
              <div className="p-2 rounded-xl bg-brand-card/90 border border-white/[0.06] text-center">
                <div className="text-[9px] text-slate-400 font-mono">Digital Diary</div>
                <div className="text-xs font-bold text-white mt-0.5">Connected</div>
                <div className="text-[8px] text-indigo-400 mt-0.5">Dispatched</div>
              </div>
              <div className="p-2 rounded-xl bg-brand-card/90 border border-white/[0.06] text-center">
                <div className="text-[9px] text-slate-400 font-mono">Operations</div>
                <div className="text-xs font-bold text-white mt-0.5">Fees & Exams</div>
                <div className="text-[8px] text-brand-cyan mt-0.5">Unified</div>
              </div>
            </div>

            {/* Bottom: Ecosystem status */}
            <div className="z-10 flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-black/20 border border-white/[0.04] text-[10px]">
              <span className="text-slate-400">Stakeholder Sync:</span>
              <span className="font-mono text-indigo-300 font-semibold">Admin • Teacher • Parent</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-brand-card/85 to-brand-surface/90 border border-brand-border hover:border-brand-border-highlight transition-all duration-300 hover:-translate-y-2 shadow-2xl hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] flex flex-col justify-between cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectProduct(product);
        }
      }}
      aria-label={`View details for ${product.name}`}
    >
      {/* Top radiant light stripe */}
      <div
        className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border ${product.theme.badgeBg} ${product.theme.badgeText}`}
          >
            {product.badge}
          </span>
          <span className="text-xs text-slate-400 font-medium">{product.category}</span>
        </div>

        {/* Product Visual Mockup */}
        <div className="mb-6">{renderProductVisual()}</div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-brand-cyan transition-colors">
          {product.name}
        </h3>

        {/* Positioning Statement */}
        <div className="text-sm font-semibold text-brand-teal/90 mb-3">
          {product.positioning}
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
          {product.description}
        </p>

        {/* Key Capabilities Pills */}
        <div className="mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
            Key Capabilities
          </div>
          <div className="flex flex-wrap gap-1.5">
            {product.capabilities.slice(0, 5).map((cap) => (
              <span
                key={cap}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-slate-300 font-medium"
              >
                <CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />
                <span>{cap}</span>
              </span>
            ))}
            {product.capabilities.length > 5 && (
              <span className="inline-flex items-center px-2 py-1 rounded-lg bg-white/[0.02] text-xs text-slate-400 font-mono">
                +{product.capabilities.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">
          {product.ctaText}
        </span>
        <div className="w-9 h-9 rounded-xl bg-brand-surface border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-slate-950 group-hover:bg-brand-cyan group-hover:border-brand-cyan group-hover:scale-105 transition-all duration-200">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
