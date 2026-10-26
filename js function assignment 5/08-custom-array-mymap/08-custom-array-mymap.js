// Q8: A beginner-friendly version of Array.map().
"use strict";
Array.prototype.myMap = function (callback) {
    const result = [];
    for (let index = 0; index < this.length; index++) {
        result.push(callback(this[index], index, this));
    }
    return result;
};
console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
console.log([1, 2, 3].myMap(number => number * number)); // [1, 4, 9]
// In real projects, avoid changing built-in prototypes.
