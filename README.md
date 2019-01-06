# searchx v1.1.0
A tiny library to perform search on JavaScript objects
[![Coverage Status](https://coveralls.io/repos/github/aayani/searchX/badge.svg?branch=master)](https://coveralls.io/github/aayani/searchX?branch=master)
## Installation
```sh
$ npm install searchx --save
$ yarn add searchx
$ bower install searchx --save
```
## Usage
### Javascript
```javascript
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
## Support
Tested in Chrome, Firefox, Edge & IE.
## Test
```sh
$ yarn test
```