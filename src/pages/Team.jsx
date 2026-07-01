import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import { team } from '../data/site.js';

export default function TeamPage() {
  return (
    <section className="bg-white pb-20 pt-32 sm:pb-24 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Meet The Team"
          title="The People Behind InnoLite"
          subtitle="Placeholder profiles for now — real photos and bios are on the way."
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={`${member.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center rounded-2xl border border-gray-100 bg-offwhite p-8 text-center shadow-sm"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-navy/10">
                <User className="h-12 w-12 text-navy/30" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                {member.name}
              </h3>
              <p className="mt-1 font-body text-sm font-medium text-orange">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
