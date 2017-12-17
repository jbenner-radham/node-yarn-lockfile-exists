'use strict';

const fs = require('fs');

module.exports = function yarnLockfileExists(parameters = {}) {
    const cwd = parameters.cwd || process.cwd();

    try {
        return fs.statSync(`${cwd}/yarn.lock`).isFile();
    } catch (_) {
        return false;
    }
};
