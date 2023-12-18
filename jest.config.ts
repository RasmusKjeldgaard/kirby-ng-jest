const esModules = [
  '@kirbydesign/core',
  '@kirbydesign/designsystem',
  'inputmask',
  '@awesome-cordova-plugins/http',
  'swiper',
  'ssr-window',
].join('|');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        isolatedModules: true,
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules}|.*\\.mjs$)`],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
};
