// Q10: Citizen Eligibility Validator
// Change these sample values to test different eligibility outcomes.
const age = 20;
const isCitizen = true;

if (isCitizen) {
    if (age >= 18) {
        // A citizen aged 18 or older meets the stated criteria for all services.
        console.log("Eligible for all services.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18 && age <= 20) {
        console.log("Only age criteria met.");
    } else if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
