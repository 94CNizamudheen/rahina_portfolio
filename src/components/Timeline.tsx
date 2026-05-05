import { motion } from 'motion/react';
import { TIMELINE, type TimelineEntry } from '../data/constants';

const TYPE_CONFIG: Record<TimelineEntry['type'], { label: string; color: string; bg: string; border: string }> = {
  training: { label: 'Training', color: '#00f5d4', bg: 'rgba(0,245,212,0.08)', border: 'rgba(0,245,212,0.2)' },
  work:     { label: 'Work',     color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.2)' },
  education:{ label: 'Education',color: '#fb923c', bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.2)' },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

function BriefcaseIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function CodeIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function TimelineCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  const config = TYPE_CONFIG[entry.type];
  const isLeft = index % 2 === 0;
  const variants = isLeft ? slideLeft : slideRight;

  return (
    <motion.div
      variants={variants}
      className="relative grid md:grid-cols-2 gap-4 md:gap-8 items-start"
      role="listitem"
    >
      <div
        className={`md:col-span-1 ${isLeft ? 'md:order-1' : 'md:order-2'}`}
        aria-hidden={!isLeft}
      />

      <div className={`md:col-span-1 ${isLeft ? 'md:order-2' : 'md:order-1'} relative`}>
        <div
          className="hidden md:block absolute top-5 w-8 h-px"
          style={{
            background: `linear-gradient(${isLeft ? '90deg' : '270deg'}, ${config.color}, transparent)`,
            ...(isLeft ? { right: '100%' } : { left: '100%' }),
          }}
          aria-hidden="true"
        />

        <motion.div
          className="rounded-xl p-6"
          style={{
            background: 'rgba(15, 15, 26, 0.8)',
            backdropFilter: 'blur(12px)',
            border: `1px solid ${config.border}`,
            willChange: 'transform',
          }}
          whileHover={{
            scale: 1.01,
            boxShadow: `0 0 30px ${config.bg}`,
            borderColor: config.color,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between gap-3 mb-3">
            <span
              className="font-mono text-xs px-2 py-1 rounded"
              style={{ background: config.bg, color: config.color, border: `1px solid ${config.border}` }}
            >
              {config.label}
            </span>
            <div className="flex items-center gap-1" style={{ color: '#64748b' }}>
              <CalendarIcon />
              <span className="font-mono text-xs">{entry.period}</span>
            </div>
          </div>

          <h3 className="font-display font-bold text-lg mb-1" style={{ color: '#e2e8f0' }}>
            {entry.role}
          </h3>

          <div className="flex items-center gap-4 mb-4">
            <span className="font-semibold text-sm" style={{ color: config.color }}>
              {entry.company}
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: '#64748b' }}>
              <MapPinIcon />
              {entry.location}
            </span>
          </div>

          <ul className="space-y-2" role="list">
            {entry.description.map((desc) => (
              <li
                key={desc}
                className="flex items-start gap-2 text-sm leading-relaxed"
                style={{ color: '#94a3b8' }}
              >
                <span
                  className="shrink-0 mt-2 w-1 h-1 rounded-full"
                  style={{ background: config.color }}
                  aria-hidden="true"
                />
                {desc}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section
      id="experience"
      className="section-padding"
      aria-label="Experience timeline section"
      style={{ background: '#0a0a0f' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.div variants={slideLeft} className="mb-16">
            <p className="font-mono text-sm mb-3" style={{ color: '#00f5d4' }}>
              04 / experience
            </p>
            <h2
              className="font-display font-bold text-4xl md:text-5xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              The{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00f5d4, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Journey
              </span>
            </h2>
            <p className="mt-4 max-w-lg" style={{ color: '#64748b' }}>
              From diagnostic imaging suites in Doha to full-stack deployments —
              every chapter built the engineer I am today.
            </p>
          </motion.div>

          <div className="relative" role="list" aria-label="Career timeline">
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{
                background: 'linear-gradient(180deg, transparent, #1e1e2e 10%, #1e1e2e 90%, transparent)',
              }}
              aria-hidden="true"
            />

            <div className="space-y-10">
              {TIMELINE.map((entry, index) => (
                <div key={entry.id} className="relative">
                  <motion.div
                    variants={{ hidden: { scale: 0, opacity: 0 }, show: { scale: 1, opacity: 1 } }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="hidden md:flex absolute left-1/2 top-5 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center"
                    style={{
                      background: TYPE_CONFIG[entry.type].bg,
                      border: `2px solid ${TYPE_CONFIG[entry.type].color}`,
                      boxShadow: `0 0 16px ${TYPE_CONFIG[entry.type].bg}`,
                    }}
                    aria-hidden="true"
                  >
                    {entry.type === 'training' ? (
                      <CodeIcon color={TYPE_CONFIG[entry.type].color} />
                    ) : (
                      <BriefcaseIcon color={TYPE_CONFIG[entry.type].color} />
                    )}
                  </motion.div>

                  <TimelineCard entry={entry} index={index} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
