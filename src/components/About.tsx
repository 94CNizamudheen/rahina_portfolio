import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const highlights = [

  { label: '15+', desc: 'REST APIs Built' },
  { label: '2+', desc: 'Full-Stack Projects' },
  { label: '100%', desc: 'Self-Driven' },
];

const traits = [
  'Systematic problem solver',
  'Detail-oriented by training',
  'Fast learner, faster builder',
  'Clean code advocate',
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-label="About section"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%)' }}
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
              01 / about
            </p>
            <h2
              className="font-display font-bold text-4xl md:text-5xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              The Engineer{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a78bfa, #00f5d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Behind the Code
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={stagger} className="space-y-6">
              <motion.p
                variants={fadeUp}
                className="text-base leading-relaxed"
                style={{ color: '#94a3b8' }}
              >
                I'm{' '}
                <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Rahina Ummer</span>, a
                Full Stack Developer transitioning from a decade-long career in healthcare
                radiology — where precision, systematic thinking, and working under pressure
                weren't optional, they were survival skills.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base leading-relaxed"
                style={{ color: '#94a3b8' }}
              >
                After 9 years operating advanced diagnostic imaging systems at{' '}
                <span style={{ color: '#e2e8f0' }}>Hamad Medical Corporation in Qatar</span>,
                I made a deliberate pivot into software. Not because I was lost, but because I
                found something that challenged me more — building systems that scale, debug
                logic that breaks, and craft interfaces that feel effortless.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base leading-relaxed"
                style={{ color: '#94a3b8' }}
              >
                Currently deep in the{' '}
                <span style={{ color: '#00f5d4' }}>MERN stack</span> through intensive
                training at Brototype, I've gone from "what is a callback" to building
                e-commerce platforms with JWT auth, REST APIs, and full deployment pipelines.
                The transition taught me that the best engineers are the ones who ask
                the right questions — something nine years of clinical diagnostics drilled
                into me.
              </motion.p>

              <motion.div variants={fadeUp} className="pt-4">
                <p className="font-mono text-xs mb-3" style={{ color: '#64748b' }}>
                  // professional traits
                </p>
                <ul className="space-y-2" role="list">
                  {traits.map((trait) => (
                    <li
                      key={trait}
                      className="flex items-center gap-3 font-mono text-sm"
                      style={{ color: '#94a3b8' }}
                    >
                      <span style={{ color: '#00f5d4' }}>›</span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger} className="space-y-6">
              <motion.div
                variants={fadeUp}
                className="relative rounded-xl p-8 overflow-hidden"
                style={{
                  background: 'rgba(15, 15, 26, 0.6)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid #1e1e2e',
                }}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)',
                    transform: 'translate(20%, -20%)',
                  }}
                />
                <div className="grid grid-cols-3 gap-6">
                  {highlights.map(({ label, desc }) => (
                    <div key={label} className="text-center">
                      <div
                        className="font-display font-bold text-3xl mb-1"
                        style={{
                          background: 'linear-gradient(135deg, #00f5d4, #a78bfa)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {label}
                      </div>
                      <div className="font-mono text-xs" style={{ color: '#64748b' }}>
                        {desc}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-xl p-6"
                style={{
                  background: 'rgba(0, 245, 212, 0.03)',
                  border: '1px solid rgba(0,245,212,0.12)',
                }}
              >
                <p className="font-mono text-xs mb-4" style={{ color: '#00f5d4' }}>
                  // current focus
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'TypeScript', value: 75 },
                    { label: 'System Design', value: 60 },
                    { label: 'DSA & Algorithms', value: 55 },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-mono text-sm" style={{ color: '#94a3b8' }}>{label}</span>
                        <span className="font-mono text-xs" style={{ color: '#64748b' }}>{value}%</span>
                      </div>
                      <div className="h-1 rounded-full" style={{ background: '#1e1e2e' }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: 'linear-gradient(90deg, #00f5d4, #a78bfa)' }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-xl p-6 font-mono"
                style={{
                  background: '#0f0f1a',
                  border: '1px solid #1e1e2e',
                }}
              >
                <p className="text-xs mb-3" style={{ color: '#64748b' }}>rahina.json</p>
                <div className="text-sm space-y-1" style={{ color: '#94a3b8' }}>
                  <div><span style={{ color: '#64748b' }}>{'{'}</span></div>
                  <div className="pl-4">
                    <span style={{ color: '#a78bfa' }}>"location"</span>
                    <span style={{ color: '#64748b' }}>: </span>
                    <span style={{ color: '#00f5d4' }}>"Kerala, India"</span>
                    <span style={{ color: '#64748b' }}>,</span>
                  </div>
                  <div className="pl-4">
                    <span style={{ color: '#a78bfa' }}>"open_to"</span>
                    <span style={{ color: '#64748b' }}>: </span>
                    <span style={{ color: '#00f5d4' }}>"Full-time &amp; Remote"</span>
                    <span style={{ color: '#64748b' }}>,</span>
                  </div>
                  <div className="pl-4">
                    <span style={{ color: '#a78bfa' }}>"stack"</span>
                    <span style={{ color: '#64748b' }}>: </span>
                    <span style={{ color: '#e2e8f0' }}>["MERN", "TypeScript"]</span>
                    <span style={{ color: '#64748b' }}>,</span>
                  </div>
                  <div className="pl-4">
                    <span style={{ color: '#a78bfa' }}>"status"</span>
                    <span style={{ color: '#64748b' }}>: </span>
                    <span style={{ color: '#00f5d4' }}>"actively_building"</span>
                  </div>
                  <div><span style={{ color: '#64748b' }}>{'}'}</span></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
