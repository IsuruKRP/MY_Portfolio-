import { motion } from 'framer-motion';
import { RiArticleLine, RiMicLine, RiAwardLine, RiCalendarLine, RiBookOpenLine, RiExternalLinkLine } from 'react-icons/ri';

const publication = {
  title: 'AI Driven Platform for Handwriting Based ADHD Detection for Children',
  conference: 'ICHORA 2026',
  conferenceFullName: 'International Conference on Human-Computer Interaction and Research Applications',
  type: 'Oral Presentation',
  status: 'Accepted',
  year: '2026',
  description:
    'This research presents an AI-driven platform leveraging handwriting dynamics analysis to assist in early ADHD pre-screening for children. The system uses stylus-enabled devices to capture handwriting behaviour and applies machine learning models to identify attention-deficit indicators — offering a low-cost, non-invasive diagnostic aid for schools and clinics.',
  keywords: ['AI', 'ADHD Detection', 'Handwriting Analysis', 'Machine Learning', 'Child Health', 'HCI'],
};

const badges = [
  { icon: RiAwardLine,    text: 'Accepted',          color: '#10b981', bg: '#10b98115' },
  { icon: RiMicLine,      text: 'Oral Presentation', color: '#f59e0b', bg: '#f59e0b15' },
  { icon: RiCalendarLine, text: 'ICHORA 2026',        color: '#7c3aed', bg: '#7c3aed15' },
];

const Research = () => {
  return (
    <div className="section-wrap">
      {/* Section header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="tag mb-4 inline-block">Academic Contribution</span>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Research <span className="gradient-text">Publication</span>
        </h2>
        <div className="section-divider" />
      </motion.div>

      {/* Publication Card */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div
          className="glass rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(124,58,237,0.25)', boxShadow: '0 0 60px rgba(124,58,237,0.1)' }}
        >
          {/* Top accent bar */}
          <div
            className="h-1 w-full"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4, #10b981)' }}
          />

          <div className="p-7 sm:p-10">
            {/* Status badges */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: b.bg,
                    color: b.color,
                    border: `1px solid ${b.color}40`,
                  }}
                >
                  <b.icon className="text-sm" />
                  {b.text}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4 mb-5"
            >
              <span
                className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-xl mt-1"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
              >
                <RiArticleLine className="text-white" />
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-1">
                  {publication.title}
                </h3>
                <p className="text-purple-400 text-sm font-medium flex items-center gap-1.5">
                  <RiBookOpenLine />
                  {publication.conferenceFullName}
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm leading-relaxed mb-6 pl-16"
            >
              {publication.description}
            </motion.p>

            {/* Keywords */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
              className="pl-16 mb-6"
            >
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">Keywords</p>
              <div className="flex flex-wrap gap-1.5">
                {publication.keywords.map(kw => (
                  <span key={kw} className="tag text-[10px]">{kw}</span>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-white/5 mb-5" />

            {/* Footer row */}
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-between gap-3"
            >
              <div className="text-xs text-slate-500">
                Part of Final Year Research Project · SLIIT · 2025–2026
              </div>
              <a
                href="https://ichora.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                Conference Website <RiExternalLinkLine />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Decorative glow */}
        <div
          className="absolute -z-10 w-80 h-80 rounded-full blur-3xl opacity-10 left-1/2 -translate-x-1/2 mt-[-10rem]"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
        />
      </motion.div>
    </div>
  );
};

export default Research;
