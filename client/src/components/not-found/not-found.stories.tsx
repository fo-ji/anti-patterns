import { NotFound } from './not-found';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/NotFound',
  component: NotFound,
};

export default meta;

const Template: StoryFn = (props) => <NotFound {...props} />;

export const Default = Template.bind({});
