import { Button } from '../button';

import { CheckboxField } from './checkbox-field';
import { CheckboxGroupField } from './checkbox-group-field';
import { Form } from './form';
import { InputField } from './input-field';
import { RadioGroupField } from './radio-group-field';
import { SelectField } from './select-field';

import type { Meta, StoryFn } from '@storybook/react';

type FormValues = {
  title: string;
  email: string;
  password: string;
  isChecked: boolean;
  radioGroups: string[];
  selects: string[];
  checkboxGroups: string[];
};

const MyForm = () => {
  return (
    <Form<FormValues>
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      id="my-form"
    >
      {({ register, formState }) => (
        <div className="flex flex-col gap-8 rounded bg-white p-8">
          <InputField
            label="Title"
            placeholder="Let's type!"
            error={formState.errors['title']}
            registration={register('title')}
          />
          <InputField
            type="email"
            label="Email"
            placeholder="user@example.com"
            error={formState.errors['email']}
            registration={register('email')}
          />
          <InputField
            type="password"
            label="Password"
            placeholder="Test12345!"
            error={formState.errors.password}
            registration={register('password')}
          />
          <CheckboxField
            label="Checkbox"
            error={formState.errors.isChecked}
            registration={register('isChecked')}
          />
          <RadioGroupField
            legend="RadioGroup"
            error={formState.errors.radioGroups}
            options={[
              { label: 'radio1', value: '1' },
              { label: 'radio2', value: '2' },
              { label: 'radio3', value: '3' },
            ]}
            registration={register('radioGroups')}
          />
          <SelectField
            label="Select"
            error={formState.errors.selects}
            options={[
              { label: 'select1', value: '1' },
              { label: 'select2', value: '2' },
              { label: 'select3', value: '3' },
              { label: 'select4', value: '4' },
              { label: 'select5', value: '5' },
            ]}
            registration={register('selects')}
          />
          <CheckboxGroupField
            legend="CheckboxGroup"
            error={formState.errors.checkboxGroups}
            options={[
              { label: 'checkbox1', value: '1' },
              { label: 'checkbox2', value: '2' },
              { label: 'checkbox3', value: '3' },
            ]}
            registration={register('checkboxGroups')}
          />
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      )}
    </Form>
  );
};

const meta: Meta = {
  title: 'Components/Form',
  component: MyForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn = () => <MyForm />;

export const Default = Template.bind({});

Default.args = {};
