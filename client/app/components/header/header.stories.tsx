import type { Meta, StoryFn } from '@storybook/react';

import { Header } from './header';

const meta: Meta = {
  title: 'Components/Header',
  component: Header,
};

export default meta;

const Template: StoryFn = (props) => <Header {...props} />;

export const Default = Template.bind({});
