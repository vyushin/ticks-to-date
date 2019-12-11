# ticks-to-date
[![version](https://img.shields.io/npm/v/ticks-to-date.svg?style=flat-square)](https://www.npmjs.com/package/ticks-to-date)
[![license](https://img.shields.io/github/license/vyushin/ticks-to-date.svg?style=flat-square)](https://github.com/vyushin/ticks-to-date/blob/master/LICENSE)

The best way to convert C# ticks date time to JavaScript Date.

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