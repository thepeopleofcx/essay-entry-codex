'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToEssay = () => {
    document.getElementById('essay-start')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6 py-20">
      {[
        'absolute -left-28 top-20 h-72 w-72 rounded-full bg-gold/16 blur-[140px]',
        'absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cream/10 blur-[145px]',
        'absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[170px]',
      ].map((orbClass, index) => (
        <motion.div
          key={orbClass}
          className={orbClass}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5.2 + index * 0.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,240,232,0.1)_0%,_transparent_50%),linear-gradient(180deg,_rgba(10,10,10,0.6)_0%,_rgba(10,10,10,0.95)_100%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mb-4 inline-flex rounded-full border border-gold/35 bg-gold/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-gold"
        >
          Interactive Essay
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-medium leading-[0.92] text-cream sm:text-6xl md:text-7xl lg:text-8xl"
        >
          WHAT IF IT ALL
          <span className="gold-gradient block">GOES RIGHT?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.55 }}
          className="mt-8 max-w-3xl text-base text-parchment/85 sm:text-lg"
        >
          A front-line dispatch from deep within the AI transition, staged as a live dialogue on work,
          culture, and what a better future could feel like.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-4 text-lg italic text-gold sm:text-xl"
        >
          by William & Mary
        </motion.p>

        <motion.button
          type="button"
          onClick={scrollToEssay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="group mt-12 inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 px-5 py-3 text-sm tracking-[0.22em] text-cream/85 transition hover:border-gold/45 hover:bg-gold/10 hover:text-cream"
        >
          ENTER ESSAY
          <ChevronDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
        </motion.button>
      </div>
    </section>
  );
}
