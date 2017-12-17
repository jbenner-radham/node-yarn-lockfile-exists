yarn-lockfile-exists
====================
Check for a Yarn lockfile in the current working directory.

Install
-------
```sh
$ yarn add yarn-lockfile-exists # Or alternatively: `npm install --save yarn-lockfile-exists`
```

Usage
-----
```js
'use strict';

const yarnLockfileExists = require('yarn-lockfile-exists');

// Returns `true` or `false` based off of if there is a `yarn.lock`
// file in the location that `process.cwd()` points to.
yarnLockfileExists();
```

Testing
-------
```sh
$ yarn test # Or alternatively: `npm test`
```

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.
