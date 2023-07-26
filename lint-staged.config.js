module.exports = {
  'client/**/*.{ts,tsx}': [
    'yarn client lint',
    "bash -c 'yarn client types:check'",
    'yarn client format:check',
  ],
  'server/**/*.ts': [
    'yarn server lint',
    "bash -c 'yarn server types:check'",
    'yarn server format:check',
  ],
};
