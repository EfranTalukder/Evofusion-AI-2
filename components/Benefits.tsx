import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { BENEFITS } from '../constants';

const cardVariants = {
  hidden: { opacity: 0, x: 30, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const Benefits: React.FC = () => {
  return (
    <Section className="relative" id="about">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(139,124,247,0.04) 0%, transparent 60%)' }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Why Us
          </span>
          <h2 className="font-sans text-4xl md:text-6xl font-bold text-white tracking-[-0.03em] mb-6">
            Why businesses choose Evofusion AI.
          </h2>
          <p className="text-base text-secondary leading-[1.8] max-w-md">
            We don't sell tools. We build outcomes. Our approach is designed to remove the complexity of AI while delivering maximum operational leverage.
          </p>
        </motion.div>

        <div className="space-y-5">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              className="group flex items-start gap-5 p-6 rounded-xl bg-[#0A0E17] border border-border/50 hover:border-accent/15 hover:bg-surface card-shimmer transition-colors duration-500"
            >
              <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-accent/[0.1] to-accent-warm/[0.06] border border-accent/10 flex items-center justify-center group-hover:shadow-[0_0_16px_rgba(91,141,245,0.1)] transition-shadow duration-500">
                <span className="text-accent font-sans text-lg font-bold">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5 tracking-[-0.01em]">{benefit.title}</h3>
                <p className="text-sm text-secondary leading-[1.7]">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
