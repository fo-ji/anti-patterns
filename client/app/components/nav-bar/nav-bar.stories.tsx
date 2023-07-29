import type { Meta, StoryFn } from '@storybook/react';

import { NavBar } from './nav-bar';

const meta: Meta = {
  title: 'Components/NavBar',
  component: NavBar,
};

export default meta;

const Template: StoryFn = (props) => <NavBar {...props} />;

export const Default = Template.bind({});
