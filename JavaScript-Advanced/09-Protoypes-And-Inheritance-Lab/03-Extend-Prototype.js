function extendPrototype(classInput) {
    classInput.prototype.species = 'Human';
    classInput.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}