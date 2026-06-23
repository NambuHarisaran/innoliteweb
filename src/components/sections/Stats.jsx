import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter.jsx';
import { stats } from '../../data/site.js';

export default function Stats() {
  return (
    <section className="bg-navy-dark py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                className="text-5xl text-orange sm:text-[52px]"
              />
              <span className="mx-auto mt-2 h-0.5 w-12 bg-orange" />
              <p className="mt-3 max-w-[120px] font-body text-sm text-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
