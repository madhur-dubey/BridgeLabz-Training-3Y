// Q3: Monthly Expense Tracker
// Sample monthly expenses for five categories (change these values as needed).
const expenses = {
    food: 5000,
    travel: 2000,
    rent: 10000,
    bills: 1500,
    leisure: 1000
};

let totalExpenses = 0;

// Add each category amount to the total using the += assignment operator.
for (const category in expenses) {
    totalExpenses += expenses[category];
}

const categoryCount = Object.keys(expenses).length;
const averageExpense = totalExpenses / categoryCount;

// Add 10% tax to the total.
const taxRate = 0.10;
const taxAmount = totalExpenses * taxRate;
const finalAmount = totalExpenses + taxAmount;

console.log("Monthly Expense Summary");
console.table([
    { Item: "Total before tax", Amount: totalExpenses.toFixed(2) },
    { Item: "Average per category", Amount: averageExpense.toFixed(2) },
    { Item: "Tax (10%)", Amount: taxAmount.toFixed(2) },
    { Item: "Final amount after tax", Amount: finalAmount.toFixed(2) }
]);
