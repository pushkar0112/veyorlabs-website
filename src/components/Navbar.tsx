import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' });
    }
  };
  return (
    <header className={`nav-enter fixed inset-x-0 top-0 z-50 border-b border-brand-border transition-colors ${isScrolled ? 'bg-brand-dark/95' : 'bg-brand-dark'}`}>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={(e) => goTo(e, '#home')} aria-label="VeyoraLabs Home"><Logo className="h-9 w-9" /></a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main Navigation">
          {siteConfig.navItems.map((item) => <a key={item.label} href={item.href} onClick={(e) => goTo(e, item.href)} className="nav-link text-sm text-neutral-600 transition-colors hover:text-brand-cyan">{item.label}</a>)}
        </nav>
        <a href="#coming-soon" onClick={(e) => goTo(e, '#coming-soon')} className="hidden items-center gap-2 border border-brand-cyan px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-cyan transition-colors hover:bg-brand-cyan hover:text-white md:inline-flex">
          Coming Soon <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-neutral-700 md:hidden" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileMenuOpen && <div className="border-t border-brand-border bg-brand-dark px-5 pb-6 pt-4 md:hidden">
        <nav className="flex flex-col" aria-label="Mobile Navigation">
          {siteConfig.navItems.map((item) => <a key={item.label} href={item.href} onClick={(e) => goTo(e, item.href)} className="border-b border-brand-border py-3 text-base text-neutral-700">{item.label}</a>)}
          <a href="#coming-soon" onClick={(e) => goTo(e, '#coming-soon')} className="mt-5 inline-flex w-fit items-center gap-2 border border-brand-cyan px-4 py-2 text-sm font-semibold text-brand-cyan">Coming Soon <ArrowUpRight className="h-4 w-4" /></a>
        </nav>
      </div>}
    </header>
  );
};
