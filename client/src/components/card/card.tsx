import type { ReactNode } from 'react';

const variants = {
  solid: 'bg-plain',
  outline: 'border',
};

export type CardProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
};

export const Card = ({ variant = 'solid', children }: CardProps) => {
  return (
    <div
      className={`rounded-lg px-6 py-4 ring-font-light hover:cursor-pointer hover:opacity-70 hover:ring-1 ${variants[variant]}`}
    >
      {children}
    </div>
  );
};
