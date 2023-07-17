module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'next/core-web-vitals',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  settings: {
    tailwindcss: {
      groupByResponsive: true,
      whitelist: [
        'primary\\',
        'secondary\\',
        'neutral\\',
        'font\\-(dark|base|light|warning)',
      ],
    },
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/features/*/*'],
      },
    ],
    'import/no-cycle': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    {
      files: ['*.test.{ts,tsx}', 'src/testing/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
};
