const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/testing/setup-tests.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/app/$1',
  },
  // testPathIgnorePatterns: ['<rootDir>/cypress/'],
};

module.exports = createJestConfig(customJestConfig);
