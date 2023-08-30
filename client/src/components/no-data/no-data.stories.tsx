import { NoData } from './no-data';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/NoData',
  component: NoData,
};

export default meta;

const Template: StoryFn = () => <NoData />;

export const Default = Template.bind({});
