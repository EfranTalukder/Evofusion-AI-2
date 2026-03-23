import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CAL_LINK } from '../constants';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const headingReveal = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Hero: React.FC = () => {
  return (
    <Section className="pt-28 pb-8 md:pt-36 md:pb-12 flex flex-col justify-center min-h-[75vh] relative">
      {/* Ambient glow orbs — refined with drift animation */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none -z-10">
        <div className="absolute inset-0 rounded-full blur-[140px] opacity-[0.06]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(91,141,245,0.22) 0%, rgba(139,124,247,0.08) 40%, transparent 70%)' }} />
      </div>
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(91,141,245,0.05) 0%, transparent 60%)', animation: 'drift 12s ease-in-out infinite' }} />
      <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(139,124,247,0.04) 0%, transparent 60%)', animation: 'drift 15s ease-in-out infinite 3s' }} />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(91,141,245,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(91,141,245,0.15) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <motion.div
        className="max-w-5xl mx-auto text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={headingReveal}
          className="font-sans text-[2.75rem] md:text-[4.5rem] lg:text-[5.25rem] font-bold text-white leading-[1.05] mb-8 tracking-[-0.03em] mt-10"
        >
          Helping you implement AI in your business
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-secondary max-w-2xl mx-auto mb-14 leading-[1.8]"
        >
          We design, build, and deploy AI systems that automate operations, replace manual work, and unlock scalable growth.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href={CAL_LINK} variant="accent" className="w-64 sm:w-auto min-w-[200px] h-13 text-sm" withArrow>
            Book a Call
          </Button>
          <Button href="#services" variant="outline" className="w-64 sm:w-auto min-w-[200px] h-13 text-sm">
            See How It Works
          </Button>
        </motion.div>
      </motion.div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
    </Section>
  );
};
