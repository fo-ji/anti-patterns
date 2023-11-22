import {
  SWRFallbackWrapper,
  type SWRFallbackWrapperProps,
} from './swr-fallback-wrapper';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Wrapper',
  component: SWRFallbackWrapper,
};

export default meta;

const Template: StoryFn<SWRFallbackWrapperProps> = (props) => (
  <SWRFallbackWrapper {...props} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'any contents',
};

export const IsLoading = Template.bind({});

IsLoading.args = {
  children: 'loading contents...',
  isLoading: true,
};

export const IsError = Template.bind({});

IsError.args = {
  children: 'error!',
  error: true,
};
