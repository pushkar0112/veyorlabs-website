import React from 'react';
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="border-b border-brand-border pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <p className="hero-enter hero-enter-1 mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan"><span className="h-px w-8 bg-brand-cyan" />{siteConfig.hero.badge}</p>
          <h1 className="hero-enter hero-enter-2 max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-neutral-900 sm:text-6xl lg:text-7xl">Building better ways to learn, grow, and prepare for tomorrow.</h1>
          <p className="hero-enter hero-enter-3 mt-8 max-w-xl text-lg leading-8 text-neutral-600">{siteConfig.hero.supportingText}</p>
          <div className="hero-enter hero-enter-4 mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a href="#about" onClick={(e) => goTo(e, '#about')} className="group inline-flex items-center gap-3 bg-brand-cyan px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#194939] hover:shadow-md active:translate-y-0">Explore VeyoraLabs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            <a href="#vision" onClick={(e) => goTo(e, '#vision')} className="group inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold text-neutral-700 hover:text-brand-cyan">Our Vision <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </div>
        </div>
        <div className="hero-enter hero-visual-enter relative min-h-[390px] overflow-hidden border border-brand-border bg-brand-surface p-6 sm:min-h-[470px] sm:p-9" aria-label="An illustrated learning path from curiosity to growth">
          <div className="hero-visual-drift relative h-[338px] sm:h-[398px]">
            <div className="absolute right-[-18%] top-[-20%] h-72 w-72 rounded-full border border-brand-cyan/15" />
            <div className="absolute bottom-[-24%] left-[-18%] h-80 w-80 rounded-full border border-brand-cyan/10" />
            <div className="relative z-10 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              <span>Learning ecosystem</span><span>Veyora / 01</span>
            </div>
            <svg className="absolute inset-x-0 top-12 h-[205px] w-full sm:top-16 sm:h-[250px]" viewBox="0 0 520 280" fill="none" role="img" aria-label="Connected learning stages">
              <path className="hero-path" d="M42 205C93 205 88 78 164 78C236 78 223 212 302 212C378 212 356 66 475 66" stroke="#B7C9BE" strokeWidth="1.5" strokeDasharray="5 7" />
              <path d="M42 205C93 205 88 78 164 78C236 78 223 212 302 212C378 212 356 66 475 66" stroke="#245C4A" strokeOpacity=".22" strokeWidth="7" />
              <circle className="hero-node hero-node-1" cx="42" cy="205" r="7" fill="#F1F0EC" stroke="#245C4A" strokeWidth="2" />
              <circle className="hero-node hero-node-2" cx="164" cy="78" r="7" fill="#F1F0EC" stroke="#245C4A" strokeWidth="2" />
              <circle className="hero-node hero-node-3" cx="302" cy="212" r="7" fill="#F1F0EC" stroke="#245C4A" strokeWidth="2" />
              <circle className="hero-node hero-node-4" cx="475" cy="66" r="7" fill="#245C4A" />
              <g transform="translate(146 48)">
                <rect width="36" height="28" rx="2" fill="#245C4A" />
                <path d="M8 9h20M8 14h14M8 19h18" stroke="#F8F7F4" strokeWidth="1.5" strokeLinecap="round" />
              </g>
              <g transform="translate(284 182)">
                <rect width="36" height="28" rx="2" fill="#F8F7F4" stroke="#245C4A" />
                <path d="m10 15 6 5 10-12" stroke="#245C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
            <div className="absolute inset-x-0 bottom-11 grid grid-cols-4 gap-2 border-t border-brand-border pt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-500 sm:bottom-14 sm:pt-4 sm:text-[11px]">
              <span className="text-brand-cyan">01 Curiosity</span><span>02 Explore</span><span>03 Build</span><span className="text-brand-cyan">04 Grow</span>
            </div>
            <div className="absolute bottom-0 left-0 flex items-center gap-3 text-xs text-neutral-600 sm:text-sm">
              <BookOpen className="h-5 w-5 text-brand-cyan" /><span>A path for curious minds.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
