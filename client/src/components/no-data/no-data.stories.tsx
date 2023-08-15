import type { Meta, StoryFn } from '@storybook/react';

import { NoData } from './no-data';

const meta: Meta = {
  title: 'Components/NoData',
  component: NoData,
};

export default meta;

const Template: StoryFn = () => <NoData />;

export const Default = Template.bind({});
