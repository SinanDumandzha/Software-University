function Spy(obj, methodName) {
    let spy = {
        count: 0
    };

    let method = obj[methodName];

    if (!method) {
        throw new Error('Error!');
    }

    obj[methodName] = function (...args) {
        this.count++;
        return method.apply(obj, args);
    }.bind(spy);
    return spy;
}

let obj = {
    test: function () {
        return 1;
    }
};

let s = Spy(obj, 'test');
obj.test();
obj.test();
obj.test();
console.log(s);