import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e/src/tests',
  timeout: 60000,

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: 0,

  workers: 1,

  reporter: [['html']],
  
  use: {
    
    trace: 'on-first-retry',
    headless: true,
    screenshot: 'on',
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
