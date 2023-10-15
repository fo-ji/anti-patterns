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
        '(basic|main|accent)\\-(dark|light)',
        'font\\-(dark|light|link)',
        'system\\-(success|warning|error)',
        'border\\-(t|b|r|l)\\-(basic|main|accent)\\-(dark|light)',
        'border\\-(basic|main|accent)',
        'ring\\-(basic|main|accent)\\-(dark|light)',
      ],
    },
  },
  rules: {
    'tailwindcss/classnames-order': 'off', // FIXME: カスタムクラスを利用するとき自動整形とコマンドラインでのfixとの差分が生まれる
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
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'next',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'next/**',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'next', 'next/**'],
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
