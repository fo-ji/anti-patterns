import {
  FieldWrapper,
  type FieldWrapperPassThroughProps,
} from './FieldWrapper';

import type { UseFormRegisterReturn } from 'react-hook-form';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password';
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = ({
  type = 'text',
  label,
  registration,
  error,
}: InputFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className="block w-full appearance-none rounded-md border border-basic px-3 py-2 shadow-sm placeholder:text-font-light focus:border-basic-dark focus:outline-none focus:ring-basic-dark"
        {...registration}
      />
    </FieldWrapper>
  );
};
