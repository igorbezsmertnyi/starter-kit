module.exports = {
  roots: [
    '<rootDir>/app/javascript/src'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/app/javascript/src/testSetup.js'
  ],
  moduleFileExtensions: [
    'js', 'jsx', 'json', 'ts', 'tsx', 'node', 'react'
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/javascript/src/$1"
  },
  moduleDirectories: [
    '<rootDir>/node_modules'
  ],
  transformIgnorePatterns: [
    '/node_modules/'
  ]
}
