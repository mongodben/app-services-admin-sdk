import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  silent: false,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globalSetup: "./scripts/jest.setup.ts",
};
export default config;
