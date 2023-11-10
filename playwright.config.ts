import { PlaywrightTestConfig, devices } from "@playwright/test";

const testDirMap = {
  "shadowDom": "shadowDom",
  "form": "form",
  "uiActions": "letCode"
};

const config: PlaywrightTestConfig = {
  //testDir: "./e2e/src/tests/form",
  testDir: `./e2e/src/tests/${testDirMap[process.env["SUITE"]] || (process.env["SUITE"] === "form" ? "" : process.env["SUITE"])}`,
  testMatch: "**/*spec.ts",
  timeout: 60000 * 2,
  expect: {
    timeout: 10000
  },
  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: 0,

  workers: 1,

  reporter: [["html"]],

  use: {

    trace: "on",
    headless: true,
    screenshot: "on",
    video: "on",
    actionTimeout: 15000,
    viewport: { width: 1280, height: 720 },
  },

  projects: [
    {
      name: "chrome",
      use: { channel: "chrome" },
    },

    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    {
      name: "edge",
      use: { channel: "msedge" }
    },

  ],

};
export default config;
