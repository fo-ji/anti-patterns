import { Tag, type TagProps } from './tag';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Tag',
  component: Tag,
};

export default meta;

const Template: StoryFn<TagProps> = (props) => <Tag {...props} />;

export const Default = Template.bind({});

Default.args = {
  children: 'サンプル',
  href: '/',
};
