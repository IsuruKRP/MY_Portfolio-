import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Line, RiCloseLine, RiCodeSSlashLine } from 'react-icons/ri';

const links = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Education',    href: '#education' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Skills',       href: '#technologies' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Research',     href: '#research' },
  { label: 'Contact',      href: '#contact' },
];

const NavBar = ({ scrolled }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  // Highlight active link based on scroll position
  useEffect(() => {
    const ids = links.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`); });
      },
      { threshold: 0.4 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 no-underline">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }}>
              <RiCodeSSlashLine className="text-white text-base" />
            </span>
            <span className="font-bold text-white text-base tracking-tight">
              Isuru<span className="gradient-text">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{ color: active === l.href ? '#f1f5f9' : undefined }}
                onClick={() => setActive(l.href)}
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-[-4px] left-0 h-[2px] w-full rounded-full"
                    style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }}
                  />
                )}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-xs py-2 px-4">Hire Me</a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {open ? <RiCloseLine size={26} /> : <RiMenu3Line size={26} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="fixed inset-y-0 right-0 z-40 w-64 glass flex flex-col pt-20 px-6 gap-4 shadow-2xl md:hidden"
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => { setActive(l.href); setOpen(false); }}
                className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-colors ${
                  active === l.href
                    ? 'text-white bg-purple-600/20 border border-purple-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2 justify-center text-xs">Hire Me</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
