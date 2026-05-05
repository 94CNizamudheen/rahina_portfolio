import { motion } from 'motion/react';
import { SKILLS, type SkillCategory } from '../data/constants';

const COLOR_MAP: Record<SkillCategory['color'], { accent: string; glow: string; bg: string; border: string }> = {
  cyan:   { accent: '#00f5d4', glow: 'rgba(0,245,212,0.15)',   bg: 'rgba(0,245,212,0.04)',   border: 'rgba(0,245,212,0.15)' },
  violet: { accent: '#a78bfa', glow: 'rgba(167,139,250,0.15)', bg: 'rgba(167,139,250,0.04)', border: 'rgba(167,139,250,0.15)' },
  green:  { accent: '#4ade80', glow: 'rgba(74,222,128,0.15)',  bg: 'rgba(74,222,128,0.04)',  border: 'rgba(74,222,128,0.15)' },
  orange: { accent: '#fb923c', glow: 'rgba(251,146,60,0.15)',  bg: 'rgba(251,146,60,0.04)',  border: 'rgba(251,146,60,0.15)' },
  pink:   { accent: '#f472b6', glow: 'rgba(244,114,182,0.15)', bg: 'rgba(244,114,182,0.04)', border: 'rgba(244,114,182,0.15)' },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

function SkillBar({ name, level, accent }: { name: string; level: number; accent: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs" style={{ color: '#94a3b8' }}>{name}</span>
        <span className="font-mono text-xs" style={{ color: '#64748b' }}>{level}%</span>
      </div>
      <div className="h-1 rounded-full" style={{ background: '#1e1e2e' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: accent, willChange: 'width' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  const colors = COLOR_MAP[category.color];

  return (
    <motion.div
      variants={fadeUp}
      className="rounded-xl p-6 h-full"
      style={{
        background: 'rgba(15, 15, 26, 0.6)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${colors.border}`,
        willChange: 'transform',
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 0 30px ${colors.glow}, 0 0 60px ${colors.glow.replace('0.15', '0.05')}`,
        borderColor: colors.accent,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: colors.accent, boxShadow: `0 0 8px ${colors.accent}` }}
          aria-hidden="true"
        />
        <h3 className="font-display font-semibold text-sm tracking-wide uppercase" style={{ color: colors.accent }}>
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {category.skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="w-9 h-9 rounded-lg flex items-center justify-center font-mono text-xs font-semibold"
            style={{ background: colors.bg, color: colors.accent, border: `1px solid ${colors.border}` }}
            whileHover={{ scale: 1.1, boxShadow: `0 0 12px ${colors.glow}` }}
            title={skill.name}
            aria-label={skill.name}
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>

      <div className="space-y-3">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} accent={colors.accent} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      aria-label="Skills section"
      style={{ background: '#0a0a0f' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="font-mono text-sm mb-3" style={{ color: '#00f5d4' }}>
              02 / skills
            </p>
            <h2
              className="font-display font-bold text-4xl md:text-5xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Technical{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00f5d4, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Arsenal
              </span>
            </h2>
            <p className="mt-4 max-w-lg" style={{ color: '#64748b' }}>
              A living stack — growing with every project built and every bug crushed.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {SKILLS.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}

            <motion.div
              variants={fadeUp}
              className="sm:col-span-2 lg:col-span-0 lg:hidden rounded-xl p-6"
              style={{
                background: 'rgba(0,245,212,0.03)',
                border: '1px solid rgba(0,245,212,0.1)',
              }}
            >
              <p className="font-mono text-xs mb-3" style={{ color: '#00f5d4' }}>// always learning</p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'PostgreSQL', 'Docker', 'GraphQL', 'Redis', 'AWS'].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-md"
                    style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b', border: '1px solid #1e1e2e' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 rounded-xl p-6 hidden lg:block"
            style={{
              background: 'rgba(0,245,212,0.03)',
              border: '1px solid rgba(0,245,212,0.1)',
            }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-mono text-xs mb-2" style={{ color: '#00f5d4' }}>// currently exploring</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'PostgreSQL', 'Docker', 'GraphQL', 'Redis', 'AWS S3'].map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-3 py-1.5 rounded-md"
                      style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b', border: '1px solid #1e1e2e' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs" style={{ color: '#64748b' }}>stack depth</p>
                <p className="font-display font-bold text-2xl mt-1" style={{ color: '#00f5d4' }}>18+</p>
                <p className="font-mono text-xs" style={{ color: '#64748b' }}>technologies</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
