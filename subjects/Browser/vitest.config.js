import { defineProject
} from 'vitest/config'

export default defineProject({
  test: {
    browser: {
      enabled: true,
      name: 'chrome',
      headless: process.env.VITE_HEADLESS === 'true',
    },
    testTimeout: '10000',
    globals: true,
    name: 'browser',
  }
});
