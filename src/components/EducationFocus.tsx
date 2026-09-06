import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig, type FocusArea } from '../config/site';
import { Reveal } from './Reveal';

export const EducationFocus: React.FC = () => (
  <section id="education" className="border-b border-brand-border py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">Where we're exploring</p><h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.03em] text-neutral-900 sm:text-5xl">Education, technology, and human potential.</h2><p className="mt-6 max-w-sm text-base leading-7 text-neutral-600">{siteConfig.educationFocus.subheading}</p></div></Reveal>
        <div className="grid border-t border-brand-border sm:grid-cols-2">
          {siteConfig.educationFocus.areas.map((area: FocusArea, index) => <Reveal key={area.title} delay={index * 70}><article className="group border-b border-brand-border py-6 sm:pr-8"><div className="flex gap-5"><span className="font-mono text-2xl text-brand-cyan/70 transition-transform group-hover:translate-x-1">0{index + 1}</span><div><div className="flex items-center justify-between gap-3"><h3 className="text-lg font-semibold text-neutral-900 transition-transform group-hover:translate-x-1 group-hover:text-brand-cyan">{area.title}</h3><ArrowRight className="h-4 w-4 shrink-0 text-brand-cyan opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" /></div><p className="mt-2 text-sm leading-6 text-neutral-600 transition-colors group-hover:text-neutral-800">{area.description}</p></div></div></article></Reveal>)}
        </div>
      </div>
    </div>
  </section>
);
