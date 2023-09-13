module.exports = {
    collectCoverage: false,
    collectCoverageFrom: [
        '**/*.{js,jsx,tsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
      ],
      transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
    coverageDirectory: "coverage",
    testEnvironment:"jsdom",
    setuoFilesAfterEnv: ["<rootDir>/jest.setup.js"]
}