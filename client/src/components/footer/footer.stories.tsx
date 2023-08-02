import type { Meta, StoryFn } from '@storybook/react';

import { Footer } from './footer';

const meta: Meta = {
  title: 'Components/Footer',
  component: Footer,
};

export default meta;

const Template: StoryFn = (props) => <Footer {...props} />;

export const Default = Template.bind({});
