import { motion } from 'motion/react';
import { PROJECTS, type Project } from '../data/constants';

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={fadeUp}
      className="relative rounded-2xl overflow-hidden group"
      style={{
        background: 'rgba(15, 15, 26, 0.8)',
        backdropFilter: 'blur(12px)',
        border: '1px solid #1e1e2e',
        willChange: 'transform',
      }}
      whileHover={{
        boxShadow: isEven
          ? '0 0 40px rgba(0,245,212,0.12), 0 0 80px rgba(0,245,212,0.05), inset 0 0 40px rgba(0,245,212,0.02)'
          : '0 0 40px rgba(167,139,250,0.12), 0 0 80px rgba(167,139,250,0.05), inset 0 0 40px rgba(167,139,250,0.02)',
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 rounded-2xl pointer-events-none"
        style={{
          background: isEven
            ? 'linear-gradient(135deg, rgba(0,245,212,0.03) 0%, transparent 60%)'
            : 'linear-gradient(135deg, rgba(167,139,250,0.03) 0%, transparent 60%)',
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute top-0 left-0 right-0 h-px opacity-0"
        style={{
          background: isEven
            ? 'linear-gradient(90deg, transparent, #00f5d4, transparent)'
            : 'linear-gradient(90deg, transparent, #a78bfa, transparent)',
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />

      <div className="relative p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="font-mono text-xs px-2 py-1 rounded"
                style={{
                  background: isEven ? 'rgba(0,245,212,0.08)' : 'rgba(167,139,250,0.08)',
                  color: isEven ? '#00f5d4' : '#a78bfa',
                  border: `1px solid ${isEven ? 'rgba(0,245,212,0.2)' : 'rgba(167,139,250,0.2)'}`,
                }}
              >
                {project.featured ? 'featured' : 'project'}
              </span>
              <span className="font-mono text-xs" style={{ color: '#64748b' }}>
                0{project.id}
              </span>
            </div>
            <h3
              className="font-display font-bold text-xl md:text-2xl"
              style={{ color: '#e2e8f0' }}
            >
              {project.title}
            </h3>
          </div>

          <div className="flex gap-3 shrink-0">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="p-2 rounded-lg transition-colors"
                style={{ border: '1px solid #1e1e2e', color: '#64748b', background: 'rgba(255,255,255,0.02)' }}
                whileHover={{ color: '#e2e8f0', borderColor: '#64748b', scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitHubIcon />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live`}
                className="p-2 rounded-lg transition-colors"
                style={{
                  border: `1px solid ${isEven ? 'rgba(0,245,212,0.3)' : 'rgba(167,139,250,0.3)'}`,
                  color: isEven ? '#00f5d4' : '#a78bfa',
                  background: isEven ? 'rgba(0,245,212,0.05)' : 'rgba(167,139,250,0.05)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLinkIcon />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-6" style={{ color: '#94a3b8' }}>
          {project.description}
        </p>

        <div className="mb-6">
          <p className="font-mono text-xs mb-3" style={{ color: '#64748b' }}>
            // highlights
          </p>
          <ul className="space-y-2" role="list">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm"
                style={{ color: '#94a3b8' }}
              >
                <span
                  className="mt-0.5 shrink-0 w-1 h-1 rounded-full"
                  style={{ background: isEven ? '#00f5d4' : '#a78bfa', marginTop: '8px' }}
                  aria-hidden="true"
                />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs mb-3" style={{ color: '#64748b' }}>// stack</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2.5 py-1 rounded-md"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  color: '#94a3b8',
                  border: '1px solid #1e1e2e',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding"
      aria-label="Projects section"
      style={{ background: 'linear-gradient(180deg, #0f0f1a 0%, #0a0a0f 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="font-mono text-sm mb-3" style={{ color: '#00f5d4' }}>
              03 / projects
            </p>
            <h2
              className="font-display font-bold text-4xl md:text-5xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Things I've{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00f5d4, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Built
              </span>
            </h2>
            <p className="mt-4 max-w-lg" style={{ color: '#64748b' }}>
              Each project is a deliberate step in developing production intuition —
              from architecture decisions to deployment pipelines.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 text-center">
            <motion.a
              href="https://github.com/rahinaummer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-md transition-all"
              style={{
                border: '1px solid #1e1e2e',
                color: '#94a3b8',
                background: 'rgba(255,255,255,0.02)',
              }}
              whileHover={{
                borderColor: 'rgba(0,245,212,0.3)',
                color: '#00f5d4',
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <GitHubIcon />
              View more on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
