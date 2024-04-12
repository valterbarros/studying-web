import { defineProject
} from 'vitest/config'

export default defineProject({
  test: {
    browser: {
      enabled: true,
      name: 'chrome'
    },
    globals: true,
    name: 'browser'
  }
});
