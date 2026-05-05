import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '../data/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-border py-3' : 'py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="font-mono text-cyan text-lg font-semibold tracking-tight"
          whileHover={{ scale: 1.02 }}
          aria-label="Rahina Ummer - Back to top"
        >
          <span style={{ color: '#a78bfa' }}>{'<'}</span>
          rahina
          <span style={{ color: '#a78bfa' }}>{'/>'}</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <li key={label}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={`font-mono text-sm tracking-wide transition-colors duration-200 relative group ${
                    isActive ? 'text-cyan' : 'text-muted-light hover:text-cyan'
                  }`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: '#00f5d4' }}
                    />
                  )}
                  <span style={{ color: '#64748b' }}>./</span>
                  {label.toLowerCase()}
                </button>
              </li>
            );
          })}
        </ul>

        <a
          href="/Rahina_Ummer_CV.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-md transition-all duration-200"
          style={{
            border: '1px solid #00f5d4',
            color: '#00f5d4',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,212,0.08)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
          }}
        >
          resume.pdf
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-px w-6"
            style={{ background: '#00f5d4' }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            className="block h-px w-6"
            style={{ background: '#00f5d4' }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-px w-6"
            style={{ background: '#00f5d4' }}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass border-t border-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-4" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="font-mono text-sm text-muted-light hover:text-cyan transition-colors w-full text-left"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}
                  >
                    <span style={{ color: '#64748b' }}>./</span>
                    {label.toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
