const assert = require('chai').assert;
const isOddOrEven = require('./isOddOrEven').isOddOrEven;

describe('isOddOrEven', () => {
    it('should return undefined for Array as a parameter', () => {
        assert.equal(undefined, isOddOrEven([]));
    });

    it('should return undefined for Object as a parameter', () => {
        assert.equal(undefined, isOddOrEven({}));
    });

    it('should return undefined for Number as a parameter', () => {
        assert.equal(undefined, isOddOrEven(1));
    });

    it('should return odd for string with odd length value', () => {
        assert.equal('odd', isOddOrEven('day'));
    });

    it('should return even for string with odd length value', () => {
        assert.equal('even', isOddOrEven('year'));
    });

    it('should return odd for empty string as a parameter', () => {
        assert.equal('even', isOddOrEven(''));
    });
});