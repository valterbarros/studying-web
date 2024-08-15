const clipBoardPermission = async (ctx) => {
  await ctx.context.grantPermissions(["clipboard-read", "clipboard-write"]);
}

export default function BrowserCommands() {
  return {
    name: 'vitest:custom-commands',
    config() {
      return {
        test: {
          browser: {
            commands: {
              clipBoardPermission,
            }
          }
        }
      }
    }
  }
}
