import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { PROCESS_STEPS } from '../constants';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Process: React.FC = () => {
  return (
    <Section id="process" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4"
        >
          Our Process
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-4xl md:text-6xl font-bold text-white tracking-[-0.03em]"
        >
          A simple process. Powerful results.
        </motion.h2>
      </div>

      <div className="relative">
        {/* Animated connecting line */}
        <motion.div
          className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 pointer-events-none origin-left"
          style={{ background: 'linear-gradient(to right, transparent, rgba(91,141,245,0.2), rgba(139,124,247,0.15), transparent)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              className="group relative p-8 rounded-2xl bg-surface border border-border/60 card-shimmer transition-colors duration-500 text-center"
            >
              {/* Step number circle */}
              <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-accent/[0.1] to-accent-warm/[0.05] border border-accent/15 flex items-center justify-center mb-6 group-hover:border-accent/30 group-hover:shadow-[0_0_24px_rgba(91,141,245,0.12)] transition-all duration-500">
                <span className="font-sans text-2xl font-bold bg-gradient-to-b from-accent-light to-accent bg-clip-text text-transparent">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="text-sm text-secondary leading-[1.7]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
