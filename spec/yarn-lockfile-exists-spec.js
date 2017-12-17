'use strict';

const any = jasmine.any;
const fs = require('fs-extra');
const path = require('path');
const tempy = require('tempy');
const yarnLockfileExists = require('../');

describe('yarnLockfileExists', function () {
    beforeAll(function () {
        this.originalCwd = process.cwd();
    });

    afterAll(function () {
        process.chdir(this.originalCwd);
    });

    beforeEach(function () {
       this.cwd = tempy.directory();

       process.chdir(this.cwd);
    });

    afterEach(function () {
       fs.removeSync(this.cwd);
    });

    it('is a function', function () {
        expect(yarnLockfileExists).toEqual(any(Function));
    });

    it('returns `true` if a `yarn.lock` file is in the current working directory', function () {
        fs.ensureFileSync(path.join(this.cwd, 'yarn.lock'));
        expect(yarnLockfileExists()).toBe(true);
    });

    it('returns `false` if no `yarn.lock` file is in the current working directory', function () {
        fs.removeSync(path.join(this.cwd, 'yarn.lock'));
        expect(yarnLockfileExists()).toBe(false);
    });

    it('returns `true` if a `yarn.lock` file is in the specified working directory', function () {
        const specifiedCwd = tempy.directory();

        fs.removeSync(path.join(this.cwd, 'yarn.lock'));
        fs.ensureFileSync(path.join(specifiedCwd, 'yarn.lock'));
        expect(yarnLockfileExists({cwd: specifiedCwd})).toBe(true);
    });

    it('returns `false` if no `yarn.lock` file is in the specified working directory', function () {
        const specifiedCwd = tempy.directory();

        fs.removeSync(path.join(this.cwd, 'yarn.lock'));
        fs.removeSync(path.join(specifiedCwd, 'yarn.lock'));
        expect(yarnLockfileExists({cwd: specifiedCwd})).toBe(false);
    });

    it('returns a Boolean', function () {
        expect(yarnLockfileExists()).toEqual(any(Boolean));
    });
});
