// Q3: Transaction Validator
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

// Debug tip: set a breakpoint on the `for` loop and watch `transaction`,
// `validTransactions`, and `invalidTransactions` in VS Code.
for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    try {
        if (transaction === null || transaction === undefined) {
            throw new TypeError("Null transaction entry");
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new ReferenceError("Missing transaction id or amount");
        }
        if (transaction.amount < 0) {
            throw new RangeError("Negative transaction amount");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: valid`);
    } catch (error) {
        const issue = {
            index,
            transaction,
            errorType: error.name,
            message: error.message
        };
        invalidTransactions.push(issue);
        console.log(`Transaction at index ${index} failed: ${error.name} - ${error.message}`);
    }
}

console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);
