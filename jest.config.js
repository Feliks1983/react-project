module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom', 
    '<rootDir>/jest-setup.js', 
    './vitest-setup.js'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '/src/$1',
    '\\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
};
