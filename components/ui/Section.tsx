import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, fullWidth = false }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${className}`}>
      <div className={`mx-auto px-6 md:px-8 ${fullWidth ? 'w-full' : 'max-w-7xl'}`}>
        {children}
      </div>
    </section>
  );
};
