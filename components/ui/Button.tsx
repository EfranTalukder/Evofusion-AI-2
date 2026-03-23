import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  href?: string;
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  href,
  withArrow = false,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-xl tracking-wide overflow-hidden group cursor-pointer";

  const variants = {
    primary: [
      "bg-white text-[#06090F]",
      "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_16px_rgba(255,255,255,0.06)]",
      "hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_8px_30px_rgba(255,255,255,0.1)]",
      "hover:bg-[#F0F2F5]",
      "active:scale-[0.97] active:shadow-[0_1px_2px_rgba(0,0,0,0.3)]",
      "transition-transform duration-300 ease-out",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
    ].join(" "),

    secondary: [
      "bg-surface-elevated text-white border border-border",
      "shadow-[0_1px_2px_rgba(0,0,0,0.4),0_4px_12px_rgba(91,141,245,0.04)]",
      "hover:border-accent/30 hover:bg-surface-floating",
      "hover:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_rgba(91,141,245,0.08)]",
      "active:scale-[0.97] active:bg-surface",
      "transition-transform duration-300 ease-out",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    ].join(" "),

    outline: [
      "bg-transparent text-white border border-white/10",
      "shadow-[0_0_12px_rgba(91,141,245,0.06),0_0_1px_rgba(255,255,255,0.04)]",
      "hover:border-white/18 hover:bg-white/[0.03]",
      "hover:shadow-[0_0_20px_rgba(91,141,245,0.1),0_0_1px_rgba(255,255,255,0.06)]",
      "active:scale-[0.97] active:bg-white/[0.02]",
      "transition-transform duration-300 ease-out",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
    ].join(" "),

    accent: [
      "text-white",
      "bg-gradient-to-b from-[#6B9FFF] to-[#3A6AD4]",
      "shadow-[0_1px_2px_rgba(0,0,0,0.4),0_0_0_1px_rgba(91,141,245,0.4),0_4px_16px_rgba(91,141,245,0.2),0_12px_40px_rgba(91,141,245,0.12)]",
      "hover:from-[#7BA6FF] hover:to-[#5B8DF5]",
      "hover:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_0_0_1px_rgba(123,166,255,0.5),0_8px_24px_rgba(91,141,245,0.3),0_20px_60px_rgba(91,141,245,0.15)]",
      "active:scale-[0.97] active:from-[#3A6AD4] active:to-[#3A6AD4]",
      "transition-transform duration-300 ease-out",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    ].join(" "),
  };

  const content = (
    <>
      {/* Subtle top highlight for accent buttons */}
      {variant === 'accent' && (
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {withArrow && <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
};
