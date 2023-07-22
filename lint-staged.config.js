module.exports = {
  '*.{ts,tsx}': [
    'yarn client lint',
    'yarn server lint',
    "bash -c 'yarn client types:check'",
    "bash -c 'yarn server types:check'",
    'yarn client format:check',
    'yarn server format:check',
  ],
};
