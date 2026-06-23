const variants = {
  orange: 'bg-orange/10 text-orange border border-orange/20',
  navy: 'bg-navy/10 text-navy border border-navy/20',
  ghost: 'bg-gray-100 text-gray-600',
};

export default function Badge({ variant = 'orange', className = '', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-3 py-1 text-xs font-accent uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
