"use strict";

// Q2: Validate the form using simple regular expressions.
const form = document.getElementById("studentForm");
const result = document.getElementById("result");

const rules = {
    name: /^[A-Za-z ]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

const messages = {
    name: "Use letters and spaces only.",
    email: "Enter a valid email address.",
    phone: "Enter exactly 10 digits.",
    password: "Use at least one uppercase letter, number, and special character."
};

function validateField(fieldName) {
    const input = document.getElementById(fieldName);
    const error = document.getElementById(fieldName + "Error");
    const valid = rules[fieldName].test(input.value.trim());

    input.classList.toggle("valid", valid);
    input.classList.toggle("invalid", !valid);
    error.textContent = valid ? "" : messages[fieldName];
    return valid;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const names = ["name", "email", "phone", "password"];
    const allValid = names.map(validateField).every(Boolean);
    result.textContent = allValid ? "Registration details are valid!" : "Please correct the errors above.";
    result.style.color = allValid ? "green" : "crimson";
});
