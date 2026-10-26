// Q3: Arrow functions do not have their own `this`.
"use strict";
const user = {
    name: "Madhur",
    showName: () => console.log("Arrow function this.name:", this.name)
};
user.showName(); // Usually undefined in Node.js because arrow `this` is from outer scope.
user.showName = function () {
    console.log("Normal function this.name:", this.name);
};
user.showName(); // A normal method gets `this` from the object.
