// Q7: Smart Guessing Game
// The secret number is randomly generated from 1 to 50.
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Test value: replace this with any number from 1 to 50.
const userGuess = 25;

console.log("Your guess:", userGuess);
console.log("Secret number (for testing):", secretNumber);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3 numbers of the secret.
    if (Math.abs(userGuess - secretNumber) <= 3 && userGuess >= 1 && userGuess <= 50) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
