import { motion } from 'framer-motion';

// Reusable eyebrow + headline + subtext block used across sections.
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className="mb-3 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-orange">
          {eyebrow}
        </span>
      )}
      <h2
        className={`max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-xl font-body text-base leading-relaxed ${
            light ? 'text-white/60' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
