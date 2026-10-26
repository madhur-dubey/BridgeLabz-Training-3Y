// Q4: Debugging Mystery — Scope Fix
"use strict";

// Original code fails because `greeting` is assigned without being declared.
// In strict mode, assigning to an undeclared identifier throws ReferenceError.
//
// function showMessage() {
//     greeting = "Welcome"; // ReferenceError in strict mode
//     console.log(greeting);
// }

// Correct version: declare greeting in the function's local scope.
function showMessage() {
    const greeting = "Welcome";
    const watchGreeting = greeting; // Add `watchGreeting` to VS Code Watch.
    console.log(greeting);
    console.log("Watch variable:", watchGreeting);
}

showMessage();

// Debug tip: put a breakpoint inside showMessage(), then inspect the Call Stack.
// The function's local variables appear in the Local scope while paused.
