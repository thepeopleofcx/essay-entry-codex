'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ScrollFadeIn from './ScrollFadeIn';

interface TimelineEra {
  id: string;
  name: string;
  years: string;
  framing: string;
  laborProfile: string;
  signal: string;
}

const eras: TimelineEra[] = [
  {
    id: 'hunter',
    name: 'Hunter-Gatherers',
    years: '~300,000 years',
    framing: 'Human work started as survival rhythm: hunting, foraging, adapting in small bands.',
    laborProfile: 'Most communities sustained themselves with roughly 15-20 hours of subsistence effort per week.',
    signal: '15-20 hrs/week',
  },
  {
    id: 'agrarian',
    name: 'Agrarian Civilizations',
    years: '~10,000 years',
    framing: 'Agriculture enabled scale, cities, and governance but demanded relentless routine labor.',
    laborProfile: 'Across much of history, 80-90% of people worked directly in food production.',
    signal: '80-90% farming',
  },
  {
    id: 'industrial',
    name: 'Industrial Age',
    years: '~250 years',
    framing: 'Factories centralized work and accelerated productivity, transport, and public health.',
    laborProfile: 'Life expectancy climbed dramatically from roughly 32 years to around 71 years.',
    signal: '32 -> 71 years',
  },
  {
    id: 'knowledge',
    name: 'Knowledge Work Era',
    years: '~50-70 years',
    framing: 'Services and office systems expanded while many workers drifted into performative busyness.',
    laborProfile: 'Service sectors reached 77% of GDP in mature economies.',
    signal: '77% services',
  },
  {
    id: 'ai',
    name: 'AI-Augmented Epoch',
    years: 'Beginning now',
    framing: 'Cognitive automation can remove drudgery while opening room for craft, care, and culture.',
    laborProfile: 'The shape is undecided, but agency shifts toward smaller teams with greater leverage.',
    signal: 'Open future',
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24">
      <ScrollFadeIn>
        <h2 className="text-center font-display text-4xl text-cream sm:text-5xl md:text-6xl">History of Work</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-parchment/75">
          Five epochs. Five definitions of labor. Select an era to watch the social contract evolve.
        </p>
      </ScrollFadeIn>

      <div className="mt-12">
        <div className="mb-8 grid gap-3 sm:grid-cols-5">
          {eras.map((era, index) => (
            <button
              key={era.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group rounded-2xl border px-3 py-4 text-left transition ${
                activeIndex === index
                  ? 'border-gold/60 bg-gold/16 text-cream shadow-glow'
                  : 'border-cream/15 bg-black/25 text-parchment/75 hover:border-gold/40 hover:text-cream'
              }`}
            >
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-gold/80">Epoch {index + 1}</p>
              <p className="mt-2 font-display text-xl leading-none">{era.name}</p>
              <p className="mt-2 text-xs text-parchment/65">{era.years}</p>
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-cream/15 bg-black/30 p-6 sm:p-10">
          <motion.div
            className="absolute left-0 top-0 h-1 bg-gradient-to-r from-gold via-cream to-brass"
            animate={{ width: `${((activeIndex + 1) / eras.length) * 100}%` }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={eras[activeIndex].id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-gold/85">{eras[activeIndex].years}</p>
                <h3 className="mt-2 font-display text-3xl text-cream sm:text-4xl">{eras[activeIndex].name}</h3>
                <p className="mt-5 text-base text-parchment/85 sm:text-lg">{eras[activeIndex].framing}</p>
                <p className="mt-4 text-parchment/75">{eras[activeIndex].laborProfile}</p>
              </div>

              <div className="glass-panel rounded-2xl border border-gold/25 p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-gold/75">Key signal</p>
                <p className="mt-3 font-display text-4xl text-gold">{eras[activeIndex].signal}</p>
                <p className="mt-5 text-sm text-parchment/75">
                  This transition did not erase work. It changed what work counted.
                </p>
                <div className="mt-6 flex items-center gap-2">
                  {eras.map((era, index) => (
                    <button
                      key={era.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to ${era.name}`}
                      className={`h-2 flex-1 rounded-full transition ${
                        index <= activeIndex ? 'bg-gold' : 'bg-cream/20 hover:bg-cream/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
