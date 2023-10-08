import type { ReactNode } from 'react';

import type { FieldError } from 'react-hook-form';

type FieldCheckboxWrapperProps = {
  label?: string;
  children: ReactNode;
  error?: FieldError | undefined;
};

export type FieldCheckboxWrapperPassThroughProps = Omit<
  FieldCheckboxWrapperProps,
  'children'
>;

export const FieldCheckboxWrapper = ({
  label,
  error,
  children,
}: FieldCheckboxWrapperProps) => {
  return (
    <div>
      <label className="flex w-fit items-center gap-2 rounded-full px-2 py-1 hover:cursor-pointer hover:bg-basic">
        {children}
        <span className="font-medium">{label}</span>
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
