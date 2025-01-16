module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|style|less|sass|scss)$': 'jest-css-modules-transform'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js'
  },
  snapshotSerializers: ['@emotion/jest/serializer']
};
