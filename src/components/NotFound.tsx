import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Luminous Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[320px] bg-gradient-to-tr from-brand-cyan/15 via-brand-teal/10 to-brand-indigo/15 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-lg w-full p-8 sm:p-12 rounded-3xl bg-brand-card/70 border border-brand-border backdrop-blur-xl text-center shadow-2xl shadow-black/50">
        <div className="inline-flex justify-center mb-8">
          <a href="/" className="transition-transform hover:scale-105" aria-label="Back to VeyoraLabs Home">
            <Logo showText={true} />
          </a>
        </div>

        <div className="text-6xl sm:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-indigo">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
          Page not found.
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-brand-cyan to-brand-teal hover:opacity-95 transition-all duration-200 shadow-lg shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-cyan"
        >
          <span>Back to VeyoraLabs</span>
          <ArrowRight className="w-4 h-4 text-slate-950" />
        </a>
      </main>
    </div>
  );
};

export default NotFound;
