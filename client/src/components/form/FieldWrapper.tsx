import type { ReactNode } from 'react';

import type { FieldError } from 'react-hook-form';

type FieldWrapperProps = {
  label?: string;
  children: ReactNode;
  error?: FieldError | undefined;
  description?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'children'>;

export const FieldWrapper = ({ label, error, children }: FieldWrapperProps) => {
  return (
    <div>
      <label className="block text-sm font-medium">
        {label}
        <div className="mt-1">{children}</div>
      </label>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="text-sm font-semibold text-font-warning"
        >
          {error.message}
        </div>
      )}
    </div>
  );
};
