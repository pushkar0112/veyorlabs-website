import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-neutral-900 flex flex-col items-center justify-center p-6 selection:bg-brand-cyan/20 selection:text-brand-cyan">
      <main className="relative z-10 w-full max-w-lg border border-brand-border bg-white p-8 text-center sm:p-12">
        <div className="inline-flex justify-center mb-8">
          <a href="/" className="transition-transform hover:scale-105" aria-label="Back to VeyoraLabs Home">
            <Logo showText={true} />
          </a>
        </div>

        <div className="mb-4 text-6xl font-semibold tracking-tight text-brand-cyan sm:text-7xl">
          404
        </div>

        <h1 className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Page not found.
        </h1>

        <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-neutral-600 sm:text-base">
          The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-brand-cyan px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#194939] focus-visible:ring-2 focus-visible:ring-brand-cyan"
        >
          <span>Back to VeyoraLabs</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </main>
    </div>
  );
};

export default NotFound;
