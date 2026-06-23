import { motion } from 'framer-motion';
import Icon from './Icon.jsx';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function FeatureCard({ feature }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-gray-100/60"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange/10">
        <Icon name={feature.icon} className="h-4 w-4 text-orange" strokeWidth={2.2} />
      </div>
      <div>
        <h4 className="font-display text-sm font-semibold text-navy">{feature.title}</h4>
        <p className="mt-0.5 font-body text-[13px] leading-relaxed text-gray-500">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}
