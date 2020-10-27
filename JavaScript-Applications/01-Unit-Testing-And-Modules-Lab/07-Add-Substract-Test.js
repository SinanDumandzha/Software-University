const createCalculator = require('../addSubtract').createCalculator;
const expect = require('chai').expect;

describe('createCalculator()', function () {
    let calculate;

    beforeEach(function () {
        calculate = createCalculator();
    });

    it('Should return 0 for get;', function () {
        let result = calculate.get();

        expect(result).to.be.equal(0);
    });

    it('Should return 5 after add(2); add(3);', function () {
        calculate.add(2);
        calculate.add(3);
        let result = calculate.get();

        expect(result).to.be.equal(5);
    });

    it('Should return -5 after subtract(3); subtract(2)', function () {
        calculate.subtract(3);
        calculate.subtract(2);
        let result = calculate.get();

        expect(result).to.be.equal(-5);
    });

    it('Should return 4.2 after add(5.3); subtract(1.1);', function () {
        calculate.add(5.3);
        calculate.subtract(1.1);
        let result = calculate.get();

        expect(result).to.be.equal(5.3 - 1.1);
    });

    it('Should return 2 after add(10); subtract(\'7\'); add(\'-2\'); subtract(-1)', function () {
        calculate.add(10);
        calculate.subtract('7');
        calculate.add('-2');
        calculate.subtract(-1);
        let result = calculate.get();

        expect(result).to.be.equal(2);
    });

    it('Should return NaN for add(string)', function () {
        calculate.add('hello');
        let result = calculate.get();

        expect(result).to.be.NaN;
    });

    it('Should return NaN for subtract(string)', function () {
        calculate.subtract('hello');
        let result = calculate.get();

        expect(result).to.be.NaN;
    });
});