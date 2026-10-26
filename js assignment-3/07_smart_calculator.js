// Q7: Smart Calculator
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;
const operation = "divide"; // Change to test: add, divide, power, root, subtract.

class InvalidOperationError extends Error {
    constructor(operationName) {
        super(`Operation "${operationName}" is not recognized.`);
        this.name = "InvalidOperationError";
    }
}

try {
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "divide":
            if (num2 === 0) {
                throw new RangeError("Cannot divide by zero.");
            }
            result = num1 / num2;
            break;
        case "power":
            result = Math.pow(num1, num2);
            break;
        case "root":
            if (num1 < 0) {
                throw new RangeError("Cannot calculate the real square root of a negative number.");
            }
            result = Math.sqrt(num1);
            break;
        case "subtract":
            result = num1 - num2;
            break;
        default:
            throw new InvalidOperationError(operation);
    }

    console.log(`Calculator: ${num1} ${operation} ${num2}`);
    console.log(`Result: ${result}`);
} catch (error) {
    console.log(`Calculator error [${error.name}]: ${error.message}`);
    console.log(`Requested operation: ${operation}`);
    console.log(`Available operations: ${operations.join(", ")}`);
}
