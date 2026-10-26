// Q9: Odd–Even Number Analyzer
const results = [];

// Create and classify numbers from 1 through 30.
for (let number = 1; number <= 30; number++) {
    let classification;

    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    // push() adds each result to the new array.
    results.push({ Number: number, Result: classification });
}

console.table(results);
