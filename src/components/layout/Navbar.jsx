import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '../../data/site.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-2 border-orange/80 bg-white transition-shadow duration-300 ${
        // Always solid white so the logo + links stay readable over every
        // section; only the shadow deepens once the user scrolls.
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" onClick={() => handleNav('#home')} className="flex items-center">
          <img src="/logo.svg" alt="InnoLite Technologies" className="h-10 w-auto" />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onClick={() => handleNav(link.href)}
                className={`font-body text-sm font-medium transition-colors duration-200 hover:text-orange ${
                  active === link.href ? 'text-orange' : 'text-navy'
                }`}
              >
                {link.label}
              </a>
              {active === link.href && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-orange"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={() => handleNav('#contact')}
          className="hidden items-center gap-2 rounded-pill bg-orange px-6 py-2.5 font-display text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-dark md:inline-flex"
        >
          Enroll Now
          <ArrowRight className="h-4 w-4" />
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="text-navy md:hidden"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-white md:hidden"
          >
            <div className="flex h-20 items-center justify-between px-4">
              <img src="/logo.svg" alt="InnoLite Technologies" className="h-10 w-auto" />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-navy"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <ul className="flex flex-1 flex-col gap-1 px-6 pt-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="border-l-4 border-orange/70 pl-4"
                >
                  <a
                    href={link.href}
                    onClick={() => handleNav(link.href)}
                    className="block py-3 font-display text-2xl font-semibold text-navy"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="p-6">
              <a
                href="#contact"
                onClick={() => handleNav('#contact')}
                className="flex w-full items-center justify-center gap-2 rounded-pill bg-orange px-6 py-4 font-display font-semibold text-white"
              >
                Enroll Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
