const assert = require('chai').assert;
const {
    addFive,
    subtractTen,
    sum
} = require('./mathEnforcer');

describe('MathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined with an Array as a parameter', () => {
            assert.equal(undefined, addFive([]));
        });

        it('should return undefined with an Object as a parameter', () => {
            assert.equal(undefined, addFive({}));
        });

        it('should return undefined with an String as a parameter', () => {
            assert.equal(undefined, addFive('text'));
        });

        it('should return undefined with an Array as a parameter', () => {
            assert.equal(undefined, addFive([]));
        });

        it('should return correct result with a Number as a parameter', () => {
            assert.equal(8, addFive(3));
        });
    });

    describe('subtractTen', () => {
        it('should return undefined with an Array as a parameter', () => {
            assert.equal(undefined, subtractTen([]));
        });

        it('should return undefined with an Object as a parameter', () => {
            assert.equal(undefined, subtractTen({}));
        });

        it('should return undefined with an String as a parameter', () => {
            assert.equal(undefined, subtractTen('text'));
        });

        it('should return undefined with an Array as a parameter', () => {
            assert.equal(undefined, subtractTen([]));
        });

        it('should return correct result with a Number as a parameter', () => {
            assert.equal(5, subtractTen(15));
        });
    });

    describe('sum', () => {
        it('should return undefined with an Array as a first parameter', () => {
            assert.equal(undefined, sum([], 5));
        });

        it('should return undefined with an Array as a second parameter', () => {
            assert.equal(undefined, sum(5, []));
        });

        it('should return undefined with an Object as a first parameter', () => {
            assert.equal(undefined, sum({}, 7));
        });

        it('should return undefined with an Object as a second parameter', () => {
            assert.equal(undefined, sum(7, {}));
        });

        it('should return undefined with an String as a first parameter', () => {
            assert.equal(undefined, sum('text', 9));
        });

        it('should return undefined with an String as a second parameter', () => {
            assert.equal(undefined, sum(9, 'text'));
        });

        it('should return correct result with a Number as a parameters', () => {
            assert.equal(5, sum(2, 3));
        });
    });
});