import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CAL_LINK } from '../constants';

export const CTA: React.FC = () => {
  return (
    <Section className="py-28 md:py-44 flex flex-col items-center text-center relative overflow-hidden">
      {/* Dramatic ambient glow — dual tone */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(91,141,245,0.07) 0%, rgba(139,124,247,0.03) 40%, transparent 65%)' }} />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <span className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-6">
          Get Started
        </span>
        <h2 className="font-sans text-4xl md:text-6xl lg:text-[4.25rem] font-bold text-white mb-6 tracking-[-0.03em] leading-[1.08]">
          Ready to automate your business?
        </h2>
        <p className="text-base md:text-lg text-secondary max-w-lg mx-auto mb-12 leading-[1.8]">
          Book a free strategy call. We'll map your workflows, identify automation opportunities, and show you exactly what AI can do for your operations.
        </p>
        <Button href={CAL_LINK} variant="accent" className="text-sm px-9 py-4.5 min-w-[210px]" withArrow>
          Book a Call
        </Button>
      </motion.div>
    </Section>
  );
};
