// Not Working
import type { Meta, StoryFn } from '@storybook/react';

import { SideBar } from './side-bar';

const meta: Meta = {
  title: 'Components/SideBar',
  component: SideBar,
};

export default meta;

const Template: StoryFn = (props) => <SideBar {...props} />;

export const Default = Template.bind({});
