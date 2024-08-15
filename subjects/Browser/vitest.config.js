import { defineConfig } from 'vitest/config'
import BrowserCommands from '../../vitest-command.js'

export default defineConfig({
  test: {
    browser: {
      provider: 'playwright',
      enabled: true,
      name: 'chromium',
      headless: process.env.VITE_HEADLESS === 'true',
      ui: false,
    },
    setupFiles: ['../../vitest.setup.js'],
    globals: true,
    name: 'browser',
  },
  plugins: [
    BrowserCommands(),
  ],
});
