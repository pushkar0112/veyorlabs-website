import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const WhatWeAreExploring: React.FC = () => (
  <section id="vision" className="bg-[#E6EEE8] py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr]"><Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">Our point of view</p></Reveal><Reveal delay={120}><div><h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-neutral-900 sm:text-6xl">Technology should expand what education makes possible.</h2><p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-700">We are exploring new ways technology can support more personal, accessible, engaging, and meaningful learning experiences.</p><a href="#about" className="group mt-10 inline-flex items-center gap-2 border-b border-brand-cyan pb-2 text-sm font-semibold text-brand-cyan hover:text-neutral-900">Discover our vision <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a></div></Reveal></div></div>
  </section>
);
