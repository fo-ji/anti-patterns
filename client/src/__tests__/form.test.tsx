import * as z from 'zod';

import { Button } from '@/components/button';
import { Form, InputField } from '@/components/form';
import { appRender, screen, waitFor, userEvent } from '@/testing/test-utils';

const testData = {
  title: 'Hello World',
};

const schema = z.object({
  title: z.string().min(1, 'Required'),
});

test('should render and submit a basic Form component', async () => {
  const handleSubmit = jest.fn();

  appRender(
    <Form<typeof testData, typeof schema>
      onSubmit={handleSubmit}
      schema={schema}
      id="my-form"
    >
      {({ register, formState }) => (
        <>
          <InputField
            label="Title"
            error={formState.errors['title']}
            registration={register('title')}
          />
          <Button type="submit">Submit</Button>
        </>
      )}
    </Form>,
  );

  await userEvent.type(screen.getByLabelText(/title/i), testData.title);

  await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith(testData, expect.anything()),
  );
});

test('should fail submission if validation fails', async () => {
  const handleSubmit = jest.fn();

  appRender(
    <Form<typeof testData, typeof schema>
      onSubmit={handleSubmit}
      schema={schema}
      id="my-form"
    >
      {({ register, formState }) => (
        <>
          <InputField
            label="Title"
            error={formState.errors['title']}
            registration={register('title')}
          />
          <Button type="submit">Submit</Button>
        </>
      )}
    </Form>,
  );

  await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  await screen.findByRole('alert', { name: /required/i });

  await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(0));
});
