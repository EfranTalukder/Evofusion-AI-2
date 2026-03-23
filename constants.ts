import { Cpu, Network, Zap, Mic, MessageSquare } from 'lucide-react';
import { NavLink, ServiceItem, ProcessStep, BenefitItem } from './types';

export const CAL_LINK = "https://cal.com/efran/chat";

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'AI Automation Systems',
    description: 'Automate repetitive tasks, internal workflows, and operations using custom-built AI solutions.',
    icon: Zap,
  },
  {
    title: 'AI Voice Agents',
    description: 'Deploy human-like voice assistants to handle calls, qualify leads, and schedule appointments 24/7.',
    icon: Mic,
  },
  {
    title: 'AI Chatbots',
    description: 'Intelligent chat agents that engage visitors, support customers, and capture leads automatically.',
    icon: MessageSquare,
  },
  {
    title: 'Custom AI Integrations',
    description: 'Connect AI models with your existing tools, CRMs, and platforms for seamless execution.',
    icon: Network,
  },
  {
    title: 'Optimization & Scaling',
    description: 'We monitor, refine, and scale your AI systems as your business grows.',
    icon: Cpu,
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Reduce operational workload',
    description: 'Free your team from low-value repetitive tasks so they can focus on strategy.',
  },
  {
    title: 'Increase speed and efficiency',
    description: 'Execute workflows instantly, 24/7, without human latency or error.',
  },
  {
    title: 'Eliminate manual bottlenecks',
    description: 'Remove the dependencies that slow down your service delivery and growth.',
  },
  {
    title: 'Deploy AI without complexity',
    description: 'We handle the technical heavy lifting. You just get the results.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We analyze your workflows and identify high-impact automation opportunities.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'We design and develop custom AI systems tailored to your business.',
  },
  {
    number: '03',
    title: 'Deploy',
    description: 'We launch, test, and integrate everything into your operations.',
  },
  {
    number: '04',
    title: 'Scale',
    description: 'Continuous optimization and expansion as your needs grow.',
  },
];