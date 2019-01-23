# find-chrome-extension

Finds a Google Chrome extension by name

## Installation

```
npm install --save find-chrome-extension
```

## Usage

```javascript
const findChromeExtension = require('find-chrome-extension');

const dir = findChromeExtension('React Developer Tools');

console.log(dir);
```

The `console.log` statement should print the directory containing the extension (if found). Example: `/Users/frank/Library/Application Support/Google/Chrome/Profile 3/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.6.0_0`. The `findChromeExtension` function returns null if not found.

## Platforms

Currently, this utility works on Windows, macOS, and Linux. It searches the `Default` as well as all `Profile` directories.

## Test

1. Install the [React Developer Tools](chrome://extensions/?id=fmkadmapgofadopljbjfkapdkoienihi) Google Chrome extension.
2. Run `npm install` to install the Mocha dev dependency.
2. Run `npm test` to run the test.

## Motivation

I wanted a utility whereby I could install the React Developer Tools in Electron using the BrowswerWindow `addDevToolsExtension` method.

## Notes

1. Another option would have been to find the extension by ID but that would have added another step for the developer (i.e., determining the extension ID from the extension URL).
2. It looks in all profiles and doesn't check the version number. It simply returns the first extension matching the name.