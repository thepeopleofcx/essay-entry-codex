'use client';

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        setShowGlow(false);
        return;
      }

      setShowGlow(true);
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const handleLeave = () => setShowGlow(false);

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('blur', handleLeave);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', handleLeave);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [cursorX, cursorY]);

  const glowBackground = useMotionTemplate`radial-gradient(320px circle at ${cursorX}px ${cursorY}px, rgba(201,165,92,0.18), rgba(10,10,10,0.01) 60%)`;

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[2px] bg-cream/10">
        <motion.div className="h-full origin-left bg-gradient-to-r from-cream via-gold to-brass" style={{ scaleX: progress }} />
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[80] hidden md:block"
        style={{ opacity: showGlow ? 1 : 0, background: glowBackground }}
      />
    </>
  );
}
