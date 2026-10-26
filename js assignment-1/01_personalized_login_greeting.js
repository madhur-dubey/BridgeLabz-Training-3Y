// Q1: Personalized Login Greeting
// Change the name below to test a different user.
const userName = "Madhur";

// getHours() returns the current hour from 0 to 23.
const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
