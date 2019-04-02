module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json',
    }
  }
};
