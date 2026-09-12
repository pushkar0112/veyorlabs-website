import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Layers } from 'lucide-react';
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
      className={`nav-enter fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-border py-3.5 shadow-sm'
          : 'bg-brand-dark/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center rounded-xl transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-brand-cyan"
            aria-label="Veyora Labs Home"
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
                className="nav-link text-sm font-medium text-neutral-700 hover:text-brand-cyan transition-colors duration-200 focus-visible:text-brand-cyan"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA: Explore Products */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#products"
              onClick={(e) => handleLinkClick(e, '#products')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase text-white bg-brand-cyan hover:bg-brand-cyan/90 transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-700 hover:text-brand-cyan hover:bg-black/5 transition-colors focus-visible:ring-2 focus-visible:ring-brand-cyan"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-4 rounded-2xl bg-white border border-brand-border shadow-xl">
            <nav className="flex flex-col gap-2.5" aria-label="Mobile Navigation">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="px-3.5 py-2.5 rounded-xl text-base font-medium text-neutral-800 hover:text-brand-cyan hover:bg-black/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-brand-border">
                <a
                  href="#products"
                  onClick={(e) => handleLinkClick(e, '#products')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-brand-cyan hover:bg-brand-cyan/90 transition-all"
                >
                  <Layers className="w-4 h-4" />
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
