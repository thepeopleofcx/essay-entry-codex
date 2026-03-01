'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ScrollFadeIn from './ScrollFadeIn';

interface ReadingItem {
  title: string;
  detail: string;
}

const readings: ReadingItem[] = [
  {
    title: 'David Graeber - Bullshit Jobs: A Theory (2018)',
    detail: 'Seminal framing for why so much white-collar labor can feel performative rather than socially necessary.',
  },
  {
    title: 'David Autor - Why Are There Still So Many Jobs? (2015)',
    detail: 'A durable baseline for understanding task replacement vs. task creation in labor transitions.',
  },
  {
    title: 'Acemoglu & Restrepo - Automation and New Tasks (2019)',
    detail: 'Models how automation can both displace labor and open entirely new categories of economic contribution.',
  },
  {
    title: 'Brynjolfsson, Li, Raymond - Generative AI at Work (2025)',
    detail: 'Empirical evidence on productivity effects from real workplace deployment of generative systems.',
  },
  {
    title: 'Stanford HAI - AI Index (2025)',
    detail: 'Annual data reference on model capability, adoption patterns, and macro signals around AI systems.',
  },
  {
    title: 'IMF - GenAI and the Future of Work (2024)',
    detail: 'Macroeconomic lens on disruption pace, policy timing, and distributional risk during transition.',
  },
];

export default function FurtherReading() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24">
      <ScrollFadeIn>
        <h2 className="font-display text-4xl text-cream sm:text-5xl">Further Reading</h2>
        <p className="mt-3 max-w-3xl text-parchment/75">A compact shelf for readers building a rigorous mental model of this transition.</p>
      </ScrollFadeIn>

      <div className="mt-10 space-y-3">
        {readings.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <ScrollFadeIn key={item.title} delay={index * 0.04}>
              <div className="overflow-hidden rounded-2xl border border-cream/15 bg-black/25">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-cream/5"
                >
                  <span className="font-medium text-cream">{item.title}</span>
                  <span className={`text-gold transition ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-parchment/78">{item.detail}</p>
                </motion.div>
              </div>
            </ScrollFadeIn>
          );
        })}
      </div>

      <ScrollFadeIn delay={0.2}>
        <p className="mt-12 border-t border-gold/20 pt-8 text-sm italic text-parchment/65">
          This essay reflects personal experience and field observation; it is not investment, legal, or policy advice.
        </p>
      </ScrollFadeIn>
    </section>
  );
}
