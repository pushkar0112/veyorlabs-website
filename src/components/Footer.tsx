import React from 'react';
import { Mail } from 'lucide-react';
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
    <footer className="py-16 bg-brand-dark border-t border-brand-border text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-brand-border">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo showText={true} />
            <p className="mt-3 text-sm text-slate-400 font-medium">
              {siteConfig.tagline}
            </p>
            <p className="mt-1 text-xs text-brand-cyan/90 font-mono">
              {siteConfig.footer.notice}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm" aria-label="Footer Navigation">
            {siteConfig.navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
                {index < siteConfig.navItems.length - 1 && (
                  <span className="text-slate-500 select-none" aria-hidden="true">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Direct Email Link */}
          <div className="flex items-center">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-brand-cyan transition-colors"
              aria-label={`Send email to ${siteConfig.contactEmail}`}
            >
              <Mail className="w-4 h-4 text-brand-teal" />
              <span className="font-mono">{siteConfig.contactEmail}</span>
            </a>
          </div>
        </div>

        {/* Copyright & Disclaimer Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>{siteConfig.footer.copyright}</div>
          <div className="text-slate-400">
            Static Informational Website • Zero Cookies • Privacy-First
          </div>
        </div>
      </div>
    </footer>
  );
};
