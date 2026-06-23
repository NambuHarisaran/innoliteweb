import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { images } from '../../data/site.js';

export default function HeroVisual() {
  const reduce = useReducedMotion();
  const float = reduce ? {} : { y: [0, -8, 0] };

  return (
    <div className="relative mx-auto h-[440px] w-full max-w-md sm:h-[480px]">
      {/* Card 1 — AI (top center) */}
      <motion.div
        animate={float}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-2 z-20 w-56 -translate-x-1/2 overflow-hidden rounded-2xl bg-navy shadow-2xl"
      >
        <img
          src={images.hero_ai}
          alt="Artificial Intelligence"
          loading="lazy"
          width={300}
          height={180}
          className="h-36 w-full object-cover"
        />
        <p className="px-4 py-2.5 font-display text-sm font-semibold text-white">
          Artificial Intelligence
        </p>
      </motion.div>

      {/* Floating badge — top-right of card 1 */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0 }}
        whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
        className="absolute right-2 top-0 z-30 flex flex-col items-center sm:right-6"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange shadow-lg">
          <Check className="h-7 w-7 text-white" strokeWidth={3} />
        </div>
        <span className="mt-1 font-body text-[11px] font-medium text-gray-600">
          Real Projects
        </span>
      </motion.div>

      {/* Card 2 — Drone (bottom-left) */}
      <motion.div
        animate={reduce ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        initial={reduce ? false : { opacity: 0, x: -30 }}
        whileInView={reduce ? {} : { opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute -left-2 bottom-16 z-20 w-40 overflow-hidden rounded-xl bg-orange shadow-xl sm:left-0"
      >
        <img
          src={images.hero_drone}
          alt="Drone Technology"
          loading="lazy"
          width={200}
          height={112}
          className="h-24 w-full object-cover"
        />
        <p className="px-3 py-2 font-display text-xs font-semibold text-white">
          Drone Technology
        </p>
      </motion.div>

      {/* Card 3 — Circuit / Embedded (bottom-right) */}
      <motion.div
        animate={reduce ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        initial={reduce ? false : { opacity: 0, x: 30 }}
        whileInView={reduce ? {} : { opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute -right-2 bottom-24 z-10 w-40 overflow-hidden rounded-xl border-2 border-navy/10 bg-white shadow-xl sm:right-0"
      >
        <img
          src={images.hero_circuit}
          alt="Embedded Systems"
          loading="lazy"
          width={200}
          height={112}
          className="h-24 w-full object-cover"
        />
        <p className="px-3 py-2 font-display text-xs font-semibold text-navy">
          Embedded Systems
        </p>
      </motion.div>

      {/* Stat chip — bottom center */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2 rounded-xl bg-white px-4 py-2 shadow-lg"
      >
        <p className="flex items-center gap-2 font-display text-sm font-bold text-navy">
          <span className="h-2 w-2 rounded-full bg-orange" />
          200+ Students Trained
        </p>
      </motion.div>
    </div>
  );
}
