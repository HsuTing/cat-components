module.exports = {
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
    '!src/bin/*.js',
    '!src/color/**',
    // TODO
    '!**/canvas.js',
    '!**/canvas/**',
    '!**/UseCanvas.js'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'html',
    'text'
  ]
};
