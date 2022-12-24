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

**NOTE**: This is a pure ESM package. See [here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) for details.
