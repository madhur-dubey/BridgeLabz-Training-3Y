// Q8: Strict Mode Showdown
"use strict";

// In strict mode, duplicate parameter names in a normal function are a SyntaxError.
// Assigning to undeclared `total` and deleting a variable identifier are also illegal.
// The original function therefore cannot run as written in strict mode.
//
// To compare behavior without strict mode, use a separate non-strict function.
// Note: this function's body is intentionally non-strict because it has no
// "use strict" directive and is not nested inside a strict function.
function nonStrictDemo(a, a) {
    total = 10; // In non-strict classic scripts, this may create a global property.
    console.log("Non-strict duplicate parameters; second a =", a);
    console.log("Assigned total =", total);
    // `delete total` on an identifier returns false in non-strict mode.
    console.log("Delete identifier result =", delete total);
}

try {
    nonStrictDemo(5, 10);
} catch (error) {
    console.log(`Non-strict demo error: ${error.name}: ${error.message}`);
}

// Correct ES6-style version: unique parameters, declared local variables,
// and no deletion of a variable identifier.
function strictModeCorrect(firstValue, secondValue) {
    const total = 10;
    console.log(`Correct version: first=${firstValue}, second=${secondValue}, total=${total}`);
}

strictModeCorrect(5, 10);

// Strict-mode rules apply per script/function scope. In browser ES modules,
// strict mode is automatic. Node.js module behavior can differ from classic scripts.
