```js
'use strict';

const yarnLockfileExists = require('yarn-lockfile-exists');

// Returns `true` or `false` based off of if there is a `yarn.lock`
// file in the location that `process.cwd()` points to.
yarnLockfileExists();
```
