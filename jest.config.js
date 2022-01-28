module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.spec.tsx',
    '!src/**/*.stories.tsx',
    '!src/**/_app.tsx',
    '!src/**/_document.tsx',
  ],
};
