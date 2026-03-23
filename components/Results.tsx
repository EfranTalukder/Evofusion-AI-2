import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';

const CASE_STUDIES = [
  {
    industry: 'E-Commerce',
    metric: '47%',
    metricLabel: 'reduction in support tickets',
    description: 'Deployed an AI chatbot that handles product questions, returns, and order tracking — freeing the support team for complex issues.',
  },
  {
    industry: 'Real Estate',
    metric: '3.2x',
    metricLabel: 'more qualified leads',
    description: 'Built an AI voice agent that pre-qualifies inbound calls, books showings, and follows up with leads automatically around the clock.',
  },
  {
    industry: 'SaaS',
    metric: '22hrs',
    metricLabel: 'saved per week',
    description: 'Automated the onboarding pipeline — from form submission to CRM entry to welcome sequence — removing manual data entry entirely.',
  },
];

export const Results: React.FC = () => {
  return (
    <Section id="results" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4"
        >
          Real Results
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl italic text-white tracking-[-0.01em]"
        >
          Built for impact, not demos.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {CASE_STUDIES.map((study, i) => (
          <motion.div
            key={study.industry}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative rounded-2xl border border-[#252525] bg-[#131313] p-8 md:p-10 overflow-hidden hover:border-accent/30 transition-colors duration-500"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-6 block">
              {study.industry}
            </span>
            <div className="mb-4">
              <span className="font-display text-5xl md:text-6xl italic text-accent leading-none">
                {study.metric}
              </span>
              <span className="block mt-2 text-sm font-medium text-white/80">
                {study.metricLabel}
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-[1.7]">
              {study.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
