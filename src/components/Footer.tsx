import { type ReactElement } from 'react';
import { motion } from 'motion/react';
import { SOCIAL_LINKS, NAV_LINKS } from '../data/constants';

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 .774 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

const ICON_MAP: Record<string, ReactElement> = {
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  globe: <GlobeIcon />,
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{ background: '#0a0a0f', borderTop: '1px solid #1e1e2e' }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="font-mono text-xl font-semibold tracking-tight mb-4 inline-block"
              style={{ color: '#00f5d4' }}
            >
              <span style={{ color: '#a78bfa' }}>{'<'}</span>
              rahina
              <span style={{ color: '#a78bfa' }}>{'/>'}</span>
            </a>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>
              Full Stack MERN Developer based in Kerala, India.
              Building interfaces that are precise, purposeful, and performant.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-lg transition-colors"
                  style={{ border: '1px solid #1e1e2e', color: '#64748b', background: 'rgba(255,255,255,0.02)' }}
                  whileHover={{ color: '#00f5d4', borderColor: 'rgba(0,245,212,0.3)', scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {ICON_MAP[link.icon]}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs mb-4" style={{ color: '#64748b' }}>// navigate</p>
            <ul className="space-y-2.5" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="font-mono text-sm transition-colors"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: 0 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#00f5d4'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
                  >
                    <span style={{ color: '#64748b' }}>./</span>
                    {label.toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs mb-4" style={{ color: '#64748b' }}>// reach out</p>
            <div className="space-y-3">
              <a
                href="mailto:raahinaummer@gmail.com"
                className="block font-mono text-sm transition-colors"
                style={{ color: '#94a3b8' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#00f5d4'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
              >
                raahinaummer@gmail.com
              </a>
              <a
                href="tel:+919497232817"
                className="block font-mono text-sm transition-colors"
                style={{ color: '#94a3b8' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#00f5d4'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
              >
                +91-9497232817
              </a>
              <p className="font-mono text-sm" style={{ color: '#64748b' }}>Kerala, India</p>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid #1e1e2e' }}
        >
          <p className="font-mono text-xs" style={{ color: '#64748b' }}>
            © {new Date().getFullYear()} Rahina Ummer. All rights reserved.
          </p>
          <p className="font-mono text-xs" style={{ color: '#64748b' }}>
            Built with React + TypeScript + Tailwind CSS v4
          </p>
        </div>
      </div>
    </footer>
  );
}
