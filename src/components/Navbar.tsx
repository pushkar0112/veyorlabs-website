import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/85 backdrop-blur-md border-b border-brand-border py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center rounded-lg transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-brand-cyan"
            aria-label="VeyoraLabs Home"
          >
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 focus-visible:text-brand-cyan"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#coming-soon"
              onClick={(e) => handleLinkClick(e, '#coming-soon')}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-brand-cyan border border-brand-cyan/30 bg-brand-cyan/10 hover:bg-brand-cyan/20 transition-all duration-200 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <span>Coming Soon</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-brand-cyan"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-4 rounded-2xl bg-brand-surface/95 border border-brand-border backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
            <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-brand-border">
                <a
                  href="#coming-soon"
                  onClick={(e) => handleLinkClick(e, '#coming-soon')}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 hover:bg-brand-cyan/20 transition-colors"
                >
                  <span>Coming Soon</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
