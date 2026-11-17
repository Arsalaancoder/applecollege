import React, { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

export const blurInVariant: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: EASE_EDITORIAL },
  },
};

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_EDITORIAL },
  },
};

export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

export const staggerCardVariant: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_EDITORIAL },
  },
};

export const imageRevealVariant: Variants = {
  hidden: { opacity: 0, scale: 0.96, clipPath: 'inset(6% 0% 6% 0% round 20px)' },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0% round 20px)',
    transition: { duration: 0.7, ease: EASE_EDITORIAL },
  },
};

interface BlurInTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const BlurInText: React.FC<BlurInTextProps> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6, delay, ease: EASE_EDITORIAL }}
    className={className}
  >
    {children}
  </motion.div>
);

interface ParallaxWrapProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxWrap: React.FC<ParallaxWrapProps> = ({
  children,
  offset = 24,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -offset / 2 },
        {
          y: offset / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.7,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [offset]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

interface SectionEyebrowProps {
  label: string;
  light?: boolean;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({ label, light = false }) => (
  <div
    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] ${
      light ? 'text-[#8CE0BE]' : 'text-[#248568]'
    }`}
  >
    <span
      className={`inline-block w-5 h-[2px] rounded-full ${
        light ? 'bg-[#8CE0BE]' : 'bg-[#248568]'
      }`}
    />
    <span>{label}</span>
  </div>
);

