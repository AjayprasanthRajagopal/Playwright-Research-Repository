import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e/src/tests',
  timeout: 60000,

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [['list']],
  
  use: {
    
    trace: 'on-first-retry',
    headless: false,
    screenshot: 'only-on-failure',
    actionTimeout: 5000,
    viewport: null,
    launchOptions: {
      args:["--start-maximized"]
    }
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
