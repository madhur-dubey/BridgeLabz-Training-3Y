// Q5: Weather Activity Planner
// Change these sample values to test different weather conditions.
const temperature = 22; // degrees Celsius
const isRaining = false;
const windSpeed = 10; // km/h

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if ((temperature >= 15 && temperature <= 35) || windSpeed <= 20) {
    // The combined condition demonstrates the use of && and ||.
    console.log("Perfect day for a walk.");
} else {
    console.log("Check the weather before planning an activity.");
}
