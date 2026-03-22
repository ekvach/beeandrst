import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 60 * 1000,

  testDir: './tests',

  fullyParallel: false,
  forbidOnly: !!process.env.CI,

  retries: 1,
  workers: 1,

  reporter: 'html',

  use: {
    headless: true,

    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',

    actionTimeout: 15 * 1000,
    navigationTimeout: 15 * 1000,

    testIdAttribute: 'data-test',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
