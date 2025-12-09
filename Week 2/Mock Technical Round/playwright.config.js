import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./test",
  // Minimal output to avoid pipe issues with the default list reporter.
  reporter: "dot",
  use: {
    headless: true,
  },
});
