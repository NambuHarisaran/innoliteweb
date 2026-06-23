import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

// Smooth ease-out so the count decelerates as it approaches the target
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduce) {
      setValue(end);
      return;
    }

    let frame;
    let start;

    const tick = (now) => {
      if (start === undefined) start = now;
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOut(progress) * end));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration, reduce]);

  return (
    <span ref={ref} className={`font-display font-extrabold ${className}`}>
      {value}
      {suffix}
    </span>
  );
}
