import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiGithubLine, RiExternalLinkLine, RiArrowRightLine } from 'react-icons/ri';
import GMSS from '../assets/GMSS.webp';
import Music from '../assets/Music.webp';
import ODA from '../assets/ODA.webp';
import FYP from '../assets/projects/Research project.png';

const projects = [
  {
    id: 0,
    name: 'AI-Driven Gamified Platform for Multimodal ADHD Diagnosis and Attention Enhancement  ',
    shortDesc: 'Final Year Research Project | SLIIT | 2025–2026.',
    longDesc:
      'Developed a web-based AI platform for early ADHD pre-screening in Sri Lankan children using four behavioural analysis modules: pose-based motion detection, webcam-based eye tracking, Sinhala speech analysis, and Sinhala handwriting dynamics. The system uses gamified tasks, standard webcams, microphones, and stylus-enabled devices to provide a low-cost, non-invasive, multilingual screening solution for schools, clinics, and home  environments..',
    image: FYP,
    tags: ['React.js', 'python', 'Mediapipe', 'FastAPI/Flask',' OpenCV','NLP', 'Machine Learning', 'Random Forest',' REST APIs'],
    github: 'https://github.com/SageevanPRajah/ADHD_Detection_Demo.git',
    color: '#eab308',
  },
  {
    id: 1,
    name: 'Online Advertising Agency',
    shortDesc: 'A platform for individuals and businesses to advertise products and services.',
    longDesc:
      'A full-featured online advertising platform enabling users to create, manage, and promote listings across categories. Built with a focus on clean UI and fast performance.',
    image: ODA,
    tags: ['C++', 'MySQL', 'HTML/CSS'],
    github: 'https://github.com/IT22128140/Online_Advertising_Agency_cpp.git',
    live: null,
    color: '#7c3aed',
  },
  {
    id: 2,
    name: 'Online Music Store',
    shortDesc: 'Search, cart, pay, and download music — all in one web app.',
    longDesc:
      'A complete e-commerce music platform where users can browse a catalogue, add tracks to cart, complete payments, and download purchased music instantly.',
    image: Music,
    tags: ['Java', 'MySQL', 'HTML','CSS'],
    github: 'https://github.com/IsuruKRP/Hertz_music_store.git',
    live: null,
    color: '#06b6d4',
  },
  {
    id: 3,
    name: 'Garment Management System',
    shortDesc: 'ERP for garment production with an online store and employee portal.',
    longDesc:
      'A comprehensive garment production management system featuring an online storefront for customers and a full back-office for employees to handle orders, inventory, and production tracking.',
    image: GMSS,
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/IT22128140/SF-Frontend.git',
    color: '#ec4899',
  },
  
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative overflow-hidden rounded-2xl glass-hover glass"
      style={{ borderColor: `${project.color}25` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center gap-3"
              style={{ background: `${project.color}cc` }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30 hover:bg-white/20 transition-colors"
                onClick={e => e.stopPropagation()}
              >
                <RiGithubLine className="text-base" /> Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <RiExternalLinkLine className="text-base" /> Live
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Color accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-white text-base mb-2 leading-snug">{project.name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.shortDesc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(t => (
            <span
              key={t}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"
              style={{
                background: `${project.color}15`,
                color: project.color,
                border: `1px solid ${project.color}35`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-medium transition-colors"
          style={{ color: project.color }}
        >
          View on GitHub <RiArrowRightLine />
        </a>
      </div>
    </motion.div>
  );
};

const Project = () => {
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
        <span className="tag mb-4 inline-block">What I've Built</span>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="section-divider" />
        <p className="text-slate-500 text-sm mt-5 max-w-md mx-auto">
          A selection of projects that reflect my skills across the full stack.
          Hover over any card to explore.
        </p>
      </motion.div>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/IsuruKRP"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <RiGithubLine className="text-lg" /> More on GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default Project;
