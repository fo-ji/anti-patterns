import { Button } from '../button';

import { Form } from './Form';
import { InputField } from './InputField';

import type { Meta, StoryFn } from '@storybook/react';

type FormValues = {
  title: string;
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
        <div className="flex flex-col gap-4">
          <InputField
            label="Title"
            error={formState.errors['title']}
            registration={register('title')}
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
