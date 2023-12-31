import { ArrowLeftIcon } from '@heroicons/react/24/solid';

import { Link, type LinkProps } from './link';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Link/Link',
  component: Link,
};

export default meta;

const Template: StoryFn<LinkProps> = (props) => <Link {...props} />;

export const Default = Template.bind({});

Default.args = {
  href: '/',
  children: 'Click Me',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  href: '/',
  children: 'With Icon',
  icon: <ArrowLeftIcon />,
};
