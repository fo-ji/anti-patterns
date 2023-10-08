import {
  FieldSetWrapper,
  type FieldSetWrapperPassThroughProps,
} from './field-set-wrapper';

import type { UseFormRegisterReturn } from 'react-hook-form';

type Option = {
  label: string;
  value: string;
};

type RadioGroupFieldProps = FieldSetWrapperPassThroughProps & {
  options: Option[];
  registration: Partial<UseFormRegisterReturn>;
  defaultValue?: string;
};

export const RadioGroupField = ({
  legend,
  options,
  error,
  registration,
  defaultValue,
}: RadioGroupFieldProps) => (
  <FieldSetWrapper legend={legend} error={error}>
    <div className="flex w-fit flex-wrap gap-4">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 rounded-full px-2 py-1 hover:cursor-pointer hover:bg-basic"
        >
          <input
            type="radio"
            id={option.value}
            value={option.value}
            className="radio-field"
            defaultChecked={defaultValue?.includes(option.value)}
            {...registration}
          />
          {option.label}
        </label>
      ))}
    </div>
  </FieldSetWrapper>
);
