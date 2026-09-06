import React from 'react';
import { Mail } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-enter border-t border-brand-border bg-brand-surface py-9 text-neutral-600 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-7 md:grid-cols-[1.1fr_1.5fr_1fr] md:gap-10">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-500">{siteConfig.tagline}</p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm" aria-label="Footer Navigation">
            {siteConfig.navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={(e) => goTo(e, item.href)} className="transition-colors hover:text-brand-cyan">{item.label}</a>
            ))}
          </nav>
          <a href={`mailto:${siteConfig.contactEmail}`} className="inline-flex h-fit items-center gap-2 text-sm transition-colors hover:text-brand-cyan" aria-label={`Send email to ${siteConfig.contactEmail}`}>
            <Mail className="h-4 w-4 text-brand-cyan" />{siteConfig.contactEmail}
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-brand-border pt-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>{siteConfig.footer.copyright}</span>
          <span>Static informational website · Privacy-first</span>
        </div>
      </div>
    </footer>
  );
};
