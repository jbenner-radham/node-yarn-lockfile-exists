import { execaCommandSync } from 'execa';
import fs from 'fs-extra';
import os from 'node:os';
import path from 'node:path';
import { temporaryDirectory } from 'tempy';
import yarnLockfileExists from '../lib/index.js';

const { any } = jasmine;

describe('yarnLockfileExists', function () {
    beforeAll(function () {
        this.originalCwd = process.cwd();
    });

    afterAll(function () {
        process.chdir(this.originalCwd);
    });

    beforeEach(function () {
        this.cwd = temporaryDirectory();

        process.chdir(this.cwd);
    });

    afterEach(function () {
        // In GitHub Actions on windows-latest (Win11) with Node.js 18 the
        // `fs.removeSync` command fails with "Error: EBUSY: resource busy or locked"
        // so we use this PowerShell command to work around it.
        if (os.platform().startsWith('win')) {
            execaCommandSync(`powershell.exe -Command "Remove-Item -Force ${this.cwd}"`);
        } else {
            fs.removeSync(this.cwd);
        }
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
        const specifiedCwd = temporaryDirectory();

        fs.removeSync(path.join(this.cwd, 'yarn.lock'));
        fs.ensureFileSync(path.join(specifiedCwd, 'yarn.lock'));
        expect(yarnLockfileExists({ cwd: specifiedCwd })).toBe(true);
    });

    it('returns `false` if no `yarn.lock` file is in the specified working directory', function () {
        const specifiedCwd = temporaryDirectory();

        fs.removeSync(path.join(this.cwd, 'yarn.lock'));
        fs.removeSync(path.join(specifiedCwd, 'yarn.lock'));
        expect(yarnLockfileExists({ cwd: specifiedCwd })).toBe(false);
    });

    it('returns a Boolean', function () {
        expect(yarnLockfileExists()).toEqual(any(Boolean));
    });
});
