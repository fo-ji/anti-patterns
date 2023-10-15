import { Error } from './error';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Error',
  component: Error,
};

export default meta;

const Template: StoryFn = () => <Error />;

export const Default = Template.bind({});
