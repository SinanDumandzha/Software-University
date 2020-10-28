const assert = require('chai').assert;
const PaymentPackage = require('./PaymentPackage');

describe('PaymentPackage', () => {
    let payment;

    describe('constructor', () => {
        it('should work with name and value parameters', () => {
            payment = new PaymentPackage('Joe', 20);
            assert.equal('Joe', payment.name);
            assert.equal(20, payment.value);
        });
    });

    describe('name', () => {
        it('should throw an Error with a empty string as a name parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage('', 20);
            }, 'Name must be a non-empty string');
        });

        it('should throw an Error with a Number as a name parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage(5, 20);
            }, 'Name must be a non-empty string');
        });

        it('should throw an Error with a Array as a name parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage([], 20);
            }, 'Name must be a non-empty string');
        });

        it('should throw an Error with a Object as a name parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage({}, 20);
            }, 'Name must be a non-empty string');
        });
    });

    describe('value', () => {
        it('should throw an Error with a String as a value parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage('Joe', 'text');
            }, 'Value must be a non-negative number');
        });

        it('should throw an Error with a Array as a value parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage('Joe', []);
            }, 'Value must be a non-negative number');
        });

        it('should throw an Error with a Object as a value parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage('Joe', {});
            }, 'Value must be a non-negative number');
        });

        it('should throw an Error with a negative number as a value parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage('Joe', -5);
            }, 'Value must be a non-negative number');
        });
    });

    describe('VAT', () => {
        it('should throw an Error with a String as a VAT parameter', () => {
            assert.throw(() => {
                payment.VAT = 'text';
            }, 'VAT must be a non-negative number');
        });

        it('should throw an Error with a Array as a VAT parameter', () => {
            assert.throw(() => {
                payment.VAT = [];
            }, 'VAT must be a non-negative number');
        });

        it('should throw an Error with a Object as a VAT parameter', () => {
            assert.throw(() => {
                payment.VAT = {};
            }, 'VAT must be a non-negative number');
        });

        it('should throw an Error with a negative number as a VAT parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage('Joe', 20);
                payment.VAT = -5;
            }, 'VAT must be a non-negative number');
        });

        it('should work with Number parameter as a VAT parameter', () => {
            payment = new PaymentPackage('Joe', 20);
            payment.VAT = 5;
            assert.equal('Joe', payment.name);
            assert.equal(20, payment.value);
            assert.equal(5, payment.VAT);
        });
    });

    describe('active', () => {
        it('should throw an Error with a String as an active parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage('Joe', 20);
                payment.active = 'text';
            }, 'Active status must be a boolean');
        });

        it('should throw an Error with a Number as an active parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage('Joe', 20);
                payment.active = 5;
            }, 'Active status must be a boolean');
        });

        it('should throw an Error with an Array as an active parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage('Joe', 20);
                payment.active = [];
            }, 'Active status must be a boolean');
        });

        it('should throw an Error with an Object as an active parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage('Joe', 20);
                payment.active = {};
            }, 'Active status must be a boolean');
        });

        it('should throw an Error with a null as an active parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage('Joe', 20);
                payment.active = null;
            }, 'Active status must be a boolean');
        });

        it('should work with a Boolean as a VAT parameter', () => {
            assert.throw(() => {
                payment = new PaymentPackage('Joe', 20);
                payment.active = Boolean;
            }, 'Active status must be a boolean');
        });
    });

    describe('toString', () => {
        it('should return a string containing an overview of the instance with (inactive) text for false active status', () => {
            payment = new PaymentPackage('Joe', 20);
            payment.VAT = 5;
            payment.active = false;

            let output = [
                `Package: ${payment.name}` + (payment.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${payment.value}`,
                `- Value (VAT ${payment.VAT}%): ${payment.value * (1 + payment.VAT / 100)}`
            ].join('\n');

            assert.equal(output, payment.toString());
        });

        it('should return a string containing an overview of the instance', () => {
            payment = new PaymentPackage('Joe', 20);
            payment.VAT = 5;
            payment.active = false;

            let output = [
                `Package: ${payment.name}` + (payment.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${payment.value}`,
                `- Value (VAT ${payment.VAT}%): ${payment.value * (1 + payment.VAT / 100)}`
            ].join('\n');

            assert.equal(output, payment.toString());
        });
    });
});