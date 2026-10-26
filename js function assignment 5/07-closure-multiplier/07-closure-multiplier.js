// Q7: The returned function remembers the multiplier (closure).
"use strict";
function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}
const triple = makeMultiplier(3);
const double = makeMultiplier(2);
console.log(triple(5));  // 15
console.log(triple(10)); // 30
console.log(double(5));  // 10
// Closure lets the inner function keep using `multiplier` after makeMultiplier returns.
