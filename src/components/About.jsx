import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../constants';
import aboutImg from '../assets/about.jpg';
import { RiUserLine, RiMapPinLine, RiMailLine, RiPhoneLine } from 'react-icons/ri';

const stats = [
  { value: '1+',  label: 'Years Experience' },
  { value: '3+',  label: 'Projects Built' },
  { value: '2',   label: 'Companies' },
  { value: '10+', label: 'Technologies' },
];

const info = [
  { icon: RiUserLine,    text: 'Isuru Kulatunge' },
  { icon: RiMapPinLine,  text: 'Matara, Sri Lanka' },
  { icon: RiMailLine,    text: 'isurukulathungaj@gmail.com' },
  { icon: RiPhoneLine,   text: '+94 71 778 0969' },
];

const About = () => {
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
        <span className="tag mb-4 inline-block">Who I Am</span>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="section-divider" />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-14">
        {/* ── Image side ── */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-72 h-80 sm:w-80 sm:h-96">
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-2xl opacity-40"
                 style={{ background: 'linear-gradient(135deg, #7c3aed33, #06b6d433)' }} />
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-purple-500/30" />
            <img
              src={aboutImg}
              alt="About Isuru"
              loading="lazy"
              className="relative w-full h-full object-cover rounded-2xl"
              style={{ border: '1px solid rgba(124,58,237,0.3)' }}
            />
            {/* Floating card */}
            <div className="absolute -top-4 -right-8 glass rounded-xl p-3 text-center shadow-xl">
              <p className="text-2xl font-bold gradient-text">1+</p>
              <p className="text-xs text-slate-400 mt-0.5">Years Exp.</p>
            </div>
          </div>
        </motion.div>

        {/* ── Text side ── */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex-1 min-w-0"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Full Stack Developer based in Sri Lanka
          </h3>
          <p className="text-slate-400 leading-relaxed mb-8 text-sm sm:text-base">
            {ABOUT_TEXT}
          </p>

          {/* Quick info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {info.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)' }}>
                  <item.icon className="text-purple-400" />
                </span>
                {item.text}
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="glass glass-hover rounded-2xl py-6 text-center"
          >
            <p className="text-3xl font-bold gradient-text">{s.value}</p>
            <p className="text-slate-500 text-xs mt-1 font-medium uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;