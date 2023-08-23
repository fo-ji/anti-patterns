/** @type { import('@storybook/nextjs').StorybookConfig } */

const path = require('path');

const config = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/features': path.resolve(__dirname, '../src/features'),
      '@/lib': path.resolve(__dirname, '../src/lib'),
      '@/config': path.resolve(__dirname, '../src/config'),
    };

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          'next-i18next': 'react-i18next',
        },
      },
    };
  },
};

export default config;
