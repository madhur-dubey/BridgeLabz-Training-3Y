// Q6: Event-Based Counter Simulation
let count = 0;

function increment() {
    count++;
    console.log(`Count after increment: ${count}`);
}

function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

// A nested function can access and update count from the outer scope.
function runCounterDemo() {
    function addTwo() {
        count += 2;
        console.log(`Count after nested addTwo(): ${count}`);
    }

    addTwo();
}

// Simulate button clicks by calling the functions manually.
increment();
increment();
decrement();
runCounterDemo();
