export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      // process `*.tsx` files with `ts-jest`
    },
    rootDir: 'src',
    moduleNameMapper: {
      '^@app/(.*)$': '<rootDir>/$1',
    },
    moduleFileExtensions: ['js', 'cjs'],
    testMatch: ['**/*.test.cjs'],
  };