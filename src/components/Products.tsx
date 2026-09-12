import React from 'react';
import { Layers, Sparkles } from 'lucide-react';
import { siteConfig, type ProductItem } from '../config/site';
import { ProductCard } from './ProductCard';

interface ProductsProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProduct }) => {
  return (
    <section id="products" className="py-28 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/10 via-brand-cyan/10 to-brand-indigo/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-5">
            <Layers className="w-3.5 h-3.5 text-brand-cyan" />
            <span>OUR PRODUCTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Technology built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-indigo">
              every layer of education.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From personalized tutoring to AI-powered learning and complete institution management,
            our products are designed to solve real challenges across the education ecosystem.
          </p>
        </div>

        {/* 3 Premium Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* Bottom Portfolio Integration Ribbon */}
        <div className="mt-16 p-6 rounded-2xl bg-brand-surface/70 border border-brand-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Cohesive Multi-Product Architecture
              </div>
              <div className="text-xs text-slate-400">
                Designed to operate independently or interlock within a connected educational environment.
              </div>
            </div>
          </div>

          <a
            href="#solutions"
            className="text-xs font-semibold text-brand-cyan hover:text-white transition-colors flex items-center gap-1.5 uppercase tracking-wider"
          >
            <span>See Ecosystem Solutions</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
