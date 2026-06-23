import { motion } from 'framer-motion';
import FeatureCard from '../ui/FeatureCard.jsx';
import { features, images } from '../../data/site.js';

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left — text + feature list */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-accent text-xs font-semibold uppercase tracking-[0.12em] text-orange">
              Why InnoLite
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              We Don&apos;t Teach. We Train.
            </h2>
            <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-gray-600">
              There&apos;s a gap between what colleges teach and what companies need. We
              close that gap — with real projects, expert mentors, and skills you can show
              in your portfolio.
            </p>
          </motion.div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-8 flex flex-col gap-2"
          >
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </motion.div>
        </div>

        {/* Right — photo grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="col-span-2 overflow-hidden rounded-2xl">
            <img
              src={images.why_lab}
              alt="Students with lab equipment"
              loading="lazy"
              width={500}
              height={300}
              className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={images.why_coding}
              alt="A student coding"
              loading="lazy"
              width={300}
              height={220}
              className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={images.why_electronics}
              alt="Hands-on electronics work"
              loading="lazy"
              width={300}
              height={220}
              className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
