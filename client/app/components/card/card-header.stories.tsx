import type { Meta, StoryFn } from '@storybook/react';

import { CardHeader, type CardHeaderProps } from './card-header';

const meta: Meta = {
  title: 'Components/Card/CardHeader',
  component: CardHeader,
};

export default meta;

const Template: StoryFn<CardHeaderProps> = (props) => <CardHeader {...props} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </ul>
  ),
  title: 'カードヘッダーのタイトル',
  supplement: '2023年10月12日',
};
