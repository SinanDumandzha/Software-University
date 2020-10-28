const assert = require('chai').assert;
const StringBuilder = require('./string-builder');

describe('StringBuilder', () => {
    let sBuilder;

    beforeEach(() => {
        sBuilder = new StringBuilder();
    });

    describe('vrfyParam', () => {
        it('should throw TypeError exception when parameter is not a String', () => {
            assert.throw(() => {
                new StringBuilder([]);
            }, 'Argument must be string');
        });
    });

    describe('constructor', () => {
        it('shoul work without argument', () => {
            assert.equal('', sBuilder.toString());
        });

        it('should work with parameter', () => {
            sBuilder = new StringBuilder('text');
            assert.equal('text', sBuilder.toString());
        })
    });

    describe('append', () => {
        it('should append a string to end of a storage', () => {
            sBuilder.append('text');
            assert.equal('text', sBuilder.toString());
        });
    });

    describe('prepend', () => {
        it('should prepend a string to beginning of a storage', () => {
            sBuilder.append('text');
            sBuilder.prepend('some');
            assert.equal('sometext', sBuilder.toString());
        });
    });

    describe('insertAt', () => {
        it('should add a string at the given index of a storage', () => {
            sBuilder.append('Soft');
            sBuilder.insertAt('Uni', 4);
            assert.equal('SoftUni', sBuilder.toString());
        });
    });

    describe('remove', () => {
        it('should remove elements from the storage starting at the given index with a given length', () => {
            sBuilder.append('SoftUni');
            sBuilder.remove(4, 3);
            assert.equal('Soft', sBuilder.toString());
        });
    });

    describe('toString', () => {
        it('should remove elements from the storage starting at the given index with a given length', () => {
            sBuilder.append('SoftUni');
            assert.equal('SoftUni', sBuilder.toString());
        });
    });
});