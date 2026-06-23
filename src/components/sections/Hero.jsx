import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Bot, Zap, Rocket } from 'lucide-react';
import DataGrid from '../ui/DataGrid.jsx';
import HeroVisual from './HeroVisual.jsx';

const pills = [
  { icon: Bot, label: 'Learn.' },
  { icon: Zap, label: 'Build.' },
  { icon: Rocket, label: 'Innovate.' },
];

const headlineWords1 = ['Transform', 'Your', 'Future'];
const headlineWords2 = ['With', 'Emerging', 'Tech'];

export default function Hero() {
  const reduce = useReducedMotion();

  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: reduce ? 0 : 0.3 + i * 0.08, duration: 0.5 },
    }),
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-36 lg:pb-28"
    >
      {/* Animated white + orange data-grid background */}
      <DataGrid />

      {/* Soft orange glow blob — bottom left, adds warmth under the grid */}
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange/10 blur-[80px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[55%_45%] lg:px-8">
        {/* Left column */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-orange"
          >
            — Madurai&apos;s Emerging Tech Hub —
          </motion.span>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
            <span className="block text-navy">
              {headlineWords1.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={wordVariant}
                  initial="hidden"
                  animate="visible"
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block text-orange">
              {headlineWords2.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i + headlineWords1.length}
                  variants={wordVariant}
                  initial="hidden"
                  animate="visible"
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 max-w-xl font-body text-lg font-medium leading-relaxed text-gray-600"
          >
            Hands-on training in AI, Robotics, Web Development, and more. Learn from
            real-world projects. Build skills that matter.
          </motion.p>

          {/* Tagline pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {pills.map(({ icon: PillIcon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-pill border-l-4 border-orange bg-gray-100 px-4 py-2 font-display text-sm font-semibold text-navy"
              >
                <PillIcon className="h-4 w-4 text-orange" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              href="#courses"
              whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-pill bg-orange px-6 py-3 font-display font-semibold text-white shadow-sm transition-colors hover:bg-orange-dark"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-pill border-2 border-orange bg-white px-6 py-3 font-display font-semibold text-orange transition-colors hover:bg-orange hover:text-white"
            >
              Talk to Us
            </motion.a>
          </motion.div>
        </div>

        {/* Right column — floating visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
