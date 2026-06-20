/* ── background gradient orbs for the whole app ── */
import './index.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Project from './components/Project';
import Research from './components/Research';
import Contact from './components/Contact';
import Education from './components/Education';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden noise">
      {/* ── Ambient background orbs ── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="blob blob-delay-2 absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
             style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />
        <div className="blob blob-delay-4 absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
             style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />
        <div className="blob absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
             style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)' }} />
        {/* dark grid overlay */}
        <div className="absolute inset-0"
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
               backgroundSize: '60px 60px'
             }} />
      </div>

      <NavBar scrolled={scrolled} />

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="technologies"><Technologies /></section>
        <section id="projects"><Project /></section>
        <section id="research"><Research /></section>
        
        <section id="contact"><Contact /></section>
      </main>

      <footer className="border-t border-white/5 py-6 text-center text-xs text-slate-600">
        <p>© 2026 Isuru Kulatunge · Built with React & Framer Motion</p>
      </footer>
    </div>
  );
};

export default App;