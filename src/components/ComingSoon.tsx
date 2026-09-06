import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Reveal } from './Reveal';

export const ComingSoon: React.FC = () => <section id="coming-soon" className="border-b border-brand-border py-20 sm:py-24"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between"><Reveal><div className="max-w-2xl"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">{siteConfig.comingSoon.badge}</p><h2 className="text-3xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-4xl">{siteConfig.comingSoon.heading}</h2><p className="mt-5 text-lg leading-8 text-neutral-600">{siteConfig.comingSoon.description}</p></div></Reveal><Reveal delay={120}><a href="#contact" className="group inline-flex w-fit items-center gap-2 border-b border-brand-cyan pb-2 text-sm font-semibold text-brand-cyan hover:text-neutral-900">Discover what's next <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a></Reveal></div></section>;
