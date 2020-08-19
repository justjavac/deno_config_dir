/** Returns the path to the user's config directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value                                 | Example                              |
 * | ------- | ------------------------------------- | ------------------------------------ |
 * | Linux   | `$XDG_CONFIG_HOME` or `$HOME`/.config | /home/justjavac/.config              |
 * | macOS   | `$HOME`/Library/Preferences           | /Users/justjavac/Library/Preferences |
 * | Windows | `{FOLDERID_RoamingAppData}`           | C:\Users\justjavac\AppData\Roaming   |
 */
export default function configDir(): string | null {
  switch (Deno.build.os) {
    case "linux": {
      const xdg = Deno.env.get("XDG_CONFIG_HOME");
      if (xdg) return xdg;

      const home = Deno.env.get("HOME");
      if (home) return `${home}/.config`;
      break;
    }

    case "darwin": {
      const home = Deno.env.get("HOME");
      if (home) return `${home}/Library/Preferences`;
      break;
    }

    case "windows":
      return Deno.env.get("FOLDERID_RoamingAppData") ?? null;
  }

  return null;
}
