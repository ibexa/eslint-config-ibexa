# Ibexa ESLint config

## Installation and setup
In order to use this config, add into `package.json` lines:
```
{
    "prettier": "eslint-config-ibexa/prettier",
    "devDependencies": {
        "eslint-config-ibexa": "https://github.com/ibexa/eslint-config-ibexa.git#v1.1.0"
    },
    "scripts": {
        "test": "yarn prettier-test && yarn eslint-test",
        "fix": "yarn prettier-test --write && yarn eslint-test --fix",
        "eslint-test": "eslint \"./src/bundle/Resources/**/*.js\" \"./src/bundle/ui-dev/**/*.js\"",
        "prettier-test": "yarn prettier \"./src/bundle/Resources/**/*.{js,scss}\" \"./src/bundle/ui-dev/**/*.js\" --check"
    }
}

```
If there are is no `ui-dev` modules, remove corresponding paths from two last commands.

Add also `.eslintrc.json` and paste into it:
```
{
    "extends": "eslint-config-ibexa/eslint"
}
```

Inside bundle directory run `yarn install`. Everything is ready to use.
REMEBER: without this command, neither eslint nor prettier will work in your text editor.

## How To Lint and Format Code with ESLint in Visual Studio Code

### Install ESLint Extension
Navigate to Extensions tab and search for ESLint and install it. Do the same for Prettier extension.

### Format on Save
Use the command palette to open **Preferences: Open Workspace Settings (JSON)**. Paste this fragment in opened file:
```
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript"]
}
```
Save and restart editor.

## Quick installation
Create bash file and paste into it:
```
#!/usr/bin/env bash

cd vendor/ibexa
for d in */; do
    cd $d
    if test -f "package.json"; then
        yarn install
    fi
    cd ../
done
```
Change its permissions to executable. Run it from main project directory.
It will install modules in all bundles.

## COPYRIGHT
Copyright (C) 1999-2023 Ibexa AS (formerly eZ Systems AS). All rights reserved.

## LICENSE
This source code is available separately under the following licenses:

A - Ibexa Business Use License Agreement (Ibexa BUL),
version 2.4 or later versions (as license terms may be updated from time to time)
Ibexa BUL is granted by having a valid Ibexa DXP (formerly eZ Platform Enterprise) subscription,
as described at: https://www.ibexa.co/product
For the full Ibexa BUL license text, please see:
- LICENSE-bul file placed in the root of this source code, or
- https://www.ibexa.co/software-information/licenses-and-agreements (latest version applies)

AND

B - GNU General Public License, version 2
Grants an copyleft open source license with ABSOLUTELY NO WARRANTY. For the full GPL license text, please see:
- LICENSE file placed in the root of this source code, or
- https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
