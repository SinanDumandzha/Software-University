const expect = require('chai').expect;
const sum = require('../sumNumbers').sum;

describe('Caculate Sum', () => {
    it('Should return 3 for [1,2]', () => {
        expect(sum([1, 2])).to.be.equal(3);
    });

    it('Should return 1 for [1]', () => {
        expect(sum([1])).to.be.equal(1);
    });

    it('Should return 0 for empty array', () => {
        expect(sum([])).to.be.equal(0);
    });

    it('Should return 3 for [1.5, 2.5, -1]', () => {
        expect(sum([1.5, 2.5, -1])).to.be.equal(3);
    });

    it('Should return NaN for invalid data', () => {
        expect(sum('invalid data')).to.be.NaN;
    });
});