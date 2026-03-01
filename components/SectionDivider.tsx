'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  return (
    <div ref={ref} className="my-24 flex items-center gap-6">
      <motion.div
        className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-gold/10"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ transformOrigin: 'left' }}
      />
      <motion.div
        className="h-2 w-2 rotate-45 border border-gold/70 bg-gold/25"
        initial={{ opacity: 0, scale: 0.3, rotate: 0 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: 45 } : {}}
        transition={{ duration: 0.7, delay: 0.25 }}
      />
      <motion.div
        className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/40 to-gold/10"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ transformOrigin: 'right' }}
      />
    </div>
  );
}
