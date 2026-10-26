// Q5: Hoisting Lab — The Sequence Trap
"use strict";

// Original sequence (kept as comments because it throws at startGame()):
// console.log(score); // undefined: `var` is hoisted and initialized to undefined.
// announce();          // Works: function declarations are hoisted.
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }
//
// `startGame()` is called before `status` is initialized. `let` is in its
// temporal dead zone, so reading it throws ReferenceError.

function announce() {
    console.log("Game started");
}

function startGame(statusValue) {
    console.log(statusValue);
}

// Fixed version: initialize values before using them.
const score = 50;
const gameStatus = "ready";

console.log(score);
announce();
startGame(gameStatus);

// Arrow-function comparison:
// Arrow functions assigned to const are not usable before initialization.
// Uncommenting `startArrowGame();` before the declaration below would fail.
//
// const startArrowGame = () => console.log("Arrow game started");
const startArrowGame = () => console.log("Arrow game started");
startArrowGame();
