'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const offsets: Record<NonNullable<ScrollFadeInProps['direction']>, { x?: number; y?: number }> = {
  up: { y: 56 },
  down: { y: -56 },
  left: { x: 56 },
  right: { x: -56 },
  none: {},
};

export default function ScrollFadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
