import { Card, type CardProps } from './card';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Card/Card',
  component: Card,
};

export default meta;

const Template: StoryFn<CardProps> = (props) => <Card {...props} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </ul>
  ),
  variant: 'solid',
};
