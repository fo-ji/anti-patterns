import { Footer } from './footer';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Footer',
  component: Footer,
};

export default meta;

const Template: StoryFn = (props) => <Footer {...props} />;

export const Default = Template.bind({});
