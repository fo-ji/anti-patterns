import {
  FieldCheckboxWrapper,
  type FieldCheckboxWrapperPassThroughProps,
} from './field-checkbox-wrapper';

import type { UseFormRegisterReturn } from 'react-hook-form';

type CheckboxFieldProps = FieldCheckboxWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
};

export const CheckboxField = ({
  error,
  label,
  registration,
}: CheckboxFieldProps) => (
  <FieldCheckboxWrapper label={label} error={error}>
    <input type="checkbox" className="checkbox-field" {...registration} />
  </FieldCheckboxWrapper>
);
