import { motion } from 'framer-motion';
import { RiBriefcaseLine, RiCalendarLine, RiMapPinLine, RiCheckboxCircleLine } from 'react-icons/ri';

const jobs = [
  {
    role: 'Full Stack Developer – Intern',
    company: 'Kingteza Software Solutions PVT Ltd',
    location: 'Sri Lanka',
    period: 'Dec 2024 – Jan 2026',
    current: false,
    color: '#818cf8',
  },
  {
    role: 'Full Stack Developer – Intern',
    company: 'Biz Software Solutions PVT Ltd',
    location: 'Sri Lanka',
    period: 'Jan 2026 – Present',
    current: true,
    color: '#06b6d4',
  },
];

const responsibilities = [
  'Developed and maintained a full-stack ERP system to manage stock, distribution, inventory, manufacturing, sales, and finance operations.',
  'Implemented frontend components using React and TypeScript to improve usability and system performance.',
  'Built backend services using Node.js and NestJS, following RESTful API standards.',
  'Designed and managed relational databases using PostgreSQL.',
  'Collaborated with cross-functional teams to analyze requirements, fix bugs, and deliver features on time.',
  'Used Git for version control and followed structured development workflows.',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Experience = () => {
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
        <span className="tag mb-4 inline-block">My Journey</span>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="section-divider" />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* ── Left: Timeline ── */}
        <div className="lg:w-2/5">
          <div className="relative pl-6">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full"
                 style={{ background: 'linear-gradient(to bottom, #7c3aed, #06b6d4, transparent)' }} />

            {jobs.map((job, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-8 last:mb-0"
              >
                {/* Dot */}
                <span
                  className="absolute -left-[30px] top-4 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{
                    background: job.current ? job.color : 'transparent',
                    border: `2px solid ${job.color}`,
                    boxShadow: job.current ? `0 0 12px ${job.color}88` : 'none',
                  }}
                >
                  {job.current && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </span>

                <div
                  className="glass glass-hover rounded-2xl p-5"
                  style={{
                    borderColor: job.current ? `${job.color}40` : undefined,
                    boxShadow: job.current ? `0 0 24px ${job.color}20` : undefined,
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-white text-sm leading-tight">{job.role}</h3>
                    {job.current && (
                      <span className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ background: `${job.color}20`, color: job.color, border: `1px solid ${job.color}50` }}>
                        Current
                      </span>
                    )}
                  </div>
                  <p className="font-medium text-sm mb-3" style={{ color: job.color }}>{job.company}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <RiCalendarLine /> {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <RiMapPinLine /> {job.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Right: Responsibilities ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:w-3/5 glass rounded-2xl p-6 sm:p-8 self-start"
        >
          <h4 className="flex items-center gap-2 font-semibold text-white mb-6 text-base">
            <RiBriefcaseLine className="text-purple-400 text-xl" />
            Key Responsibilities & Achievements
          </h4>
          <ul className="space-y-4">
            {responsibilities.map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="flex gap-3 text-slate-400 text-sm leading-relaxed"
              >
                <RiCheckboxCircleLine
                  className="flex-shrink-0 mt-0.5 text-lg"
                  style={{ color: '#7c3aed' }}
                />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Tech used */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">Tech Used</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Git', 'REST API'].map(t => (
                <span key={t} className="tag text-[10px]">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
