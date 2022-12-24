yarn-lockfile-exists
====================
[![CI Status](https://img.shields.io/github/actions/workflow/status/jbenner-radham/node-yarn-lockfile-exists/ci.yaml?branch=main)](https://github.com/jbenner-radham/node-yarn-lockfile-exists/actions/workflows/ci.yaml)
[![npm](https://img.shields.io/npm/v/yarn-lockfile-exists.svg)](https://www.npmjs.com/package/yarn-lockfile-exists)
[![Node.js](https://img.shields.io/node/v/yarn-lockfile-exists.svg)](https://nodejs.org/)
[![License](https://img.shields.io/github/license/jbenner-radham/node-yarn-lockfile-exists.svg)](LICENSE)

Check for a Yarn lockfile in the current working directory.

Install
-------
```sh
yarn add yarn-lockfile-exists # Or alternatively: `npm install yarn-lockfile-exists`
```

Usage
-----
### JavaScript
```js
import yarnLockfileExists from 'yarn-lockfile-exists';

// Returns `true` or `false` based off of if there is a `yarn.lock` file in the location
// that `process.cwd()` points to.
yarnLockfileExists();

// Optionally you can specify the current working directory for the function to operate in.
const cwd = '/home/myself/awesome-project';

yarnLockfileExists({ cwd });
```

### TypeScript
```ts
import yarnLockfileExists, { type YarnLockfileExistsConfig } from 'yarn-lockfile-exists';

// Returns `true` or `false` based off of if there is a `yarn.lock` file in the location
// that `process.cwd()` points to.
yarnLockfileExists();

// Optionally you can specify the current working directory for the function to operate in.
const config: YarnLockfileExistsConfig = {
    cwd: '/home/myself/awesome-project'
};

yarnLockfileExists(config);
```

Testing
-------
```sh
yarn test # Or alternatively: `npm test`
```

License
-------
The MIT License. See the [license file](LICENSE) for details.
