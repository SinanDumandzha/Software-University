const assert = require('chai').assert;
const lookupChar = require('./charlookUp').lookupChar;

describe('charLookup', () => {
    describe('test first parameter', () => {
        it('should return undefined with a Number as a first parameter', () => {
            assert.equal(undefined, lookupChar(1, 2));
        });

        it('should return undefined with an Array as a first parameter', () => {
            assert.equal(undefined, lookupChar([], 2));
        });

        it('should return undefined with an Object as a first parameter', () => {
            assert.equal(undefined, lookupChar({}, 2));
        });
    });

    describe('test second parameter', () => {
        it('should return undefined with an Array as a second parameter', () => {
            assert.equal(undefined, lookupChar('text', []));
        });

        it('should return undefined with an Object as a second parameter', () => {
            assert.equal(undefined, lookupChar('text', {}));
        });

        it('should return undefined with an String as a second parameter', () => {
            assert.equal(undefined, lookupChar('text', 'word'));
        });

        it('should return undefined with a floating number as a second parameter', () => {
            assert.equal(undefined, lookupChar('text', 2.3));
        });
    });

    describe('test index range', () => {
        it('should return Incorrect index with a same index parameter to strings length', () => {
            assert.equal('Incorrect index', lookupChar('text', 4));
        });

        it('should return Incorrect index with a bigger index parameter than strings length', () => {
            assert.equal('Incorrect index', lookupChar('text', 5));
        });

        it('should return Incorrect index with a smaller than 0 index parameter', () => {
            assert.equal('Incorrect index', lookupChar('text', -1));
        });

        it('should return Incorrect index with bigger index parameter than 0 when first parameter is an empty string', () => {
            assert.equal('Incorrect index', lookupChar('', 0));
        });
    });

    describe('test returning char', () => {
        it('should return correct character', () => {
            assert.equal('S', lookupChar('SoftUni', 0));
        });

        it('should return correct character', () => {
            assert.equal('t', lookupChar('SoftUni', 3));
        });

        it('should return correct character', () => {
            assert.equal('i', lookupChar('SoftUni', 6));
        });
    });
});