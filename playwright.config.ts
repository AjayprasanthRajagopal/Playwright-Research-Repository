import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "e2e/src/tests",
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

});
