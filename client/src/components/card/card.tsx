import type { ReactNode } from 'react';

const variants = {
  solid: 'bg-white',
  outline: 'border',
};

export type CardProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
};

export const Card = ({ variant = 'solid', children }: CardProps) => {
  return (
    <div
      className={`rounded-lg px-6 py-4 ring-basic-light hover:cursor-pointer hover:ring-basic-dark hover:ring-4 ${variants[variant]}`}
    >
      {children}
    </div>
  );
};
