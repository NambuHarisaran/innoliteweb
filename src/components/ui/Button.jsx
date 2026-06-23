import { motion, useReducedMotion } from 'framer-motion';

const variants = {
  primary:
    'bg-orange text-white hover:bg-orange-dark shadow-sm hover:shadow-lg hover:shadow-orange/30',
  secondary: 'bg-navy text-white hover:bg-navy-mid',
  outline: 'border-2 border-orange text-orange hover:bg-orange hover:text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  className = '',
  children,
  ...props
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.button;

  return (
    <MotionTag
      whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-pill font-display font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/60 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
