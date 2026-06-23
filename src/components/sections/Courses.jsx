import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader.jsx';
import Icon from '../ui/Icon.jsx';
import { courses } from '../../data/site.js';

// Proper scroll stack: each card sits in a tall `sticky top-0` wrapper, so
// every card pins to the viewport and the next one slides up and stacks over
// it. Earlier cards scale down (origin-top) and are nudged up via a per-index
// offset so their top edge keeps peeking out — the classic stacked-cards look.
// Pure native scroll + Framer Motion transforms (no Lenis / scroll hijack).
function StackCard({ i, total, course, progress, reduce }) {
  const targetScale = 1 - (total - i) * 0.04;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-[62vh] min-h-[460px] items-center justify-center px-4 sm:px-6">
      <motion.article
        style={{ scale: reduce ? 1 : scale, top: `calc(-8vh + ${i * 22}px)` }}
        className="relative w-full max-w-3xl origin-top"
      >
        <div className="flex h-[280px] flex-col justify-between rounded-[28px] border border-orange/10 bg-gradient-to-br from-white to-[#fff6ef] p-7 shadow-[0_18px_50px_rgba(26,43,74,0.16)] sm:h-[300px] sm:rounded-[36px] sm:p-9">
          <div className="flex items-start justify-between">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/10">
              <Icon name={course.icon} className="h-7 w-7 text-orange" strokeWidth={2} />
            </span>
            <span className="font-display text-5xl font-extrabold leading-none text-navy/[0.06] sm:text-6xl">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                {course.title}
              </h3>
              {course.tag && (
                <span className="rounded-pill bg-orange px-3 py-0.5 font-accent text-[11px] uppercase tracking-wide text-white">
                  {course.tag}
                </span>
              )}
            </div>
            <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-gray-600 sm:text-base">
              {course.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="rounded-pill bg-navy/10 px-4 py-1.5 font-accent text-xs uppercase tracking-wide text-navy">
              {course.duration}
            </span>
            <a
              href="#contact"
              className="font-body text-sm font-semibold text-orange transition-colors hover:text-orange-dark hover:underline"
            >
              Enroll →
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Courses() {
  const container = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="courses" className="bg-offwhite py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What You'll Learn"
          title="10 Cutting-Edge Courses"
          subtitle="From software to hardware — learn what the industry actually uses. Scroll to stack through them."
          className="mx-auto"
        />
      </div>

      <div ref={container} className="relative mt-8">
        {courses.map((course, i) => (
          <StackCard
            key={course.title}
            i={i}
            total={courses.length}
            course={course}
            progress={scrollYProgress}
            reduce={reduce}
          />
        ))}
      </div>
    </section>
  );
}
