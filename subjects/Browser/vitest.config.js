import { defineProject
} from 'vitest/config'

export default defineProject({
  test: {
    browser: {
      enabled: true,
      name: 'chrome',
      headless: process.env.VITE_HEADLESS === 'true',
    },
    globals: true,
    name: 'browser',
  }
});
