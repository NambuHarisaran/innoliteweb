import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader.jsx';
import { testimonials } from '../../data/site.js';

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function Testimonials() {
  return (
    <section className="bg-navy-dark py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What Students Say"
          title="Results That Speak"
          light
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-navy-mid p-6 transition-colors duration-200 hover:border-orange/40"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-orange text-orange" />
                ))}
              </div>

              <blockquote className="relative mt-3">
                <span className="absolute -left-1 -top-4 font-serif text-4xl text-orange">
                  &ldquo;
                </span>
                <p className="font-body text-[15px] italic leading-relaxed text-white/80">
                  {t.text}
                </p>
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange/20 font-display text-sm font-semibold text-orange">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block font-body text-sm font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="block font-body text-xs text-white/50">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
