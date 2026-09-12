import React, { useState } from 'react';
import { Mail, Check, Copy, ShieldCheck, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site';

// Brand SVGs for configured social links (only rendered when non-empty URL is provided)
const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M7.85 18.5V10.13H5.06V18.5h2.79Z" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialIconMap = {
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
  Twitter: TwitterIcon,
};

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  // Only render social links that have non-empty URLs (no invented accounts)
  const activeSocialLinks = siteConfig.socialLinks.filter(
    (link) => link.url && link.url.trim().length > 0
  );

  return (
    <section id="contact" className="py-28 relative bg-brand-surface/30 border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-semibold text-brand-teal uppercase tracking-wider mb-5">
          <MessageSquare className="w-3.5 h-3.5 text-brand-teal" />
          <span>{siteConfig.contact.eyebrow}</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          {siteConfig.contact.heading}
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-3 font-medium">
          {siteConfig.contact.subheading}
        </p>
        <p className="text-sm text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          {siteConfig.contact.description}
        </p>

        {/* Email Mailto Action Card */}
        <div className="max-w-lg mx-auto p-6 sm:p-8 rounded-3xl bg-brand-card/90 border border-brand-border shadow-2xl backdrop-blur-xl">
          <div className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-400 mb-4">
            {siteConfig.contact.directEmailLabel}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Primary Mailto Link */}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-medium text-white bg-white/5 border border-brand-border hover:border-brand-cyan/40 hover:bg-brand-cyan/10 transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-brand-cyan"
              aria-label={`Send email to ${siteConfig.contactEmail}`}
            >
              <Mail className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
              <span className="font-mono text-sm tracking-wide text-brand-cyan group-hover:text-white break-all sm:break-normal">
                {siteConfig.contactEmail}
              </span>
            </a>

            {/* Quick Copy Action */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-xs font-semibold text-slate-300 bg-brand-surface border border-brand-border hover:bg-white/10 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-cyan"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-brand-teal" />
                  <span className="text-brand-teal">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Note */}
          <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
            <span>Direct correspondence with Veyora Labs. No tracking or marketing forms.</span>
          </div>
        </div>

        {/* Social Links (Strictly rendered ONLY if real URLs are configured) */}
        {activeSocialLinks.length > 0 && (
          <div className="mt-12">
            <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">
              Verified Channels
            </div>
            <div className="flex items-center justify-center gap-4">
              {activeSocialLinks.map((social) => {
                const SocialIcon = socialIconMap[social.iconName];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-brand-surface border border-brand-border text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 hover:bg-brand-cyan/10 transition-all duration-200"
                    aria-label={`Visit Veyora Labs on ${social.name}`}
                  >
                    <SocialIcon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
