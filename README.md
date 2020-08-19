# deno_config_dir

[![tag](https://img.shields.io/github/release/justjavac/deno_config_dir)](https://github.com/justjavac/deno_config_dir/releases)
[![Build Status](https://github.com/justjavac/deno_config_dir/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_config_dir/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_config_dir)](https://github.com/justjavac/deno_config_dir/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

Returns the path to the user's config directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

|Platform | Value                                 | Example                              |
| ------- | ------------------------------------- | ------------------------------------ |
| Linux   | `$XDG_CONFIG_HOME` or `$HOME`/.config | /home/justjavac/.config              |
| macOS   | `$HOME`/Library/Preferences           | /Users/justjavac/Library/Preferences |
| Windows | `{FOLDERID_RoamingAppData}`           | C:\Users\justjavac\AppData\Roaming   |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import config_dir from "https://deno.land/x/config_dir/mod.ts";

config_dir();
// Lin: "/home/justjavac/.config"
// Mac: "/Users/justjavac/Library/Preferences"
// Win: "C:\Users\justjavac\AppData\Roaming"
```

## License

[deno_config_dir](https://github.com/justjavac/deno_config_dir) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
