import type { ReactNode } from 'react';

import type { FieldError, Merge } from 'react-hook-form';

type FieldSetWrapperProps = {
  legend?: string;
  children: ReactNode;
  error?:
    | FieldError
    | Merge<FieldError, (FieldError | undefined)[]>
    | undefined;
};

export type FieldSetWrapperPassThroughProps = Omit<
  FieldSetWrapperProps,
  'children'
>;

export const FieldSetWrapper = ({
  legend,
  error,
  children,
}: FieldSetWrapperProps) => {
  return (
    <fieldset>
      <legend className="block font-medium">
        {legend}
        <div className="mt-1">{children}</div>
      </legend>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="font-semibold text-system-error"
        >
          {error.message}
        </div>
      )}
    </fieldset>
  );
};
