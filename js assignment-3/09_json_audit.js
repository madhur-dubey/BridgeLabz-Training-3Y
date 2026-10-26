// Q9: JSON Audit
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;

    try {
        const parsedEntry = JSON.parse(rawData[index]);

        if (parsedEntry.user === undefined || parsedEntry.age === undefined) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(parsedEntry.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number");
        }

        const cleanEntry = { ...parsedEntry, age };
        cleanData.push(cleanEntry);
        console.log(`Line ${lineNumber}: valid JSON record`);
    } catch (error) {
        const auditIssue = { line: lineNumber, message: error.message };
        auditErrors.push(auditIssue);
        console.log(`Line ${lineNumber} error: ${error.message}`);
    }
}

// Bonus: convert age to Number above, then filter users under 18.
const under18Users = cleanData.filter(entry => entry.age < 18);

console.log("Clean data:", cleanData);
console.log("Audit errors:", auditErrors);
console.log("Users under 18:", under18Users);

// Debug tip: break on JSON.parse and watch `lineNumber`, `parsedEntry`,
// and `auditErrors`. When parsing throws, execution jumps to catch.
