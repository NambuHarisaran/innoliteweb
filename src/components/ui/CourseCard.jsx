import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Icon from './Icon.jsx';

export default function CourseCard({ course, index = 0 }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.08, ease: 'easeOut' }}
      whileHover={
        reduce ? undefined : { y: -4, boxShadow: '0 20px 40px rgba(244,121,32,0.12)' }
      }
      className="group relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-colors duration-200 hover:border-orange/20"
    >
      {course.tag && (
        <span className="absolute -top-3 right-4 rounded-pill bg-orange px-3 py-0.5 text-xs font-accent uppercase tracking-wide text-white shadow-sm">
          {course.tag}
        </span>
      )}

      <div className="flex items-start gap-4">
        <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-orange/10">
          <Icon name={course.icon} className="h-6 w-6 text-orange" strokeWidth={2} />
        </div>
        <h3 className="mt-1 font-display text-base font-semibold leading-snug text-navy">
          {course.title}
        </h3>
      </div>

      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-gray-600">
        {course.description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-pill bg-navy/10 px-3 py-1 font-accent text-[11px] uppercase tracking-wide text-navy">
          {course.duration}
        </span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 font-body text-[13px] font-semibold text-orange transition-colors hover:text-orange-dark hover:underline"
        >
          Learn More
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.article>
  );
}
