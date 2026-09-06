import React, { useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = async () => { try { await navigator.clipboard.writeText(siteConfig.contactEmail); setCopied(true); window.setTimeout(() => setCopied(false), 2500); } catch (error) { console.error('Unable to copy the contact email.', error); } };
  return (
    <section id="contact" className="border-t border-brand-border bg-brand-dark py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">{siteConfig.contact.badge}</p>
              <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.03em] text-neutral-900 sm:text-5xl">{siteConfig.contact.heading}</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="max-w-xl text-lg leading-8 text-neutral-600">{siteConfig.contact.description}</p>
              <div className="contact-email-panel mt-8 border border-brand-border bg-brand-surface p-4 sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <a href={`mailto:${siteConfig.contactEmail}`} className="group inline-flex min-w-0 items-center gap-3 text-base font-medium text-neutral-900 hover:text-brand-cyan" aria-label={`Send email to ${siteConfig.contactEmail}`}>
                    <Mail className="h-5 w-5 shrink-0 text-brand-cyan transition-transform group-hover:-translate-y-0.5" />
                    <span className="truncate">{siteConfig.contactEmail}</span>
                  </a>
                  <button type="button" onClick={handleCopyEmail} className="inline-flex w-fit shrink-0 items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900" aria-label="Copy email address to clipboard">
                    {copied ? <Check className="h-4 w-4 text-brand-cyan" /> : <Copy className="h-4 w-4" />}
                    {copied ? 'Copied' : 'Copy email'}
                  </button>
                </div>
              </div>
              <p className="mt-4 text-xs text-neutral-500">Direct email only. No forms, cookies, or personal data stored.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
