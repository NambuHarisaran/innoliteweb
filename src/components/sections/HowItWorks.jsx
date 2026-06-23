import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader.jsx';
import { steps } from '../../data/site.js';

export default function HowItWorks() {
  return (
    <section className="bg-offwhite py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Process"
          title="From Enrollment to Employment"
          className="mx-auto"
        />

        <div className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              {/* Connector line (desktop only, not after last item) */}
              {i < steps.length - 1 && (
                <span className="absolute right-0 top-12 z-0 hidden h-0.5 w-[calc(50%-2rem)] translate-x-full bg-orange/30 md:block" />
              )}

              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange font-display text-2xl font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-gray-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
