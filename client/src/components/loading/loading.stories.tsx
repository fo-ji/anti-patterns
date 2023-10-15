import { Loading } from './loading';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Loading',
  component: Loading,
};

export default meta;

const Template: StoryFn = () => <Loading />;

export const Default = Template.bind({});
