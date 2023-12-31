import type { ReactNode } from 'react';

import type { FieldError, Merge } from 'react-hook-form';

type FieldWrapperProps = {
  label?: string;
  children: ReactNode;
  error?:
    | FieldError
    | Merge<FieldError, (FieldError | undefined)[]>
    | undefined;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'children'>;

export const FieldWrapper = ({ label, error, children }: FieldWrapperProps) => {
  return (
    <div>
      <label className="block font-medium">
        {label}
        <div className="mt-1">{children}</div>
      </label>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="font-semibold text-system-error"
        >
          {error.message}
        </div>
      )}
    </div>
  );
};
