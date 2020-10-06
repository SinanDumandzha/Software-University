function arrayMap(array, func) {
    return array.reduce(function (acc, curr) {
        return acc.concat(func(curr));
    }, []);
}

let nums = [1, 2, 3, 4, 5];
console.log(arrayMap(nums, (item) => item * 2));

let letters = ["a", "b", "c"];
console.log(arrayMap(letters, (l) => l.toLocaleUpperCase()));