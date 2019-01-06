# searchX v1.1.0
[![npm package](https://badge.fury.io/js/searchx.svg)](https://github.com/aayani/searchX) [![build](https://travis-ci.org/aayani/searchX.svg?branch=master)](https://travis-ci.org/aayani/searchX) [![coverage](https://coveralls.io/repos/github/aayani/searchX/badge.svg?branch=master)](https://coveralls.io/github/aayani/searchX?branch=master) [![dependencies](https://david-dm.org/aayani/searchx.svg)](https://david-dm.org/aayani/searchx) [![devDependencies](https://david-dm.org/aayani/searchx/dev-status.svg)](https://david-dm.org/aayani/searchx?type=dev)
A tiny library to perform search on JavaScript objects.
## Installation
```sh
$ npm install searchx --save
$ yarn add searchx
```
## Usage
```js
// Load the build.
var { search } = require('searchx');
// keyword: string - "A keyword to look for in a collection"
// collection: Array<object> - "An array of objects to perform search on"
// options = {
//   columns: ['col1', 'col2', 'col3'], // attributes to perform search on. (null by default)
// };
// This will return a promise.
var promise = search(keyword, collection, options);
// Resolving the promise would return the search results.
return promise.then(result => result);
```
## Test
```sh
$ npm run test
$ yarn test
```
## Support
Tested in Chrome, Firefox, Edge & IE.
## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details