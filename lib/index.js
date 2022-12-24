'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function yarnLockfileExists(config = {}) {
    const cwd = config.cwd || process.cwd();

    try {
        return fs.statSync(path.join(cwd, 'yarn.lock')).isFile();
    } catch (_) {
        return false;
    }
};
