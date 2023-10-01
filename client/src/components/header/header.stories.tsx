import { Header, type HeaderProps } from './header';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Header',
  component: Header,
};

export default meta;

const Template: StoryFn<HeaderProps> = (props) => <Header {...props} />;

export const Default = Template.bind({});
