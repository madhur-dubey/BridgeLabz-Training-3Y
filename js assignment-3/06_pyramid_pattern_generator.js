// Q6: Pyramid Pattern Generator
"use strict";

// Change this value to set the number of rows (default is 5).
// In Node.js, you can change the value directly before running the file.
const rowLimit = 5;

console.log(`Pyramid pattern with ${rowLimit} rows:`);

for (let row = 1; row <= rowLimit; row++) {
    let pattern = "";

    for (let column = 1; column <= row; column++) {
        pattern += "* ";
    }

    console.log(pattern.trimEnd());
}

// Debug tip: set a breakpoint on the outer loop and watch `row`, `column`,
// and `pattern` after each step. Each loop iteration reuses these variables.
//
// To compare `let` with `var`, replace the loop's `let` declarations with
// `var` and run again. Both produce the same pattern here, but `var` is
// function-scoped while `let` is block-scoped. Strict mode catches undeclared
// variables, but it does not prohibit using `var`.
