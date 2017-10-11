module.exports = {
  setupFiles: ['cat-jest'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
    '/utils/'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    'docs/src/**/*.js',
    '!**/node_modules/**',
    '!**/public/**',
    '!**/docs/src/utils/router.js',
    '!src/bin/*.js',
    '!src/color/**',
    '!src/goToAnimation.js',
    '!src/bundle.js'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'html',
    'text'
  ]
};
