import type { ReactNode } from 'react';

export type CardHeaderProps = {
  children?: ReactNode;
  title?: string;
  supplement?: string;
};

export const CardHeader = ({
  children,
  title,
  supplement,
}: CardHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      {title && (
        <h3 className="whitespace-pre-wrap break-words font-semibold">
          {title}
        </h3>
      )}
      {supplement && (
        <div className="text-right text-sm">
          <span>{supplement}</span>
        </div>
      )}
      {children}
    </div>
  );
};
