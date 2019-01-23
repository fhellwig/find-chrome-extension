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

## Motivation

I wanted a utility whereby I could install the React Developer Tools in Electron using the React BrowswerWindow `addDevToolsExtension` method.
