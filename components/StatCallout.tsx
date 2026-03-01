'use client';

import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

interface StatCalloutProps {
  number: string;
  label: string;
  suffix?: string;
}

interface ParsedStat {
  prefix: string;
  first: number;
  second?: number;
  suffix: string;
  decimals: number;
}

function parseStat(input: string, fallbackSuffix = ''): ParsedStat | null {
  const clean = input.trim();
  const rangeMatch = clean.match(/^([^\d]*)(\d+(?:\.\d+)?)[\s]*(?:-|–|→)[\s]*(\d+(?:\.\d+)?)([^\d]*)$/);

  if (rangeMatch) {
    return {
      prefix: rangeMatch[1] ?? '',
      first: Number(rangeMatch[2]),
      second: Number(rangeMatch[3]),
      suffix: (rangeMatch[4] ?? fallbackSuffix).trim(),
      decimals: (rangeMatch[2].split('.')[1] ?? '').length,
    };
  }

  const singleMatch = clean.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
  if (singleMatch) {
    return {
      prefix: singleMatch[1] ?? '',
      first: Number(singleMatch[2]),
      suffix: (singleMatch[3] ?? fallbackSuffix).trim(),
      decimals: (singleMatch[2].split('.')[1] ?? '').length,
    };
  }

  return null;
}

function formatValue(value: number, decimals: number) {
  if (decimals > 0) {
    return value.toFixed(decimals);
  }

  if (value >= 100 && value < 1000) {
    return Math.round(value).toLocaleString();
  }

  return Math.round(value).toString();
}

export default function StatCallout({ number, label, suffix = '' }: StatCalloutProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const firstRef = useRef<HTMLSpanElement | null>(null);
  const secondRef = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const parsed = useMemo(() => parseStat(number, suffix), [number, suffix]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!parsed || !inView || !firstRef.current) {
      return;
    }

    const controlsA = animate(0, parsed.first, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        if (firstRef.current) {
          firstRef.current.textContent = formatValue(value, parsed.decimals);
        }
      },
    });

    const controlsB =
      parsed.second !== undefined
        ? animate(0, parsed.second, {
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (value) => {
              if (secondRef.current) {
                secondRef.current.textContent = formatValue(value, parsed.decimals);
              }
            },
            onComplete: () => setReady(true),
          })
        : null;

    if (!controlsB) {
      setReady(true);
    }

    return () => {
      controlsA.stop();
      controlsB?.stop();
    };
  }, [inView, parsed]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="my-20"
    >
      <div className="glass-panel muted-ring relative overflow-hidden rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,165,92,0.34),transparent_55%)]" />

        <p className="mb-2 text-[0.62rem] uppercase tracking-[0.32em] text-gold/80">Signal</p>

        <motion.p
          animate={ready ? { textShadow: ['0 0 0 rgba(201,165,92,0)', '0 0 26px rgba(201,165,92,0.45)', '0 0 0 rgba(201,165,92,0)'] } : {}}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="font-display text-5xl leading-none text-cream sm:text-7xl"
        >
          {parsed ? (
            <>
              {parsed.prefix}
              <span ref={firstRef}>0</span>
              {parsed.second !== undefined ? (
                <>
                  <span className="mx-2 text-gold/80">→</span>
                  <span ref={secondRef}>0</span>
                </>
              ) : null}
              {parsed.suffix || suffix}
            </>
          ) : (
            number
          )}
        </motion.p>

        <p className="mx-auto mt-5 max-w-2xl text-sm text-parchment/85 sm:text-base">{label}</p>
      </div>
    </motion.div>
  );
}
