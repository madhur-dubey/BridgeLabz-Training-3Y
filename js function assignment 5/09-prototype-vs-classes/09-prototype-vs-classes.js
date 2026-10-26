// Q9: Compare prototype inheritance with ES6 classes.
"use strict";
// Constructor/prototype version.
function PersonPrototype(name) { this.name = name; }
PersonPrototype.prototype.showName = function () { console.log(`Prototype version: ${this.name}`); };
function StudentPrototype(name, branch) {
    PersonPrototype.call(this, name);
    this.branch = branch;
}
StudentPrototype.prototype = Object.create(PersonPrototype.prototype);
StudentPrototype.prototype.constructor = StudentPrototype;
StudentPrototype.prototype.showBranch = function () { console.log(`Branch: ${this.branch}`); };

// ES6 class version.
class PersonClass {
    constructor(name) { this.name = name; }
    showName() { console.log(`Class version: ${this.name}`); }
}
class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    showBranch() { console.log(`Branch: ${this.branch}`); }
}
const oldStyleStudent = new StudentPrototype("Madhur", "Computer Science");
oldStyleStudent.showName();
oldStyleStudent.showBranch();
const classStudent = new StudentClass("Madhur", "Computer Science");
classStudent.showName();
classStudent.showBranch();
// Both versions inherit the name and add the student's branch.
