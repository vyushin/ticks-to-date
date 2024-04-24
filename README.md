# ticks-to-date
[![version](https://img.shields.io/npm/v/ticks-to-date.svg?style=flat-square)](https://www.npmjs.com/package/ticks-to-date)
[![license](https://img.shields.io/github/license/vyushin/ticks-to-date.svg?style=flat-square)](https://github.com/vyushin/ticks-to-date/blob/master/LICENSE)

The best way to convert C# ticks date time to JavaScript Date.

> **ticks-to-date is free** and will always remain free <br/>
> A simple and quick way to support the project is to **buy me a coffee**. <br/>It will take no more than 5 minutes and will allow the project to keep going

<a href="https://buymeacoffee.com/vyushin" target="_blank" title="Buy me a coffee">
  <img height="50" alt="Buy me a coffee" src="https://github.com/vyushin/ticks-to-date/assets/8006957/88b6350c-2eb1-4f4c-9179-6f4b2771905b">
</a>

## Installation

###### NPM
`npm install --save-dev ticks-to-date`

###### Yarn
`yarn add ticks-to-date`

## Example

```javascript
const ticksToDate = require('ticks-to-date');
const date = ticksToDate(636976874910235300);
console.log(date.toUTCString());                // Tue, 02 Jul 2019 18:04:51 GMT
console.log(date.getUTCDay());                  // 2
console.log(date.getUTCMonth());                // 6
console.log(date.getUTCFullYear());             // 2019
// etc...
```

For more information about Date object see:<br/>
https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date

For more information about ticks see:<br/>
https://docs.microsoft.com/dotnet/api/system.datetime.ticks

## Contributing
See [contributing](https://github.com/vyushin/ticks-to-date/blob/master/CONTRIBUTING.md) guideline.

## License
[MIT LICENSE](https://github.com/vyushin/ticks-to-date/blob/master/LICENSE)