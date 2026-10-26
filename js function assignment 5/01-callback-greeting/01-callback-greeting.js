// Q1: Run a callback after greeting the user.
"use strict";
function showEndMessage() {
    console.log("Welcome to the course!");
}
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}
greetUser("Madhur", showEndMessage);
