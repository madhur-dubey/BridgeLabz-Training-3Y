// Q1: Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];

console.log("DYNAMIC DATA PARSER REPORT");

for (let index = 0; index < apiData.length; index++) {
    const originalValue = apiData[index];
    const numberValue = Number(originalValue);
    const booleanValue = Boolean(originalValue);
    const stringValue = String(originalValue);

    // Whitespace-only strings are treated as invalid, even though Number(" ") is 0.
    const isWhitespaceOnly = typeof originalValue === "string" && originalValue.trim() === "";
    const isValidNumber = !isWhitespaceOnly && Number.isFinite(numberValue);

    const report = {
        index,
        original: stringValue,
        numberForm: Number.isNaN(numberValue) ? "NaN" : numberValue,
        booleanForm: booleanValue,
        stringForm: stringValue,
        status: isValidNumber ? "Valid number" : "Invalid number"
    };

    console.log(report);

    if (isValidNumber) {
        validNumericData.push(numberValue);
    } else {
        invalidNumericData.push(originalValue);
        console.log(`Invalid numeric input at index ${index}:`, originalValue);
    }
}

console.log("Valid numeric data:", validNumericData);
console.log("Invalid numeric data:", invalidNumericData);
