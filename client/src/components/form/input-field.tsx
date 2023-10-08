import {
  FieldWrapper,
  type FieldWrapperPassThroughProps,
} from './field-wrapper';

import type { UseFormRegisterReturn } from 'react-hook-form';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = ({
  type = 'text',
  label,
  placeholder,
  registration,
  error,
}: InputFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className="text-field"
        placeholder={placeholder}
        {...registration}
      />
    </FieldWrapper>
  );
};
