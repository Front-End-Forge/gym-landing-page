import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { navLinks } from '../data/siteData';

export default function Navbar({ scrollProgress }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(href.replace('#', ''));
  };

  return (
    <>
      {/* Scroll Progress */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button aria-label="Go to Home" onClick={() => handleNav('#home')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#E63946] flex items-center justify-center" style={{
              clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
            }}>
              <Zap size={16} fill="white" className="text-white" />
            </div>
            <span className="font-['Bebas_Neue'] text-2xl tracking-widest text-white group-hover:text-[#E63946] transition-colors">
              APEX
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`font-['Rajdhani'] font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 relative group ${
                  active === link.href.replace('#', '') ? 'text-[#E63946]' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#E63946] transition-all duration-300 ${
                  active === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('#pricing')}
              className="hidden md:block btn-primary text-sm px-6 py-2"
            >
              Join Now
            </button>
            <button
              aria-label="Toggle Navigation Menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[999] bg-[#0a0a0a] lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNav(link.href)}
                className="font-['Bebas_Neue'] text-5xl tracking-widest text-white hover:text-[#E63946] transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => handleNav('#pricing')}
              className="btn-primary mt-4"
            >
              Join Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
