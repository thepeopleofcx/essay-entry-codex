'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollFadeIn from './ScrollFadeIn';

interface DialogueBlockProps {
  speaker: 'william' | 'mary';
  children: React.ReactNode;
}

const speakerConfig = {
  william: {
    name: 'William',
    align: 'left',
    accent: 'from-gold/18 via-gold/8 to-transparent',
    bubble: 'border-gold/35 bg-gradient-to-br from-gold/14 via-black/35 to-black/70',
  },
  mary: {
    name: 'Mary',
    align: 'right',
    accent: 'from-cream/18 via-cream/8 to-transparent',
    bubble: 'border-cream/30 bg-gradient-to-bl from-cream/12 via-black/35 to-black/70',
  },
} as const;

export default function DialogueBlock({ speaker, children }: DialogueBlockProps) {
  const cfg = speakerConfig[speaker];
  const isRight = cfg.align === 'right';

  return (
    <ScrollFadeIn direction={isRight ? 'left' : 'right'} className="my-12">
      <div className={`relative grid items-start gap-6 md:grid-cols-[130px_minmax(0,1fr)] ${isRight ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}>
        <div className="relative">
          <div className="glass-panel muted-ring mx-auto w-[110px] overflow-hidden rounded-2xl p-2 md:sticky md:top-24">
            <Image
              src={`/images/${speaker}.jpg`}
              alt={cfg.name}
              width={240}
              height={280}
              className="h-[125px] w-full rounded-xl object-cover"
              style={{ filter: 'invert(1) brightness(0.95) sepia(0.25) contrast(0.95)' }}
            />
            <p className="mt-2 text-center text-xs uppercase tracking-[0.24em] text-parchment/80">{cfg.name}</p>
          </div>
        </div>

        <div className={`relative overflow-hidden rounded-3xl border p-6 shadow-glow sm:p-8 ${cfg.bubble}`}>
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${cfg.accent}`} />

          <div className={`pointer-events-none absolute ${isRight ? 'left-0' : 'right-0'} top-0 h-full w-24 bg-gradient-to-b from-transparent via-gold/6 to-transparent`} />

          <div className={`mb-5 flex items-center gap-3 ${isRight ? 'justify-end' : ''}`}>
            <span className="h-px w-12 bg-gold/45" />
            <p className="text-xs uppercase tracking-[0.24em] text-gold">{cfg.name} speaks</p>
            <span className="h-px w-12 bg-gold/45" />
          </div>

          <motion.div
            initial={{ opacity: 0.82 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20%' }}
            className={`relative z-10 space-y-4 text-base text-parchment/88 sm:text-lg ${isRight ? 'text-right' : ''}`}
          >
            {children}
          </motion.div>

          <div className={`mt-6 flex gap-1 ${isRight ? 'justify-end' : ''}`}>
            {Array.from({ length: 10 }).map((_, idx) => (
              <motion.span
                key={idx}
                className="block w-[3px] rounded-full bg-gold/50"
                initial={{ height: 6, opacity: 0.4 }}
                whileInView={{
                  height: [6, 18 + (idx % 4) * 4, 6],
                  opacity: [0.4, 0.85, 0.4],
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, repeat: 1, delay: idx * 0.03 }}
              />
            ))}
          </div>
        </div>
      </div>
    </ScrollFadeIn>
  );
}
