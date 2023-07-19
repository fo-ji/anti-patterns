import { PlusIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryFn } from '@storybook/react';

import { Button, type ButtonProps } from './button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

const Template: StoryFn<ButtonProps> = (props) => <Button {...props} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Click Me',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  children: 'Click Me',
  icon: <PlusIcon />,
};
