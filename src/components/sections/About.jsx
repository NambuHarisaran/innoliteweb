import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { images } from '../../data/site.js';

const microStats = [
  { value: '200+', label: 'Students Trained' },
  { value: '10', label: 'Course Domains' },
  { value: '100%', label: 'Practical Training' },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border-l-4 border-orange pl-6"
        >
          <span className="font-accent text-xs font-semibold uppercase tracking-[0.12em] text-orange">
            Who We Are
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Empowering the Next Generation of Tech Leaders
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-gray-600">
            InnoLite Technologies is a hands-on technology training and development
            company dedicated to equipping students and professionals with skills that
            industries actually need. We don&apos;t teach theory — we build real things.
            From AI models to PCB boards, our learners work on live projects that make
            portfolios and careers.
          </p>

          <div className="mt-8 flex flex-wrap gap-8">
            {microStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold text-orange">
                  {stat.value}
                </div>
                <div className="mt-1 font-body text-[13px] font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rotate-2 rounded-2xl bg-navy-dark p-3 shadow-2xl">
            <img
              src={images.about_students}
              alt="Students working in an InnoLite lab"
              loading="lazy"
              width={600}
              height={400}
              className="h-72 w-full rounded-xl object-cover sm:h-96"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-3 flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-md">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange/10">
              <MapPin className="h-5 w-5 text-orange" />
            </span>
            <span className="font-display text-sm font-semibold text-navy">
              Madurai, TN
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
