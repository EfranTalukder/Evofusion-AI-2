import React from 'react';
import { NAV_LINKS, CAL_LINK } from '../constants';

const DISCORD_LINK = "https://discord.gg/8JPpmnDjjU";
const YOUTUBE_LINK = "https://youtube.com/@efranautomation?si=wqA0_-lZ-dXeay-S";
const EMAIL = "efran@evofusionai.com";

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 md:py-20 px-6 bg-[#06090F]">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 mb-16">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-sans text-2xl text-white font-bold">Evofusion AI</span>
            </div>
            <p className="text-sm text-secondary max-w-xs leading-[1.7]">
              We design and deploy AI systems that automate operations and drive scalable growth for modern businesses.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-4">Navigate</span>
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-4">Connect</span>
              <div className="flex flex-col gap-3">
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  Book a Call
                </a>
                <a href={`mailto:${EMAIL}`} className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  {EMAIL}
                </a>
                <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  YouTube
                </a>
                <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  Discord
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-700 text-xs">
            &copy; {new Date().getFullYear()} Evofusion AI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.04] flex items-center justify-center text-zinc-600 hover:text-accent hover:border-accent/20 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="YouTube"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.04] flex items-center justify-center text-zinc-600 hover:text-accent hover:border-accent/20 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Discord"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
