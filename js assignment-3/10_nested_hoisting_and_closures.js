// Q10: Nested Hoisting and Closures
"use strict";

function outer() {
    console.log("Outer count before assignment:", count); // undefined
    var count = 5;

    function inner() {
        console.log("Inner count before assignment:", count); // undefined
        var count = 10; // A separate local variable, shadowing outer count.
        console.log("Inner count after assignment:", count); // 10
    }

    inner();
    console.log("Outer count after inner():", count); // 5
}

outer();

// Expected output:
// Outer count before assignment: undefined
// Inner count before assignment: undefined
// Inner count after assignment: 10
// Outer count after inner(): 5
//
// Hoisting creates separate function execution contexts. Each `var count`
// is initialized to undefined in its own function before statements run.
// The inner `count` shadows the outer `count` rather than changing it.

// Arrow-function version: the arrow has its own local `count` declaration,
// so it also shadows the outer variable.
function outerWithArrow() {
    var count = 5;

    const inner = () => {
        console.log("Arrow inner count before assignment:", countForArrow); // undefined
        var countForArrow = 10;
        console.log("Arrow inner count after assignment:", countForArrow); // 10
    };

    inner();
    console.log("Outer count remains:", count); // 5
}

outerWithArrow();

// Debug tip: place breakpoints at the first log in each function and inspect
// Call Stack: outer -> inner -> outer. Step into inner(), then step out.
