import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { SERVICES } from '../constants';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Services: React.FC = () => {
  return (
    <Section id="services" className="relative">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(ellipse at center, rgba(91,141,245,0.04) 0%, transparent 70%)' }} />

      <div className="mb-20 max-w-3xl">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4"
        >
          What We Build
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-4xl md:text-6xl font-bold text-white mb-6 tracking-[-0.03em]"
        >
          AI systems built to scale real businesses.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-secondary leading-[1.8]"
        >
          Evofusion AI helps companies integrate AI where it actually matters.
          From internal workflows to customer-facing automation, we focus on
          systems that deliver measurable results — not experiments.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            className="group relative p-8 rounded-2xl bg-surface border border-border/60 card-shimmer overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(91,141,245,0.06) 0%, transparent 60%)' }} />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/[0.07] border border-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/[0.12] group-hover:border-accent/20 group-hover:shadow-[0_0_20px_rgba(91,141,245,0.1)] transition-all duration-500">
                <service.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="text-secondary text-sm leading-[1.7]">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
