module.exports = {
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.{js}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/public/**",
    "!**/images/**",
    "!**/app/entry.client.tsx/**",
    "!**/app/entry.server.tsx/**",
    "!**/tests/**",
  ],
  moduleNameMapper: {
    // Handle absolute imports in Remix
    "~/(.*)": "<rootDir>/app/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.cache/",
    "<rootDir>/build/",
  ],
  testEnvironment: "jsdom",
  transform: {
    // Use @swc/jest to transpile tests
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": "@swc/jest",
    "^.+\\.(css|scss|sass|less)$": "jest-preview/transforms/css",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "jest-preview/transforms/file",
  },
  transformIgnorePatterns: ["/node_modules/"],
};
