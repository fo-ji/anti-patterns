import { NavLink, type NavLinkProps } from './nav-link';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Link/NavLink',
  component: NavLink,
};

export default meta;

const Template: StoryFn<NavLinkProps> = (props) => <NavLink {...props} />;

export const Default = Template.bind({});

Default.args = {
  href: '/',
  children: 'トレンド',
};
