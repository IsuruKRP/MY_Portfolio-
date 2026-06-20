import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import profilepic from '../assets/Isuru5.png';
import { RiDownloadLine, RiArrowRightLine, RiGithubLine, RiLinkedinLine } from 'react-icons/ri';

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } },
});

const fadeLeft = (delay = 0) => ({
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } },
});

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center pt-16">
      <div className="section-wrap w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text ── */}
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            

            <motion.h1
              variants={fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text block sm:inline">Isuru Kulatunge</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.2)}
              className="text-lg sm:text-xl font-medium mb-6"
              style={{ color: '#a78bfa' }}
            >
              <span className="text-slate-400 font-mono text-sm mr-2">&gt;_</span>
              Full Stack Developer
            </motion.p>

            <motion.p
              variants={fadeUp(0.3)}
              className="text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 text-sm sm:text-base"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={fadeUp(0.4)}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <a href="#contact" className="btn-primary">
                Let's Talk <RiArrowRightLine />
              </a>
              <a
                href="#projects"
                className="btn-outline"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp(0.5)}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { href: 'https://github.com/IsuruKRP', icon: RiGithubLine,   label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/isuru-kulatunge', icon: RiLinkedinLine, label: 'LinkedIn' },
              ].map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors group"
                >
                  <s.icon className="text-lg group-hover:text-purple-400 transition-colors" />
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="flex-shrink-0 relative"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 -m-4 rounded-full opacity-20 animate-spin"
                 style={{
                   background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, #ec4899, #7c3aed)',
                   animationDuration: '8s'
                 }} />
            <div className="absolute inset-0 -m-2 rounded-full"
                 style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.2))' }} />

            {/* Photo container */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden float-anim"
                 style={{
                   border: '2px solid rgba(124,58,237,0.5)',
                   boxShadow: '0 0 60px rgba(124,58,237,0.35), 0 0 120px rgba(6,182,212,0.15)'
                 }}>
              <img
                src={profilepic}
                alt="Isuru Kulatunge"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-2 -left-4 glass rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to work
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-2 -right-2 glass rounded-xl px-3 py-2 text-xs font-semibold text-slate-300"
            >
              🚀 1+ yr exp
            </motion.div>
          </motion.div>

        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 flex flex-col items-center gap-2 text-slate-600 text-xs"
        >
          <span>Scroll to explore</span>
          <div className="w-[1px] h-10 rounded-full"
               style={{ background: 'linear-gradient(to bottom, #7c3aed, transparent)' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
