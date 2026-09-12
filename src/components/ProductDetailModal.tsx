import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { type ProductItem, siteConfig } from '../config/site';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleConnect = () => {
    onClose();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-brand-surface border border-brand-border p-6 sm:p-10 shadow-2xl z-10 my-auto animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-brand-cyan"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border ${product.theme.badgeBg} ${product.theme.badgeText}`}
          >
            {product.badge}
          </span>
          <span className="text-xs text-slate-400 font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h2 id="modal-product-title" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          {product.name}
        </h2>

        {/* Positioning */}
        <div className="text-base font-semibold text-brand-teal mb-6">
          {product.positioning}
        </div>

        {/* Detailed Narrative */}
        <div className="p-5 rounded-2xl bg-brand-card/60 border border-white/[0.06] mb-8">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* All Key Capabilities Grid */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
            <Layers className="w-4 h-4 text-brand-cyan" />
            <span>Complete Platform Capabilities</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-card/40 border border-white/[0.05]"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem Connection Note */}
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-black/30 border border-brand-cyan/20 mb-8">
          <Sparkles className="w-5 h-5 text-brand-cyan shrink-0" />
          <div className="text-xs text-slate-300">
            Part of the integrated{' '}
            <span className="text-white font-semibold">{siteConfig.name}</span> connected education
            ecosystem. Built for seamless interaction across students, educators, and institutions.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0" />
            <span>Official Veyora Labs Technology Product</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleConnect}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-brand-cyan to-brand-teal hover:opacity-95 shadow-md shadow-brand-cyan/20 transition-all"
            >
              <span>Connect with Veyora Labs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
