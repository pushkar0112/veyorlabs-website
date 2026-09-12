import React from 'react';
import { Layers, Sparkles } from 'lucide-react';
import { siteConfig, type ProductItem } from '../config/site';
import { ProductCard } from './ProductCard';
import { Reveal } from './Reveal';

interface ProductsProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProduct }) => {
  return (
    <section id="products" className="py-28 relative overflow-hidden bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-5 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-brand-cyan" />
              <span>OUR PRODUCTS</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
              Technology built for{' '}
              <span className="text-brand-cyan">
                every layer of education.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              From personalized tutoring to AI-powered learning and complete institution management,
              our products are designed to solve real challenges across the education ecosystem.
            </p>
          </Reveal>
        </div>

        {/* 3 Premium Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.products.map((product, idx) => (
            <Reveal key={product.id} delay={150 + idx * 100}>
              <ProductCard
                product={product}
                onSelectProduct={onSelectProduct}
              />
            </Reveal>
          ))}
        </div>

        {/* Bottom Portfolio Integration Ribbon */}
        <Reveal delay={400}>
          <div className="mt-16 p-6 rounded-3xl bg-white border border-brand-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-cyan shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-900">
                  Cohesive Multi-Product Architecture
                </div>
                <div className="text-xs text-neutral-500">
                  Designed to operate independently or interlock within a connected educational environment.
                </div>
              </div>
            </div>

            <a
              href="#solutions"
              className="text-xs font-semibold text-brand-cyan hover:text-neutral-900 transition-colors flex items-center gap-1.5 uppercase tracking-wider"
            >
              <span>See Ecosystem Solutions</span>
              <span>&rarr;</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
