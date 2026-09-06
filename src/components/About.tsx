import React from 'react';
import { siteConfig } from '../config/site';
import { Reveal } from './Reveal';

const principles = [['01', 'Student First', 'Design around real learner needs.'], ['02', 'Technology With Purpose', 'Use technology where it creates meaningful value.'], ['03', 'Built for Tomorrow', 'Explore solutions for the changing world of education.']];

export const About: React.FC = () => (
  <section id="about" className="border-b border-brand-border py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]"><Reveal><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">About VeyoraLabs</p><h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.03em] text-neutral-900 sm:text-5xl">We believe technology should make learning more human, not more complicated.</h2></div></Reveal><Reveal delay={120}><div><p className="max-w-2xl text-xl leading-9 text-neutral-700">{siteConfig.about.paragraphs[0]}</p><p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600">{siteConfig.about.paragraphs[1]}</p><div className="mt-12 grid border-t border-brand-border sm:grid-cols-3">{principles.map(([number, title, description], index) => <div key={number} className="border-b border-brand-border py-5 transition-transform hover:translate-x-1 sm:border-b-0 sm:border-r sm:pr-6 sm:last:border-r-0 sm:last:pl-6" style={{ transitionDelay: `${index * 50}ms` }}><p className="font-mono text-sm text-brand-cyan">{number}</p><h3 className="mt-4 text-sm font-semibold text-neutral-900">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p></div>)}</div></div></Reveal></div></div></section>
);
