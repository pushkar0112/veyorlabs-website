import React from 'react';
import { ArrowRight, CheckCircle2, Video, Bot, School, Check, UserCheck } from 'lucide-react';
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
          <div className="w-full h-48 sm:h-52 rounded-2xl bg-brand-surface border border-brand-border p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-emerald-500/50 transition-colors">
            {/* Top Bar: Session Status */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-800 font-semibold">
                  1-on-1 Live Tuition Session
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-brand-border text-neutral-700 font-medium">
                Grades 1–10
              </span>
            </div>

            {/* Middle: Tutor & Student Interaction Representation */}
            <div className="grid grid-cols-2 gap-2.5 my-auto z-10">
              <div className="p-2.5 rounded-xl bg-white border border-brand-border flex items-center gap-2.5 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold text-neutral-900 truncate">Expert Tutor</div>
                  <div className="text-[9px] text-emerald-700 font-mono flex items-center gap-1">
                    <UserCheck className="w-2.5 h-2.5" /> Concept Guide
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-brand-border flex items-center gap-2.5 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-800 shrink-0">
                  <span className="text-xs font-bold">G7</span>
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold text-neutral-900 truncate">Learner</div>
                  <div className="text-[9px] text-neutral-500 font-mono">Customized Pace</div>
                </div>
              </div>
            </div>

            {/* Bottom Progress Bar: Concept Mastery */}
            <div className="z-10 p-2 rounded-xl bg-white border border-brand-border shadow-sm">
              <div className="flex items-center justify-between text-[10px] mb-1.5">
                <span className="text-neutral-700 font-medium">Individual Learning Path</span>
                <span className="font-mono text-emerald-700 font-semibold">Concept-Focused</span>
              </div>
              <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-[88%]" />
              </div>
            </div>
          </div>
        );

      case 'mybuddy-learn':
        return (
          <div className="w-full h-48 sm:h-52 rounded-2xl bg-brand-surface border border-brand-border p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-teal-500/50 transition-colors">
            {/* Top Bar: AI Model Engine */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-teal-100 border border-teal-200 flex items-center justify-center text-brand-cyan">
                  <Bot className="w-3 h-3" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cyan font-semibold">
                  Adaptive AI Assistant
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-brand-border text-brand-cyan font-medium">
                Intelligent Explanations
              </span>
            </div>

            {/* Middle: Step-by-Step Concept Breakdown Simulation */}
            <div className="space-y-2 my-auto z-10">
              <div className="p-2 rounded-xl bg-white border border-brand-border text-left shadow-sm">
                <div className="text-[10px] text-neutral-500 font-mono mb-0.5 flex items-center gap-1">
                  <Check className="w-3 h-3 text-brand-cyan" /> Student Query Clarification
                </div>
                <div className="text-[11px] font-medium text-neutral-800">
                  Breaking down concept into intuitive, interactive steps...
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                <div className="px-2.5 py-1.5 rounded-lg bg-white border border-brand-border flex items-center gap-1.5 text-[10px] text-neutral-700 shadow-sm">
                  <Check className="w-3 h-3 text-brand-cyan shrink-0" />
                  <span className="truncate">Clear Step Logic</span>
                </div>
                <div className="px-2.5 py-1.5 rounded-lg bg-white border border-brand-border flex items-center gap-1.5 text-[10px] text-neutral-700 shadow-sm">
                  <Check className="w-3 h-3 text-teal-600 shrink-0" />
                  <span className="truncate">Adaptive Feedback</span>
                </div>
              </div>
            </div>

            {/* Bottom: Smart Recommendation */}
            <div className="z-10 flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-white border border-brand-border text-[10px] shadow-sm">
              <span className="text-neutral-500">Interactive Support:</span>
              <span className="font-mono text-brand-cyan font-medium">Concept Clarified</span>
            </div>
          </div>
        );

      case 'nuvexa':
        return (
          <div className="w-full h-48 sm:h-52 rounded-2xl bg-brand-surface border border-brand-border p-4 relative overflow-hidden flex flex-col justify-between group-hover:border-amber-500/50 transition-colors">
            {/* Top Bar: Connected ERP */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800">
                  <School className="w-3 h-3" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-800 font-semibold">
                  Institution Command Hub
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-brand-border text-amber-800 font-medium">
                Multi-Department ERP
              </span>
            </div>

            {/* Middle: 3 Quick Metric Cards */}
            <div className="grid grid-cols-3 gap-2 my-auto z-10">
              <div className="p-2 rounded-xl bg-white border border-brand-border text-center shadow-sm">
                <div className="text-[9px] text-neutral-500 font-mono">Attendance</div>
                <div className="text-xs font-bold text-neutral-900 mt-0.5">Automated</div>
                <div className="text-[8px] text-emerald-700 mt-0.5">Real-time</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-brand-border text-center shadow-sm">
                <div className="text-[9px] text-neutral-500 font-mono">Digital Diary</div>
                <div className="text-xs font-bold text-neutral-900 mt-0.5">Connected</div>
                <div className="text-[8px] text-brand-cyan mt-0.5">Dispatched</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-brand-border text-center shadow-sm">
                <div className="text-[9px] text-neutral-500 font-mono">Operations</div>
                <div className="text-xs font-bold text-neutral-900 mt-0.5">Fees & Exams</div>
                <div className="text-[8px] text-amber-800 mt-0.5">Unified</div>
              </div>
            </div>

            {/* Bottom: Ecosystem status */}
            <div className="z-10 flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-white border border-brand-border text-[10px] shadow-sm">
              <span className="text-neutral-500">Stakeholder Sync:</span>
              <span className="font-mono text-neutral-800 font-semibold">Admin • Teacher • Parent</span>
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
      className="group relative rounded-3xl p-6 sm:p-8 bg-white border border-brand-border hover:border-brand-cyan transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg flex flex-col justify-between cursor-pointer"
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
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border ${product.theme.badgeBg} ${product.theme.badgeText}`}
          >
            {product.badge}
          </span>
          <span className="text-xs text-neutral-500 font-medium">{product.category}</span>
        </div>

        {/* Product Visual Mockup */}
        <div className="mb-6">{renderProductVisual()}</div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-2 group-hover:text-brand-cyan transition-colors">
          {product.name}
        </h3>

        {/* Positioning Statement */}
        <div className="text-sm font-semibold text-brand-cyan mb-3">
          {product.positioning}
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
          {product.description}
        </p>

        {/* Key Capabilities Pills */}
        <div className="mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2.5 font-semibold">
            Key Capabilities
          </div>
          <div className="flex flex-wrap gap-1.5">
            {product.capabilities.slice(0, 5).map((cap) => (
              <span
                key={cap}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brand-surface border border-brand-border text-xs text-neutral-700 font-medium"
              >
                <CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />
                <span>{cap}</span>
              </span>
            ))}
            {product.capabilities.length > 5 && (
              <span className="inline-flex items-center px-2 py-1 rounded-lg bg-brand-surface text-xs text-neutral-500 font-mono">
                +{product.capabilities.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-5 border-t border-brand-border flex items-center justify-between">
        <span className="text-sm font-semibold text-neutral-900 group-hover:text-brand-cyan transition-colors">
          {product.ctaText}
        </span>
        <div className="w-9 h-9 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-neutral-700 group-hover:text-white group-hover:bg-brand-cyan group-hover:border-brand-cyan group-hover:scale-105 transition-all duration-200">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
