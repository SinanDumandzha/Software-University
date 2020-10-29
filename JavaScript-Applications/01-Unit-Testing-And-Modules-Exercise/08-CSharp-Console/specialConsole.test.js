const assert = require('chai').assert;
const Console = require('./specialConsole');

describe('writeLine', () => {
    it('should throw an error without a parameter', () => {
        assert.throw(() => {
            Console.writeLine();
        }, TypeError);
    });

    it('should throw an error with a Number as a parameter', () => {
        assert.throw(() => {
            Console.writeLine(3, 4);
        }, TypeError);
    });

    it('should throw an error with less placeholders than arguments', () => {
        assert.throw(() => {
            Console.writeLine('Lucky numbers: {0}, {1}, {2}', '23', '16', '32', '8');
        }, RangeError);
    });

    it('should throw an error with more placeholder than arguments', () => {
        assert.throw(() => {
            Console.writeLine('Lucky numbers: {0}, {1}, {2}, {3}', '23', '16', '32');
        }, RangeError);
    });

    it('should throw an error with same placeholder number', () => {
        assert.throw(() => {
            Console.writeLine('Lucky numbers: {0}, {0}, {0}', '23', '16', '32');
        }, RangeError);
    });

    it('should throw an error with invalid placeholder number', () => {
        assert.throw(() => {
            Console.writeLine('The lucky winner is: {5}', 'Joe');
        }, RangeError);
    });

    it('should return the same string for a String as a parameter', () => {
        let string = 'text';

        assert.equal(string, Console.writeLine(string));
    });

    it('should return JSON string for an Object as aparameter', () => {
        let object = {
            city: 'Sofia',
            population: 1500000
        };

        assert.equal(JSON.stringify(object), Console.writeLine(object));
    });

    it('should replace placeholders with valid arguments', () => {
        assert.equal('Lucky numbers: 23, 16, 32', Console.writeLine('Lucky numbers: {0}, {1}, {2}', '23', '16', '32'));
    });
});