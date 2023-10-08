import {
  FieldWrapper,
  type FieldWrapperPassThroughProps,
} from './field-wrapper';

import type { UseFormRegisterReturn } from 'react-hook-form';

type Option = {
  label: string;
  value: string | number;
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  registration: Partial<UseFormRegisterReturn>;
  defaultValue?: string | number;
  placeholder?: string;
};

export const SelectField = ({
  label,
  options,
  error,
  registration,
  defaultValue,
  placeholder,
}: SelectFieldProps) => (
  <FieldWrapper label={label} error={error}>
    <select
      placeholder={placeholder}
      className="select-field"
      defaultValue={defaultValue}
      {...registration}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </FieldWrapper>
);
