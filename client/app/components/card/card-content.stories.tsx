import type { Meta, StoryFn } from '@storybook/react';

import { CardContent, type CardContentProps } from './card-content';

const meta: Meta = {
  title: 'Components/Card/CardContent',
  component: CardContent,
};

export default meta;

const Template: StoryFn<CardContentProps> = (props) => (
  <CardContent {...props} />
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </ul>
  ),
};
