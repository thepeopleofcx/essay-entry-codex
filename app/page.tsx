'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import DialogueBlock from '@/components/DialogueBlock';
import FurtherReading from '@/components/FurtherReading';
import Hero from '@/components/Hero';
import ProgressBar from '@/components/ProgressBar';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import SectionDivider from '@/components/SectionDivider';
import StatCallout from '@/components/StatCallout';
import Timeline from '@/components/Timeline';

interface AccordionItem {
  title: string;
  intro: string;
  body: string[];
}

const prefaceItems: AccordionItem[] = [
  {
    title: 'Preface - The Reason We Wrote This',
    intro: "People like to say crazy things on the internet. This isn't that.",
    body: [
      'Recent speculative essays about AI have pushed discourse toward a false binary: either total collapse or total hype. That framing is too shallow for the stakes.',
      'From our frontline vantage point, AI is already reshaping labor structure, cost structure, and creative output. We believe the transition is real and massive, but not automatically doomed.',
      'With serious policy and practical adaptation, much of what comes next could go very right, especially for arts, culture, and local human-centered economies.',
    ],
  },
  {
    title: 'Why Anonymous (For Now)',
    intro: 'We signed this as William & Mary, our real first names and a symbolic nod to rebalancing power.',
    body: [
      'We want this argument evaluated on substance before identity. The text is a direct invitation to creators, operators, policymakers, and AI builders.',
      'The goal is not performative hot takes. It is to spark concrete debate and practical action while there is still time to shape outcomes.',
    ],
  },
  {
    title: 'Who We Are',
    intro: 'We are founders building a culture-first company in active markets right now.',
    body: [
      'Our work sits between local creative communities and enabling technology. We see adoption behavior, resistance, operational gains, and social consequences in real time.',
      'This essay reflects direct implementation experience rather than armchair commentary. We are sharing what we are seeing as it happens.',
    ],
  },
  {
    title: 'Who Is This For',
    intro: 'Creators, workers, founders, and leaders deciding how to move during an unstable transition.',
    body: [
      'If you feel both possibility and anxiety, this is for you. If your organization knows change is real but lacks a coherent frame, this is for you.',
      'The purpose is practical orientation: what to keep, what to drop, and what to build so more people benefit from what is coming.',
    ],
  },
];

