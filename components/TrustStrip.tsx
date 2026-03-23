import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';

export const TrustStrip: React.FC = () => {
  return (
    <Section className="py-10 md:py-14 relative">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.015] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Stars */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-[#F5A623]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-lg md:text-xl text-zinc-300 leading-[1.8] mb-8 font-light">
          "The resulting agent is seamlessly integrated, highly intuitive, and has already saved us
          <span className="text-white font-semibold"> 40 hours per week</span>.
          Their ability to bridge the gap between complex AI architecture and practical business needs is rare."
        </blockquote>

        {/* Attribution */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-semibold text-white">Alhassan Bah</span>
          <span className="text-xs text-secondary">Founder, BAH Transporters</span>
        </div>
      </motion.div>
    </Section>
  );
};
