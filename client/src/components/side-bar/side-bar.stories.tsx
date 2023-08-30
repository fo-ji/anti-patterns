// Not Working
import { SideBar } from './side-bar';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/SideBar',
  component: SideBar,
};

export default meta;

const Template: StoryFn = (props) => <SideBar {...props} />;

export const Default = Template.bind({});
