import {
  FieldSetWrapper,
  type FieldSetWrapperPassThroughProps,
} from './field-set-wrapper';

import type { UseFormRegisterReturn } from 'react-hook-form';

type Option = {
  label: string;
  value: string;
};

type CheckboxGroupFieldProps = FieldSetWrapperPassThroughProps & {
  options: Option[];
  registration: Partial<UseFormRegisterReturn>;
  defaultValue?: string;
};

export const CheckboxGroupField = ({
  legend,
  options,
  error,
  registration,
  defaultValue,
}: CheckboxGroupFieldProps) => (
  <FieldSetWrapper legend={legend} error={error}>
    <div className="flex w-fit flex-wrap gap-4">
      {options.map((option) => (
        <label
          key={option.value}
          className="hover:bg-basic flex items-center gap-2 rounded-full px-2 py-1 hover:cursor-pointer"
        >
          <input
            type="checkbox"
            id={option.value}
            value={option.value}
            className="checkbox-field"
            defaultChecked={defaultValue?.includes(option.value)}
            {...registration}
          />
          {option.label}
        </label>
      ))}
    </div>
  </FieldSetWrapper>
);
