import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 bg-brand-dark border-t border-brand-border text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-border">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo showText={true} />
            <p className="mt-4 text-sm text-slate-300 font-medium leading-relaxed max-w-sm">
              {siteConfig.footer.tagline}
            </p>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.footer.description}
            </p>
            <div className="mt-6">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-surface border border-brand-border text-xs text-slate-300 hover:text-white hover:border-brand-cyan/40 transition-colors"
                aria-label={`Send email to ${siteConfig.contactEmail}`}
              >
                <Mail className="w-3.5 h-3.5 text-brand-teal" />
                <span className="font-mono">{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm" aria-label="Footer Navigation">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="hover:text-white hover:text-brand-cyan transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Our Products
            </div>
            <ul className="space-y-3 text-sm">
              {siteConfig.products.map((product) => (
                <li key={product.id}>
                  <a
                    href="#products"
                    onClick={(e) => handleScrollTo(e, '#products')}
                    className="group block hover:text-white transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-200 group-hover:text-brand-cyan transition-colors">
                        {product.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-cyan" />
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{product.category}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Platform Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>{siteConfig.footer.copyright}</div>
          <div className="text-slate-400 text-center sm:text-right font-mono">
            {siteConfig.footer.disclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
};
