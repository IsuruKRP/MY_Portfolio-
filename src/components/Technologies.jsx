import { motion } from 'framer-motion';
import { BiLogoJava } from 'react-icons/bi';
import { FaNodeJs, FaHtml5, FaPhp, FaGitAlt, FaDocker } from 'react-icons/fa';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb, SiExpress, SiTypescript, SiNestjs, SiPostgresql, SiNextdotjs } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';

const techGroups = [
  {
    category: 'Frontend',
    color: '#06b6d4',
    items: [
      { icon: RiReactjsLine,      name: 'React',      color: '#61dafb' },
      { icon: SiNextdotjs,        name: 'Next.js',    color: '#ffffff' },
      { icon: SiTypescript,       name: 'TypeScript', color: '#3178c6' },
      { icon: FaHtml5,            name: 'HTML5',      color: '#e34f26' },
      { icon: DiCss3,             name: 'CSS3',       color: '#1572b6' },
      { icon: RiTailwindCssFill,  name: 'Tailwind',   color: '#06b6d4' },
    ],
  },
  {
    category: 'Backend',
    color: '#7c3aed',
    items: [
      { icon: FaNodeJs,   name: 'Node.js',    color: '#68a063' },
      { icon: SiNestjs,   name: 'NestJS',     color: '#e0234e' },
      { icon: SiExpress,  name: 'Express',    color: '#ffffff' },
      { icon: FaPhp,      name: 'PHP',        color: '#8892bf' },
      { icon: BiLogoJava, name: 'Java',       color: '#f89820' },
    ],
  },
  {
    category: 'Database & Tools',
    color: '#10b981',
    items: [
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiMongodb,    name: 'MongoDB',    color: '#47a248' },
      { icon: FaGitAlt,     name: 'Git',        color: '#f05032' },
      { icon: FaDocker,     name: 'Docker',     color: '#2496ed' },
    ],
  },
];

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [-6, 6],
    transition: { duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
  },
});

const Technologies = () => {
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
        <span className="tag mb-4 inline-block">What I Work With</span>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <div className="section-divider" />
      </motion.div>

      <div className="flex flex-col gap-10">
        {techGroups.map((group, gi) => (
          <motion.div
            key={gi}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Category label */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  background: `${group.color}15`,
                  color: group.color,
                  border: `1px solid ${group.color}40`,
                }}
              >
                {group.category}
              </span>
              <div className="flex-1 h-[1px]" style={{ background: `linear-gradient(to right, ${group.color}40, transparent)` }} />
            </div>

            {/* Icons grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {group.items.map((tech, ti) => (
                <motion.div
                  key={ti}
                  variants={iconVariants(2.5 + ti * 0.4)}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.1 }}
                  className="tech-box"
                >
                  <tech.icon
                    className="text-3xl"
                    style={{ color: tech.color }}
                  />
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Proficiency note */}
      <motion.p
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-slate-600 text-xs mt-10"
      >
        Always learning · Always building
      </motion.p>
    </div>
  );
};

export default Technologies;