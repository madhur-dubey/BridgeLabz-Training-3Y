// Q8: Employee Salary Projection
// Change these values to test another salary and increment rate.
let currentSalary = 30000;
const annualIncrementRate = 8; // percent per year
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    // Apply the yearly increment using an assignment operator.
    currentSalary *= 1 + annualIncrementRate / 100;
    currentSalary = Math.round(currentSalary);

    salaryProjection.push({
        Year: year,
        "Projected Salary": currentSalary
    });
}

console.table(salaryProjection);
