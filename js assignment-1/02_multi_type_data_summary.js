// Q2: Multi-Type Data Summary
// Store examples of different JavaScript data types.
const userName = "Madhur";                 // string
const age = 20;                            // number
const isStudent = true;                    // boolean
const subjects = ["JavaScript", "HTML"];   // array
const user = { city: "Mathura" };           // object
const middleName = null;                   // null
let optionalValue;                          // undefined

// typeof null returns "object" in JavaScript, so label it explicitly.
const report = [
    { Label: "userName", Value: userName, Type: typeof userName },
    { Label: "age", Value: age, Type: typeof age },
    { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
    { Label: "subjects", Value: JSON.stringify(subjects), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "user", Value: JSON.stringify(user), Type: typeof user },
    { Label: "middleName", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
    { Label: "optionalValue", Value: String(optionalValue), Type: typeof optionalValue }
];

console.table(report);
