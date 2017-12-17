'use strict';

const any = jasmine.any;
const yarnLockfileExists = require('../');

describe('yarnLockfileExists', function () {
    it('is a function', function () {
        expect(yarnLockfileExists).toEqual(any(Function));
    });

    it('returns a Boolean', function () {
        expect(yarnLockfileExists()).toEqual(any(Boolean));
    });
});
