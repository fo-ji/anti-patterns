import type { ReactNode } from 'react';

const variants = {
  solid: 'bg-neutral',
  outline: 'border',
};

export type CardProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
};

export const Card = ({ variant = 'solid', children }: CardProps) => {
  return (
    <div className={`rounded-lg px-6 py-4 ${variants[variant]}`}>
      {children}
    </div>
  );
};
