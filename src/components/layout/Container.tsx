import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