const predictionBlocks = [
  {
    title: 'Venture Capital Rewires Itself',
    text: 'Deep infrastructure still needs capital, but AI leverage lets many operators scale sustainable companies without defaulting to the legacy venture script.',
  },
  {
    title: 'A New Wave of Small Teams',
    text: 'The next decade may be dense with focused teams solving local and niche problems at speed once reserved for much larger organizations.',
  },
  {
    title: 'Human Passions Become Economically Viable Again',
    text: 'As low-level digital labor compresses in cost, creative and care work that once looked inefficient can become central, investable, and culturally valued.',
  },
  {
    title: 'Research Becomes a Core Product',
    text: 'As automation absorbs repetitive output, depth itself becomes competitive: long-horizon inquiry, synthesis, and clear thinking become strategic assets.',
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-ink text-cream">
      <ProgressBar />
      <Hero />

      <article id="essay-start" className="relative mx-auto max-w-5xl px-5 pb-28 sm:px-8">
        <div className="glass-panel mb-14 rounded-3xl border border-cream/10 p-5 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-gold/90">Reader controls</p>
          <h2 className="mt-2 font-display text-3xl text-cream sm:text-4xl">Open the preface and jump in</h2>
          <p className="mt-3 max-w-3xl text-parchment/75">
            The four preface/meta sections are collapsible so readers can scan context quickly and move into the core dialogue.
          </p>

          <div className="mt-6 space-y-3">
            {prefaceItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.title} className="overflow-hidden rounded-2xl border border-gold/25 bg-black/25">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                  >
                    <div>
                      <p className="font-display text-2xl text-cream">{item.title}</p>
                      <p className="mt-1 text-sm text-parchment/70">{item.intro}</p>
                    </div>
                    <span className={`text-xl text-gold transition ${isOpen ? 'rotate-45' : ''}`}>+</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 px-4 pb-5 sm:px-5">
                          {item.body.map((paragraph) => (
                            <p key={paragraph} className="text-sm leading-relaxed text-parchment/82 sm:text-base">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <StatCallout number="78%" label="of organizations reported AI use in 2024, up from 55% in 2023." />

        <ScrollFadeIn>
          <h2 className="text-center font-display text-4xl text-cream sm:text-5xl md:text-6xl">Part One - The World Has Changed</h2>
        </ScrollFadeIn>

        <DialogueBlock speaker="william">
          <p>
            For the past two years, in stealth, our team has been building a technology-enabled, culture-first company with a simple mission: connect people meaningfully.
          </p>
          <p>
            We partner with restaurants, galleries, bars, and clubs to revive spaces with artists, performers, and audiences. Our specialty is reawakening places that only need coordinated creative energy.
          </p>
        </DialogueBlock>

        <DialogueBlock speaker="mary">
          <p>
            In the previous era this would be a classic seed-stage startup story. Real revenue, real customers, early product, then the VC roadshow.
          </p>
          <p>
            We are not doing that. AI tools have made us materially more efficient, and the venture model often conflicts with our cultural goals. We believe we can scale to profitability without that treadmill.
          </p>
        </DialogueBlock>

        <StatCallout number="100M" suffix=" tokens/day" label="Current model usage in our operations, up from hundreds of thousands per week only months ago." />

        <DialogueBlock speaker="mary">
          <p>
            As of now, most low-level knowledge work in our company is handled by agents: support responses, decks, ticketing logistics, bookkeeping, first-pass legal and sales operations, and substantial product implementation.
          </p>
          <p>
            Capability gains in recent months compressed hiring needs dramatically. What once required larger knowledge-work teams can now be executed by smaller, higher-context operators.
          </p>
        </DialogueBlock>

        <StatCallout number="80-95%" label="of our back-office and routine knowledge operations are now automated or heavily agent-assisted." />

        <DialogueBlock speaker="william">
          <p>
            The savings are substantial, and growing. But they are not being hoarded. We reinvest directly into the communities we serve and the people who generate real cultural value.
          </p>
        </DialogueBlock>

        <StatCallout number="$1.17T" label="Arts and cultural economic activity in 2023, around 4.2% of U.S. GDP." />

        <SectionDivider />

        <ScrollFadeIn>
          <h2 className="text-center font-display text-4xl text-cream sm:text-5xl md:text-6xl">Part Two - The End of Bullshit Jobs</h2>
        </ScrollFadeIn>

        <DialogueBlock speaker="william">
          <p>
            David Graeber argued that a shocking amount of modern labor is structurally pointless even in the eyes of the workers doing it. That argument feels more relevant than ever.
          </p>
          <p>
            AI does not only threaten employment. It also reveals how much of current employment is administrative theater wrapped around meaningful work.
          </p>
        </DialogueBlock>

        <StatCallout number="37%" label="of British workers reported that their jobs did not contribute meaningfully to the world." />

        <DialogueBlock speaker="mary">
          <p>
            We are not watching meaningful work disappear. We are watching busyness get squeezed: forwarding emails, stack-ranked meetings, process loops pretending to be output.
          </p>
        </DialogueBlock>

        <div className="grid gap-4 sm:grid-cols-2">
          <StatCallout number="57%" label="average time spent communicating: meetings, email, and chat." />
          <StatCallout number="43%" label="average time left for actually creating and shipping meaningful work." />
        </div>

        <SectionDivider />

        <Timeline />

        <StatCallout number="15-20" suffix=" hrs/week" label="Estimated subsistence work effort in many hunter-gatherer societies." />

        <SectionDivider />

        <ScrollFadeIn>
          <h2 className="text-center font-display text-4xl text-cream sm:text-5xl md:text-6xl">Part Five - What Might Come Next</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-parchment/75 italic">
            Since everyone is making predictions, here are ours.
          </p>
        </ScrollFadeIn>

        <div className="mt-8 space-y-4">
          {predictionBlocks.map((block, idx) => (
            <ScrollFadeIn key={block.title} delay={idx * 0.06}>
              <div className="rounded-2xl border border-cream/15 bg-black/25 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-gold/75">Prediction {idx + 1}</p>
                <h3 className="mt-1 font-display text-3xl text-cream">{block.title}</h3>
                <p className="mt-3 text-parchment/78">{block.text}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <StatCallout number="32-71" suffix=" years" label="Illustrative life-expectancy expansion across the industrial period." />

        <SectionDivider />

        <ScrollFadeIn>
          <h2 className="text-center font-display text-4xl text-cream sm:text-5xl md:text-6xl">Part Six - What To Do Now</h2>
        </ScrollFadeIn>

        <ScrollFadeIn className="mt-8 rounded-3xl border border-gold/20 bg-black/25 p-6 sm:p-8">
          <h3 className="font-display text-3xl text-gold">Government</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-parchment/82">
            <li>Extend and strengthen unemployment support through transition shocks.</li>
            <li>Evaluate wage insurance models for workers stepping into lower-paid replacement roles.</li>
            <li>Scale affordable retraining pathways with measurable placement outcomes.</li>
          </ul>
        </ScrollFadeIn>

        <ScrollFadeIn className="mt-5 rounded-3xl border border-cream/15 bg-black/25 p-6 sm:p-8">
          <h3 className="font-display text-3xl text-gold">Private Enterprise</h3>
          <p className="mt-4 text-parchment/82">
            If productivity rises but gains are captured only as margin, social instability rises with it. Share efficiency gains through lower prices, better products, and broader participation.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn className="mt-5 rounded-3xl border border-cream/15 bg-black/25 p-6 sm:p-8">
          <h3 className="font-display text-3xl text-gold">Individuals</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-parchment/82">
            <li>Learn the tools deeply by embedding them in your real work, not toy prompts.</li>
            <li>Invest in local community and in-person trust networks.</li>
            <li>Use leverage to pursue high-agency projects you care about.</li>
          </ul>
        </ScrollFadeIn>

        <SectionDivider />

        <ScrollFadeIn>
          <h2 className="text-center font-display text-4xl text-cream sm:text-5xl">Conclusion</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-parchment/82">
            We are neither evangelists nor doomers. We are operators describing what we are seeing: a historic shift already underway. The transition will be rough, but the upside is real if we choose it deliberately.
          </p>
        </ScrollFadeIn>

        <FurtherReading />

        <ScrollFadeIn delay={0.15}>
          <div className="mt-10 rounded-3xl border border-gold/30 bg-black/30 p-8 text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-5">
              {['william', 'mary'].map((person) => (
                <div key={person} className="overflow-hidden rounded-2xl border border-gold/30 bg-black/30 p-2">
                  <Image
                    src={`/images/${person}.jpg`}
                    alt={person}
                    width={88}
                    height={112}
                    className="h-[96px] w-[72px] rounded-xl object-cover"
                    style={{ filter: 'invert(1) brightness(0.96) sepia(0.22)' }}
                  />
                </div>
              ))}
            </div>
            <p className="font-display text-4xl italic text-gold">- William & Mary</p>
          </div>
        </ScrollFadeIn>
      </article>
    </main>
  );
}
