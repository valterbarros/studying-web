// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['../../vitest.setup.js'],
    name: 'noBrowser',
    allowOnly: true,
    passWithNoTests: false,
    typecheck: {
      ignoreSourceErrors: true,
      enabled: true,
      // include: [
      //   '*.test-d.ts'
      // ]
    }
  },
});