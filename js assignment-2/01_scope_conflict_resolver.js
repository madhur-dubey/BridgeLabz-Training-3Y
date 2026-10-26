// Q1: Scope Conflict Resolver
// The bonus variable is global and can be read inside calculateSalary().
let bonus = 5000;

function calculateSalary(isPermanent) {
    // salary is local to this function.
    let salary = 40000;
    let totalSalary = salary;

    // Add the global bonus only when this employee is permanent.
    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Base salary: ₹${salary}`);
    console.log(`Global bonus: ₹${bonus}`);
    console.log(`Total salary: ₹${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);

// The function's local salary does not change the global bonus.
console.log(`Global bonus outside the function: ₹${bonus}`);
