import type { ReactNode } from 'react';

export type CardContentProps = {
  children: ReactNode;
};

export const CardContent = ({ children }: CardContentProps) => {
  return <div className="truncate py-4">{children}</div>;
};
