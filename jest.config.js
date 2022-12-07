module.exports = {
    'roots': [
      '<rootDir>/src'
    ],
    'transform': {
      '^.+\\.tsx?$': 'ts-jest'
    },
    'testRegex': '(/test/.*|(\\.|/)(test|spec))\\.tsx?$',
    'moduleFileExtensions': [
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'node'
    ],
    // testPathIgnorePatterns: [
    //   '<rootDir>/src/app',
    //   '<rootDir>/src/helpers',
    //   '<rootDir>/src/layout',
    // ],
    coveragePathIgnorePatterns: [
    //   '<rootDir>/src/config',
    //   '<rootDir>/src/app',
    //   '<rootDir>/src/helpers',
    //   '<rootDir>/src/layout',
      'node_modules',
      'test-config',
    //   'interfaces',
    //   'index.d.ts',
    //   '.module.ts',
    ],
    // setupFiles: ['<rootDir>/src/__mocks__/jest.setup.ts'],
    setupFilesAfterEnv: ['<rootDir>/src/__mocks__/enzyme.setup.ts'],
    // 'snapshotSerializers': ['enzyme-to-json/serializer'],
    // 'setupTestFrameworkScriptFile': '<rootDir>/src/__mocks__/enzyme.setup.ts',
}